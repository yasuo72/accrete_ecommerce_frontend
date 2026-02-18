// ─── PRODUCTS ───────────────────────────────────────────────
export const products = [
  { id: 1, name: 'HAVIT HV-G92 Gamepad', price: 120, originalPrice: 160, discount: 40, rating: 4.5, reviews: 88, image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop', category: 'Gaming', isNew: false, badge: 'sale', colors: ['#000', '#fff', '#f00'] },
  { id: 2, name: 'AK-900 Wired Keyboard', price: 960, originalPrice: 1160, discount: 35, rating: 4.5, reviews: 75, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', category: 'Computers', isNew: false, badge: 'sale', colors: ['#000', '#fff'] },
  { id: 3, name: 'IPS LCD Gaming Monitor', price: 370, originalPrice: 400, discount: 30, rating: 4.5, reviews: 99, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop', category: 'Electronics', isNew: false, badge: 'sale', colors: ['#000'] },
  { id: 4, name: 'S-Series Comfort Chair', price: 375, originalPrice: 400, discount: 25, rating: 4.5, reviews: 99, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop', category: 'Home & Lifestyle', isNew: false, badge: null, colors: ['#8B4513', '#000', '#fff'] },
  { id: 5, name: 'The north coat', price: 260, originalPrice: 360, discount: 28, rating: 5, reviews: 65, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&h=300&fit=crop', category: "Woman's Fashion", isNew: false, badge: null, colors: ['#8B4513', '#000'] },
  { id: 6, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, discount: 17, rating: 4.5, reviews: 55, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop', category: "Woman's Fashion", isNew: false, badge: null, colors: ['#8B4513'] },
  { id: 7, name: 'RGB liquid CPU Cooler', price: 160, originalPrice: 170, discount: 6, rating: 4.5, reviews: 55, image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=300&h=300&fit=crop', category: 'Electronics', isNew: false, badge: null, colors: ['#000', '#fff', '#0000ff'] },
  { id: 8, name: 'Small BookShelf', price: 360, originalPrice: null, discount: 0, rating: 5, reviews: 65, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', category: 'Home & Lifestyle', isNew: false, badge: null, colors: ['#8B4513'] },
  { id: 9, name: 'Breed Dry Dog Food', price: 100, originalPrice: 120, discount: 17, rating: 3.5, reviews: 35, image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=300&h=300&fit=crop', category: "Groceries & Pets", isNew: false, badge: null, colors: [] },
  { id: 10, name: 'CANON EOS DSLR Camera', price: 360, originalPrice: 380, discount: 5, rating: 4, reviews: 95, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop', category: 'Electronics', isNew: false, badge: null, colors: ['#000'] },
  { id: 11, name: 'ASUS FHD Gaming Laptop', price: 700, originalPrice: 960, discount: 27, rating: 5, reviews: 325, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop', category: 'Computers', isNew: false, badge: null, colors: ['#000', '#808080'] },
  { id: 12, name: 'Cosmetic Dermatology Net', price: 30, originalPrice: 50, discount: 40, rating: 3.5, reviews: 99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop', category: 'Health & Beauty', isNew: false, badge: null, colors: [] },
  { id: 13, name: 'Kids Electric Car', price: 960, originalPrice: 1160, discount: 17, rating: 5, reviews: 65, image: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=300&h=300&fit=crop', category: "Baby's & Toys", isNew: true, badge: 'new', colors: ['#f00', '#000', '#fff'] },
  { id: 14, name: 'Jr. Zoom Soccer Cleats', price: 1160, originalPrice: 1200, discount: 3, rating: 4.5, reviews: 35, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', category: 'Sports & Outdoor', isNew: false, badge: null, colors: ['#ff0', '#000'] },
  { id: 15, name: 'GP11 Shooter USB Gamepad', price: 660, originalPrice: 700, discount: 6, rating: 4.5, reviews: 55, image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=300&h=300&fit=crop', category: 'Gaming', isNew: false, badge: null, colors: ['#000', '#fff', '#f00'] },
  { id: 16, name: 'Quilted Satin Jacket', price: 660, originalPrice: 800, discount: 18, rating: 4.5, reviews: 75, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop', category: "Men's Fashion", isNew: false, badge: null, colors: ['#006400', '#000', '#800080'] },
  { id: 17, name: 'PlayStation 5', price: 499, originalPrice: 599, discount: 17, rating: 5, reviews: 280, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop', category: 'Gaming', isNew: true, badge: 'new', colors: ['#fff'] },
  { id: 18, name: 'JBL Boombox Speaker', price: 349, originalPrice: 420, discount: 17, rating: 4.5, reviews: 120, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', category: 'Electronics', isNew: false, badge: null, colors: ['#000', '#f00'] },
  { id: 19, name: 'iPhone 14 Pro', price: 999, originalPrice: 1099, discount: 9, rating: 5, reviews: 560, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300&h=300&fit=crop', category: 'Phones', isNew: true, badge: 'new', colors: ['#8B7355', '#000', '#fff', '#8B008B'] },
  { id: 20, name: 'SmartWatch Series 8', price: 299, originalPrice: 350, discount: 15, rating: 4.5, reviews: 88, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop', category: 'SmartWatch', isNew: false, badge: null, colors: ['#000', '#C0C0C0', '#ff0'] },
]

// ─── CATEGORIES ─────────────────────────────────────────────
export const categories = [
  { id: 1, name: 'Phones', icon: '📱' },
  { id: 2, name: 'Computers', icon: '💻' },
  { id: 3, name: 'SmartWatch', icon: '⌚' },
  { id: 4, name: 'Camera', icon: '📷' },
  { id: 5, name: 'HeadPhones', icon: '🎧' },
  { id: 6, name: 'Gaming', icon: '🎮' },
]

// ─── FLASH SALE PRODUCTS ────────────────────────────────────
export const flashSaleProducts = products.slice(0, 5)

// ─── BEST SELLING ───────────────────────────────────────────
export const bestSellingProducts = products.slice(4, 8)

// ─── EXPLORE PRODUCTS ───────────────────────────────────────
export const exploreProducts = products.slice(8, 16)

// ─── TEAM MEMBERS ───────────────────────────────────────────
export const teamMembers = [
  { id: 1, name: 'Tom Cruise', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
  { id: 2, name: 'Emma Watson', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face' },
  { id: 3, name: 'Will Smith', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
  { id: 4, name: 'Sarah Johnson', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' },
  { id: 5, name: 'Mike Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
]

// ─── STATS ──────────────────────────────────────────────────
export const stats = [
  { id: 1, value: '10.5k', label: 'Sellers active our site', icon: '🏪' },
  { id: 2, value: '33k', label: 'Monthly Product Sale', icon: '💰' },
  { id: 3, value: '45.5k', label: 'Customer active in our site', icon: '🛍️' },
  { id: 4, value: '25k', label: 'Annual gross sale in our site', icon: '💼' },
]

// ─── REVIEWS (per product) ──────────────────────────────────
export const reviews = [
  { id: 1, productId: 1, author: 'John D.', rating: 5, title: 'Excellent product!', body: 'Really great quality, very happy with my purchase.', date: 'Jan 15, 2026', verified: true },
  { id: 2, productId: 1, author: 'Sarah M.', rating: 4, title: 'Good but pricey', body: 'Works well but slightly overpriced for what it is.', date: 'Jan 10, 2026', verified: true },
]

// ─── ORDERS ─────────────────────────────────────────────────
export const sampleOrders = [
  { id: 'ORD-123456', date: 'Feb 18, 2026', status: 'Delivered', total: 1750, items: [{ name: 'LCD Monitor', qty: 1, price: 650, image: products[2].image }, { name: 'H1 Gamepad', qty: 2, price: 550, image: products[0].image }] },
  { id: 'ORD-123455', date: 'Feb 10, 2026', status: 'Shipped', total: 960, items: [{ name: 'Kids Electric Car', qty: 1, price: 960, image: products[12].image }] },
  { id: 'ORD-123454', date: 'Jan 28, 2026', status: 'Processing', total: 299, items: [{ name: 'SmartWatch', qty: 1, price: 299, image: products[19].image }] },
  { id: 'ORD-123453', date: 'Jan 15, 2026', status: 'Cancelled', total: 700, items: [{ name: 'Gaming Laptop', qty: 1, price: 700, image: products[10].image }] },
]

// ─── ADDRESSES ──────────────────────────────────────────────
export const sampleAddresses = [
  { id: 1, type: 'Home', name: 'Md Rimel', phone: '+88015-88888-9999', address: 'Kingston, 5236', city: 'Dhaka', country: 'Bangladesh', isDefault: true },
  { id: 2, type: 'Work', name: 'Md Rimel', phone: '+88015-11111-2222', address: '111 Bijoy sarani', city: 'Dhaka', country: 'Bangladesh', isDefault: false },
]
