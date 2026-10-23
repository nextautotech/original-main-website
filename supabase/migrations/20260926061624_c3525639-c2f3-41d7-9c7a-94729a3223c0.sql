CREATE TABLE public.enquiries (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, email text NOT NULL, phone text NOT NULL, company text, service text, message text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.set_enquiries_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER enquiries_updated_at BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION public.set_enquiries_updated_at();