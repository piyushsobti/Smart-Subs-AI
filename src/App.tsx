/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Lightbulb, 
  User, 
  HandHelping, 
  CircleAlert, 
  Sparkles, 
  ArrowRight, 
  Bell, 
  Zap, 
  Hourglass, 
  ChartLine, 
  Grip, 
  CalendarX, 
  ChartPie, 
  ShieldCheck, 
  Brain, 
  ChevronLeft, 
  Home, 
  Wallet, 
  Settings, 
  Check, 
  X, 
  Video, 
  Music, 
  Cloud, 
  Dumbbell,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Screen = 'welcome' | 'home' | 'finance' | 'subs' | 'settings' | 'results' | 'success';

// --- Components ---

const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white w-full max-w-md rounded-[40px] p-10 relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-black transition">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-16 h-16 text-yellow-500 bulb-brilliant" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight text-black">Get Started</h2>
          <p className="text-gray-500 text-sm mt-2">Securely access your wealth guardian.</p>
        </div>
        <div className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-yellow-500 transition outline-none" />
          <input type="password" placeholder="Password" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-yellow-500 transition outline-none" />
          <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 transition">Continue</button>
        </div>
      </motion.div>
    </div>
  );
};

const Navbar = ({ onOpenAuth }: { onOpenAuth: () => void }) => {
  const [isBulbActive, setIsBulbActive] = useState(false);

  const triggerLogoAnim = () => {
    setIsBulbActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsBulbActive(false), 2000);
  };

  return (
    <nav className="fixed w-full z-[200] glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div 
            className="bg-[#b18c6e] px-[18px] py-[8px] rounded-[12px] cursor-pointer flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 h-[42px]"
            onClick={triggerLogoAnim}
          >
            <span className="text-white font-extrabold text-[14px] tracking-[-0.3px] uppercase leading-none">
              SMARTSUBS {isBulbActive ? <Lightbulb className="inline w-4 h-4 text-yellow-400 bulb-brilliant" /> : <span className="text-yellow-500 font-black">AI</span>}
            </span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <a href="#founder-note" className="bg-yellow-500 text-black px-5 rounded-full font-extrabold text-[0.75rem] uppercase cursor-pointer border-2 border-yellow-500 flex items-center gap-2 h-[42px] transition-all hover:bg-black hover:text-white hover:border-black">
            <User className="w-4 h-4" /> Founder's Note
          </a>
          <a href="#offerings" className="bg-yellow-500 text-black px-5 rounded-full font-extrabold text-[0.75rem] uppercase cursor-pointer border-2 border-yellow-500 flex items-center gap-2 h-[42px] transition-all hover:bg-black hover:text-white hover:border-black">
            <HandHelping className="w-4 h-4" /> Our Services
          </a>
          <a href="#solution" className="bg-yellow-500 text-black px-5 rounded-full font-extrabold text-[0.75rem] uppercase cursor-pointer border-2 border-yellow-500 flex items-center gap-2 h-[42px] transition-all hover:bg-black hover:text-white hover:border-black">
            <CircleAlert className="w-4 h-4" /> Current Gap
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenAuth }: { onOpenAuth: () => void }) => {
  return (
    <section className="pt-48 pb-24 px-6 bg-[#FEFCE8]">
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-4 h-4" /> AI Subscription Manager
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter text-black"
        >
          MASTER YOUR <br /><span className="text-yellow-600">DIGITAL WEALTH</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          Average users pay for 8-12 subscriptions but only use 3-4. SmartSubs AI identifies every recurring payment instantly and organizes your digital world.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={onOpenAuth}
            className="bg-black text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-yellow-600 transition-all shadow-2xl text-xl"
          >
            Get Started Free <ArrowRight className="w-6 h-6" />
          </button>
          <a href="#interactive-prototype" className="bg-white text-black border-2 border-gray-100 px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all text-xl text-center">
            Try Prototype
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Calculator = () => {
  const [subCount, setSubCount] = useState(8);
  const monthlyWaste = subCount * 65;

  return (
    <section className="py-24 px-6 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex justify-center"
      >
        <div className="bg-[#111827] rounded-[50px] p-10 md:p-[60px] color-white border border-yellow-500/20 w-full max-w-[1100px] text-center text-white">
          <p className="text-yellow-500 font-bold uppercase tracking-[3px] text-xs mb-4">Subscription Impact</p>
          <h2 className="text-4xl font-black uppercase mb-10">How many subscriptions do you have?</h2>
          
          <div className="space-y-12">
            <div>
              <div className="flex justify-between font-bold mb-4 px-2">
                <span>Active Monthly Recurring Plans</span>
                <span className="text-yellow-500">{subCount} Subscriptions</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1" 
                value={subCount} 
                onChange={(e) => setSubCount(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-10 rounded-[35px] border border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase text-gray-400 mb-2">Estimated Monthly Wealth Recovery Potential</p>
                <p className="text-5xl font-black text-white">₹{monthlyWaste.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-500 p-10 rounded-[35px] text-black text-center">
                <p className="text-[10px] font-bold uppercase opacity-60 mb-2">Wealth Recovery Potential in Year</p>
                <p className="text-5xl font-black">₹{(monthlyWaste * 12).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Bell />, title: "Smart Alert Cycle", desc: "Alerts 7 days, 3 days, and 24 hours before debits." },
    { icon: <Zap />, title: "One-Tap Logic", desc: "Instantly align subscriptions with your needs." },
    { icon: <Hourglass />, title: "Trial Tracker", desc: "Safety net before free trials turn into charges." },
    { icon: <ChartLine />, title: "Usage Insights", desc: "ROI analysis of every digital service you pay for." }
  ];

  return (
    <section id="offerings" className="py-32 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-600 font-black uppercase tracking-[5px] mb-4 text-xs">Our Services</p>
          <h2 className="text-5xl font-black uppercase tracking-tight text-black">The AI Guardian Advantage</h2>
          <div className="w-24 h-2 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[40px] transition-all duration-500 hover:-translate-y-[15px] hover:border-yellow-500 hover:shadow-[0_25px_50px_-12px_rgba(234,179,8,0.3)] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 text-2xl mb-6">
                {React.cloneElement(s.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-lg font-black text-black mb-3 uppercase">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GapSection = () => {
  const gaps = [
    { icon: <Grip />, title: "Scattered Details", desc: "Subscriptions are spread across apps, impossible to see the big picture." },
    { icon: <CalendarX />, title: "Passive Spend", desc: "People forget renewals, leading to wasted digital budget every single month." },
    { icon: <ChartPie />, title: "Usage-Based Logic", desc: "Calculating actual value based on how often you engage with the app." }
  ];

  return (
    <section id="solution" className="py-32 px-6 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-black uppercase tracking-tight text-white">The Current Solutions Gap</h2>
          <div className="w-24 h-2 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {gaps.map((g, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[40px] transition-all duration-500 hover:-translate-y-[15px] hover:bg-white/10 hover:border-yellow-500 hover:shadow-[0_25px_50px_-12px_rgba(234,179,8,0.2)] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#FEFCE8] rounded-2xl flex items-center justify-center text-black mb-8 shadow-xl">
                {React.cloneElement(g.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase text-white min-h-[3.5rem] flex items-center">{g.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderNote = () => {
  return (
    <section id="founder-note" className="py-32 px-6 bg-white border-b border-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-yellow-600 font-black uppercase tracking-[5px] mb-4 text-xs">Founder’s Note</p>
        <div className="relative p-12 bg-slate-50 rounded-[60px] border border-slate-100 shadow-inner">
          <p className="text-xl md:text-2xl font-medium italic text-gray-700 leading-relaxed">
            "I created SmartSubs AI because I was tired of seeing money disappear into unused apps. My goal is to give you total control over your digital wealth."
          </p>
          <p className="mt-8 font-black text-xl uppercase tracking-widest text-black">— Piyush Sobti</p>
        </div>
      </motion.div>
    </section>
  );
};

const InteractivePrototype = () => {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [savingsSession, setSavingsSession] = useState(0);
  const [optimizedItems, setOptimizedItems] = useState<string[]>([]);
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  const navigateTo = (s: Screen) => {
    setScreen(s);
    if (s === 'home') {
      setIsScanning(false);
      setScanProgress(0);
    }
  };

  const startScan = () => {
    setIsScanning(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // Wait a bit at 100% for the full orange effect
        setTimeout(() => navigateTo('results'), 800);
      }
    }, 40);
  };

  const optimizeItem = (id: string, amount: number) => {
    if (optimizedItems.includes(id)) return;
    setOptimizedItems([...optimizedItems, id]);
    setSavingsSession(prev => prev + amount);
  };

  const finishOptimization = () => {
    const finalSavings = savingsSession === 0 ? 520 : savingsSession;
    setSavingsSession(finalSavings);
    navigateTo('success');
  };

  const resetOptimization = () => {
    setSavingsSession(0);
    setOptimizedItems([]);
    navigateTo('home');
  };

  return (
    <section id="interactive-prototype" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 order-2 lg:order-1"
        >
          <h2 className="text-5xl font-black uppercase leading-tight text-black">THE SMART <br /><span className="text-yellow-600">SAVINGS LABORATORY</span></h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="font-black text-2xl text-yellow-600">98%</p>
              <p className="text-xs font-bold uppercase text-gray-400 mt-1">Accuracy</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <p className="font-black text-2xl text-yellow-600">1 Tap</p>
              <p className="text-xs font-bold uppercase text-gray-400 mt-1">Action</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="w-[300px] h-[600px] bg-[#1a1a1a] rounded-[40px] border-[8px] border-[#222] relative shadow-[0_40px_80px_-15px_rgba(234,179,8,0.25)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-[#222] rounded-b-[20px] z-50"></div>
            
            <div className="relative w-full h-full bg-white">
              {/* Back Arrow */}
              {screen !== 'welcome' && screen !== 'results' && screen !== 'success' && (
                <button 
                  onClick={() => navigateTo('welcome')}
                  className="absolute top-10 left-[15px] z-[150] cursor-pointer color-[#000] bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}

              <AnimatePresence mode="wait">
                {/* Screen: Welcome */}
                {screen === 'welcome' && (
                  <motion.div 
                    key="welcome"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#cc9c4b] via-[#cc9c4b] to-[#2b1b12] z-[100] pt-[60px] px-8 flex flex-col items-center text-center text-white"
                  >
                    <h1 className="text-2xl font-black tracking-widest uppercase">SMARTSUBS AI</h1>
                    <p className="text-[9px] uppercase tracking-[2px] text-white/70 mt-1 font-bold">Intelligent Guardian</p>
                    <div className="relative w-[180px] h-[180px] flex items-center justify-center my-10">
                      <div className="absolute w-[210px] h-[210px] border border-white/30 rounded-full rotate-glow"></div>
                      <ShieldCheck className="w-[100px] h-[100px] text-[#d4a34d] drop-shadow-[0_0_15px_rgba(212,163,77,0.8)] relative z-10" />
                      <Brain className="absolute z-20 text-white/60 w-6 h-6" />
                    </div>
                    <div className="space-y-4 mb-10">
                      <h2 className="text-xl font-black leading-tight uppercase">SECURE YOUR SUBSCRIPTIONS.<br />UNLOCK YOUR SAVINGS.</h2>
                      <p className="text-[10px] text-white/50 font-medium leading-relaxed">Monitor usage and optimize it with 100% privacy.</p>
                    </div>
                    <button 
                      onClick={() => navigateTo('home')}
                      className="mt-auto mb-5 w-full bg-[#d4a34d] text-white py-4 rounded-full font-extrabold text-[11px] tracking-[1px] uppercase border-2 border-white/30 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.96] transition-all animate-glow"
                    >
                      Start Your Journey
                    </button>
                  </motion.div>
                )}

                {/* Screen: Home */}
                {screen === 'home' && (
                  <motion.div 
                    key="home"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 p-6 pt-[45px] flex flex-col"
                  >
                    <div className="flex justify-between items-center mb-8 pl-12">
                      <div className="text-right text-xs font-black uppercase text-black">Piyush!</div>
                      <div 
                        onClick={() => setIsProModalOpen(true)}
                        className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center border border-yellow-200 cursor-pointer shadow-sm"
                      >
                        <User className="w-5 h-5 text-yellow-600" />
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-[32px] p-6 flex-1 flex flex-col items-center justify-center text-center space-y-6 shadow-inner">
                      <div className={`relative w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-yellow-500 shadow-md ${isScanning ? 'animate-scan' : ''}`}>
                        <Lightbulb className={`w-14 h-14 ${isScanning ? 'text-orange-500' : 'text-gray-300'} absolute z-1 transition-colors duration-500`} />
                        <div 
                          className="absolute bottom-0 left-0 w-full bg-orange-500 z-2 transition-all duration-200 ease-out overflow-hidden flex items-end justify-center"
                          style={{ height: `${scanProgress}%` }}
                        >
                          <Lightbulb className="w-14 h-14 text-white absolute bottom-6" />
                        </div>
                      </div>
                      <h4 className="font-bold text-black uppercase text-[10px] tracking-widest">Analyze Wealth</h4>
                      <button 
                        onClick={startScan}
                        disabled={isScanning}
                        className={`w-full bg-yellow-500 text-white py-4 rounded-2xl font-bold shadow-lg transition-all ${isScanning ? 'opacity-50 pointer-events-none' : ''}`}
                      >
                        {isScanning ? 'Scanning...' : 'Scan For Savings'}
                      </button>
                      <p className="text-[9px] text-yellow-600/60 font-bold uppercase">Your Data, Your Control</p>
                    </div>
                  </motion.div>
                )}

                {/* Screen: Results */}
                {screen === 'results' && (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 p-6 pt-[45px] bg-gray-50 flex flex-col"
                  >
                    <h3 className="text-lg font-bold mb-4 text-black uppercase text-[10px] text-center tracking-widest">Savings Found</h3>
                    <div className="space-y-3 flex-1 overflow-y-auto mb-16 pr-1">
                      {[
                        { id: 'opt-1', icon: <Video />, title: 'Video Service', price: 499, color: 'text-red-600', bg: 'bg-red-100' },
                        { id: 'opt-2', icon: <Music />, title: 'Music App', price: 119, color: 'text-green-600', bg: 'bg-green-100' },
                        { id: 'opt-3', icon: <Cloud />, title: 'Cloud Store', price: 199, color: 'text-blue-600', bg: 'bg-blue-100' },
                        { id: 'opt-4', icon: <Dumbbell />, title: 'Gym Member', price: 1499, color: 'text-yellow-600', bg: 'bg-yellow-100' },
                      ].map((item) => (
                        <div 
                          key={item.id}
                          className={`bg-white p-4 rounded-2xl flex justify-between items-center shadow-sm transition-all duration-300 ${optimizedItems.includes(item.id) ? 'opacity-20 scale-95' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                              {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                            </div>
                            <div>
                              <p className="font-bold text-[10px]">{item.title}</p>
                              <p className="text-[9px] text-gray-500">₹{item.price}/mo</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => optimizeItem(item.id, item.price)}
                            className="w-7 h-7 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={finishOptimization}
                      className="w-full bg-black text-white py-4 rounded-2xl font-bold mb-5 shadow-lg"
                    >
                      Finalize Recovery
                    </button>
                  </motion.div>
                )}

                {/* Screen: Success */}
                {screen === 'success' && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce">
                      <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-2 uppercase">Done! You saved</h3>
                    <h2 className="text-4xl font-black text-green-600 mb-6">₹{savingsSession.toLocaleString()}/mo</h2>
                    <button 
                      onClick={resetOptimization}
                      className="w-full bg-black text-white py-4 rounded-2xl font-bold shadow-xl text-xs uppercase tracking-widest"
                    >
                      Dashboard
                    </button>
                  </motion.div>
                )}

                {/* Screen: Finance */}
                {screen === 'finance' && (
                  <motion.div 
                    key="finance"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 p-6 pt-[45px] flex flex-col"
                  >
                    <h3 className="text-lg font-bold mb-4 text-black uppercase text-[10px] text-center tracking-widest">Growth</h3>
                    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-[28px] mb-6 shadow-xl text-center">
                      <p className="text-[9px] text-yellow-500 uppercase font-black mb-1">Total Retained</p>
                      <p className="text-3xl font-black">₹10,788</p>
                    </div>
                    <div className="flex items-end justify-between h-24 gap-2 mb-4 px-2">
                      <div className="bg-yellow-100 w-full rounded-t-lg transition-all h-[40%]"></div>
                      <div className="bg-yellow-200 w-full rounded-t-lg transition-all h-[60%]"></div>
                      <div className="bg-yellow-400 w-full rounded-t-lg transition-all h-[80%]"></div>
                      <div className="bg-yellow-500 w-full rounded-t-lg transition-all h-[100%]"></div>
                    </div>
                  </motion.div>
                )}

                {/* Screen: Subs */}
                {screen === 'subs' && (
                  <motion.div 
                    key="subs"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 p-6 pt-[45px] bg-gray-50 flex flex-col"
                  >
                    <h3 className="text-lg font-bold mb-4 text-black uppercase text-[10px] text-center tracking-widest">9 Active Plans</h3>
                    <div className="space-y-2 flex-1 overflow-y-auto mb-16 pr-1">
                      {[
                        { title: 'Netflix', price: 649, bg: 'bg-red-100', color: 'text-red-600' },
                        { title: 'Spotify', price: 119, bg: 'bg-green-100', color: 'text-green-600' },
                        { title: 'Prime', price: 1499, bg: 'bg-blue-100', color: 'text-blue-600' },
                        { title: 'YouTube Premium', price: 129, bg: 'bg-red-50', color: 'text-red-500' },
                        { title: 'Disney+', price: 299, bg: 'bg-blue-50', color: 'text-blue-500' },
                        { title: 'Adobe CC', price: 4230, bg: 'bg-indigo-100', color: 'text-indigo-600' },
                        { title: 'Gym Member', price: 3000, bg: 'bg-yellow-100', color: 'text-yellow-600' },
                        { title: 'LinkedIn Pro', price: 2200, bg: 'bg-blue-500', color: 'text-white' },
                        { title: 'iCloud+', price: 75, bg: 'bg-gray-100', color: 'text-gray-600' },
                      ].map((sub, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl flex justify-between items-center border border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 ${sub.bg} ${sub.color} rounded-lg flex items-center justify-center`}>
                              <Wallet className="w-4 h-4" />
                            </div>
                            <p className="font-bold text-[10px]">{sub.title}</p>
                          </div>
                          <p className="font-bold text-[10px]">₹{sub.price}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Screen: Settings */}
                {screen === 'settings' && (
                  <motion.div 
                    key="settings"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="absolute inset-0 p-6 pt-[45px] flex flex-col"
                  >
                    <h3 className="text-lg font-bold mb-6 text-black uppercase text-[10px] text-center tracking-widest">Settings</h3>
                    <div className="space-y-2">
                      {[
                        { icon: <User />, title: 'Account' },
                        { icon: <ShieldCheck />, title: 'Security' },
                        { icon: <Settings />, title: 'Settings' },
                        { icon: <Wallet />, title: 'UPI' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer shadow-sm hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3 text-xs font-bold text-black">
                            {React.cloneElement(item.icon as React.ReactElement, { className: "w-4 h-4 text-yellow-600" })}
                            {item.title}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pro Features Modal */}
              <AnimatePresence>
                {isProModalOpen && (
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="absolute inset-0 bg-white z-[60] p-8 flex flex-col items-center justify-center text-center shadow-2xl"
                  >
                    <div className="w-12 h-1 bg-gray-100 rounded-full mb-8"></div>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-black uppercase text-xs">Pro Features</h3>
                    <ul className="text-left space-y-4 mb-10 w-full">
                      <li className="flex items-center gap-3 text-[10px] font-black uppercase text-black">
                        <Check className="w-4 h-4 text-yellow-500" /> Auto-Debit Guard
                      </li>
                      <li className="flex items-center gap-3 text-[10px] font-black uppercase text-black">
                        <Check className="w-4 h-4 text-yellow-500" /> Active-Usage Tracker
                      </li>
                      <li className="flex items-center gap-3 text-[10px] font-black uppercase text-black">
                        <Check className="w-4 h-4 text-yellow-500" /> Value Analytics
                      </li>
                    </ul>
                    <button 
                      onClick={() => setIsProModalOpen(false)}
                      className="w-full bg-black text-white py-4 rounded-2xl font-bold shadow-lg uppercase text-[10px] tracking-widest"
                    >
                      Got it!
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nav Bar */}
              {screen !== 'welcome' && screen !== 'results' && screen !== 'success' && (
                <div className="absolute bottom-0 w-full h-[65px] bg-white border-t border-gray-100 flex justify-around items-center z-40">
                  <button 
                    onClick={() => navigateTo('home')}
                    className={`nav-item transition-all duration-300 ${screen === 'home' ? 'text-yellow-500 -translate-y-2 scale-110' : 'text-black'}`}
                  >
                    <Home className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => navigateTo('finance')}
                    className={`nav-item transition-all duration-300 ${screen === 'finance' ? 'text-yellow-500 -translate-y-2 scale-110' : 'text-black'}`}
                  >
                    <ChartLine className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => navigateTo('subs')}
                    className={`nav-item transition-all duration-300 ${screen === 'subs' ? 'text-yellow-500 -translate-y-2 scale-110' : 'text-black'}`}
                  >
                    <Wallet className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => navigateTo('settings')}
                    className={`nav-item transition-all duration-300 ${screen === 'settings' ? 'text-yellow-500 -translate-y-2 scale-110' : 'text-black'}`}
                  >
                    <Settings className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-slate-900 text-white text-center">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-2xl font-black tracking-tighter uppercase transition-colors hover:text-yellow-500 text-white"
      >
        SMARTSUBS AI
      </button>
      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[3px] mt-4">
        © 2026 SmartSubs AI. Financial Clarity for the Digital Era.
      </p>
    </footer>
  );
};

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenAuth={() => setIsAuthModalOpen(true)} />
      <Hero onOpenAuth={() => setIsAuthModalOpen(true)} />
      <Calculator />
      <Services />
      <GapSection />
      <FounderNote />
      <InteractivePrototype />
      <Footer />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
}
