import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  Filter
} from 'lucide-react';

const revenueData = [
  { month: 'Jan', current: 4000, previous: 2400 },
  { month: 'Feb', current: 3000, previous: 1398 },
  { month: 'Mar', current: 2000, previous: 9800 },
  { month: 'Apr', current: 2780, previous: 3908 },
  { month: 'May', current: 1890, previous: 4800 },
  { month: 'Jun', current: 2390, previous: 3800 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Home Decor', value: 300 },
  { name: 'Fashion', value: 300 },
  { name: 'Beauty', value: 200 },
];

const COLORS = ['#4f46e5', '#818cf8', '#c7d2fe', '#e0e7ff'];

export const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Analytics & Insights</h2>
          <p className="text-slate-500">In-depth performance metrics for your store.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Calendar size={18} />
            Mar 1, 2024 - Mar 31, 2024
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
            <Filter size={18} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">Revenue Comparison</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                <span className="text-xs text-slate-500">Current Year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <span className="text-xs text-slate-500">Previous Year</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip />
                <Line type="monotone" dataKey="current" stroke="#4f46e5" strokeWidth={2} dot={{fill: '#4f46e5'}} />
                <Line type="monotone" dataKey="previous" stroke="#e2e8f0" strokeWidth={2} dot={{fill: '#e2e8f0'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6">Sales by Category</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {categoryData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[index]}}></div>
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', trend: 'up' },
          { label: 'Bounce Rate', value: '42.5%', change: '-2.1%', trend: 'up' },
          { label: 'Avg. Session', value: '4m 32s', change: '+12s', trend: 'up' },
          { label: 'Customer LTV', value: '$450', change: '+$15', trend: 'up' },
        ].map((metric) => (
          <div key={metric.label} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-sm text-slate-500 font-medium">{metric.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h4 className="text-xl font-bold text-slate-900">{metric.value}</h4>
              <div className={`flex items-center gap-0.5 text-xs font-bold ${metric.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {metric.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
