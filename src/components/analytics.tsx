"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import { GA_MEASUREMENT_ID } from "@/lib/site-data";

/**
 * Google Analytics, gated on consent.
 *
 * Nothing from Google is requested until the visitor accepts the analytics
 * category — the script tag is not rendered at all, rather than being loaded
 * with consent mode set to denied. That is the stricter of the two accepted
 * patterns and it matches what the consent notice promises.
 *
 * Revoking consent unmounts the tag and the library clears the `_ga*` cookies
 * listed in its `autoClear` block. Unmounting alone is not enough, though: a
 * gtag instance already in memory would carry on sending cookieless hits until
 * the next page load, so we also set Google's documented
 * `ga-disable-<id>` flag, which stops them immediately.
 *
 * Only runs in production builds, so local development does not land in the
 * reporting property, and only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
 */
export function Analytics() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const sync = () => {
      const allowed = CookieConsent.acceptedCategory("analytics");
      // Set before the state update so a withdrawal takes effect on this page
      // view rather than the next one.
      if (GA_MEASUREMENT_ID) {
        (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = !allowed;
      }
      setAnalyticsAllowed(allowed);
    };

    // Covers the returning visitor whose stored consent is restored on load,
    // as well as the first decision and any later change of mind.
    sync();
    window.addEventListener("cc:onConsent", sync);
    window.addEventListener("cc:onChange", sync);

    return () => {
      window.removeEventListener("cc:onConsent", sync);
      window.removeEventListener("cc:onChange", sync);
    };
  }, []);

  if (!GA_MEASUREMENT_ID || !analyticsAllowed || process.env.NODE_ENV !== "production") return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
