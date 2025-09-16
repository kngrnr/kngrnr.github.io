"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className={`fixed inset-0 overflow-hidden ${isDark ? "bg-[#030711]" : "bg-slate-50"}`}>
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.15]" : "opacity-[0.08]"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div
        className="absolute top-[-50%] left-[-25%] w-[150%] h-[150%] opacity-30 blur-3xl"
        style={{
          background: isDark
            ? `radial-gradient(
                circle at center,
                transparent 15%,
                #3b82f620 35%,
                #6366f120 45%,
                transparent 65%
              )`
            : `radial-gradient(
                circle at center,
                transparent 15%,
                #3b82f615 35%,
                #6366f115 45%,
                transparent 65%
              )`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(to right, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`
            : `linear-gradient(to right, rgba(99, 102, 241, 0.08) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(99, 102, 241, 0.08) 1px, transparent 1px)`,
          backgroundSize: "clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px)",
        }}
      />

      <div className="absolute inset-0">
        {/* Laptop mockup - moved to bottom left */}
        <div className="absolute opacity-40 hidden md:block" style={{ bottom: "10%", left: "8%" }}>
          <div className="relative">
            <div
              className={`w-[clamp(200px,30vw,256px)] h-[clamp(125px,20vw,160px)] rounded-lg border-2 backdrop-blur-sm ${
                isDark ? "border-blue-500/50" : "border-blue-600/30"
              }`}
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)"
                  : "linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent)",
              }}
            >
              <div className="p-4 space-y-2">
                <div className={`h-1 w-3/4 rounded ${isDark ? "bg-blue-500/50" : "bg-blue-600/40"}`} />
                <div className={`h-1 w-1/2 rounded ${isDark ? "bg-blue-500/40" : "bg-blue-600/35"}`} />
                <div className={`h-1 w-2/3 rounded ${isDark ? "bg-blue-500/45" : "bg-blue-600/38"}`} />
              </div>
            </div>
            <div
              className={`relative w-[75%] h-1 rounded mx-auto border-2 ${
                isDark ? "bg-blue-500/50 border-blue-500/50" : "bg-blue-600/40 border-blue-600/30"
              }`}
              style={{
                transformOrigin: "center top",
                transform: "perspective(400px) rotateX(75deg) translateY(2px)",
              }}
            />
          </div>
        </div>

        {/* Phone mockup 1 - moved to top right */}
        <div className="absolute opacity-40 md:top-[15%] md:right-[12%] top-[8%] right-[8%]">
          <div
            className={`w-[clamp(80px,15vw,96px)] h-[clamp(140px,25vw,192px)] rounded-[24px] border-2 p-3 backdrop-blur-sm ${
              isDark ? "border-blue-500/50" : "border-blue-600/30"
            }`}
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)"
                : "linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent)",
            }}
          >
            <div className={`w-1/2 h-1 mx-auto rounded-full ${isDark ? "bg-blue-500/50" : "bg-blue-600/40"}`} />
            <div className="mt-8 space-y-2">
              <div className={`h-0.5 w-full rounded ${isDark ? "bg-blue-500/40" : "bg-blue-600/35"}`} />
              <div className={`h-0.5 w-3/4 rounded ${isDark ? "bg-blue-500/45" : "bg-blue-600/38"}`} />
            </div>
          </div>
        </div>

        {/* Phone mockup 2 - moved to middle left */}
        <div className="absolute opacity-40 md:top-[45%] md:left-[5%] top-[35%] left-[5%]">
          <div
            className={`w-[clamp(80px,15vw,96px)] h-[clamp(140px,25vw,192px)] rounded-[18px] border-2 p-3 backdrop-blur-sm ${
              isDark ? "border-blue-500/50" : "border-blue-600/30"
            }`}
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)"
                : "linear-gradient(135deg, rgba(99, 102, 241, 0.05), transparent)",
            }}
          >
            <div className={`w-1.5 h-1.5 ml-2 rounded-full ${isDark ? "bg-blue-500/50" : "bg-blue-600/40"}`} />
            <div className="mt-8 space-y-2">
              <div className={`h-0.5 w-full rounded ${isDark ? "bg-blue-500/45" : "bg-blue-600/38"}`} />
              <div className={`h-0.5 w-2/3 rounded ${isDark ? "bg-blue-500/40" : "bg-blue-600/35"}`} />
            </div>
          </div>
        </div>

        {/* Tablet mockup - moved to top center */}
        <div className="absolute opacity-40 hidden md:block" style={{ top: "8%", right: "35%" }}>
          <div
            className={`w-[clamp(160px,20vw,192px)] h-[clamp(200px,30vw,256px)] rounded-[24px] border-2 p-4 backdrop-blur-sm ${
              isDark ? "border-blue-500/50" : "border-blue-600/30"
            }`}
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)"
                : "linear-gradient(135deg, rgba(99, 102, 241, 0.05), transparent)",
            }}
          >
            <div className="mt-4 space-y-3">
              <div className={`h-1 w-3/4 rounded ${isDark ? "bg-blue-500/50" : "bg-blue-600/40"}`} />
              <div className={`h-1 w-1/2 rounded ${isDark ? "bg-blue-500/45" : "bg-blue-600/38"}`} />
              <div className={`h-1 w-2/3 rounded ${isDark ? "bg-blue-500/40" : "bg-blue-600/35"}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0">
        <svg
          className={`absolute md:top-[60%] md:right-[45%] top-[65%] right-[25%] w-[clamp(48px,10vw,96px)] h-[clamp(48px,10vw,96px)] ${
            isDark ? "stroke-blue-500/20" : "stroke-blue-600/25"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="0.5"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[40%] left-0 right-0 h-px opacity-20"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent, #3b82f6, transparent)"
              : "linear-gradient(to right, transparent, #3b82f6, transparent)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 md:left-[30%] left-[20%] w-px opacity-20"
          style={{
            background: isDark
              ? "linear-gradient(to bottom, transparent, #6366f1, transparent)"
              : "linear-gradient(to bottom, transparent, #6366f1, transparent)",
          }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 50%, transparent, rgba(3, 7, 17, 0.5))"
            : "radial-gradient(circle at 50% 50%, transparent, rgba(248, 250, 252, 0.3))",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, #030711, transparent)"
            : "linear-gradient(to bottom, rgb(248, 250, 252), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: isDark
            ? "linear-gradient(to top, #030711, transparent)"
            : "linear-gradient(to top, rgb(248, 250, 252), transparent)",
        }}
      />
    </div>
  )
}
