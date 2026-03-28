# Klar Digital — Standard Website Structure Template

## Overview

This template defines the standard page structure and section layout for all Klar Digital client websites. Every site follows this structure unless the client's package explicitly excludes pages. The goal: a repeatable, conversion-focused framework that works for any local Norwegian SMB.

---

## Standard Pages

### 1. Homepage (Required — all packages)

| Section | Purpose | Key Elements |
|---------|---------|-------------|
| **Navigation** | Wayfinding + brand presence | Logo, page links (max 5), CTA button |
| **Hero** | First impression + primary CTA | Headline (pain/aspiration), subheadline, CTA button, hero image |
| **Services Overview** | Show what you offer at a glance | 3 service cards with icon, title, short description |
| **Social Proof** | Build trust immediately | Testimonials, client logos, or stats (e.g., "50+ sites delivered") |
| **How It Works** | Reduce friction | 3 steps: Book → We Build → You Launch |
| **About / Why Us** | Human connection | Short paragraph, team photo or founder story |
| **CTA Section** | Drive conversion | Headline, subtext, primary CTA button |
| **Footer** | Navigation + contact + legal | Links, address, phone, email, social icons, copyright |

### 2. About Page (Growth + Premium)

| Section | Purpose |
|---------|---------|
| **Hero** | Page title + short intro |
| **Our Story** | 2-3 paragraphs about who we are and why |
| **Values / Approach** | 3-4 value cards (Simplicity, Speed, Quality, etc.) |
| **Team** | Photo + name + role (if applicable) |
| **CTA Section** | Drive to contact |

### 3. Services Page (Growth + Premium)

| Section | Purpose |
|---------|---------|
| **Hero** | Page title + what we do |
| **Service Cards** | Detailed breakdown of each service package |
| **Process** | Step-by-step how engagement works |
| **FAQ** | 5-8 common questions |
| **CTA Section** | Drive to contact or booking |

### 4. Contact Page (Required — all packages)

| Section | Purpose |
|---------|---------|
| **Hero** | Page title + invite to reach out |
| **Contact Form** | Name, email, phone, message, submit |
| **Contact Info** | Email, phone, address, map (optional) |
| **Business Hours** | When we respond |

### 5. Portfolio / Case Studies (Premium only)

| Section | Purpose |
|---------|---------|
| **Hero** | Page title |
| **Project Grid** | Screenshot + client name + brief result |
| **Case Study Detail** | Challenge → Solution → Result format |
| **CTA Section** | Drive to contact |

---

## Section Design Rules

1. **Every page starts with a hero section** — clear heading, optional subheading, optional CTA
2. **Every page ends with a CTA section** — never let the user reach a dead end
3. **Alternate section backgrounds** — white (`#FAFBFC`) and light gray (`#F1F5F9`) for visual rhythm
4. **Max one primary CTA per section** — Signal Blue button, clear action verb
5. **Social proof appears on every page** — at minimum a testimonial strip or trust badge bar
6. **Mobile-first** — all sections stack vertically, images scale, touch targets 44px minimum

---

## Navigation Structure

```
Logo  |  Home  |  Services  |  About  |  Contact  |  [Get Started →]
```

- Max 5 nav items (excluding CTA button)
- CTA button is always rightmost, styled as primary button
- Mobile: hamburger menu with full-screen overlay
- Active page indicated by underline or bold weight
- Logo links to homepage

---

## Content Hierarchy Per Section

Every section follows this content order:

1. **Eyebrow label** (optional) — small caps, secondary color
2. **Heading** — H2, concise, benefit-oriented
3. **Subheading** (optional) — 1-2 sentences expanding the heading
4. **Content** — cards, text blocks, images, forms
5. **CTA** (optional) — button or link to next action

---

## Package-to-Page Mapping

| Page | Starter | Growth | Premium |
|------|---------|--------|---------|
| Homepage | Yes | Yes | Yes |
| Contact | Yes | Yes | Yes |
| About | — | Yes | Yes |
| Services | — | Yes | Yes |
| Portfolio | — | — | Yes |
| Blog | — | — | Optional |
| Custom pages | — | — | Up to 3 |

---

## Footer Standard

All sites include a consistent footer:

- **Column 1:** Logo + 1-line tagline
- **Column 2:** Quick links (pages)
- **Column 3:** Contact info (email, phone, address)
- **Column 4:** Social media icons
- **Bottom bar:** Copyright © {year} {business name}. All rights reserved.

---

## Reusable Section Library

These pre-built sections can be mixed and matched across pages:

| Section ID | Name | Description |
|------------|------|-------------|
| `hero-split` | Split Hero | Text left, image right (or reversed) |
| `hero-centered` | Centered Hero | Centered text, optional background image |
| `cards-3` | Three Column Cards | Icon + title + description, 3 across |
| `cards-pricing` | Pricing Cards | 3 tiers with features and CTA |
| `testimonials` | Testimonial Slider | Quote + name + business, 1-3 shown |
| `trust-bar` | Trust / Logo Bar | Row of client logos or trust badges |
| `steps-3` | Three-Step Process | Numbered steps with icons |
| `faq-accordion` | FAQ Accordion | Expandable question/answer pairs |
| `cta-banner` | CTA Banner | Full-width with heading + button |
| `contact-form` | Contact Form | Standard form with validation |
| `team-grid` | Team Grid | Photo + name + role cards |
| `stats-row` | Stats Row | 3-4 big numbers with labels |
