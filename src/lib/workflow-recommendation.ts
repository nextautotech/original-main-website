import { z } from "zod";

export const recommendationSchema = z.object({
  summary: z.string(),
  matches: z.array(z.object({ slug: z.string(), reason: z.string() })),
  considerations: z.array(z.string()),
});
export type WorkflowRecommendation = z.infer<typeof recommendationSchema>;
export type RecommendationResponse =
  | { success: true; recommendation: WorkflowRecommendation }
  | { success: false; message: string; status: number };
