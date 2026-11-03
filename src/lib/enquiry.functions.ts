
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKAwny94KgLiJpgALke-zPSVerzX4pP_wxepq0fX1ICyFQTSEtw0zbW_xI1wcbMs28/exec';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(25),
  company: z.string().trim().max(150).optional(),
  industry: z.string().trim().max(100).optional(),
  service: z.string().trim().max(100).optional(),
  volume: z.string().trim().max(60).optional(),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
  consent: z.literal(true),
});

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { success: true };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        fullName: data.name,
        businessName: data.company || '',
        mobileNumber: data.phone,
        email: data.email,
        industry: data.industry || '',
        service: data.service || '',
        monthlyLeadVolume: data.volume || '',
        message: `${data.message}\nCommunication and privacy consent: accepted`,
      }),
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error('We could not send your enquiry. Please try again.');
    }

    const result = await response.json() as {
      success?: boolean;
      message?: string;
    };

    if (!result.success) {
      throw new Error('We could not save your enquiry. Please try again.');
    }

    return { success: true };
  });
