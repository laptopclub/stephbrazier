import { GoogleAnalytics } from "@laptopclub/foundation-analytics";
import type { Metadata } from "next";
import { env } from "../lib/env";
import "./globals.css";

export const metadata: Metadata = {
  description: "Steph Brazier's website is coming soon.",
  metadataBase: new URL(env.siteUrl),
  title: "Steph Brazier"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col bg-surface-canvas">
          <main className="flex-1">{children}</main>
          <footer className="px-6 py-8 text-sm text-ink-muted sm:px-10 lg:px-16">
            <p>© {new Date().getFullYear()} Steph Brazier</p>
          </footer>
        </div>
        <GoogleAnalytics measurementId={env.gaMeasurementId} />
      </body>
    </html>
  );
}
