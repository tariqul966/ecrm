import { 
  Search, 
  Filter, 
  Download,
  Eye,
  Trash2,
  Package
} from 'lucide-react';
import { mockOrders } from '../data/mock';
import { cn } from '../utils/cn';

export const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Orders</h2>
          <p className="text-slate-500">Track and manage customer orders.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium bg-white hover:bg-slate-50 transition-colors">
            <Download size={18} />
            Export Orders
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
            <Package size={18} />
            Create Order
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-wrap gap-4 items-center justify-between">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by order ID or customer name..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
              <Filter size={18} />
              Filter
            </button>
            <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 outline-none">
              <option>Status: All</option>
              <option>Status: Delivered</option>
              <option>Status: Shipped</option>
              <option>Status: Pending</option>
              <option>Status: Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-medium border-b border-slate-200">Order ID</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200">Customer</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200">Date</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200">Status</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200">Total</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200">Items</th>
                <th className="px-6 py-4 font-medium border-b border-slate-200 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">{order.id}</td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{order.customerName}</td>
                  <td className="px-6 py-4 text-slate-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide",
                      order.status === 'delivered' ? "bg-emerald-100 text-emerald-700" :
                      order.status === 'shipped' ? "bg-amber-100 text-amber-700" :
                      order.status === 'pending' ? "bg-blue-100 text-blue-700" :
                      "bg-rose-100 text-rose-700"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {order.items} items
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
