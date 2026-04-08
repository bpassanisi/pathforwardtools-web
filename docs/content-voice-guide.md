# PathForward Tools — Content Voice Guide

> Use this when writing or reviewing any copy for this site: hero text, section copy, app descriptions, CTAs, metadata.

---

## The Voice

Short sentences. Plain language. No corporate register. Direct.

The existing copy on the site defines the calibration baseline:

> "Done standing still."

> "PathForward Tools builds apps for people navigating what comes next."

> "Some people are rebuilding. Some are rethinking. Some are simply ready for what comes next. PathForward Tools exists for all of them."

These three pieces are the voice fingerprint. Write toward them — not away from them.

---

## Humanizer Workflow

Before publishing any AI-generated copy, run it through the Humanizer skill. The Humanizer is installed at `~/.claude/skills/humanizer`.

**Step 1 — Paste the calibration sample first:**
```
Here's a sample of the PathForward Tools voice for calibration:

"Done standing still."

"PathForward Tools builds apps for people navigating what comes next."

"Some people are rebuilding. Some are rethinking. Some are simply ready for what comes next. PathForward Tools exists for all of them."
```

**Step 2 — Then paste the AI-generated text:**
```
Now humanize this copy: [paste text here]
```

**Step 3 — Run `/humanizer`**

The skill will:
1. Analyze your calibration sample for voice fingerprint
2. Scan the AI-generated text for the 29 pattern categories
3. Rewrite to match your voice (not just remove AI patterns)
4. Run a final anti-AI pass

---

## AI Writing Patterns to Avoid

The Humanizer catches all 29, but these are the ones most common in SaaS marketing copy:

- **Significance inflation** — "marking a pivotal moment in your journey" → cut
- **Rule of three** — AI defaults to exactly 3 bullet points; vary
- **Copula avoidance** — "serves as your guide" → "guides you"
- **Signposting** — "Here's what you need to know:" → delete the intro, just start
- **Hyphenated pairs** — "data-driven", "client-facing", "user-centric" → plain language
- **Em dash overuse** — one per paragraph max
- **Sycophantic positivity** — "this powerful tool", "incredible results" → factual claims only

---

## What Good Looks Like

Before: "PathForward Tools serves as a comprehensive platform empowering users to navigate life's most challenging transitions with data-driven insights and actionable guidance."

After: "PathForward Tools builds apps for people navigating what comes next."

---

## Metadata Copy

Page titles and meta descriptions are high-SEO surfaces and often get the most AI polish applied. Run these through the Humanizer too — they're read by real people in search results.
