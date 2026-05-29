import React from 'react'
import { Flag } from "lucide-react";
const Sidepanel = () => {
  return (
    <div>
      <aside className="bg-[var(--secondary-bg)] shadow-md h-[calc(100vh-88px)] w-64 flex flex-col py-4 px-3 border-r border-[var(--border-color)]">
        {/* Session Timer */}
        <div className="mb-6 px-2">
          <div className="p-4 bg-[var(--ternary-bg)] rounded-2xl border border-[var(--ternary-color)] shadow-md">
            <p className="text-xs uppercase tracking-wider mb-1">Current Session</p>
            <p className="text-3xl text-[var(--secondary-color)] font-mono font-bold"> 00:15:24</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-4 space-y-3">  
          {/* Report Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-[var(--report-box)/50] text-[var(--report-box)] font-semibold py-3 rounded-xl hover:bg-red-500/10 active:scale-95 transition-all"> 
            <Flag />
            <span className="text-sm">Report User</span>
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Sidepanel