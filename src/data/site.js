// Business facts used across every page. Change them here, not in the pages.

export const site = {
  name: 'Village Electric',
  legalName: 'Village Electric',
  url: 'https://villagekc.com',
  email: 'mike@villagekc.com',

  phone: { display: '(913) 669-7993', tel: '+19136697993' },
  text: { display: '(913) 669-7993', sms: '+19136697993' },

  region: 'Johnson County, Kansas',
  regionShort: 'Johnson County, KS',
  yearsInBusiness: 10,
  warranty: '1-year workmanship warranty',
  licensed: 'Licensed in Johnson County, KS',
  insured: true,

  // Permanent Maps link built from the listing's CID (share link: https://share.google/81pbfxWqoKgScuOh6).
  googleBusinessUrl: 'https://maps.google.com/maps?cid=17842166691526005960',
  googleReviewUrl: '', // TODO(owner): "write a review" link

  // Lead form target. Empty = not wired yet (the form shows a notice instead of sending).
  // Plan: POST to the estimating app so leads land on its Leads page as source "Website".
  leadEndpoint: '',
};

export const smsHref = `sms:${site.text.sms}`;
export const telHref = `tel:${site.phone.tel}`;
