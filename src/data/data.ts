import { Product, Category, Retailer, CategoryType } from "../types";

export const categories: Category[] = [
  {
    id: 'tv',
    name: 'TVs',
    description: 'Smart TVs from Samsung, Sony, LG',
    icon: '📺',
    brands: ['Samsung', 'Sony', 'LG']
  },
  {
    id: 'phone',
    name: 'Smartphones',
    description: 'Latest phones from Apple, Samsung, Google Pixel',
    icon: '📱',
    brands: ['Apple', 'Samsung', 'Google']
  },
  {
    id: 'headphone',
    name: 'Headphones',
    description: 'Audio from boAt, Sony, JBL',
    icon: '🎧',
    brands: ['boAt', 'Sony', 'JBL']
  },
  {
    id: 'watch',
    name: 'Smartwatches',
    description: 'Wearables from Samsung, Apple, boAt',
    icon: '⌚',
    brands: ['Samsung', 'Apple', 'boAt']
  },
  {
    id: 'camera',
    name: 'Cameras',
    description: 'Cameras from Nikon, Canon, Sony',
    icon: '📷',
    brands: ['Nikon', 'Canon', 'Sony']
  },
  {
    id: 'laptop',
    name: 'Laptops',
    description: 'Premium laptops from Lenovo, HP, Dell',
    icon: '💻',
    brands: ['Lenovo', 'HP', 'Dell']
  }
];

export const retailers: Retailer[] = [
  {
    id: 'amazon',
    name: 'Amazon.in',
    logo: 'A',
    color: 'bg-yellow-500'
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    logo: 'F',
    color: 'bg-blue-500'
  },
  {
    id: 'croma',
    name: 'Croma',
    logo: 'C',
    color: 'bg-purple-500'
  },
  {
    id: 'reliance',
    name: 'Reliance Digital',
    logo: 'R',
    color: 'bg-red-500'
  }
];

