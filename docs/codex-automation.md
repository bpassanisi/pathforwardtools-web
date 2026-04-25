# Codex Automation — PathForward Tools Web

*Based on Article 32: Codex Is Coming for All Work*
*Framework: Codex = GUI/computer-use (no API needed). Claude = file-based, API-connected, MCP-enabled.*

---

## Use Cases

### 1. 5-Product Equal Treatment Audit
**Agent:** Claude (file-based) + Codex (GUI)
**ROI:** Intelligence card must have equal weight to Mind, Clear, for Men, Quantum

Claude reads product card components → verifies all 5 PathForward products use identical component structure, same image dimensions, same CTA pattern → flags any asymmetry. Codex screenshots the live site → visually confirms equal visual weight across all cards.

**Why hybrid:** Code parity check = Claude. Visual confirmation = Codex.

---

### 2. Product Card Link Health Check
**Agent:** Codex (GUI)
**ROI:** Broken product links destroy conversion from the hub site

Codex navigates to each product card CTA on pathforwardtools.com → clicks through → verifies each product loads correctly → flags broken links, 404s, or wrong destinations → logs to `docs/health/product-links.md`.

**Why this is a Codex job:** Cross-domain link resolution requires real browser navigation.

---

### 3. SEO Content Audit
**Agent:** Claude (file-based)
**ROI:** Hub site discoverability drives all 5 product pipelines

Claude reads all page source → extracts meta titles, descriptions, h1/h2 headings per product page → checks against SEO best practices (unique meta descriptions, keyword presence, correct length) → flags gaps in `docs/seo/audit.md`.

**Why this is a Claude job:** HTML/JSX source analysis. File-based.

---

### 4. Brand System Compliance
**Agent:** Claude (file-based)
**ROI:** Hub site must implement pathforwardtools-brand tokens faithfully

Claude reads pathforwardtools-brand design token spec → verifies pathforwardtools-web uses the correct tokens for: PathForward Golden Amber #D4A55A, product accent colors, Arrow Monogram usage → flags any deviation → generates `docs/brand-compliance.md`.

**Why this is a Claude job:** Token implementation is source code analysis. File-based.

---

### 5. Performance + Core Web Vitals Audit
**Agent:** Codex (GUI)
**ROI:** Hub page performance directly affects SEO ranking and first impression

Codex drives Lighthouse on pathforwardtools.com → extracts LCP, FID/INP, CLS scores → compares against targets → flags regressions → logs to `docs/performance/lighthouse.md`.

**Why this is a Codex job:** Lighthouse runs in the browser. Computer use executes the audit.

---

### 6. New Product Launch Readiness Check
**Agent:** Claude (file-based)
**ROI:** Never launch a PathForward product without the hub site updated

When a new PathForward product is detected in PRODUCT_REGISTRY.md, Claude checks: does pathforwardtools-web have a product card for it? Does the card have the correct accent color, domain, and CTA? Flags missing entries as blockers for launch.

**Why this is a Claude job:** Registry comparison against source files. File-based.

---

*Last updated: 2026-04-24*
