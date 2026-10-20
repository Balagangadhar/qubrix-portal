import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Copy, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import { 
  COMMONLY_USED_SERVICES, 
  PRICING_CATEGORIES, 
  PRICING_PRESETS, 
  PRESET_CATEGORIES,
  CURRENCIES 
} from '../data/pricingCalculatorData';

export default function PricingCalculatorView({ setView, onSelectBudgetForContact }) {
  // State
  const [selectedServices, setSelectedServices] = useState([
    'domain_dns', 
    'cdn_waf', 
    'cloud_hosting', 
    'managed_db', 
    'object_storage', 
    'email_service', 
    'auth_sso', 
    'telemetry_sentry'
  ]);
  const [activePresetCategory, setActivePresetCategory] = useState('All');
  const [activePresetId, setActivePresetId] = useState('mvp_web');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' | 'yearly'
  const [trafficScale, setTrafficScale] = useState(1); // 1 = Startup, 2.2 = Growth, 4.5 = Enterprise
  const [copiedSpec, setCopiedSpec] = useState(false);
  const [showItemized, setShowItemized] = useState(false);

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  // Toggle single service
  const toggleService = (id) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Apply Preset
  const applyPreset = (preset) => {
    setSelectedServices(preset.selectedIds);
    setActivePresetId(preset.id);
  };

  const filteredPresets = activePresetCategory === 'All'
    ? PRICING_PRESETS
    : PRICING_PRESETS.filter(p => p.category === activePresetCategory);

  const activePresetObj = PRICING_PRESETS.find(p => p.id === activePresetId) || PRICING_PRESETS[0];

  // Select all / Deselect all
  const selectAll = () => setSelectedServices(COMMONLY_USED_SERVICES.map(s => s.id));
  const deselectAll = () => setSelectedServices([]);

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return COMMONLY_USED_SERVICES.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.categoryId === activeCategory;
      const matchesSearch = searchQuery === '' || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.provider.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Calculations
  const totals = useMemo(() => {
    let oneTimeUSD = 0;
    let monthlyUSD = 0;

    selectedServices.forEach(id => {
      const s = COMMONLY_USED_SERVICES.find(item => item.id === id);
      if (s) {
        oneTimeUSD += s.oneTimeFeeUSD;
        // Traffic scale applies to monthly cloud compute/bandwidth/API fees
        monthlyUSD += (s.monthlyFeeUSD * trafficScale);
      }
    });

    // Annual discount: 15% off recurring services if paying yearly
    const yearlyDiscountMultiplier = billingCycle === 'yearly' ? 0.85 : 1.0;
    const effectiveMonthlyUSD = monthlyUSD * yearlyDiscountMultiplier;
    const yearlyUSD = effectiveMonthlyUSD * 12;
    const firstYearTCO_USD = oneTimeUSD + yearlyUSD;

    return {
      oneTime: Math.round(oneTimeUSD * curr.rate),
      monthly: Math.round(effectiveMonthlyUSD * curr.rate),
      yearly: Math.round(yearlyUSD * curr.rate),
      firstYearTCO: Math.round(firstYearTCO_USD * curr.rate),
      discountSavedUSD: billingCycle === 'yearly' ? Math.round((monthlyUSD * 0.15 * 12) * curr.rate) : 0
    };
  }, [selectedServices, trafficScale, billingCycle, curr]);

  // Copy Spec to Clipboard
  const handleCopySpec = () => {
    const list = selectedServices.map(id => {
      const s = COMMONLY_USED_SERVICES.find(item => item.id === id);
      return s ? `• ${s.name} (${s.provider}) — One-Time: $${s.oneTimeFeeUSD}, Monthly: $${s.monthlyFeeUSD}/mo` : '';
    }).filter(Boolean).join('\n');

    const specText = `QUBRIX DIGITAL ARCHITECTURE ESTIMATE (${currency})
=========================================
Billing Term: ${billingCycle.toUpperCase()} (Traffic Scale: ${trafficScale === 1 ? 'Startup' : trafficScale === 2.2 ? 'Growth' : 'Enterprise'})
One-Time Setup Total: ${curr.symbol}${totals.oneTime.toLocaleString()}
Monthly Recurring Total: ${curr.symbol}${totals.monthly.toLocaleString()} / month
Yearly Recurring Total: ${curr.symbol}${totals.yearly.toLocaleString()} / year
Estimated 1st Year TCO: ${curr.symbol}${totals.firstYearTCO.toLocaleString()}

CONFIGURED INFRASTRUCTURE & SERVICES (${selectedServices.length} Selected):
${list}

Generated via Qubrix Portal Cost Estimator.`;

    navigator.clipboard.writeText(specText);
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2500);
  };

  const handleBookWithEstimate = () => {
    if (onSelectBudgetForContact) {
      onSelectBudgetForContact({
        currency,
        oneTime: totals.oneTime,
        monthly: totals.monthly,
        yearly: totals.yearly,
        firstYearTCO: totals.firstYearTCO,
        servicesCount: selectedServices.length,
        billingCycle
      });
    }
    setView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '46px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Calculator size={14} />
          INTERACTIVE ARCHITECTURE COST ESTIMATOR
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Transparent Cost & <span className="gradient-text">Infrastructure Estimator</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '820px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          Select the exact services required for your upcoming Web or Mobile application.
          Estimate real-world engineering setup fees alongside monthly and yearly cloud infrastructure costs with zero hidden surprises.
        </p>

        {/* Global Controls Strip: Currency, Billing Cycle, Traffic Scale */}
        <div 
          style={{ 
            marginTop: '32px', 
            padding: '16px 24px', 
            borderRadius: '20px', 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid var(--border-glass)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px'
          }}
        >
          {/* Currency Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Currency:
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {Object.keys(CURRENCIES).map(cKey => (
                <button
                  key={cKey}
                  onClick={() => setCurrency(cKey)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '8px',
                    background: currency === cKey ? 'var(--cyan-core)' : 'rgba(255, 255, 255, 0.05)',
                    color: currency === cKey ? '#030014' : 'var(--text-muted)',
                    border: 'none',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cKey}
                </button>
              ))}
            </div>
          </div>

          {/* Billing Cycle (Monthly vs Annual Discount) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Term:
            </span>
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(0, 0, 0, 0.3)', padding: '3px', borderRadius: '10px' }}>
              <button
                onClick={() => setBillingCycle('monthly')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '8px',
                  background: billingCycle === 'monthly' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: billingCycle === 'monthly' ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '8px',
                  background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #10b981, #00f2fe)' : 'transparent',
                  color: billingCycle === 'yearly' ? '#030014' : 'var(--text-muted)',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Yearly</span>
                <span style={{ fontSize: '0.65rem', padding: '1px 4px', borderRadius: '4px', background: 'rgba(0,0,0,0.2)' }}>
                  SAVE 15%
                </span>
              </button>
            </div>
          </div>

          {/* Traffic Scale / Active User Volume */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              User Scale:
            </span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[
                { label: 'Startup (10k MAU)', val: 1 },
                { label: 'Growth (100k MAU)', val: 2.2 },
                { label: 'Enterprise (1M+ MAU)', val: 4.5 }
              ].map(tier => (
                <button
                  key={tier.val}
                  onClick={() => setTrafficScale(tier.val)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '8px',
                    background: trafficScale === tier.val ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                    border: trafficScale === tier.val ? '1px solid var(--purple-accent)' : '1px solid transparent',
                    color: trafficScale === tier.val ? '#c084fc' : 'var(--text-muted)',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preset Architectures Strip */}
        <div style={{ marginTop: '24px' }}>
          {/* Preset Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginRight: '4px' }}>
              Architectural Presets (18):
            </span>
            {PRESET_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActivePresetCategory(cat)}
                style={{
                  background: activePresetCategory === cat ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: activePresetCategory === cat ? '1px solid var(--border-glow)' : '1px solid var(--border-glass)',
                  color: activePresetCategory === cat ? 'var(--cyan-core)' : 'var(--text-muted)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: activePresetCategory === cat ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Preset Buttons Grid/Wrap */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', maxWidth: '1050px', margin: '0 auto' }}>
            {filteredPresets.map(preset => {
              const isSelected = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected ? '1px solid var(--border-glow)' : '1px solid var(--border-glass)',
                    color: isSelected ? 'var(--cyan-core)' : 'var(--text-main)',
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--cyan-core)';
                      e.currentTarget.style.color = 'var(--cyan-core)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--border-glass)';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }
                  }}
                >
                  <Sparkles size={11} color={isSelected ? 'var(--cyan-core)' : 'var(--text-dim)'} />
                  <span>{preset.name}</span>
                  <span style={{
                    fontSize: '0.64rem',
                    padding: '1px 6px',
                    borderRadius: '999px',
                    background: isSelected ? 'rgba(0, 242, 254, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    color: isSelected ? 'var(--cyan-core)' : 'var(--text-dim)',
                    fontWeight: 600
                  }}>
                    {preset.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Preset Tagline Summary */}
          {activePresetObj && (
            <div style={{
              marginTop: '12px',
              textAlign: 'center',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-heading)'
            }}>
              <span style={{ color: 'var(--cyan-core)', fontWeight: 700 }}>{activePresetObj.name} ({activePresetObj.selectedIds.length} services):</span>{' '}
              <span>{activePresetObj.tagline}</span>
            </div>
          )}
        </div>
      </section>

      {/* MAIN TWO-COLUMN SECTION */}
      <section className="content-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))', gap: '32px', alignItems: 'start' }}>
          
          {/* LEFT COLUMN: THE SERVICES PICKER */}
          <div>
            
            {/* Filter Pills & Search */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <button
                  onClick={() => setActiveCategory('all')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: activeCategory === 'all' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    border: activeCategory === 'all' ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                    color: activeCategory === 'all' ? 'var(--cyan-core)' : 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  All ({COMMONLY_USED_SERVICES.length})
                </button>
                {PRICING_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: activeCategory === cat.id ? `${cat.accent}20` : 'rgba(255, 255, 255, 0.04)',
                      border: activeCategory === cat.id ? `1px solid ${cat.accent}` : '1px solid var(--border-glass)',
                      color: activeCategory === cat.id ? cat.accent : 'var(--text-muted)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Selection Helpers */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={selectAll}
                  style={{ background: 'none', border: 'none', color: 'var(--cyan-core)', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}
                >
                  Select All
                </button>
                <span style={{ color: 'var(--text-dim)' }}>|</span>
                <button
                  onClick={deselectAll}
                  style={{ background: 'none', border: 'none', color: 'var(--text-dim)', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Search services (e.g. Stripe, Maps, S3, Email, Twilio, OpenAI, Sentry)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-glass)',
                  color: 'var(--text-main)',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Service Cards Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredServices.map(srv => {
                const isSelected = selectedServices.includes(srv.id);
                const category = PRICING_CATEGORIES.find(c => c.id === srv.categoryId);
                const convertedOneTime = Math.round(srv.oneTimeFeeUSD * curr.rate);
                const convertedMonthly = Math.round((srv.monthlyFeeUSD * trafficScale * (billingCycle === 'yearly' ? 0.85 : 1)) * curr.rate);

                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className="glass-panel"
                    style={{
                      padding: '20px',
                      borderRadius: '16px',
                      border: isSelected ? '2px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                      background: isSelected ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.06) 0%, rgba(11, 14, 38, 0.95) 100%)' : 'rgba(11, 14, 38, 0.7)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px' }}>
                      
                      {/* Checkbox + Info */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: 1 }}>
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '6px',
                            border: isSelected ? '2px solid var(--cyan-core)' : '2px solid var(--text-dim)',
                            background: isSelected ? 'var(--cyan-core)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '2px',
                            flexShrink: 0,
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {isSelected && <Check size={16} color="#030014" strokeWidth={3} />}
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                            <h4 style={{ fontSize: '1.02rem', color: isSelected ? '#fff' : 'var(--text-main)', margin: 0, fontWeight: 700 }}>
                              {srv.name}
                            </h4>
                            <span style={{ 
                              fontSize: '0.68rem', 
                              padding: '2px 8px', 
                              borderRadius: '999px', 
                              background: 'rgba(255, 255, 255, 0.08)',
                              color: category?.accent || 'var(--cyan-core)',
                              fontFamily: 'var(--font-mono)'
                            }}>
                              {srv.provider}
                            </span>
                            {srv.essential && (
                              <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontWeight: 700 }}>
                                RECOMMENDED
                              </span>
                            )}
                          </div>

                          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: '0 0 6px 0' }}>
                            {srv.description}
                          </p>

                          <div style={{ fontSize: '0.74rem', color: 'var(--cyan-core)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Sparkles size={12} />
                            <span>Impact: {srv.benefit}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing Tag */}
                      <div style={{ textAlign: 'right', flexShrink: 0, minWidth: '120px' }}>
                        <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>
                          {srv.monthlyFeeUSD > 0 ? (
                            <>
                              {curr.symbol}{convertedMonthly.toLocaleString()}
                              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 500 }}>/mo</span>
                            </>
                          ) : (
                            <span style={{ color: '#10b981' }}>Usage / Pay-as-go</span>
                          )}
                        </div>

                        <div style={{ fontSize: '0.74rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                          One-time setup: <strong>{curr.symbol}{convertedOneTime.toLocaleString()}</strong>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY LIVE COST SUMMARY CARD */}
          <div style={{ position: 'sticky', top: '100px' }}>
            
            <div 
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '24px',
                border: '2px solid var(--border-glow)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.15)',
                background: 'linear-gradient(145deg, rgba(8, 11, 35, 0.98) 0%, rgba(18, 24, 62, 0.9) 100%)'
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-core)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    ESTIMATED ARCHITECTURE BUDGET
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {selectedServices.length} Selected
                </span>
              </div>

              {/* Main Total Highlight: First Year TCO */}
              <div style={{ 
                padding: '20px', 
                borderRadius: '16px', 
                background: 'rgba(0, 242, 254, 0.06)', 
                border: '1px solid rgba(0, 242, 254, 0.25)',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Estimated First-Year Total (TCO)
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                  {curr.symbol}{totals.firstYearTCO.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                  Includes One-Time Setup + 12 Months Cloud Infrastructure
                </div>
              </div>

              {/* Breakdown Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                
                {/* One Time Setup */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-glass)' }}>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      One-Time Engineering & Setup
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      Architecture blueprint, cloud provisioning, integration
                    </div>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                    {curr.symbol}{totals.oneTime.toLocaleString()}
                  </div>
                </div>

                {/* Monthly Recurring */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-glass)' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Monthly Operating Costs
                      </span>
                      {billingCycle === 'yearly' && (
                        <span style={{ fontSize: '0.65rem', padding: '1px 5px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', fontWeight: 700 }}>
                          -15%
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                      Cloud servers, database, storage, 3rd party APIs
                    </div>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--purple-accent)', fontFamily: 'var(--font-mono)' }}>
                    {curr.symbol}{totals.monthly.toLocaleString()}
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 500 }}>/mo</span>
                  </div>
                </div>

                {/* Yearly Total */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-glass)' }}>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      Annualized Infrastructure (12 Mos)
                    </div>
                    {billingCycle === 'yearly' && totals.discountSavedUSD > 0 && (
                      <div style={{ fontSize: '0.72rem', color: '#10b981' }}>
                        Annual term saves you {curr.symbol}{totals.discountSavedUSD.toLocaleString()}/yr
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                    {curr.symbol}{totals.yearly.toLocaleString()}
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 500 }}>/yr</span>
                  </div>
                </div>

              </div>

              {/* Itemized Services Toggle Accordion */}
              <div style={{ marginBottom: '24px' }}>
                <button
                  onClick={() => setShowItemized(prev => !prev)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>Itemized Services Breakdown ({selectedServices.length})</span>
                  {showItemized ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>

                {showItemized && (
                  <div style={{ 
                    maxHeight: '220px', 
                    overflowY: 'auto', 
                    marginTop: '8px', 
                    padding: '10px', 
                    borderRadius: '10px', 
                    background: 'rgba(0, 0, 0, 0.4)', 
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    {selectedServices.map(id => {
                      const s = COMMONLY_USED_SERVICES.find(item => item.id === id);
                      if (!s) return null;
                      return (
                        <div key={id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '4px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>{s.name}</span>
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                            {curr.symbol}{Math.round(s.oneTimeFeeUSD * curr.rate)} + {curr.symbol}{Math.round(s.monthlyFeeUSD * curr.rate)}/mo
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={handleBookWithEstimate}
                  className="btn-primary"
                  style={{ width: '100%', padding: '14px', fontSize: '0.94rem', justifyContent: 'center' }}
                >
                  <Calendar size={16} />
                  <span>Book Consultation With This Budget</span>
                </button>

                <button
                  onClick={handleCopySpec}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.84rem', justifyContent: 'center' }}
                >
                  {copiedSpec ? (
                    <>
                      <CheckCircle2 size={15} color="#10b981" />
                      <span style={{ color: '#10b981' }}>Estimate Spec Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Itemized Spec (RFP)</span>
                    </>
                  )}
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                🔒 Transparent pricing • No hidden fees • Verified provider SLA baselines
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
