import { 
  Plus, 
  MoreVertical, 
  Edit2, 
  Archive,
  ArrowUpRight
} from 'lucide-react';
import { mockProducts } from '../data/mock';
import { cn } from '../utils/cn';

export const Products = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Products</h2>
          <p className="text-slate-500">Inventory and catalog management.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm group">
            <div className="aspect-square relative overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-slate-600 hover:text-indigo-600">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-slate-600 hover:text-rose-600">
                  <Archive size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-bold text-slate-900 truncate">{product.name}</h3>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-lg font-bold text-slate-900">
                  ${product.price.toFixed(2)}
                </div>
                <div className={cn(
                  "text-xs font-medium px-2 py-1 rounded",
                  product.stock < 20 ? "bg-rose-100 text-rose-700" : "bg-slate-100 text-slate-700"
                )}>
                  {product.stock} in stock
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <p className="text-xs text-slate-400 font-mono uppercase">{product.sku}</p>
                <button className="text-xs font-semibold text-indigo-600 flex items-center gap-1 hover:underline">
                  View Analytics <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Add New Product Card */}
        <button className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-6 text-slate-400 hover:bg-slate-100 hover:border-slate-300 transition-all min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
            <Plus size={24} />
          </div>
          <p className="font-medium">Add New Product</p>
          <p className="text-sm mt-1">Upload images and details</p>
        </button>
      </div>
    </div>
  );
};
