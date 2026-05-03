import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Mail,
  Smartphone
} from 'lucide-react';

export const Settings = () => {
  const sections = [
    {
      title: 'Profile Settings',
      description: 'Manage your public profile and account details.',
      icon: User,
      items: ['Personal Information', 'Work Profile', 'Social Accounts']
    },
    {
      title: 'Notifications',
      description: 'Configure how you receive alerts and updates.',
      icon: Bell,
      items: ['Email Notifications', 'Push Notifications', 'SMS Alerts']
    },
    {
      title: 'Security',
      description: 'Keep your account secure and private.',
      icon: Shield,
      items: ['Password', 'Two-Factor Authentication', 'Login History']
    },
    {
      title: 'Billing',
      description: 'Manage your subscription and payment methods.',
      icon: CreditCard,
      items: ['Current Plan', 'Payment Methods', 'Billing History']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Settings</h2>
        <p className="text-slate-500">Manage your account and application preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <section.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{section.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{section.description}</p>
                <div className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <button key={item} className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Need help with your account?</h3>
          <p className="text-indigo-100 opacity-90">Our support team is available 24/7 to help you with any issues.</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-bold hover:bg-indigo-50 transition-colors flex items-center gap-2">
            <Mail size={18} />
            Email Support
          </button>
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-400 transition-colors flex items-center gap-2 border border-indigo-400">
            <Smartphone size={18} />
            Chat Now
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Globe size={16} />
          Language: English (US)
        </div>
        <div className="text-slate-400 text-sm">
          v2.4.0 (Enterprise Edition)
        </div>
      </div>
    </div>
  );
};
