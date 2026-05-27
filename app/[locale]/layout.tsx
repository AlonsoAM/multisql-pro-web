import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { I18nProvider } from '@/lib/i18n-context';
import { NavProgress } from '@/components/NavProgress';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }
  return (
    <I18nProvider locale={locale as Locale}>
      <NavProgress />
      {children}
    </I18nProvider>
  );
}
