# Klar Digital — Recommended Tech Stack

## Decision Criteria

1. **Speed** — fast page loads (Lighthouse > 90), fast development, fast deployment
2. **Simplicity** — small team can maintain it, no over-engineering
3. **Scalability** — handle 10 or 100 client sites with the same workflow
4. **Cost** — minimize hosting and tooling costs for an agency starting out
5. **Replicability** — same stack works for every client site

---

## Recommended Stack

### Frontend: Static HTML/CSS + Vanilla JS

| Component | Choice | Why |
|-----------|--------|-----|
| **Markup** | Semantic HTML5 | Universal, zero build step, maximum performance |
| **Styling** | CSS with custom properties (design tokens) | No framework dependency, tiny footprint, full control |
| **Interactivity** | Vanilla JavaScript | Mobile menu, scroll animations, form validation — no framework needed |
| **Fonts** | Inter via Google Fonts | Free, variable font, preloaded for performance |
| **Icons** | Lucide (SVG inline) | Consistent, lightweight, no icon font payload |

**Why not React/Next.js/Astro?** For brochure sites targeting local SMBs, a framework adds build complexity, deployment overhead, and maintenance burden with zero user-facing benefit. A single HTML file loads faster, costs less to host, and is easier to hand off to clients or junior developers.

**When to upgrade:** If Klar Digital starts offering dynamic features (dashboards, booking systems, e-commerce), evaluate Astro or Next.js at that point. For now, keep it simple.

### Hosting: Cloudflare Pages (Free Tier)

| Feature | Detail |
|---------|--------|
| **Cost** | Free for unlimited sites, unlimited bandwidth |
| **CDN** | Global edge network — fast everywhere, including Norway |
| **SSL** | Automatic HTTPS |
| **Deploy** | Git push to deploy, or drag-and-drop upload |
| **Custom domains** | Unlimited, automatic DNS if using Cloudflare |
| **Build** | Not needed (static files), but supports build commands if wanted later |

**Alternatives considered:**
- Vercel — great but overkill, free tier has limits on commercial use
- Netlify — good free tier, slightly less global edge coverage
- GitHub Pages — free but no form handling, less professional

### Domain & DNS: Cloudflare Registrar

- Cheapest .no domain registration available through Norid-accredited registrars
- For .com domains, Cloudflare Registrar offers at-cost pricing
- DNS management integrated with hosting

### Forms: Formspree (Free Tier) or Cloudflare Workers

| Option | Free Tier | Best For |
|--------|-----------|----------|
| **Formspree** | 50 submissions/month | Getting started, zero code |
| **Cloudflare Workers** | 100k requests/day | Scale, custom logic, email routing |

Start with Formspree. Migrate to Workers when volume justifies it.

### Analytics: Plausible or Cloudflare Web Analytics

| Option | Cost | Privacy |
|--------|------|---------|
| **Cloudflare Web Analytics** | Free | Cookie-free, GDPR compliant |
| **Plausible** | €9/month | Cookie-free, GDPR compliant, better dashboard |

Start with Cloudflare Web Analytics (free). Upgrade to Plausible when client reporting matters.

### Email: Custom domain email

- Use Cloudflare Email Routing (free) to forward `contact@klardigi.no` to Gmail/personal inbox
- For sending: Google Workspace ($6/user/month) when revenue supports it
- Temporary: use personal email with professional signature

---

## Development Workflow

### Local Development
```
project/
├── index.html          # Homepage
├── about.html          # About page (Growth+)
├── services.html       # Services page (Growth+)
├── contact.html        # Contact page
├── css/
│   └── style.css       # Single stylesheet with design tokens
├── js/
│   └── main.js         # Mobile menu, scroll animations, form validation
├── images/
│   ├── hero.webp
│   └── ...
└── favicon.svg
```

### Deployment
1. Push to GitHub repository
2. Cloudflare Pages auto-deploys from main branch
3. Custom domain points to Cloudflare Pages
4. Done. No build step, no CI/CD complexity.

### Per-Client Workflow
1. Copy the template repo
2. Replace content (text, images, colors via CSS custom properties)
3. Push to new GitHub repo
4. Connect to Cloudflare Pages with client's domain
5. Deliver in Day 4 of the 7-day workflow

---

## Cost Summary (Month 1)

| Item | Cost |
|------|------|
| Hosting (Cloudflare Pages) | Free |
| DNS (Cloudflare) | Free |
| Forms (Formspree) | Free |
| Analytics (Cloudflare) | Free |
| Domain (.com) | ~$10/year |
| Email (forwarding) | Free |
| **Total** | **~$10/year per site** |

---

## Future Upgrades (When Revenue Justifies)

| Trigger | Upgrade | Cost |
|---------|---------|------|
| Need client CMS | Add Decap CMS (git-based, free) or Tina CMS | Free |
| Need booking/scheduling | Integrate Cal.com (free tier) or Calendly | Free–$12/mo |
| Need e-commerce | Evaluate Shopify Lite or Snipcart | $9–$29/mo |
| Need blog | Add markdown blog with static site generator (Eleventy/Astro) | Free |
| High volume (20+ sites) | Evaluate templating with Astro + shared component library | Free |
| Client needs dashboard | Next.js or Remix for dynamic features | Hosting ~$20/mo |

---

## Summary

**The stack is: HTML + CSS + JS → GitHub → Cloudflare Pages.**

No frameworks, no build tools, no monthly costs. Maximum speed, minimum complexity. This stack lets a small team ship 4-6 client websites per month with confidence, and every site scores 95+ on Lighthouse out of the box.
