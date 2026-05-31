import React from 'react'
import { useNavigate } from "react-router-dom";
import {ShieldCheck,LockKeyhole,Zap} from "lucide-react";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='mesh-gradient'>
      {/* nav bar start */}
      <nav className="fixed top-0 w-full bg-[var(--chat-bg)]/90 backdrop-blur-md border-b border-[var(--border-color)] z-50">
        <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <div className="text-2xl font-bold text-[var(--secondary-color)] font-[var(--primary-font)] tracking-wide">
            PulseChat
          </div>
        </div>
      </nav>
      {/* nav bar ends */}

      {/* main section start */}
      <main className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 md:px-10 relative overflow-hidden font-[var(--primary-font)]">

  <div className="absolute top-32 -right-32 w-[320px] h-[320px] bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="absolute bottom-16 -left-32 w-[280px] h-[280px] bg-[var(--tertiary)]/10 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="text-center mb-10 z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-[var(--on-surface)] mb-3">
      Connect. <span className="text-[var(--secondary-color)]">Pulse.</span> Chat.
    </h1>

    <p className="text-[var(--on-surface-variant)] text-base md:text-lg max-w-xl mx-auto font-medium">
      Meet strangers instantly through secure, real-time video chat. Fast, smooth, and built for meaningful conversations.
    </p>
  </div>

<div className="bg-[rgba(31,31,39,0.78)] backdrop-blur-xl rounded-[28px] p-6 md:p-8 max-w-lg w-full text-center z-20 shadow-[0_0_80px_rgba(192,193,255,0.22)] ">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-container)]/20 border border-[var(--primary)]/20 text-[var(--primary)] mb-5 text-xl">
      <ShieldCheck size={24} strokeWidth={2.2} />
    </div>

    <h2 className="text-2xl font-bold text-[var(--on-surface)] mb-3">
      Safety Check
    </h2>

    <p className="text-[var(--on-surface-variant)] text-sm md:text-base mb-6 leading-relaxed">
      PulseChat is designed for adults. Please confirm your age before entering the platform.
    </p>

    <div className="flex flex-col gap-3">
      <button className="w-full bg-[var(--secondary-color)] text-[#000000] font-bold py-3 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
        onClick={() => navigate("/chat")}
      >
        Yes, I am 18+
      </button>

      <button className="w-full bg-[var(--surface-container-highest)] text-[var(--on-surface)] border border-[var(--outline-variant)] py-3 rounded-xl font-bold hover:bg-[var(--surface-bright)] transition-all cursor-pointer">
        No, I am not
      </button>
    </div>

    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)] mt-6">
      Verification required
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-6xl z-10 mb-12">

    <div className="bg-[var(--surface-container-highest)] rounded-2xl p-5 hover:bg-[var(--surface-bright)] transition-all duration-300">
      <div className="text-2xl mb-3"><LockKeyhole size={26} className="text-[var(--secondary-color)]"/></div>
      <h3 className="text-lg font-bold text-[var(--on-surface)] mb-2">
        Encrypted
      </h3>
      <p className="text-sm text-[var(--on-surface-variant)]">
        Secure WebRTC powered communication for private conversations.
      </p>
    </div>

    <div className="bg-[var(--surface-container-highest)] rounded-2xl p-5 hover:bg-[var(--surface-bright)] transition-all duration-300">
      <div className="text-2xl mb-3"><Zap size={26} className="text-[var(--btn-color)]"/></div>
      <h3 className="text-lg font-bold text-[var(--on-surface)] mb-2">
        Real-time
      </h3>
      <p className="text-sm text-[var(--on-surface-variant)]">
        Smooth low-latency video and instant chat experience.
      </p>
    </div>

    <div className="bg-[var(--surface-container-highest)] rounded-2xl p-5 hover:bg-[var(--surface-bright)] transition-all duration-300">
      <div className="text-2xl mb-3"><ShieldCheck size={26} className="text-[var(--tertiary)]"/></div>
      <h3 className="text-lg font-bold text-[var(--on-surface)] mb-2">
        Safe Space
      </h3>
      <p className="text-sm text-[var(--on-surface-variant)]">
        Skip, report and moderation features for safer interactions.
      </p>
    </div>
  </div>
</main>
      {/* main section ends */}

    </div>
  )
}

export default Home