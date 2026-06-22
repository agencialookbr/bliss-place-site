import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bliss Place | A Não Academia de Brasília" },
      { name: "description", content: "A única não academia de Brasília. Treinos personalizados para dores, hipertensão, diabetes, longevidade e qualidade de vida. Agende sua avaliação." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Bliss Place | A Não Academia de Brasília" },
      { property: "og:description", content: "A única não academia de Brasília. Treinos personalizados para dores, hipertensão, diabetes, longevidade e qualidade de vida. Agende sua avaliação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Bliss Place | A Não Academia de Brasília" },
      { name: "twitter:description", content: "A única não academia de Brasília. Treinos personalizados para dores, hipertensão, diabetes, longevidade e qualidade de vida. Agende sua avaliação." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/021e6bc8-b0e5-4293-ae01-4e959158dc2d" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/021e6bc8-b0e5-4293-ae01-4e959158dc2d" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) – Google Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-704796837"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-704796837');
              gtag('config', 'AW-829830575');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
