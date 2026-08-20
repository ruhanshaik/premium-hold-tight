import { createFileRoute } from "@tanstack/react-router";
import ShinyText from "@/components/ShinyText";
import logoAsset from "@/assets/gmi-logo.png.asset.json";
import videoAsset from "@/assets/maintenance.mp4.asset.json";

const EMAIL_PRIMARY = "hr@gmitech.in";
const EMAIL_SECONDARY = "ceo@gmitech.in";
const PHONE_DISPLAY = "+91 90367 17885";
const PHONE_TEL = "+919036717885";
const WHATSAPP = "919036717885";

export const Route = createFileRoute("/")({
  component: MaintenancePage,
  head: () => ({
    meta: [
      { title: "We're Upgrading — Site Under Maintenance" },
      {
        name: "description",
        content:
          "Our website is currently under maintenance while we build a better digital experience. Reach our team by email, phone or WhatsApp in the meantime.",
      },
      { property: "og:title", content: "We're Upgrading — Site Under Maintenance" },
      {
        property: "og:description",
        content:
          "Our website is currently under maintenance while we work on something better. We'll be back shortly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function MaintenancePage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pt-14 pb-8 text-center sm:px-8 sm:pt-20">
        <img
          src={logoAsset.url}
          alt="Company logo"
          width={96}
          height={96}
          className="h-20 w-20 rounded-full sm:h-24 sm:w-24"
        />

        <p className="mt-8 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          Under maintenance
        </p>

        <h1 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
          We&rsquo;re upgrading our digital experience.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed font-medium text-pretty text-muted-foreground sm:text-lg">
          Our website is currently under maintenance while we work on something better.
          We&rsquo;ll be back shortly.
        </p>

        <figure className="mt-12 w-full sm:mt-16">
          <div
            className="mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-border bg-card sm:max-w-[400px]"
            style={{ boxShadow: "var(--shadow-frame)" }}
          >
            <video
              className="block h-auto w-full"
              style={{ aspectRatio: "464 / 832" }}
              src={videoAsset.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Brand animation"
            />
          </div>
        </figure>

        <section
          aria-labelledby="contact-heading"
          className="mt-16 w-full border-t border-border pt-10 sm:mt-20"
        >
          <h2 id="contact-heading" className="text-lg font-bold tracking-tight text-foreground">
            Need to reach us?
          </h2>

          <dl className="mt-5 space-y-2 text-sm font-medium text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-x-2">
              <dt className="sr-only">Email</dt>
              <dd>
                <a className="transition-colors hover:text-foreground" href={`mailto:${EMAIL_PRIMARY}`}>
                  {EMAIL_PRIMARY}
                </a>
                <span aria-hidden="true" className="px-2 text-border">
                  /
                </span>
                <a
                  className="transition-colors hover:text-foreground"
                  href={`mailto:${EMAIL_SECONDARY}`}
                >
                  {EMAIL_SECONDARY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>
                <a className="transition-colors hover:text-foreground" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${EMAIL_PRIMARY}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Contact Us
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-3xl px-6 pb-8 text-center sm:px-8">
        <p className="text-xs font-medium text-muted-foreground">
          &copy; 2026 GMI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
