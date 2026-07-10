import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import AIQuoteBuilder from "@/components/AIQuoteBuilder";

export default function AIQuotesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="AI Professional Quotes"
        subtitle="Create accurate contractor estimates in seconds."
      />

      <AIQuoteBuilder />
    </PageLayout>
  );
}