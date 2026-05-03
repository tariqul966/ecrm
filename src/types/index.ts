
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: 'active' | 'inactive' | 'lead';
  totalSpent: number;
  lastOrderDate: string;
  joinDate: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  image: string;
}

export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}
