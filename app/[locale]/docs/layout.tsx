import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getGitHubStars } from '@/lib/github';

export default async function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stars = await getGitHubStars();
  return (
    <>
      <Navbar stars={stars} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
