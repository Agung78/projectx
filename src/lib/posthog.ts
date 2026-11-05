import posthog from "posthog-js";

let initialized = false;

export function initPostHog(): void {
  if (initialized || typeof window === "undefined") return;

  const key = import.meta.env.PUBLIC_POSTHOG_KEY;
  if (!key) return;

  const host =
    import.meta.env.PUBLIC_POSTHOG_HOST ||
    (import.meta.env.PROD ? "/ingest" : "https://us.i.posthog.com");

  posthog.init(key, {
    api_host: host,
    ui_host: "https://us.posthog.com",
    capture_pageview: false, // Handled manually on astro:page-load for ClientRouter
    capture_pageleave: true,
    capture_performance: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: true,
      maskTextSelector: "[data-ph-mask]",
    },
  });

  initialized = true;
}

export function trackEvent(name: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  initPostHog();
  if (posthog.__loaded) {
    posthog.capture(name, props);
  }
}

export { posthog };
