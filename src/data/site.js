// Business facts used across every page. Change them here, not in the pages.
// TODO(owner): replace the placeholder phone numbers and add the Google Business link.

export const site = {
  name: 'Village Electric',
  legalName: 'Village Electric',
  url: 'https://villagekc.com',
  email: 'mike@villagekc.com',

  // Placeholder (555) numbers until the real ones are confirmed.
  phone: { display: '(913) 555-0100', tel: '+19135550100' },
  text: { display: '(913) 555-0100', sms: '+19135550100' },

  region: 'Johnson County, Kansas',
  regionShort: 'Johnson County, KS',
  yearsInBusiness: 10,
  warranty: '1-year workmanship warranty',
  licensed: 'Licensed in Johnson County, KS',
  insured: true,

  googleBusinessUrl: '', // TODO(owner): Google Business Profile link
  googleReviewUrl: '',   // TODO(owner): "write a review" link

  // Lead form target. Empty = not wired yet (the form shows a notice instead of sending).
  // Plan: POST to the estimating app so leads land on its Leads page as source "Website".
  leadEndpoint: '',

  // Shows the floating design switcher used to compare palettes and hero layouts.
  // Turn off before launch.
  showDesignSwitcher: true,
};

export const smsHref = `sms:${site.text.sms}`;
export const telHref = `tel:${site.phone.tel}`;
