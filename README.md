# Gabriel Lanoux's portfolio

A static portfolio hosted at [glanoux-research.github.io](https://glanoux-research.github.io/) from the `main` branch of [glanoux-research/glanoux-research.github.io](https://github.com/glanoux-research/glanoux-research.github.io). No build tool or runtime dependency is required.

## Content and languages

English is the default language. Visitors can choose **Français** in the language selector; their choice is saved locally in the browser. The HTML fallback is also in English when JavaScript is unavailable. Both translations are maintained in `site.js`.

The biography draws on Gabriel's CV, his confirmed details, his public LinkedIn profile, and his [Deep Learning Lab profile](https://dllab.snu.ac.kr/m_professor/). His INSA Toulouse engineering degree is **in progress**; the site does not claim it has been awarded.

The three project previews are illustrative and provisional. They do not run the complete local research systems. Their final selection and the site's visual design remain to be decided.

## Comments

The home page embeds [giscus](https://giscus.app/) and displays a dedicated [GitHub Discussion](https://github.com/glanoux-research/glanoux-research.github.io/discussions/1). Visitors can read comments on the page and sign in with GitHub to post. Comments are public and can be moderated in GitHub Discussions.

Visitor content is displayed inside giscus's iframe, not inserted into this site's DOM. The `giscus.json` file restricts embedding to the production origin. The giscus GitHub App is installed only for this repository and has access to its Discussions. This setup relies on GitHub and giscus for authentication and comment rendering; it does not provide a guarantee against every security issue in those services.

Some browsers or extensions may block third-party iframes. The page includes a direct link to the same GitHub Discussion so visitors can still read and post comments when the embed is unavailable. The embed itself cannot bypass a visitor's browser security settings.

## Crawlers and demos

`robots.txt` asks cooperative crawlers to avoid `/demos/`, and each demo page has a `noindex` directive. These are voluntary directives and do not stop a crawler that ignores them. Actual access control would require hosting the demos behind authentication elsewhere.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`. The giscus iframe is restricted to the production origin, so comments will only load on the published site.
