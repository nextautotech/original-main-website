import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntegrationArt } from "@/components/IntegrationArt";
import { leadIntegrations } from "@/lib/catalogue";
import { getWorkflowRecommendation } from "@/lib/workflow-recommendation.functions";
import type { WorkflowRecommendation } from "@/lib/workflow-recommendation";

export function WorkflowRecommender() {
  const [workflow, setWorkflow] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<WorkflowRecommendation | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await getWorkflowRecommendation({ data: { workflow } });
      if (response.success) setResult(response.recommendation);
      else setError(response.message);
    } catch {
      setError("Your request could not be completed. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="section workflow-recommender">
      <div className="shell">
        <span className="eyebrow">
          <Building2 size={16} /> AI-POWERED WORKFLOW MATCH
        </span>
        <h2 className="standalone-heading">Find integrations for your property workflow.</h2>
        <form onSubmit={submit} className="workflow-request">
          <label htmlFor="property-workflow">Your workflow needs</label>
          <textarea
            id="property-workflow"
            value={workflow}
            onChange={(event) => setWorkflow(event.target.value)}
            minLength={20}
            maxLength={2000}
            required
            rows={5}
            placeholder="We collect property enquiries from Facebook Lead Ads and Google Forms, use Zoho CRM, and want to reduce manual lead entry and coordinate site visits."
            disabled={loading}
            aria-describedby="workflow-privacy"
          />
          <div className="workflow-request-footer">
            <p id="workflow-privacy">
              Processed by AI for this request; not saved by Next Autotech. Don’t include names,
              phone numbers or other personal details.
            </p>
            <Button
              variant="premium"
              size="lg"
              type="submit"
              disabled={loading || workflow.trim().length < 20}
            >
              {loading ? (
                <>
                  <LoaderCircle className="workflow-loading-icon" /> Finding matches…
                </>
              ) : (
                <>
                  Recommend Integrations <ArrowRight />
                </>
              )}
            </Button>
          </div>
        </form>
        {loading && (
          <p role="status" className="workflow-status">
            Reviewing your workflow against the integration directory…
          </p>
        )}
        {error && (
          <p role="alert" className="workflow-error">
            {error}
          </p>
        )}
        {result && (
          <div className="workflow-results" aria-live="polite">
            <h3>Your recommended options</h3>
            <p>{result.summary}</p>
            <p className="availability-note">
              Recommendations only. All directory connections are Coming Soon; setup and permissions
              must be confirmed with our team.
            </p>
            <div className="workflow-match-grid">
              {result.matches.map((match) => {
                const item = leadIntegrations.find((entry) => entry.slug === match.slug);
                if (!item) return null;
                return (
                  <article className="workflow-match" key={match.slug}>
                    <IntegrationArt item={item} compact />
                    <div>
                      <span className="eyebrow">{item.category}</span>
                      <h4>{item.name}</h4>
                      <span className="coming-status">Coming Soon</span>
                      <p>{match.reason}</p>
                      <Button asChild variant="outlinePremium" size="sm">
                        <Link to="/integrations/$slug" params={{ slug: item.slug }}>
                          View Details <ArrowRight />
                        </Link>
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
            {result.considerations.length > 0 && (
              <div className="workflow-considerations">
                <h4>Before you connect</h4>
                <ul>
                  {result.considerations.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button asChild variant="outlinePremium">
              <Link to="/contact" search={{ service: undefined }}>
                Discuss your workflow <ArrowRight />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
