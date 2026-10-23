import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(25),
  company: z.string().trim().max(150).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
  consent: z.literal(true),
});

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { success: true };
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('enquiries').insert({
      name: data.name, email: data.email, phone: data.phone,
      company: data.company || null, service: data.service || null, message: `${data.message}\nCommunication and privacy consent: accepted`,
    });
    if (error) throw new Error('We could not send your enquiry. Please try again.');
    return { success: true };
  });
