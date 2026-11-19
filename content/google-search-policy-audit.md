# Google Search policy and recommendation readiness review

Reviewed 20 November 2026 against the repository preview branch, not the production domain.

## Findings

- The sitemap listed 136 URLs, including 52 city-targeted landing pages with highly templated content. The cluster includes suburb-name ceramic coating pages, Tesla cost and worth-it pages for multiple suburbs, and mobile interior detailing pages. The shared copy funnels similar local searches towards the same quote flow. This is a high risk for doorway-page and scaled-content abuse under Google Search spam policies. It is a risk assessment, not a confirmed Google manual action.
- Sampled local pages contained three named, five-star testimonials per page. Several names, vehicles and suburb reviews do not match the reviews visible on Shelby's current public homepage. Until the business can verify each review, these claims should not be served as customer reviews.
- The 74 target suburbs are now grouped on one service-area page. Five local pages remain because the current public Shelby homepage contains relevant customer feedback for Ringwood, Mount Waverley, Clayton, Mulgrave and Glen Waverley. They use no local job photos, as none were supplied with permission.
- The updated homepage and retained local pages use the visible phone number and service-area details. No customer-facing street address is included.
- The homepage and retained local service pages previously used `LocalBusiness` structured data without a public `address`. Google lists `address` as a required property for eligibility for its LocalBusiness rich result. The no-address LocalBusiness markup has been changed to `Organization` with visible business details, while service pages retain `Service` and `areaServed` data. No address has been invented.
- The sampled FAQ and service markup matches visible page text. I found no `Review` or `AggregateRating` schema in the sampled affected pages. On-site testimonials alone are not evidence of Google review-rich-result eligibility.
- `robots.txt` allows crawling. The sitemap previously included the templated local pages. Those routes now have permanent redirects and have been removed from the sitemap.
- Search Console access was not available, so indexing, manual actions, security issues, Core Web Vitals and query performance could not be checked.

## Changes staged

- Added 52 permanent redirects from unverified, templated local pages to the broader service-area page or the matching general service guide.
- Kept five local pages supported by reviews already shown on Shelby's public website.
- Removed redirected URLs from the sitemap.
- Changed homepage and retained local-page organization markup to `Organization` so the structured data does not suggest a public storefront address.
- Kept the 74-suburb target list and suburb evidence register for reviewed future pages.

## Recommendation path

- Keep the Google Business Profile as one service-area business, hide the address if customers are not served there and select up to 20 accurate service areas. The website can list the full customer-facing target area, but do not create a separate Google Business Profile for each suburb.
- Add suburb pages only when the register has verified local evidence and a clear reason for a separate page. Use permissioned photos, accurate job details and real customer questions.
- Publish a steady, reviewed set of practical guides instead of a fixed quota of ten new posts each week. Add first-hand photos, clear aftercare advice, current package details and who prepared each guide.
- Verify the domain in Search Console. Review Manual actions, Security issues, Page indexing and URL Inspection, then submit the cleaned sitemap.
- Keep business name, service details, phone, service area and reviews consistent across the website, Business Profile and genuine partner or trade references. Do not buy reviews or links.
- Google does not offer a switch that guarantees recommendations in AI Overviews, AI Mode or other assistants. The same crawlable, accurate, people-first content and strong third-party corroboration are the useful foundation.
