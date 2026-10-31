"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  FileText,
  MessageSquare,
  Lock,
  X
} from "lucide-react";
import { logoutUser } from "@/app/actions/auth";

interface SuperadminSidebarProps {
  user: {
    firstName: string;
    lastName: string;
  };
}

export default function SuperadminSidebar({ user }: SuperadminSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [tooltip, setTooltip] = useState<{ text: string, top: number, left: number } | null>(null);
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isExpanded = !isCollapsed || isMobileOpen;

  useEffect(() => {
    setMounted(true);
    const handleToggle = () => setIsMobileOpen(prev => !prev);
    window.addEventListener('toggle-mobile-sidebar', handleToggle);
    return () => window.removeEventListener('toggle-mobile-sidebar', handleToggle);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Dashboard", href: "/superadmin", icon: LayoutDashboard },
    { name: "Firms", href: "/superadmin/firms", icon: Building2 },
    { name: "Billings", href: "/superadmin/billing", icon: CreditCard, isLocked: true },
    { name: "Reports", href: "/superadmin/reports", icon: FileText, isLocked: true },
    { name: "Feedback", href: "/superadmin/feedback", icon: MessageSquare, isLocked: true },
    { name: "Settings", href: "/superadmin/settings", icon: Settings },
  ];

  return (
    <>
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[999] min-[768px]:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        onClick={() => {
          if (isCollapsed) setIsCollapsed(false);
        }}
        className={`relative bg-[#1A3757] text-slate-200 transition-all duration-300 flex flex-col z-30 h-screen shadow-xl border-r border-[#12263D]
          max-[767px]:fixed max-[767px]:top-0 max-[767px]:left-0 max-[767px]:h-full max-[767px]:z-[1000] max-[767px]:w-[280px] max-[767px]:max-w-[85vw]
          ${!isExpanded ? 'min-[768px]:w-[76px]' : 'min-[768px]:w-[250px]'}
          ${isMobileOpen ? 'max-[767px]:translate-x-0' : 'max-[767px]:-translate-x-full'}
        `}
      >
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsCollapsed(!isCollapsed);
        }}
        className="absolute -right-3.5 top-6 bg-[#12263D] border-[3px] border-[#F6F5F1] text-[#B49158] hover:bg-[#B49158] hover:text-white rounded-full p-0.5 shadow-md transition-all z-30 cursor-pointer max-[767px]:hidden"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      <div className="h-16 flex items-center justify-center shrink-0 w-full bg-[#12263D]/80 border-b border-[#23486F]/40 px-3 relative">
        <div className="flex items-center gap-2.5 justify-center">
          <img 
            src="/brand/jurisai-icon-mark.svg" 
            alt="JurisAI" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0 filter drop-shadow-[0_1px_4px_rgba(183,144,88,0.35)]" 
          />
          {isExpanded && (
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-lg font-bold tracking-tight text-white leading-none font-sans">
                  Juris<span className="text-[#B79058]">AI</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#B79058]/20 text-[#B79058] border border-[#B79058]/30 uppercase leading-none">SA</span>
              </div>
              <span className="text-[9px] font-semibold text-slate-300 tracking-wide mt-1 truncate">
                Intelligent Case Processing
              </span>
            </div>
          )}
        </div>
        {isMobileOpen && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileOpen(false);
            }}
            className="min-[768px]:hidden absolute right-3 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/superadmin' && pathname.startsWith(item.href));

          if (item.isLocked) {
            return (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  onMouseEnter={(e) => {
                    if (!isExpanded) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltip({ text: `${item.name} (Locked)`, top: rect.top + rect.height / 2, left: rect.right + 12 });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  className={`flex items-center rounded-lg text-base font-normal transition-all ${
                    !isExpanded ? 'w-11 h-11 justify-center mx-auto' : 'px-3 h-11 gap-3 w-full'
                  } ${
                    isActive
                      ? 'bg-slate-800/90 text-[#B49158] border border-teal-800/50 shadow-sm'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                  title={`${item.name} (Locked - Next Phase)`}
                >
                  <div className="relative flex items-center justify-center">
                    <item.icon className={`w-6 h-6 shrink-0 ${isActive ? 'text-[#B49158]' : 'text-slate-400'}`} />
                    {!isExpanded && (
                      <Lock className="w-2.5 h-2.5 text-slate-400 absolute -top-1 -right-1" />
                    )}
                  </div>
                  {isExpanded && (
                    <>
                      <span className="truncate">{item.name}</span>
                      <Lock className={`w-4 h-4 ml-auto shrink-0 ${isActive ? 'text-[#B49158]' : 'text-slate-400'}`} />
                    </>
                  )}
                </Link>
              </div>
            );
          }

          return (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                onMouseEnter={(e) => {
                  if (!isExpanded) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setTooltip({ text: item.name, top: rect.top + rect.height / 2, left: rect.right + 12 });
                  }
                }}
                onMouseLeave={() => setTooltip(null)}
                className={`flex items-center rounded-lg text-base font-normal transition-all ${!isExpanded ? 'w-11 h-11 justify-center mx-auto' : 'px-3 h-11 gap-3 w-full'} 
                  ${isActive ? 'bg-[#B49158] text-white shadow-md font-medium' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}
              >
                <item.icon className={`w-6 h-6 shrink-0 ${isActive ? 'text-white' : ''}`} />
                {isExpanded && <span className="truncate">{item.name}</span>}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="p-3 border-t border-[#23486F]/40 bg-[#12263D]/40">
        <div className={`flex items-center gap-3 ${!isExpanded ? 'justify-center' : ''}`}>
          <div className="w-11 h-11 rounded-lg bg-teal-900/50 flex items-center justify-center text-[#B49158] font-medium border border-teal-800/50 shrink-0">
            {user.firstName.charAt(0)}{user.lastName.charAt(0)}
          </div>
          {isExpanded && (
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
              <p className="text-base font-normal text-white truncate leading-none">{user.firstName} {user.lastName}</p>
              <p className="text-[14px] text-[#B49158] truncate uppercase tracking-wider text-xs font-semibold leading-none">Superadmin</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={async () => {
          await logoutUser();
          window.location.href = '/login';
        }}
        className="p-3 flex items-center justify-center shrink-0 w-full hover:bg-red-500/10 border-t border-[#23486F]/30 cursor-pointer transition-colors group"
      >
        <div className="flex items-center gap-3 justify-center">
          <div className="bg-red-500 w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <LogOut className="w-5 h-5 text-white ml-0.5" />
          </div>
          {isExpanded && (
            <span className="text-lg font-medium tracking-tight text-red-400 truncate transition-opacity duration-300">
              Sign Out
            </span>
          )}
        </div>
      </button>

      {mounted && tooltip && createPortal(
        <div
          className="fixed bg-slate-800 text-white text-sm font-medium rounded-lg px-3 py-2 whitespace-nowrap z-[9999] pointer-events-none transform -translate-y-1/2"
          style={{ top: tooltip.top, left: tooltip.left }}
        >
          {tooltip.text}
          <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>,
        document.body
      )}
    </aside>
    </>
  );
}
