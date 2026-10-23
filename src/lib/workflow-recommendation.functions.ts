import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getWorkflowRecommendation = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ workflow: z.string().trim().min(20).max(2000) }).parse(data))
  .handler(async ({ data }) => {
    const { recommendWorkflow } = await import("./workflow-recommendation.server");
    return recommendWorkflow(data.workflow);
  });
