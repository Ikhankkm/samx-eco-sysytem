import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  X, 
  Box, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  Eye,
  KeyRound,
  Sparkles
} from 'lucide-react';
import { ProductItem, ProductCategory, ServiceItem, ServiceDomain } from '../types';
import { SAMX_PRODUCTS, OFFICIAL_SERVICES } from '../data/samxData';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: ProductItem[];
  services: ServiceItem[];
  onUpdateProducts: (products: ProductItem[]) => void;
  onUpdateServices: (services: ServiceItem[]) => void;
  onResetDefaults: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  products,
  services,
  onUpdateProducts,
  onUpdateServices,
  onResetDefaults,
}) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('samx_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products');

  // New Product Form State
  const [isAddingProduct, setIsAddingProduct] = useState<boolean>(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState<ProductItem>({
    id: '',
    slug: '',
    name: '',
    category: 'Business Systems',
    tagline: '',
    description: '',
    problem: '',
    solution: '',
    features: [''],
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '< 20ms' },
      { label: 'Efficiency', value: '+45%' },
    ],
    status: 'ACTIVE',
    techStack: ['TypeScript', 'Node.js', 'React'],
    integrations: ['REST APIs', 'Webhooks'],
    previewType: 'core_system',
  });

  // New Service Form State
  const [isAddingService, setIsAddingService] = useState<boolean>(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceForm, setServiceForm] = useState<ServiceItem>({
    id: '',
    domain: 'software',
    domainName: 'Software Engineering & Enterprise Platforms',
    name: '',
    description: '',
    capabilities: [''],
    clientOutcome: '',
    architectureTier: 'Tier 1 Core Engineering',
    status: 'ENTERPRISE_READY',
  });

  // Success Notification
  const [notice, setNotice] = useState<string>('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master admin passcode for SAMX
    if (passcode === 'samx2026' || passcode === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('samx_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Use "samx2026" to access.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('samx_admin_auth');
    setPasscode('');
  };

  const triggerNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(''), 3500);
  };

  // --- PRODUCT HANDLERS ---
  const handleStartAddProduct = () => {
    setEditingProductId(null);
    setProductForm({
      id: `samx-prod-${Date.now()}`,
      slug: `product-${Date.now()}`,
      name: '',
      category: 'Business Systems',
      tagline: '',
      description: '',
      problem: '',
      solution: '',
      features: ['Automated Data Reconciliation', 'High-throughput Event Processing'],
      metrics: [
        { label: 'Efficiency Gain', value: '+60%' },
        { label: 'Latency SLA', value: '< 30ms' },
        { label: 'Uptime', value: '99.98%' },
      ],
      status: 'ACTIVE',
      techStack: ['TypeScript', 'Tailwind', 'PostgreSQL'],
      integrations: ['ZATCA e-Invoicing', 'REST Webhooks'],
      previewType: 'core_system',
    });
    setIsAddingProduct(true);
  };

  const handleEditProduct = (prod: ProductItem) => {
    setEditingProductId(prod.id);
    setProductForm({ ...prod });
    setIsAddingProduct(true);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      onUpdateProducts(updated);
      triggerNotice('Product deleted successfully.');
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name.trim() || !productForm.description.trim()) {
      alert('Please fill out Product Name and Description.');
      return;
    }

    let updatedList: ProductItem[];
    if (editingProductId) {
      updatedList = products.map(p => p.id === editingProductId ? productForm : p);
      triggerNotice(`Product "${productForm.name}" updated successfully!`);
    } else {
      const newProd = {
        ...productForm,
        id: productForm.id || `samx-prod-${Date.now()}`,
        slug: productForm.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      };
      updatedList = [newProd, ...products];
      triggerNotice(`New product "${productForm.name}" added successfully!`);
    }

    onUpdateProducts(updatedList);
    setIsAddingProduct(false);
    setEditingProductId(null);
  };

  // --- SERVICE HANDLERS ---
  const handleStartAddService = () => {
    setEditingServiceId(null);
    setServiceForm({
      id: `samx-serv-${Date.now()}`,
      domain: 'software',
      domainName: 'Software Engineering',
      name: '',
      description: '',
      capabilities: ['Sub-second latency', 'Cloud Native Resilience'],
      clientOutcome: 'Eliminates 70% manual latency with enterprise-grade stability.',
      architectureTier: 'Tier 1 Core Engineering',
      status: 'ENTERPRISE_READY',
    });
    setIsAddingService(true);
  };

  const handleEditService = (serv: ServiceItem) => {
    setEditingServiceId(serv.id);
    setServiceForm({ ...serv });
    setIsAddingService(true);
  };

  const handleDeleteService = (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updated = services.filter(s => s.id !== id);
      onUpdateServices(updated);
      triggerNotice('Service removed successfully.');
    }
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.name.trim() || !serviceForm.description.trim()) {
      alert('Please provide Service Name and Description.');
      return;
    }

    let updatedServices: ServiceItem[];
    if (editingServiceId) {
      updatedServices = services.map(s => s.id === editingServiceId ? serviceForm : s);
      triggerNotice(`Service "${serviceForm.name}" updated!`);
    } else {
      const newServ = {
        ...serviceForm,
        id: serviceForm.id || `samx-serv-${Date.now()}`,
      };
      updatedServices = [newServ, ...services];
      triggerNotice(`New service "${serviceForm.name}" published!`);
    }

    onUpdateServices(updatedServices);
    setIsAddingService(false);
    setEditingServiceId(null);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">
                  SAMX Master Control Hub
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  NO-CODE LIVE CMS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Manage live Products, Capabilities, and Services without touching code.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs font-mono text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Sign Out
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice Banner */}
        {notice && (
          <div className="px-6 py-2.5 bg-emerald-950/90 border-b border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 sm:p-14 flex flex-col items-center justify-center max-w-md mx-auto my-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_30px_rgba(0,242,254,0.2)]">
              <KeyRound className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-mono">
              Admin Authentication
            </h4>
            <p className="text-xs text-slate-400 mb-6 font-mono leading-relaxed">
              Enter your master administrative key to publish or modify products and services live across the website.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              {authError && (
                <div className="p-2.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter Passcode (e.g. samx2026)"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-mono text-center tracking-widest focus:border-cyan-400 focus:outline-none"
                />
                <span className="text-[10px] text-slate-500 font-mono block mt-2">
                  Default Master Key: <code className="text-cyan-400 font-bold">samx2026</code>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Access Control Panel
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 overflow-hidden flex flex-col">
            
            {/* Nav Tabs & Action Bar */}
            <div className="px-6 py-3 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setActiveTab('products'); setIsAddingProduct(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'products'
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Box className="w-4 h-4" />
                  <span>Products ({products.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab('services'); setIsAddingService(false); }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'services'
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Services ({services.length})</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                {activeTab === 'products' && !isAddingProduct && (
                  <button
                    type="button"
                    onClick={handleStartAddProduct}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Product</span>
                  </button>
                )}

                {activeTab === 'services' && !isAddingService && (
                  <button
                    type="button"
                    onClick={handleStartAddService}
                    className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Service</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('Reset all Products & Services to official factory defaults?')) {
                      onResetDefaults();
                      triggerNotice('Factory defaults restored.');
                    }
                  }}
                  title="Reset to factory catalog"
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-mono"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable View Area */}
            <div className="flex-1 overflow-y-auto p-6">
              
              {/* === TAB 1: PRODUCTS === */}
              {activeTab === 'products' && (
                <div>
                  {isAddingProduct ? (
                    /* Add / Edit Product Form */
                    <form onSubmit={handleSaveProduct} className="max-w-3xl mx-auto space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-sm font-bold text-cyan-400 uppercase">
                          {editingProductId ? 'Edit Product Parameters' : 'Add New Enterprise Product'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsAddingProduct(false)}
                          className="text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-300 block mb-1">PRODUCT NAME *</label>
                          <input
                            type="text"
                            required
                            value={productForm.name}
                            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                            placeholder="e.g. SAMX Fleet IoT"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-slate-300 block mb-1">CATEGORY</label>
                          <select
                            value={productForm.category}
                            onChange={(e) => setProductForm({ ...productForm, category: e.target.value as ProductCategory })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          >
                            <option value="Mobile Solutions">Mobile Solutions</option>
                            <option value="Business Systems">Business Systems</option>
                            <option value="AI Automation">AI Automation</option>
                            <option value="Developer Tools">Developer Tools</option>
                            <option value="SaaS">SaaS</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-300 block mb-1">TAGLINE</label>
                          <input
                            type="text"
                            value={productForm.tagline}
                            onChange={(e) => setProductForm({ ...productForm, tagline: e.target.value })}
                            placeholder="e.g. Real-time GPS and automated logistics engine"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-slate-300 block mb-1">STATUS</label>
                          <select
                            value={productForm.status}
                            onChange={(e) => setProductForm({ ...productForm, status: e.target.value as any })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          >
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="DEPLOYED">DEPLOYED</option>
                            <option value="BETA">BETA</option>
                            <option value="IN_DEVELOPMENT">IN_DEVELOPMENT</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-300 block mb-1">OVERVIEW DESCRIPTION *</label>
                        <textarea
                          rows={2}
                          required
                          value={productForm.description}
                          onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                          placeholder="Provide a clear high-level description..."
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-red-400 block mb-1">ENTERPRISE PROBLEM ELIMINATED</label>
                          <textarea
                            rows={2}
                            value={productForm.problem}
                            onChange={(e) => setProductForm({ ...productForm, problem: e.target.value })}
                            placeholder="What manual friction does this solve?"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-emerald-400 block mb-1">SAMX ARCHITECTURAL SOLUTION</label>
                          <textarea
                            rows={2}
                            value={productForm.solution}
                            onChange={(e) => setProductForm({ ...productForm, solution: e.target.value })}
                            placeholder="How is it solved autonomously?"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Tech Stack & Integrations */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-300 block mb-1">TECH STACK (COMMA-SEPARATED)</label>
                          <input
                            type="text"
                            value={productForm.techStack.join(', ')}
                            onChange={(e) => setProductForm({ 
                              ...productForm, 
                              techStack: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                            })}
                            placeholder="React, TypeScript, Go, PostgreSQL"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-slate-300 block mb-1">INTEGRATIONS (COMMA-SEPARATED)</label>
                          <input
                            type="text"
                            value={productForm.integrations.join(', ')}
                            onChange={(e) => setProductForm({ 
                              ...productForm, 
                              integrations: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                            })}
                            placeholder="ZATCA, Webhooks, WhatsApp API"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setIsAddingProduct(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider"
                        >
                          {editingProductId ? 'Save Product Changes' : 'Publish Product to Hub'}
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Products List */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products.map((prod) => (
                        <div
                          key={prod.id}
                          className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30 uppercase">
                                {prod.category}
                              </span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                                {prod.status}
                              </span>
                            </div>

                            <h4 className="text-base font-bold text-white font-mono">{prod.name}</h4>
                            <p className="text-xs text-cyan-400 font-mono mt-0.5">{prod.tagline}</p>
                            <p className="text-xs text-slate-400 mt-2 line-clamp-2">{prod.description}</p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleEditProduct(prod)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                              title="Edit product"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteProduct(prod.id)}
                              className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-900/40"
                              title="Delete product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* === TAB 2: SERVICES === */}
              {activeTab === 'services' && (
                <div>
                  {isAddingService ? (
                    /* Add / Edit Service Form */
                    <form onSubmit={handleSaveService} className="max-w-3xl mx-auto space-y-4 font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-sm font-bold text-cyan-400 uppercase">
                          {editingServiceId ? 'Edit Capability Service' : 'Add New Service Capability'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsAddingService(false)}
                          className="text-slate-400 hover:text-white"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-300 block mb-1">SERVICE NAME *</label>
                          <input
                            type="text"
                            required
                            value={serviceForm.name}
                            onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
                            placeholder="e.g. Cloud Native Kubernetes Orchestration"
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-slate-300 block mb-1">DOMAIN</label>
                          <select
                            value={serviceForm.domain}
                            onChange={(e) => setServiceForm({ 
                              ...serviceForm, 
                              domain: e.target.value as ServiceDomain,
                              domainName: e.target.value.toUpperCase()
                            })}
                            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                          >
                            <option value="software">Software Engineering</option>
                            <option value="ai">AI & Cognition</option>
                            <option value="digital">Digital Growth</option>
                            <option value="design">Design & UI/UX</option>
                            <option value="media">Media & Streaming</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-300 block mb-1">DESCRIPTION *</label>
                        <textarea
                          rows={2}
                          required
                          value={serviceForm.description}
                          onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                          placeholder="Outline the technical scope of this service..."
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-300 block mb-1">CLIENT OPERATIONAL OUTCOME</label>
                        <input
                          type="text"
                          value={serviceForm.clientOutcome}
                          onChange={(e) => setServiceForm({ ...serviceForm, clientOutcome: e.target.value })}
                          placeholder="e.g. Preserves 40% compute overhead and guarantees sub-50ms SLA"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-slate-300 block mb-1">CAPABILITIES / MODULES (COMMA-SEPARATED)</label>
                        <input
                          type="text"
                          value={serviceForm.capabilities.join(', ')}
                          onChange={(e) => setServiceForm({ 
                            ...serviceForm, 
                            capabilities: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                          })}
                          placeholder="Continuous CI/CD, Zero-downtime, Sub-second telemetry"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>

                      <div className="pt-4 flex justify-end gap-3">
                        <button
                          type="button"
                          onClick={() => setIsAddingService(false)}
                          className="px-4 py-2 rounded-xl bg-slate-800 text-white hover:bg-slate-700"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-wider"
                        >
                          {editingServiceId ? 'Save Changes' : 'Publish Service'}
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Services List */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((serv) => (
                        <div
                          key={serv.id}
                          className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-950 text-blue-300 border border-blue-500/30 uppercase">
                                {serv.domain}
                              </span>
                              <span className="text-[10px] font-mono text-cyan-400">
                                {serv.architectureTier}
                              </span>
                            </div>

                            <h4 className="text-base font-bold text-white font-mono">{serv.name}</h4>
                            <p className="text-xs text-slate-400 mt-2 line-clamp-2">{serv.description}</p>
                            <p className="text-[11px] text-emerald-400 font-mono mt-2">
                              Outcome: {serv.clientOutcome}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleEditService(serv)}
                              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                              title="Edit service"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteService(serv.id)}
                              className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-900/40"
                              title="Delete service"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
