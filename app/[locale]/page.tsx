import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { StatusStrip } from '@/components/StatusStrip';
import { Features } from '@/components/Features';
import { Steps } from '@/components/Steps';
import { Integrations } from '@/components/Integrations';
import { CodePreview } from '@/components/CodePreview';
import { PermissionsTable } from '@/components/PermissionsTable';
import { CTABand } from '@/components/CTABand';
import { getGitHubStars } from '@/lib/github';

export default async function HomePage() {
  const stars = await getGitHubStars();
  return (
    <>
      <Navbar stars={stars} />
      <main className="flex-1">
        <Hero />
        <StatusStrip />
        <Features />
        <Steps />
        <Integrations />
        <CodePreview />
        <PermissionsTable />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
