import React from "react";

/**
 * ConnectedBackground - Tech background yang terhubung dari hero sampai contact
 * Menciptakan aliran visual tech yang berkelanjutan di seluruh halaman
 */
export default function ConnectedBackground() {
  return (
    <>
      {/* Global styles untuk animasi tech */}
      <style>{`
        @keyframes code-flow { 
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 0.3; }
          50% { opacity: 0.7; }
          90% { opacity: 0.3; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes circuit-pulse { 
          0%, 100% { opacity: 0.2; stroke-dashoffset: 100; }
          50% { opacity: 0.6; stroke-dashoffset: 0; }
        }
        @keyframes binary-rain { 
          0% { transform: translateY(-10px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(50vh); opacity: 0; }
        }
        @keyframes tech-glow { 
          0%, 100% { box-shadow: 0 0 5px currentColor; opacity: 0.4; }
          50% { box-shadow: 0 0 20px currentColor; opacity: 0.8; }
        }
        @keyframes grid-scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>

      {/* Container untuk tech background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Tech grid background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
        
        {/* Scanning lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`scan-${i}`}
              className="absolute w-full h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                animation: `grid-scan ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Binary code rain */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`binary-${i}`}
              className="absolute text-xs font-mono text-green-400/20"
              style={{
                left: `${5 + i * 4.5}%`,
                animation: `binary-rain ${10 + (i % 3) * 2}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {i % 2 === 0 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Tech connection nodes di setiap section */}
        <div className="absolute inset-0">
          {/* Hero tech node */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "15%",
              width: "4px",
              height: "4px",
              background: "#3b82f6",
              animation: "tech-glow 3s ease-in-out infinite",
            }}
          />
          
          {/* About tech node */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "30%",
              width: "4px",
              height: "4px",
              background: "#8b5cf6",
              animation: "tech-glow 3.5s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          />
          
          {/* Services tech node */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "45%",
              width: "4px",
              height: "4px",
              background: "#06b6d4",
              animation: "tech-glow 3.2s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          
          {/* Portfolio tech node */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "60%",
              width: "4px",
              height: "4px",
              background: "#10b981",
              animation: "tech-glow 3.8s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
          
          {/* Team tech node - enhanced visibility dengan warna services */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "80%",
              width: "8px",
              height: "8px",
              background: "#06b6d4",
              borderRadius: "50%",
              boxShadow: "0 0 12px #06b6d440, 0 0 24px #06b6d420",
              animation: "tech-glow 3.4s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
          
          {/* Additional team tech elements dengan warna services */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "78%",
              width: "16px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #06b6d4, transparent)",
              animation: "tech-glow 4s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          />
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{
              top: "82%",
              width: "1px",
              height: "16px",
              background: "linear-gradient(180deg, transparent, #06b6d4, transparent)",
              animation: "tech-glow 3.8s ease-in-out infinite",
              animationDelay: "3s",
            }}
          />
        </div>

        {/* Simple connecting lines */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-400/10 to-transparent transform -translate-x-1/2" />
        
        {/* Side tech elements */}
        <div className="absolute left-4 top-1/4 w-2 h-2 bg-cyan-400/20 transform rotate-45" />
        <div className="absolute right-8 top-1/3 w-1 h-1 bg-purple-400/20 rounded-full" />
        <div className="absolute left-8 bottom-1/3 w-3 h-px bg-green-400/20" />
        <div className="absolute right-4 bottom-1/4 w-1 h-3 bg-blue-400/20" />

      </div>
    </>
  );
}
