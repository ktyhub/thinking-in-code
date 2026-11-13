---
title: "firecrawl v2.1.0"
project: "firecrawl"
repo: "firecrawl/firecrawl"
tag: "v2.1.0"
published: "2025-08-29"
type: "minor"
lang: "en"
summary: "🔗 Full Changelog"
---

# firecrawl v2.1.0

# Firecrawl v2.1.0 is here!

## ✨ New Features
- **Search Categories**: Filter search results by specific categories using the `categories` parameter:
    - `github`: Search within GitHub repositories, code, issues, and documentation
    - `research`: Search academic and research websites (arXiv, Nature, IEEE, PubMed, etc.)
    - More coming soon
- **Image Extraction:** Added image extraction support to the v2 scrape endpoint.  
- **Data Attribute Scraping:** Now supports extraction of `data-*` attributes.  
- **Hash-Based Routing:** Crawl endpoints now handle hash-based routes.  
- **Improved Google Drive Scraping:** Added ability to scrape TXT, PDF, and Sheets from Google Drive.  
- **PDF Enhancements:** Extracts PDF titles and shows them in metadata.  
- **API Enhancements:**  
  - Map endpoint supports up to **100k results**.  
- **Helm Chart:** Initial Helm chart added for Firecrawl deployment.  
- **Security:** Improved protection against XFF spoofing.

## 🛠 Fixes
- Fixed UTF-8 encoding in Google search scraper.  
- Restored crawl status in preview mode.  
- Fixed missing methods in Python SDK.  
- Corrected JSON response handling for v2 search with `scrapeOptions.formats`.  
- Fixed field population for `credits_billed` in v0 scrape.  
- Improved document field overlay in v2 search.

## 👥 New Contributors
- @kelter-antunes  
- @vishkrish200  
- @ieedan  

🔗 [**Full Changelog**](https://github.com/firecrawl/firecrawl/compare/v2.0.1...v2.1.0)


## What's Changed
* fix: handle UTF-8 encoding properly in Google search scraper by @kelter-antunes in https://github.com/firecrawl/firecrawl/pull/1924
* feat(api): add image extraction support to v2 scrape endpoint by @vishkrish200 in https://github.com/firecrawl/firecrawl/pull/2008
* feat(api): support extraction of data-* attributes in scrape endpoints by @vishkrish200 in https://github.com/firecrawl/firecrawl/pull/2006
* feat: add initial Helm chart for Firecrawl deployment by @JakobStadlhuber in https://github.com/firecrawl/firecrawl/pull/1262
* feat(api/crawl): support hash-based routing by @mogery in https://github.com/firecrawl/firecrawl/pull/2031
* fix(python-sdk): missing methods in client by @rafaelsideguide in https://github.com/firecrawl/firecrawl/pull/2050
* feat(countryCheck): better protection against XFF spoofing by @mogery in https://github.com/firecrawl/firecrawl/pull/2051
* fix: include json in v2 /search response when using scrapeOptions.formats by @ieedan in https://github.com/firecrawl/firecrawl/pull/2052
* feat(scrapeURL/rewrite): scrape Google Drive TXT/PDF files and sheets by @mogery in https://github.com/firecrawl/firecrawl/pull/2053
* Update README.md by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2060
* (fix/crawl) Re-enable crawl status in preview mode by @nickscamara in https://github.com/firecrawl/firecrawl/pull/2061
* feat(pdf-parser): get PDF title and show in metadata by @mogery in https://github.com/firecrawl/firecrawl/pull/2062
* fix(v2/search): overlay doc fields via spread operator by @mogery in https://github.com/firecrawl/firecrawl/pull/2054
* feat(api): propagate api_key_id towards billing function by @mogery in https://github.com/firecrawl/firecrawl/pull/2049
* feat(api/map): use new RPCs + set limit max to 100k by @mogery in https://github.com/firecrawl/firecrawl/pull/2065
* fix(api/v0/scrape): populate credits_billed field by @mogery in https://github.com/firecrawl/firecrawl/pull/2066

## New Contributors
* @kelter-antunes made their first contribution in https://github.com/firecrawl/firecrawl/pull/1924
* @vishkrish200 made their first contribution in https://github.com/firecrawl/firecrawl/pull/2008
* @ieedan made their first contribution in https://github.com/firecrawl/firecrawl/pull/2052

**Full Changelog**: https://github.com/firecrawl/firecrawl/compare/v2.0.1...v2.1.0

---

> **Source** [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) · `v2.1.0` · 2025-08-29 · [upstream release](https://github.com/firecrawl/firecrawl/releases/tag/v2.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
