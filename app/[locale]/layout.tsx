import { ConfigProvider } from "@/components/i18n";
import { EN, ZH } from "@/lib/config";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (![ZH.root, EN.root].includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="antialiased bg-neutral-900 text-neutral-100">
      <body>
        <ConfigProvider locale={locale}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
