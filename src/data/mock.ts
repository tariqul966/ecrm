import { Customer, Order, Product } from '../types';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    status: 'active',
    totalSpent: 1250.50,
    lastOrderDate: '2024-03-15',
    joinDate: '2023-10-01',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    phone: '+1 (555) 987-6543',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    status: 'active',
    totalSpent: 890.20,
    lastOrderDate: '2024-03-10',
    joinDate: '2023-11-15',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    email: 'emma.w@example.com',
    phone: '+1 (555) 234-5678',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    status: 'lead',
    totalSpent: 0,
    lastOrderDate: '-',
    joinDate: '2024-03-01',
  },
  {
    id: '4',
    name: 'James Rodriguez',
    email: 'james.r@example.com',
    phone: '+1 (555) 876-5432',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    status: 'inactive',
    totalSpent: 450.00,
    lastOrderDate: '2023-12-20',
    joinDate: '2023-05-10',
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customerId: '1',
    customerName: 'Sarah Johnson',
    date: '2024-03-15',
    status: 'delivered',
    total: 245.00,
    items: 3,
  },
  {
    id: 'ORD-002',
    customerId: '2',
    customerName: 'Michael Chen',
    date: '2024-03-10',
    status: 'shipped',
    total: 120.50,
    items: 1,
  },
  {
    id: 'ORD-003',
    customerId: '1',
    customerName: 'Sarah Johnson',
    date: '2024-03-05',
    status: 'delivered',
    total: 85.00,
    items: 2,
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    sku: 'HW-1234',
    price: 199.99,
    stock: 45,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    name: 'Minimalist Wall Clock',
    sku: 'HD-5678',
    price: 45.00,
    stock: 12,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=200&h=200&fit=crop',
  },
];