export const products: Product[] = [
  // TVs
  {
    id: 'tv-samsung-1',
    name: 'Samsung Neo QLED 65" 4K Smart TV',
    brand: 'Samsung',
    category: 'tv',
    description: 'Ultimate 4K experience with Quantum Matrix Technology and Neo Quantum Processor',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 185990, inStock: true, url: 'https://www.amazon.in/Samsung-inches-Ultra-Smart-QA65QN90CAKLXL/dp/B0C7GJ9RRX' },
      { retailer: 'flipkart', price: 183990, inStock: true, url: 'https://www.flipkart.com/samsung-163-cm-65-inch-qled-ultra-hd-4k-smart-tv-2023-qn90c/p/itm1d3b26a1d3664' },
      { retailer: 'croma', price: 186990, inStock: true, url: 'https://www.croma.com/samsung-163-cm-65-inch-qled-4k-ultra-hd-smart-tv-2023-qn90c-neo-qled-tv-/p/268436' },
      { retailer: 'reliance', price: 184990, inStock: false, url: 'https://www.reliancedigital.in/samsung-163-cm-65-inch-neo-qled-4k-smart-tv-qn90c/p/493178239' }
    ]
  },
  {
    id: 'tv-sony-1',
    name: 'Sony Bravia XR OLED 55" 4K HDR TV',
    brand: 'Sony',
    category: 'tv',
    description: 'Cognitive Processor XR provides ultimate realism with deep blacks and natural colors',
    image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 179990, inStock: true, url: 'https://www.amazon.in/Sony-Bravia-inches-Google-XR-55A80L/dp/B0C7QS3XVK' },
      { retailer: 'flipkart', price: 178990, inStock: true, url: 'https://www.flipkart.com/sony-bravia-139-cm-55-inch-oled-ultra-hd-4k-smart-tv-2023-xr-55a80l/p/itmd6292a8ba8cb7' },
      { retailer: 'croma', price: 178990, inStock: false, url: 'https://www.croma.com/sony-bravia-xr-139-cm-55-inch-oled-4k-ultra-hd-smart-google-tv-2023-xr-55a80l-/p/267862' },
      { retailer: 'reliance', price: 176990, inStock: true, url: 'https://www.reliancedigital.in/sony-139-cm-55-inch-oled-4k-google-tv-xr-55a80l/p/493178219' }
    ]
  },
  {
    id: 'tv-lg-1',
    name: 'LG C3 65" 4K OLED evo Smart TV',
    brand: 'LG',
    category: 'tv',
    description: 'Self-lit OLED pixels for perfect blacks and over a billion colors with Dolby Vision IQ',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 189990, inStock: true, url: 'https://www.amazon.in/LG-inches-OLED65C3PSC-Brightness-Booster/dp/B0BWMXZ3W6' },
      { retailer: 'flipkart', price: 189990, inStock: true, url: 'https://www.flipkart.com/lg-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2023-oled65c3psc/p/itmd5db28507d00a' },
      { retailer: 'croma', price: 187990, inStock: true, url: 'https://www.croma.com/lg-65-inches-c3-4k-ultra-hd-smart-oled-evo-tv-oled65c3psc-2023-model-/p/267871' },
      { retailer: 'reliance', price: 185990, inStock: true, url: 'https://www.reliancedigital.in/lg-164-cm-65-inch-oled-evo-c3-4k-smart-tv-2023-model-oled65c3psc/p/493177814' }
    ]
  },
  
  // Phones
  {
    id: 'phone-apple-1',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    category: 'phone',
    description: 'The most advanced iPhone ever with A17 Pro chip, 48MP camera system, and titanium design',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 156900, inStock: true, url: 'https://www.amazon.in/Apple-iPhone-Pro-Max-256GB/dp/B0CHX1W1XY' },
      { retailer: 'flipkart', price: 158900, inStock: true, url: 'https://www.flipkart.com/apple-iphone-15-pro-max-blue-titanium-256-gb/p/itm971725a9ab5bf' },
      { retailer: 'croma', price: 156900, inStock: false, url: 'https://www.croma.com/apple-iphone-15-pro-max-256gb-blue-titanium-/p/272460' },
      { retailer: 'reliance', price: 157900, inStock: true, url: 'https://www.reliancedigital.in/apple-iphone-15-pro-max-256-gb-blue-titanium/p/493177766' }
    ]
  },
  {
    id: 'phone-samsung-1',
    name: 'Samsung Galaxy S23 Ultra 256GB',
    brand: 'Samsung',
    category: 'phone',
    description: 'Ultimate Galaxy experience with built-in S Pen, 200MP camera and dynamic AMOLED display',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 124999, inStock: true, url: 'https://www.amazon.in/Samsung-Galaxy-Ultra-Green-Storage/dp/B0BT9CXXXX' },
      { retailer: 'flipkart', price: 123999, inStock: true, url: 'https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-green-256-gb/p/itm89d6d864a3acd' },
      { retailer: 'croma', price: 124999, inStock: true, url: 'https://www.croma.com/samsung-galaxy-s23-ultra-5g-256gb-storage-12gb-ram-phantom-black-/p/267652' },
      { retailer: 'reliance', price: 122999, inStock: true, url: 'https://www.reliancedigital.in/samsung-galaxy-s23-ultra-5g-256-gb-12-gb-ram-phantom-black-mobile-phone/p/493177714' }
    ]
  },
  {
    id: 'phone-google-1',
    name: 'Google Pixel 7 Pro 128GB',
    brand: 'Google',
    category: 'phone',
    description: "Google's best-in-class camera and pure Android experience with Google Tensor G2 chip",
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 84999, inStock: true, url: 'https://www.amazon.in/Google-Pixel-Pro-Hazel-128GB/dp/B0BDHV1PQG' },
      { retailer: 'flipkart', price: 82999, inStock: true, url: 'https://www.flipkart.com/google-pixel-7-pro-hazel-128-gb/p/itm80d5f2214cd23' },
      { retailer: 'croma', price: 83999, inStock: true, url: 'https://www.croma.com/google-pixel-7-pro-5g-128gb-rom-12gb-ram-gluon-hazel-/p/250127' },
      { retailer: 'reliance', price: 82999, inStock: false, url: 'https://www.reliancedigital.in/google-pixel-7-pro-5g-128-gb-12-gb-ram-hazel-mobile-phone/p/493177387' }
    ]
  },

  // Headphones
  {
    id: 'headphone-boat-1',
    name: 'boAt Rockerz 550 Bluetooth Headphones',
    brand: 'boAt',
    category: 'headphone',
    description: 'Premium over-ear wireless headphones with 50mm drivers and 20 hours playtime',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 1999, inStock: true, url: 'https://www.amazon.in/Rockerz-550-Headphone-Signatures-Bluetooth/dp/B0856HNMR7' },
      { retailer: 'flipkart', price: 1899, inStock: true, url: 'https://www.flipkart.com/boat-rockerz-550-bluetooth-headset/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 2099, inStock: true, url: 'https://www.croma.com/boat-rockerz-550-bluetooth-headphones-with-mic-black-/p/231092' },
      { retailer: 'reliance', price: 1999, inStock: true, url: 'https://www.reliancedigital.in/boat-rockerz-550-over-ear-bluetooth-headphones-black/p/492338431' }
    ]
  },
  {
    id: 'headphone-sony-1',
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'headphone',
    description: 'Industry-leading noise cancellation with 8 microphones, 30-hour battery and crystal clear calls',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 29990, inStock: true, url: 'https://www.amazon.in/Sony-WH-1000XM5-Cancelling-Headphones-Black/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 27990, inStock: true, url: 'https://www.flipkart.com/sony-wh-1000xm5-noise-cancelling-headphones/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 28990, inStock: true, url: 'https://www.croma.com/sony-wh-1000xm5-noise-cancelling-headphones-black-/p/231092' },
      { retailer: 'reliance', price: 29990, inStock: false, url: 'https://www.reliancedigital.in/sony-wh-1000xm5-noise-cancelling-headphones-black/p/492338431' }
    ]
  },
  {
    id: 'headphone-jbl-1',
    name: 'JBL Tour One Wireless Headphones',
    brand: 'JBL',
    category: 'headphone',
    description: 'Premium noise cancellation with Hi-Res certified sound and adaptive ambient aware features',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 24999, inStock: true, url: 'https://www.amazon.in/JBL-Tour-One-Wireless-Headphones/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 23999, inStock: true, url: 'https://www.flipkart.com/jbl-tour-one-wireless-headphones/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 24499, inStock: true, url: 'https://www.croma.com/jbl-tour-one-wireless-headphones-black-/p/231092' },
      { retailer: 'reliance', price: 24999, inStock: true, url: 'https://www.reliancedigital.in/jbl-tour-one-wireless-headphones-black/p/492338431' }
    ]
  },

  // Watches
  {
    id: 'watch-samsung-1',
    name: 'Samsung Galaxy Watch 6 Classic',
    brand: 'Samsung',
    category: 'watch',
    description: 'Premium smartwatch with rotating bezel, advanced health tracking and Wear OS powered by Samsung',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 39999, inStock: true, url: 'https://www.amazon.in/Samsung-Galaxy-Watch-Classic/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 38999, inStock: true, url: 'https://www.flipkart.com/samsung-galaxy-watch-6-classic/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 39999, inStock: false, url: 'https://www.croma.com/samsung-galaxy-watch-6-classic-black-/p/231092' },
      { retailer: 'reliance', price: 38499, inStock: true, url: 'https://www.reliancedigital.in/samsung-galaxy-watch-6-classic-black/p/492338431' }
    ]
  },
  {
    id: 'watch-apple-1',
    name: 'Apple Watch Series 9 GPS + Cellular',
    brand: 'Apple',
    category: 'watch',
    description: 'Advanced health features with always-on Retina display and double-tap gesture',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 49900, inStock: true, url: 'https://www.amazon.in/Apple-Watch-Series-9-GPS/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 49900, inStock: true, url: 'https://www.flipkart.com/apple-watch-series-9-gps/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 48900, inStock: true, url: 'https://www.croma.com/apple-watch-series-9-gps-black-/p/231092' },
      { retailer: 'reliance', price: 47900, inStock: true, url: 'https://www.reliancedigital.in/apple-watch-series-9-gps-black/p/492338431' }
    ]
  },
  {
    id: 'watch-boat-1',
    name: 'boAt Wave Call Smart Watch',
    brand: 'boAt',
    category: 'watch',
    description: 'HD display with Bluetooth calling, 7-day battery life and health monitoring features',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 1499, inStock: true, url: 'https://www.amazon.in/boAt-Wave-Call-Smart-Watch/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 1399, inStock: true, url: 'https://www.flipkart.com/boat-wave-call-smart-watch/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 1599, inStock: true, url: 'https://www.croma.com/boat-wave-call-smart-watch-black-/p/231092' },
      { retailer: 'reliance', price: 1499, inStock: false, url: 'https://www.reliancedigital.in/boat-wave-call-smart-watch-black/p/492338431' }
    ]
  },

  // Cameras
  {
    id: 'camera-nikon-1',
    name: 'Nikon Z8 Mirrorless Camera',
    brand: 'Nikon',
    category: 'camera',
    description: 'Full-frame 45.7MP stacked CMOS sensor with 8K video and EXPEED 7 processor',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 339995, inStock: true, url: 'https://www.amazon.in/Nikon-Z8-Mirrorless-Camera/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 338995, inStock: false, url: 'https://www.flipkart.com/nikon-z8-mirrorless-camera/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 339995, inStock: true, url: 'https://www.croma.com/nikon-z8-mirrorless-camera-black-/p/231092' },
      { retailer: 'reliance', price: 337995, inStock: true, url: 'https://www.reliancedigital.in/nikon-z8-mirrorless-camera-black/p/492338431' }
    ]
  },
  {
    id: 'camera-canon-1',
    name: 'Canon EOS R5 Mirrorless Camera',
    brand: 'Canon',
    category: 'camera',
    description: '45MP full-frame sensor with 8K RAW video and in-body image stabilization',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 349990, inStock: true, url: 'https://www.amazon.in/Canon-EOS-R5-Mirrorless-Camera/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 348990, inStock: true, url: 'https://www.flipkart.com/canon-eos-r5-mirrorless-camera/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 349990, inStock: true, url: 'https://www.croma.com/canon-eos-r5-mirrorless-camera-black-/p/231092' },
      { retailer: 'reliance', price: 347990, inStock: false, url: 'https://www.reliancedigital.in/canon-eos-r5-mirrorless-camera-black/p/492338431' }
    ]
  },
  {
    id: 'camera-sony-1',
    name: 'Sony Alpha 7 IV Full-frame Camera',
    brand: 'Sony',
    category: 'camera',
    description: '33MP Exmor R sensor with advanced autofocus and 10-bit 4K recording',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 241990, inStock: true, url: 'https://www.amazon.in/Sony-Alpha-7-IV-Camera/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 239990, inStock: true, url: 'https://www.flipkart.com/sony-alpha-7-iv-camera/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 241990, inStock: false, url: 'https://www.croma.com/sony-alpha-7-iv-camera-black-/p/231092' },
      { retailer: 'reliance', price: 238990, inStock: true, url: 'https://www.reliancedigital.in/sony-alpha-7-iv-camera-black/p/492338431' }
    ]
  },

  // Laptops
  {
    id: 'laptop-lenovo-1',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    category: 'laptop',
    description: 'Ultra-light business laptop with 13th Gen Intel Core i7, 16GB RAM and 1TB SSD',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 179990, inStock: true, url: 'https://www.amazon.in/Lenovo-ThinkPad-Carbon-Gen-11/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 178990, inStock: false, url: 'https://www.flipkart.com/lenovo-thinkpad-x1-carbon-gen-11/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 179990, inStock: true, url: 'https://www.croma.com/lenovo-thinkpad-x1-carbon-gen-11-black-/p/231092' },
      { retailer: 'reliance', price: 178990, inStock: true, url: 'https://www.reliancedigital.in/lenovo-thinkpad-x1-carbon-gen-11-black/p/492338431' }
    ]
  },
  {
    id: 'laptop-hp-1',
    name: 'HP Spectre x360 14 2-in-1 Laptop',
    brand: 'HP',
    category: 'laptop',
    description: 'Premium convertible laptop with OLED display, 13th Gen Intel Core i7 and Intel Arc Graphics',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 169990, inStock: true, url: 'https://www.amazon.in/HP-Spectre-x360-14-Laptop/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 167990, inStock: true, url: 'https://www.flipkart.com/hp-spectre-x360-14-2-in-1-laptop/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 168990, inStock: true, url: 'https://www.croma.com/hp-spectre-x360-14-2-in-1-laptop-black-/p/231092' },
      { retailer: 'reliance', price: 166990, inStock: false, url: 'https://www.reliancedigital.in/hp-spectre-x360-14-2-in-1-laptop-black/p/492338431' }
    ]
  },
  {
    id: 'laptop-dell-1',
    name: 'Dell XPS 15 Laptop',
    brand: 'Dell',
    category: 'laptop',
    description: 'Powerful creator laptop with 13th Gen Intel Core i9, RTX 4070, and 4K OLED touch display',
    image: 'https://images.unsplash.com/photo-1612831981234-1c1c1c1c1c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prices: [
      { retailer: 'amazon', price: 249990, inStock: true, url: 'https://www.amazon.in/Dell-XPS-15-Laptop/dp/B0B5F1F1F1' },
      { retailer: 'flipkart', price: 248990, inStock: true, url: 'https://www.flipkart.com/dell-xps-15-laptop/p/itm8b0e0289d0683' },
      { retailer: 'croma', price: 249990, inStock: false, url: 'https://www.croma.com/dell-xps-15-laptop-black-/p/231092' },
      { retailer: 'reliance', price: 247990, inStock: true, url: 'https://www.reliancedigital.in/dell-xps-15-laptop-black/p/492338431' }
    ]
  }
];

export const getProductsByCategory = (category: CategoryType): Product[] => {
  return products.filter(product => product.category === category);
};

export const getBestPrice = (productId: string) => {
  const product = products.find(p => p.id === productId);
  if (!product) return null;
  
  const inStockPrices = product.prices.filter(p => p.inStock);
  if (inStockPrices.length === 0) return null;
  
  return inStockPrices.reduce((lowest, current) => 
    current.price < lowest.price ? current : lowest, inStockPrices[0]);
};
