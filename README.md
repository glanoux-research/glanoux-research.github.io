# Gabriel Lanoux's portfolio

A static portfolio hosted at [glanoux-research.github.io](https://glanoux-research.github.io/) from the `main` branch of [glanoux-research/glanoux-research.github.io](https://github.com/glanoux-research/glanoux-research.github.io). No build tool or runtime dependency is required.

## Content and languages

English is the default language. Visitors can choose **Français** in the language selector; their choice is saved locally in the browser. The HTML fallback is also in English when JavaScript is unavailable. Both translations are maintained in `site.js`.

The biography draws on Gabriel's CV, his confirmed details, his public LinkedIn profile, and his [Deep Learning Lab profile](https://dllab.snu.ac.kr/m_professor/). His INSA Toulouse engineering degree is **in progress**; the site does not claim it has been awarded.

The site has five pages:

| Page | Content |
|---|---|
| `/` | Introduction and three featured projects |
| `/projects/` | All six project cards |
| `/about/` | Journey, skills and interests |
| `/blog/` | Notes and photos from conferences and events |
| `/contact/` | Contact channels and the comments thread |

The site used to be a single page. `site.js` sends old links to its sections (`/#projects`, `/#parcours`, `/#competences`, `/#commentaires`) to the matching new page. `sitemap.xml` lists every page for search engines.

The projects page links to seven project pages in `projects/`. Six are interactive reports; `live-translation.html` presents the [live_translation](https://github.com/glanoux-research/live_translation) repository. Each one is a self-contained interactive report (simulation replay, trained policy, flight log or data animation) with no runtime dependency other than Google Fonts and, for the 3D pages, cdnjs.

## Photos

Photos in `assets/photos/` are resized and re-encoded without any metadata (no EXIF: no date, device or location). Faces of other people are blurred or cropped out before publishing.

## Comments

The contact page (`/contact/`) lists the public contact channels and embeds [giscus](https://giscus.app/) and displays a dedicated [GitHub Discussion](https://github.com/glanoux-research/glanoux-research.github.io/discussions/1). Visitors can read comments on the page and sign in with GitHub to post. Comments are public and can be moderated in GitHub Discussions.

Visitor content is displayed inside giscus's iframe, not inserted into this site's DOM. The `giscus.json` file restricts embedding to the production origin. The giscus GitHub App is installed only for this repository and has access to its Discussions. This setup relies on GitHub and giscus for authentication and comment rendering; it does not provide a guarantee against every security issue in those services.

Some browsers or extensions may block third-party iframes. The page includes a direct link to the same GitHub Discussion so visitors can still read and post comments when the embed is unavailable. The embed itself cannot bypass a visitor's browser security settings.

## Design

`assets/theme.css` holds the shared design tokens: colours for light and dark mode, IBM Plex fonts, and the navigation bar shown at the top of every project page, with the same links as the site header (Projects, About, Blog, Contact). The layout of the four main pages is in `styles.css`; they share the same header, footer and translations.

The project pages were first built as separate reports with their own styles. Each one keeps its layout and its data colours (routes, ships, wave heights, speed loss), but its neutral colours, accent and fonts are mapped onto the shared tokens by a `<style id="pf-map">` block at the end of the page. Changing a token in `theme.css` restyles the home page and all project pages at once. Card thumbnails are in `assets/thumbs/`.

## Privacy of project data

Project pages were checked for identifying information before publication:

- AIS vessel identifiers (MMSI) in the English Channel animations are replaced by sequential numbers (`Ship #1`, `Ship #2`…), consistent across both days.
- Lab server names, addresses, user names and internal paths were removed from the Isaac Sim pages.

The original, non-pseudonymised versions are kept outside this repository and must not be added to it.

## Crawlers

`robots.txt` allows all crawlers. The project pages are meant to be found.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`. The giscus iframe is restricted to the production origin, so comments will only load on the published site.

## Search engines and sharing

- **Tags:** every page has a title, a meta description under 160 characters, a canonical URL, and Open Graph and Twitter tags. The tags live in a `<!-- seo -->` block at the end of `<head>`.
- **Sharing image:** links to the main pages show `assets/og-card.jpg` (1200×630). Project pages show their own thumbnail.
- **Structured data:** JSON-LD (schema.org) describes the site and its author: `WebSite` and `Person` on the home page, `ProfilePage` on About, `CollectionPage` on Projects, `Blog` with one `BlogPosting` per article, `ContactPage`, and `CreativeWork` with a breadcrumb on each project page.
- **Sitemap:** `sitemap.xml` lists all public pages with their last modification date, and `robots.txt` points to it.
- **Not-found page:** `404.html` is served for unknown addresses and is excluded from indexing (`noindex`).
- **Language:** the site is indexed in English. French is applied in the browser on the same URLs, so search engines only see the English text.

## Disclaimer

Claude, an AI assistant made by Anthropic, was used to build this repository.
