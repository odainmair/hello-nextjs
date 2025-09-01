class routes {
  Home = "/"
  Personal = "/"
  Transfers = "/transfers"
  Offers = "/offers"
  Company = "/company"
  News = "/news"
  Blogs = "/blogs"
  Careers = "/careers"
  PrivacyPolicy = "/privacy-and-policy"
  CookiesPolicy = "/cookies-policy"
  Support = "/support"
  TermsOfUse = "/terms-of-use"
  SecurityStatement = "/security-statement"
  TermsAndConditions = "/terms-and-conditions"
  ComplaintEscalationProcess = "/complaint-escalation-process"
  OffersDetails = (slug: string) => `/offers/${slug}`
}
export const Routes = new routes()
