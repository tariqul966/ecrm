import { createContext, useContext, useState, ReactNode } from 'react';
import { Customer, Order, Product } from '../types';
import { mockCustomers, mockOrders, mockProducts } from '../data/mock';

interface DataContextType {
  customers: Customer[];
  orders: Order[];
  products: Product[];
  addCustomer: (customer: Omit<Customer, 'id' | 'joinDate'>) => void;
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const addCustomer = (customer: Omit<Customer, 'id' | 'joinDate'>) => {
    const newCustomer: Customer = {
      ...customer,
      id: Math.random().toString(36).substr(2, 9),
      joinDate: new Date().toISOString().split('T')[0],
    };
    setCustomers([newCustomer, ...customers]);
  };

  const addOrder = (order: Omit<Order, 'id' | 'date'>) => {
    const newOrder: Order = {
      ...order,
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
    };
    setOrders([newOrder, ...orders]);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.random().toString(36).substr(2, 9),
    };
    setProducts([newProduct, ...products]);
  };

  return (
    <DataContext.Provider value={{ customers, orders, products, addCustomer, addOrder, addProduct }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
