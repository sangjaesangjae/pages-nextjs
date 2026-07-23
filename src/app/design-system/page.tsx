import {
  Text,
  Button,
  LinkInline,
  LinkMute,
  TextInput,
  SearchPill,
  InstallSnippet,
  CommandTag,
  TerminalCard,
  TerminalCommand,
  TerminalComment,
  PricingCard,
  FaqRow,
  CtaStripDark,
  PrimaryNav,
  Footer,
  typography,
  type TypographyToken,
} from "@/design-system";

export const metadata = {
  robots: { index: false },
};

const colorSwatches: { name: string; className: string; hex: string }[] = [
  { name: "primary", className: "bg-primary", hex: "#000000" },
  { name: "ink-deep", className: "bg-ink-deep", hex: "#090909" },
  { name: "canvas", className: "bg-canvas border border-hairline", hex: "#ffffff" },
  { name: "surface-soft", className: "bg-surface-soft border border-hairline", hex: "#fafafa" },
  { name: "surface-dark", className: "bg-surface-dark", hex: "#171717" },
  { name: "hairline", className: "bg-hairline", hex: "#e5e5e5" },
  { name: "hairline-strong", className: "bg-hairline-strong", hex: "#d4d4d4" },
  { name: "charcoal", className: "bg-charcoal", hex: "#525252" },
  { name: "body", className: "bg-body", hex: "#737373" },
  { name: "mute", className: "bg-mute", hex: "#a3a3a3" },
  { name: "terminal-red", className: "bg-terminal-red", hex: "#ff5f56" },
  { name: "terminal-yellow", className: "bg-terminal-yellow", hex: "#ffbd2e" },
  { name: "terminal-green", className: "bg-terminal-green", hex: "#27c93f" },
];

const typeRows: { token: TypographyToken; sample: string }[] = [
  { token: "display-xl", sample: "The easiest way to build with open models" },
  { token: "display-lg", sample: "Pricing" },
  { token: "heading-lg", sample: "Automate your work" },
  { token: "heading-md", sample: "Free / Pro / Max" },
  { token: "heading-sm", sample: "How does billing work?" },
  { token: "body-md", sample: "Run large language models locally, then scale to the cloud when you need more." },
  { token: "body-strong", sample: "Everything in Free, plus:" },
  { token: "body-sm", sample: "Access larger models on data-center-grade hardware." },
  { token: "body-sm-strong", sample: "Solve harder tasks, faster" },
  { token: "caption-sm", sample: "© 2026" },
  { token: "code-md", sample: "curl -fsSL https://ollama.com/install.sh | sh" },
  { token: "code-sm", sample: "$ ollama launch openclaw" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6 px-6">
      <Text variant="display-lg">{title}</Text>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="flex flex-col">
      <PrimaryNav />

      <main className="mx-auto flex w-full max-w-[960px] flex-col gap-[88px] py-[88px]">
        <div className="px-6 text-center">
          <Text variant="display-xl">Design System</Text>
          <Text variant="body-md" className="mt-3 text-body">
            Color palette, type scale, and components — flat white canvas, pill geometry, one accent color: black.
          </Text>
        </div>

        <Section title="Colors">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {colorSwatches.map((swatch) => (
              <div key={swatch.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-lg ${swatch.className}`} />
                <Text variant="body-sm-strong">{swatch.name}</Text>
                <Text variant="caption-sm" className="text-mute">
                  {swatch.hex}
                </Text>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography">
          <div className="flex flex-col divide-y divide-hairline">
            {typeRows.map((row) => (
              <div key={row.token} className="flex flex-col gap-2 py-6">
                <Text variant="caption-sm" className="text-mute">
                  {row.token} — {typography[row.token]}
                </Text>
                <Text variant={row.token}>{row.sample}</Text>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Download</Button>
            <Button variant="secondary">Sign in</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <div className="rounded-lg bg-surface-dark p-4">
              <Button variant="pill-on-dark">Get Max</Button>
            </div>
          </div>
        </Section>

        <Section title="Inputs">
          <div className="flex max-w-sm flex-col gap-4">
            <TextInput placeholder="you@example.com" />
            <SearchPill />
            <InstallSnippet command="curl -fsSL https://ollama.com/install.sh | sh" />
            <div>
              <CommandTag>ollama launch openclaw</CommandTag>
            </div>
          </div>
        </Section>

        <Section title="Terminal card">
          <TerminalCard className="max-w-lg">
            <TerminalComment># install and run</TerminalComment>
            <TerminalCommand>$ ollama launch openclaw</TerminalCommand>
            <TerminalComment>Pulling manifest...</TerminalComment>
            <TerminalCommand>success</TerminalCommand>
          </TerminalCard>
        </Section>

        <Section title="Pricing cards">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PricingCard
              tier="Free"
              description="Get started with local models."
              price="$0"
              ctaLabel="Create account"
              ctaHref="#"
              includesLabel="Includes:"
              features={["Run any local model", "Community support"]}
            />
            <PricingCard
              tier="Pro"
              description="For individuals who need more headroom."
              price="$20"
              ctaLabel="Get Pro"
              ctaHref="#"
              includesLabel="Everything in Free, plus:"
              features={["Higher rate limits", "Priority support"]}
            />
            <PricingCard
              variant="dark"
              tier="Max"
              description="Solve harder tasks, faster."
              price="$200"
              ctaLabel="Get Max"
              ctaHref="#"
              includesLabel="Everything in Pro, plus:"
              features={["Access larger models on data-center-grade hardware", "Dedicated support"]}
            />
          </div>
        </Section>

        <Section title="FAQ">
          <div>
            <FaqRow
              question="How does billing work?"
              answer="You're billed monthly based on your plan. Cancel anytime from account settings."
            />
            <FaqRow
              question="Can I run models locally and in the cloud?"
              answer="Yes — start local, then scale to the cloud when you need more compute."
            />
          </div>
        </Section>

        <Section title="CTA strip">
          <CtaStripDark>Your data stays yours.</CtaStripDark>
        </Section>

        <Section title="Links">
          <div className="flex gap-6">
            <LinkInline href="#">Inline link</LinkInline>
            <LinkMute href="#">Muted link</LinkMute>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
