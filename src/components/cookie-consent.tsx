"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/**
 * Consent management.
 *
 * The site currently sets exactly one cookie — `cc_cookie`, written by this
 * component to remember the visitor's choice. There is no analytics, advertising,
 * or embedded third-party content, so the optional category below is declared
 * but unused.
 *
 * To start using analytics later:
 *   1. Load the script inside an `onConsent`/`onChange` handler, guarded by
 *      `CookieConsent.acceptedCategory("analytics")`.
 *   2. List the cookies it sets under that category's `autoClear` block, so
 *      revoking consent actually deletes them.
 * Nothing else needs to change — the banner already offers the category.
 *
 * Note: the library hides itself from bots and automated browsers
 * (`hideFromBots` defaults to true, and it treats `navigator.webdriver` as a
 * bot). The banner will therefore not appear under Playwright/Puppeteer/CDP
 * unless that option is disabled — this is expected, not a failure.
 */
export function CookieConsentBanner() {
  useEffect(() => {
    void CookieConsent.run({
      guiOptions: {
        consentModal: { layout: "box", position: "bottom left", equalWeightButtons: true },
        preferencesModal: { layout: "box", equalWeightButtons: true },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          enabled: false,
          readOnly: false,
          // Withdrawing consent deletes what Google Analytics wrote, rather
          // than merely stopping new writes. `_ga` matches both the client-id
          // cookie and the per-property `_ga_<id>` session cookie.
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }, { name: /^_gat/ }],
          },
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies",
              description:
                "We use Google Analytics to see which pages are actually useful. It only loads if you accept. Decline and the single cookie we keep is the one remembering that choice. No advertising or cross-site tracking either way.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Essential only",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Essential only",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Essential",
                  description:
                    "Required for the site to work and to remember your cookie choice. These cannot be turned off. Currently that is a single cookie, cc_cookie, storing your selection.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Google Analytics, which tells us which pages get read and which get abandoned. It sets _ga cookies to count a returning visitor as one person rather than several. Nothing loads from Google until you turn this on, and turning it off again deletes those cookies.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'See the <a href="/legal/privacy">privacy notice</a>, or email <a href="mailto:hello@sumnora.com">hello@sumnora.com</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}

/** Reopens the preferences dialog. Consent must stay withdrawable at any time. */
export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button className={className} onClick={() => CookieConsent.showPreferences()} type="button">
      Cookie preferences
    </button>
  );
}
