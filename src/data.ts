import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Tomatoes',
    price: 3.99,
    unit: 'lb',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1000',
    farmer: 'Sarah Johnson',
    farmerImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    available: 50,
    organic: true,
    description: 'Juicy, vine-ripened organic tomatoes perfect for salads and cooking.',
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    price: 4.99,
    unit: 'basket',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=1000',
    farmer: 'Mike Williams',
    farmerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    category: 'Fruits',
    available: 30,
    organic: true,
    description: 'Sweet and juicy strawberries, freshly picked from our local farm.',
  },
  {
    id: '3',
    name: 'Farm Fresh Eggs',
    price: 5.99,
    unit: 'dozen',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=1000',
    farmer: 'Emma Davis',
    farmerImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    category: 'Dairy',
    available: 40,
    organic: true,
    description: 'Free-range eggs from happy, healthy hens.',
  },
  {
    id: '4',
    name: 'Organic Spinach',
    price: 2.99,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=1000',
    farmer: 'John Smith',
    farmerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    available: 25,
    organic: true,
    description: 'Fresh, crisp organic spinach leaves perfect for salads and cooking.',
  },
  {
    id: '5',
    name: 'Rainbow Carrots',
    price: 3.49,
    unit: 'bunch',
    image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=1000',
    farmer: 'Lisa Anderson',
    farmerImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    available: 35,
    organic: true,
    description: 'Colorful organic carrots in purple, orange, and yellow varieties.',
  },
  {
    id: '6',
    name: 'Fresh Bell Peppers',
    price: 1.99,
    unit: 'each',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=1000',
    farmer: 'David Wilson',
    farmerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    category: 'Vegetables',
    available: 60,
    organic: false,
    description: 'Crisp, sweet bell peppers in various colors.',
  },
];