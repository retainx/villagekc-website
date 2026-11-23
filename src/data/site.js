// Business facts used across every page. Change them here, not in the pages.

export const site = {
  name: 'Village Electric',
  legalName: 'Village Electric',
  url: 'https://villagekc.com',
  email: 'john@villagekc.com',

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
  googleReviewUrl: 'https://g.page/r/CcjUtvcSHJz3EBM/review',

  // Lead form target. Empty = not wired yet (the form shows a notice instead of sending).
  leadEndpoint: 'https://app.villagekc.com/api/public/lead', // estimating app: creates a Website lead + emails the owner
};

export const smsHref = `sms:${site.text.sms}`;
export const telHref = `tel:${site.phone.tel}`;
