// One entry per service-area page (/service-areas/<slug>).
// `licensed`: the city is covered by the owner's Johnson County license list; pages for the
// others don't claim a license there.
// `content` is null until the owner supplies local copy; the page shows a generic draft meanwhile.
// TODO(owner): local content per city (neighborhoods, typical home age, common issues, ZIP codes).

export const areas = [
  { slug: 'overland-park-ks', city: 'Overland Park', state: 'KS', licensed: true, content: null },
  { slug: 'olathe-ks', city: 'Olathe', state: 'KS', licensed: false, content: null },
  { slug: 'leawood-ks', city: 'Leawood', state: 'KS', licensed: true, content: null },
  { slug: 'prairie-village-ks', city: 'Prairie Village', state: 'KS', licensed: true, content: null },
  { slug: 'lenexa-ks', city: 'Lenexa', state: 'KS', licensed: true, content: null },
  { slug: 'shawnee-ks', city: 'Shawnee', state: 'KS', licensed: true, content: null },
  { slug: 'mission-ks', city: 'Mission', state: 'KS', licensed: true, content: null },
  { slug: 'roeland-park-ks', city: 'Roeland Park', state: 'KS', licensed: true, content: null },
  { slug: 'kansas-city-ks', city: 'Kansas City', state: 'KS', licensed: false, content: null },
  { slug: 'kansas-city-mo', city: 'Kansas City', state: 'MO', licensed: false, content: null },
];

export const placeName = (a) => `${a.city}, ${a.state}`;

// "Overland Park, Olathe, ... and Kansas City, MO" for meta descriptions.
export const areaListText = (() => {
  const names = areas.map((a) => (a.city === 'Kansas City' ? placeName(a) : a.city));
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;
})();
