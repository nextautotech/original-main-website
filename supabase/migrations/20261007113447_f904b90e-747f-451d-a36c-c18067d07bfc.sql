CREATE TABLE public.workflow_ai_guard (id text PRIMARY KEY, blocked_message text, blocked_status integer, window_start timestamptz NOT NULL DEFAULT now(), request_count integer NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.workflow_ai_guard TO service_role;
ALTER TABLE public.workflow_ai_guard ENABLE ROW LEVEL SECURITY;
INSERT INTO public.workflow_ai_guard (id) VALUES ('real-estate-recommendations');
CREATE FUNCTION public.admit_workflow_ai_request() RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE guard public.workflow_ai_guard;
BEGIN
 SELECT * INTO guard FROM public.workflow_ai_guard WHERE id = 'real-estate-recommendations' FOR UPDATE;
 IF guard.blocked_status IS NOT NULL THEN RETURN jsonb_build_object('allowed', false, 'status', guard.blocked_status, 'message', guard.blocked_message); END IF;
 IF guard.window_start < now() - interval '1 minute' THEN guard.request_count := 0; guard.window_start := now(); END IF;
 IF guard.request_count >= 10 THEN RETURN jsonb_build_object('allowed', false, 'status', 429, 'message', 'Too many workflow requests. Please wait a minute before trying again.'); END IF;
 UPDATE public.workflow_ai_guard SET request_count = guard.request_count + 1, window_start = guard.window_start, updated_at = now() WHERE id = guard.id;
 RETURN jsonb_build_object('allowed', true);
END; $$;
REVOKE ALL ON FUNCTION public.admit_workflow_ai_request() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.admit_workflow_ai_request() TO service_role;