"use client";

import { useState, type ReactNode } from "react";
import NextLink from "next/link";
import { Button } from "./Button";
import { SearchPill } from "./Input";
import { cn } from "../cn";
import { typography } from "../typography";

const navLinks = [
  { label: "Models", href: "/models" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
];

function DefaultMark() {
  return <span className="block h-6 w-6 rounded-full bg-primary" aria-hidden />;
}

export function PrimaryNav({ logo }: { logo?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex h-14 items-center justify-between gap-4 bg-canvas px-6">
      <div className="flex items-center gap-8">
        <NextLink href="/" aria-label="Home" className="flex items-center">
          {logo ?? <DefaultMark />}
        </NextLink>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={cn(typography["body-sm-strong"], "text-ink")}
            >
              {link.label}
            </NextLink>
          ))}
        </nav>
      </div>

      <div className="hidden w-full max-w-[360px] md:block">
        <SearchPill />
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Button variant="secondary">Sign in</Button>
        <Button variant="primary">Download</Button>
      </div>

      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="primary-nav-drawer"
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth={1.5}>
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="primary-nav-drawer"
          className="absolute left-0 right-0 top-14 z-10 flex flex-col gap-4 border-t border-hairline bg-canvas px-6 py-6 md:hidden"
        >
          <SearchPill />
          {navLinks.map((link) => (
            <NextLink
              key={link.href}
              href={link.href}
              className={cn(typography["body-sm-strong"], "text-ink")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NextLink>
          ))}
          <Button variant="secondary" className="w-full">
            Sign in
          </Button>
          <Button variant="primary" className="w-full">
            Download
          </Button>
        </div>
      )}
    </header>
  );
}
