// One entry per service page (/services/<slug>).
// Copy is a DRAFT for the owner to edit. Keep claims accurate: no prices, no 24/7 promises.

export const services = [
  {
    slug: 'ceiling-fans',
    name: 'Ceiling Fan Installation',
    navName: 'Ceiling Fans',
    icon: 'fan',
    short: 'New fans, replacements and fans where there was only a light, including high and vaulted ceilings.',
    intro:
      'Whether you are swapping an old fan, adding one where there is only a light fixture, or hanging a fan on a vaulted ceiling, we install it on a fan-rated box, balance it and make sure the wall controls work the way you expect.',
    includes: [
      'Replacing existing ceiling fans',
      'New fan locations, including new wiring and switches',
      'Fan-rated box upgrades for safe mounting',
      'High, sloped and vaulted ceiling installs',
      'Remote, wall-control and smart-fan setup',
      'Wobble, noise and switch troubleshooting',
    ],
    signs: ['Fan wobbles or hums', 'Light fixture only, no fan', 'Fan or light controls stopped working'],
    faqs: [
      {
        q: 'Can you put a ceiling fan where I only have a light?',
        a: 'Usually, yes. We check the box and framing above it and replace it with a fan-rated box if needed, so the fan is supported safely.',
      },
      {
        q: 'Do I have to buy the fan myself?',
        a: 'Either way works. You can pick your own fan, or we can help you choose one that fits the room and ceiling height.',
      },
    ],
  },
  {
    slug: 'breaker-panel-replacement',
    name: 'Breaker Panel Replacement',
    navName: 'Panel Replacement',
    icon: 'panel',
    short: 'Replace outdated, full or recalled panels with a new, properly labeled breaker panel.',
    intro:
      'Your electrical panel protects every circuit in the home. If it is out of space, tripping often, or a brand known for problems, a panel replacement makes the house safer and gives you room for what you want to add next.',
    includes: [
      'Full breaker panel replacement',
      'Replacement of fuse boxes and problem-brand panels',
      'Subpanels for additions, garages and basements',
      'Permit and inspection coordination',
      'Clear circuit labeling when we are done',
    ],
    signs: ['Breakers trip often', 'No open spaces for new circuits', 'Warm, buzzing or rusty panel', 'Older fuse box'],
    faqs: [
      {
        q: 'How long does a panel replacement take?',
        a: 'Most residential panel swaps are completed in one day. We schedule the power shutoff with you ahead of time.',
      },
      {
        q: 'Do I need a permit?',
        a: 'Yes. Panel replacements require a permit and inspection, and we handle that with your city.',
      },
    ],
  },
  {
    slug: 'electrical-service-upgrades',
    name: 'Electrical Service Upgrades',
    navName: 'Service Upgrades',
    icon: 'meter',
    short: 'Upgrade to 200-amp service for EV chargers, additions, new HVAC or a growing family.',
    intro:
      'If you are adding an EV charger, a hot tub, a finished basement or new HVAC equipment, the home may need more capacity. We size the upgrade for how you live now and what you plan to add.',
    includes: [
      'Service upgrades (for example 100A to 200A)',
      'Meter base and service entrance replacement',
      'Coordination with the utility and the city',
      'Load calculations before you add big equipment',
    ],
    signs: ['Lights dim when equipment starts', 'Planning an EV charger or addition', 'Older, undersized service'],
    faqs: [
      {
        q: 'How do I know if I need a service upgrade?',
        a: 'We do a load calculation based on your existing equipment and what you plan to add. Many homes do not need an upgrade, and we will tell you if yours does not.',
      },
    ],
  },
  {
    slug: 'ev-charger-installation',
    name: 'EV Charger Installation',
    navName: 'EV Chargers',
    icon: 'ev',
    short: 'Level 2 home chargers installed cleanly in your garage or driveway.',
    intro:
      'A Level 2 charger can fill most EVs overnight. We check your panel capacity, run a dedicated circuit and install the charger or outlet where it is most convenient to park.',
    includes: [
      'Hardwired Level 2 chargers (Tesla, ChargePoint, Emporia and more)',
      'NEMA 14-50 outlets for plug-in chargers',
      'Panel capacity check and load management options',
      'Permit and inspection',
    ],
    signs: ['New or upcoming EV', 'Charging too slowly on a 120V outlet'],
    faqs: [
      {
        q: 'Do I need a panel upgrade for an EV charger?',
        a: 'Not always. Many homes can add a charger as-is, and load-management chargers can avoid an upgrade. We check before recommending anything.',
      },
    ],
  },
  {
    slug: 'generators-transfer-switches',
    name: 'Generators & Transfer Switches',
    navName: 'Generators',
    icon: 'generator',
    short: 'Generator inlets, interlocks and transfer switches so you can keep power on safely.',
    intro:
      'When the power goes out, a properly installed generator connection keeps the furnace, fridge and sump pump running without dangerous back-feeding into the grid.',
    includes: [
      'Portable generator inlet boxes and panel interlocks',
      'Manual and automatic transfer switches',
      'Standby generator electrical connections',
      'Selecting which circuits stay powered',
    ],
    signs: ['Frequent outages', 'Sump pump or medical equipment needs backup', 'Running extension cords from a generator'],
    faqs: [
      {
        q: 'Can I just plug my generator into an outlet?',
        a: 'No. That back-feeds the home wiring and can injure utility workers or start a fire. An inlet with an interlock or a transfer switch is the safe way.',
      },
    ],
  },
  {
    slug: 'recessed-lighting',
    name: 'Recessed Lighting',
    navName: 'Recessed Lighting',
    icon: 'light',
    short: 'Clean, evenly spaced LED can lights for kitchens, living rooms and basements.',
    intro:
      'Recessed LED lighting brightens a room without clutter. We lay out the fixtures for even light, fish wiring through finished ceilings when possible and add dimmers to set the mood.',
    includes: [
      'New recessed (can) lighting layouts',
      'Retrofitting older cans to LED',
      'Dimmers and smart switches',
      'Under-cabinet and accent lighting',
    ],
    signs: ['Dark rooms or kitchens', 'Old, yellowed or hot can lights'],
    faqs: [
      {
        q: 'Will you have to cut up my ceiling?',
        a: 'Recessed lights need a hole for each fixture. We plan the wiring route to keep any extra access holes small and few.',
      },
    ],
  },
  {
    slug: 'outlets-gfci',
    name: 'Outlets, Switches & GFCI',
    navName: 'Outlets & GFCI',
    icon: 'outlet',
    short: 'New outlets, USB outlets, GFCI and AFCI protection, and dead outlet repair.',
    intro:
      'From adding outlets where you need them to bringing kitchens, baths and garages up to today\'s GFCI requirements, we make everyday power safer and more convenient.',
    includes: [
      'New outlets and circuits',
      'GFCI protection for kitchens, baths, garages and outdoors',
      'AFCI breakers and outlets',
      'USB and smart outlets and switches',
      'Two-prong to grounded outlet upgrades',
    ],
    signs: ['Dead or loose outlets', 'Two-prong outlets', 'Warm or discolored outlets', 'Not enough outlets'],
    faqs: [
      {
        q: 'Why does my outlet keep tripping?',
        a: 'A tripping GFCI is doing its job, but it can also point to moisture or a faulty device downstream. We find the cause rather than just resetting it.',
      },
    ],
  },
  {
    slug: 'whole-home-surge-protection',
    name: 'Whole-Home Surge Protection',
    navName: 'Surge Protection',
    icon: 'surge',
    short: 'A surge protector at the panel guards appliances, HVAC and electronics.',
    intro:
      'Modern furnaces, appliances and TVs are full of electronics that surges can damage. A whole-home surge protector installed at the panel adds a first line of defense for everything in the house.',
    includes: [
      'Panel-mounted whole-home surge protectors',
      'Recommendations for point-of-use protection',
      'Install during a panel replacement or on its own',
    ],
    signs: ['Recent storms or outages', 'Expensive electronics or appliances', 'New HVAC system'],
    faqs: [
      {
        q: 'Do I still need power strips?',
        a: 'Whole-home protection handles large surges from outside. Point-of-use protectors at sensitive electronics add a second layer and are still a good idea.',
      },
    ],
  },
  {
    slug: 'home-rewiring',
    name: 'Home Rewiring',
    navName: 'Rewiring',
    icon: 'wire',
    short: 'Replace knob-and-tube, aluminum or damaged wiring in older homes.',
    intro:
      'Many homes in older Johnson County neighborhoods still have knob-and-tube, ungrounded or aluminum branch wiring. We plan a rewire in stages that fits your house and keeps wall damage to a minimum.',
    includes: [
      'Knob-and-tube wiring replacement',
      'Aluminum wiring repair and remediation',
      'Whole-home and partial rewires',
      'Grounding upgrades',
    ],
    signs: ['Home built before the 1960s', 'Two-prong outlets throughout', 'Flickering lights', 'Insurance asking about wiring'],
    faqs: [
      {
        q: 'Do I have to move out during a rewire?',
        a: 'Usually not. We work room by room so most of the house keeps power each day.',
      },
    ],
  },
  {
    slug: 'smoke-co-detectors',
    name: 'Smoke & CO Detectors',
    navName: 'Smoke & CO Detectors',
    icon: 'smoke',
    short: 'Hardwired, interconnected smoke and carbon monoxide detectors.',
    intro:
      'Interconnected detectors sound together, so an alarm in the basement wakes you up in the bedroom. We install and replace hardwired smoke and CO detectors throughout the home.',
    includes: [
      'Hardwired smoke and CO detector installs',
      'Replacing expired detectors (typically 10 years old)',
      'Interconnecting detectors throughout the home',
      'Chirping and nuisance alarm troubleshooting',
    ],
    signs: ['Detectors over 10 years old', 'Constant chirping', 'Battery-only detectors', 'Gas appliances without CO alarms'],
    faqs: [
      {
        q: 'How often should detectors be replaced?',
        a: 'Most manufacturers recommend replacing smoke alarms every 10 years. The date is printed on the back of the unit.',
      },
    ],
  },
  {
    slug: 'landscape-lighting',
    name: 'Landscape & Outdoor Lighting',
    navName: 'Outdoor Lighting',
    icon: 'outdoor',
    short: 'Path, patio, security and accent lighting, plus outdoor outlets.',
    intro:
      'Good outdoor lighting makes the home safer and shows it off at night. We install path and accent lighting, security lights and weatherproof outdoor outlets.',
    includes: [
      'Low-voltage landscape lighting',
      'Security and motion lights',
      'Patio, deck and pergola lighting',
      'Weatherproof outdoor outlets',
      'Timers, photocells and smart controls',
    ],
    signs: ['Dark walkways or driveway', 'No outdoor outlets', 'Planning a patio or deck'],
    faqs: [
      {
        q: 'Can outdoor lights run on a timer?',
        a: 'Yes. We can add a timer, a dusk-to-dawn photocell or smart controls you run from your phone.',
      },
    ],
  },
  {
    slug: 'hot-tub-spa-wiring',
    name: 'Hot Tub & Spa Wiring',
    navName: 'Hot Tub Wiring',
    icon: 'spa',
    short: 'Dedicated circuits and GFCI disconnects for hot tubs and swim spas.',
    intro:
      'Hot tubs need a dedicated circuit, GFCI protection and a disconnect in the right place. We wire it to the manufacturer\'s specs so it passes inspection and runs safely.',
    includes: [
      'Dedicated hot tub and swim spa circuits',
      'GFCI spa disconnects',
      'Panel capacity check',
      'Permit and inspection',
    ],
    signs: ['New hot tub on order', 'Spa tripping its GFCI'],
    faqs: [
      {
        q: 'When should I call you about a hot tub?',
        a: 'Before it is delivered, ideally. Send us the model so we can confirm the circuit size and plan the wire route.',
      },
    ],
  },
  {
    slug: 'electrical-inspections',
    name: 'Electrical Safety Inspections',
    navName: 'Inspections',
    icon: 'clipboard',
    short: 'Home safety inspections for buyers, sellers and older homes.',
    intro:
      'Buying, selling or just unsure about the wiring in an older home? We inspect the panel, wiring, outlets and grounding and give you a clear list of what matters and what can wait.',
    includes: [
      'Panel and breaker inspection',
      'Outlet, GFCI and AFCI testing',
      'Grounding and bonding check',
      'Follow-up on home inspection reports',
      'Written summary with priorities',
    ],
    signs: ['Buying or selling a home', 'Home inspector flagged electrical items', 'Older home with unknown wiring'],
    faqs: [
      {
        q: 'Can you fix items from my home inspection report?',
        a: 'Yes. Send us the electrical section of the report and we will quote the repairs.',
      },
    ],
  },
  {
    slug: 'troubleshooting-repairs',
    name: 'Electrical Troubleshooting & Repairs',
    navName: 'Troubleshooting & Repairs',
    icon: 'tools',
    short: 'Flickering lights, tripping breakers, dead circuits and burning smells.',
    intro:
      'When something is not right, we find the root cause instead of guessing. We trace dead circuits, tripping breakers, flickering lights and other problems and fix them safely.',
    includes: [
      'Dead outlets and circuits',
      'Breakers that keep tripping',
      'Flickering or dimming lights',
      'Buzzing, warm or burning-smell problems',
      'Light fixture and switch repairs',
    ],
    signs: ['Burning smell or scorched outlet (turn off the breaker and call)', 'Lights flicker', 'Half the room lost power'],
    faqs: [
      {
        q: 'What should I do if I smell burning?',
        a: 'Turn off the breaker for that area if you can do it safely, unplug what you can and call us. If you see smoke or flame, call 911 first.',
      },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
