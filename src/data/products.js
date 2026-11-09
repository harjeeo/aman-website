// Placeholder catalog data — swap in real product names, prices & photography.
export const exploreTabs = ['Best Seller', 'New In', 'Bundles']

export const exploreProducts = {
  'Best Seller': [
    {
      id: 'bs-1',
      name: 'Everyday Hoodie',
      price: '$74',
      variant: 'hoodie',
      description: 'Brushed organic cotton fleece with a relaxed fit, built to move with you and soften with every wash.',
    },
    {
      id: 'bs-2',
      name: 'Classic Crew Tee',
      price: '$36',
      variant: 'tee',
      description: 'Heavyweight combed cotton in a clean, classic cut — the tee you reach for every single day.',
    },
    {
      id: 'bs-3',
      name: 'Canvas Tote',
      price: '$28',
      variant: 'tote',
      description: 'Durable waxed canvas with reinforced stitching, roomy enough for a full day of errands.',
    },
    {
      id: 'bs-4',
      name: 'Low-Top Sneaker',
      price: '$96',
      variant: 'sneaker',
      description: 'A minimal low-top silhouette in full-grain leather, finished with a cushioned sole for all-day wear.',
    },
  ],
  'New In': [
    {
      id: 'ni-1',
      name: 'Wool Overshirt',
      price: '$118',
      variant: 'jacket',
      description: 'A mid-weight wool overshirt cut for layering, with a soft brushed finish and horn buttons.',
    },
    {
      id: 'ni-2',
      name: 'Midi Slip Dress',
      price: '$88',
      variant: 'dress',
      description: 'Bias-cut recycled satin that skims the body, finished with adjustable straps for an easy fit.',
    },
    {
      id: 'ni-3',
      name: 'Ribbed Beanie',
      price: '$24',
      variant: 'cap',
      description: 'A snug ribbed knit in responsibly sourced wool, made to layer under any hood or hat.',
    },
    {
      id: 'ni-4',
      name: 'Wide-Leg Joggers',
      price: '$66',
      variant: 'joggers',
      description: 'Relaxed wide-leg joggers in brushed fleece with an elastic waist and tapered ankle cuffs.',
    },
  ],
  Bundles: [
    {
      id: 'bd-1',
      name: 'The Weekend Set',
      price: '$142',
      variant: 'hoodie',
      description: 'Our Everyday Hoodie paired with matching joggers — the complete off-duty uniform, bundled to save.',
    },
    {
      id: 'bd-2',
      name: 'The Layer Kit',
      price: '$168',
      variant: 'jacket',
      description: 'Overshirt, tee, and beanie bundled together for effortless layering through every season.',
    },
    {
      id: 'bd-3',
      name: 'The Essentials Duo',
      price: '$96',
      variant: 'tee',
      description: 'Two of our best-selling crew tees in rotating colorways — the foundation of any wardrobe.',
    },
    {
      id: 'bd-4',
      name: 'The Accessory Edit',
      price: '$58',
      variant: 'scarf',
      description: 'A soft wool scarf and ribbed beanie set, designed to mix and match with everything else you own.',
    },
  ],
}

export const allProducts = Object.entries(exploreProducts).flatMap(([category, items]) =>
  items.map((item) => ({ ...item, category })),
)
