import { useLocation } from "@tanstack/react-router";

export type Lang = "en" | "uk";

/** Pages that exist only in one language and have no counterpart. */
const NO_COUNTERPART = ["/marketing-set-2"];

export function langFromPath(pathname: string): Lang {
  return pathname === "/ua" || pathname.startsWith("/ua/") ? "uk" : "en";
}

/** Prefix an internal path for the given language. Leaves mailto/external/UA-only links alone. */
export function localize(href: string, lang: Lang): string {
  if (lang === "en" || !href.startsWith("/")) return href;
  if (NO_COUNTERPART.some((p) => href.startsWith(p))) return href;
  if (href === "/") return "/ua";
  if (href.startsWith("/#")) return `/ua${href.slice(1)}`;
  return `/ua${href}`;
}

/** The same page in the other language. */
export function counterpart(pathname: string): string {
  if (langFromPath(pathname) === "uk") {
    const rest = pathname.replace(/^\/ua/, "");
    return rest === "" ? "/" : rest;
  }
  if (NO_COUNTERPART.some((p) => pathname.startsWith(p))) return "/ua";
  return pathname === "/" ? "/ua" : `/ua${pathname}`;
}

export function useLang(): Lang {
  const { pathname } = useLocation();
  return langFromPath(pathname);
}
