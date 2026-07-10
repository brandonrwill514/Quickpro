import QuoteWorkspace from "@/components/QuoteWorkspace";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

export default function QuotePage() {
  return (
    <PageLayout>
      <PageHeader
        title="Create Quote"
        subtitle="Describe the job, let AI analyse it, then generate a professional estimate."
      />

      <QuoteWorkspace />
    </PageLayout>
  );
}