import { initPostHog, trackEvent, posthog } from "../lib/posthog";

function trackPageview(): void {
  initPostHog();
  if (posthog.__loaded) {
    posthog.capture("$pageview", {
      $current_url: window.location.href,
      locale: document.documentElement.lang || "en",
    });
  }
}

function initVideoTracking(): void {
  const video = document.getElementById("intro-video") as HTMLVideoElement | null;
  if (!video || video.dataset.phBound) return;
  video.dataset.phBound = "true";

  const milestones = new Set<number>();

  video.addEventListener("play", () => {
    trackEvent("video_play", {
      video_id: "intro-video",
      lang: video.dataset.lang || document.documentElement.lang || "en",
    });
  });

  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    const percent = Math.floor((video.currentTime / video.duration) * 100);
    for (const m of [25, 50, 75]) {
      if (percent >= m && !milestones.has(m)) {
        milestones.add(m);
        trackEvent("video_progress", {
          video_id: "intro-video",
          percent: m,
          lang: video.dataset.lang || document.documentElement.lang || "en",
        });
      }
    }
  });

  video.addEventListener("ended", () => {
    milestones.clear();
    trackEvent("video_completed", {
      video_id: "intro-video",
      lang: video.dataset.lang || document.documentElement.lang || "en",
    });
  });
}

function initFormTracking(): void {
  const form = document.querySelector<HTMLFormElement>("#contact-form, [data-contact-form]");
  if (!form || form.dataset.phBound) return;
  form.dataset.phBound = "true";

  let started = false;
  form.addEventListener(
    "focusin",
    () => {
      if (!started) {
        started = true;
        trackEvent("form_started", { form_id: form.id || "contact" });
      }
    },
    { once: true },
  );
}

// Delegated click tracking: PDF downloads and external links
document.addEventListener("click", (e) => {
  const target = (e.target as Element)?.closest("a");
  if (!target) return;

  const href = target.getAttribute("href") || "";
  if (href.includes("/downloads/")) {
    const filename = href.split("/").pop() || href;
    trackEvent("download_document", {
      filename,
      href,
      locale: document.documentElement.lang || "en",
    });
  } else if (target.host && target.host !== window.location.host) {
    trackEvent("outbound_click", {
      url: href,
      text: target.textContent?.trim(),
    });
  }
});

// View Transitions lifecycle: runs once on first load and after every page swap
document.addEventListener("astro:page-load", () => {
  trackPageview();
  initVideoTracking();
  initFormTracking();
});

// In-place language switch tracking
document.addEventListener("kyron:lang-change", () => {
  trackEvent("language_switched", {
    lang: document.documentElement.lang || "en",
  });
});
