import type { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'dogs', name: 'Dogs', image: '/photo-1598134493179-51332e56807f.png', count: 12 },
  { id: 'cats', name: 'Cats', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', count: 8 },
  { id: 'birds', name: 'Birds', image: 'https://images.unsplash.com/photo-1522926193341-e9fed19c7dfa?auto=format&fit=crop&q=80&w=800', count: 4 },
  { id: 'small-pets', name: 'Small Pets', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&q=80&w=800', count: 6 },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Airline-Approved Pet Travel Carrier',
    price: 54.99,
    rating: 4,
    image: '/photo-1598134493179-51332e56807f.png',
    images: [
      '/photo-1598134493179-51332e56807f.png',
    ],
    category: 'Travel & Carriers',
    description: 'Soft-sided pet carrier approved for airline cabin use. Features mesh panels for ventilation, padded shoulder strap, and collapsible design for easy storage. Interior fleece pad provides comfort. Meets TSA requirements for in-cabin pet travel.',
    highlights: [
      'Dimensions: 18 x 11 x 11 inches',
      'Material: Polyester with Mesh Panels',
      'Weight Limit: Up to 15 lbs'
    ],
    specs: {
      'DIMENSIONS': '18 x 11 x 11 inches',
      'MATERIAL': 'Polyester with Mesh Panels',
      'WEIGHT LIMIT': 'Up to 15 lbs',
      'AIRLINE APPROVED': 'Yes (TSA Compliant)',
      'FEATURES': 'Collapsible, Padded Strap'
    }
  },
  {
    id: '2',
    name: 'Golden Retriever Ball',
    price: 15.99,
    rating: 5,
    image: '/photo-1758543535539-325abf59ef48.png',
    category: 'Dogs',
    discountPrice: 12.79
  },
  {
    id: '3',
    name: 'Cat Scratching Post',
    price: 89.99,
    rating: 5,
    image: '/photo-1545249390-6bdfa286032f.png',
    category: 'Cats'
  },
  {
    id: '4',
    name: 'Premium Dog Food',
    price: 45.00,
    rating: 4,
    image: '/photo-1589924691995-400dc9ecc119.png',
    category: 'Dogs',
    discountPrice: 36.00
  },
  {
    id: '5',
    name: 'Interactive Cat Toy',
    price: 12.50,
    rating: 3,
    image: '/photo-1514888286974-6c03e2ca1dba.png',
    category: 'Cats'
  },
  {
    id: '6',
    name: 'Luxury Pet Bed',
    price: 120.00,
    rating: 5,
    image: '/photo-1541781774459-bb2af2f05b55.png',
    category: 'General',
    discountPrice: 96.00
  }
];