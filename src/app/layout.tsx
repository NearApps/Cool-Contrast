import { css } from "@root/styled-system/css";
import { container } from "@root/styled-system/patterns";

import { dmSans } from "@/styles/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import metadata from "@/config/seo";

import "../styles/globals.css";

const IS_PROD = process.env.NODE_ENV === "production";

export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${css({
          color: "text-primary",
          bg: "bg-tertiary",
          textStyle: "body-base",
        })}`}
      >
        <Navbar />
        <main className={container()}>{children}</main>
        <Footer />
        {IS_PROD ? <GoogleAnalytics /> : null}
      </body>
    </html>
  );
}
