import React from "react";

interface TechBackgroundProps {
  variant?: 'hero' | 'about' | 'services' | 'portfolio' | 'team' | 'contact';
  intensity?: 'low' | 'medium' | 'high';
}

/**
 * TechBackground - Background tech untuk setiap section
 * Bisa dikustomisasi per section dengan variant dan intensity
 */
export default function TechBackground({ 
  variant = 'hero', 
  intensity = 'medium' 
}: TechBackgroundProps) {
  
  const getVariantConfig = () => {
    const configs = {
      hero: {
        primaryColor: '#3b82f6',
        secondaryColor: '#1e40af',
        pattern: 'circuit',
        elements: ['grid', 'scan', 'particles']
      },
      about: {
        primaryColor: '#8b5cf6',
        secondaryColor: '#6d28d9',
        pattern: 'hexagon',
        elements: ['grid', 'dots', 'lines']
      },
      services: {
        primaryColor: '#06b6d4',
        secondaryColor: '#0891b2',
        pattern: 'matrix',
        elements: ['binary', 'scan', 'grid']
      },
      portfolio: {
        primaryColor: '#10b981',
        secondaryColor: '#059669',
        pattern: 'nodes',
        elements: ['connections', 'dots', 'flow']
      },
      team: {
        primaryColor: '#f59e0b',
        secondaryColor: '#d97706',
        pattern: 'network',
        elements: ['nodes', 'connections', 'pulse']
      },
      contact: {
        primaryColor: '#ef4444',
        secondaryColor: '#dc2626',
        pattern: 'terminal',
        elements: ['scan', 'binary', 'grid']
      }
    };
    return configs[variant];
  };

  const config = getVariantConfig();
  const opacityLevel = intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.2 : 0.3;

  return (
    <>
      <style>{`
        @keyframes tech-scan-${variant} { 
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: ${opacityLevel * 2}; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes tech-pulse-${variant} { 
          0%, 100% { opacity: ${opacityLevel}; transform: scale(1); }
          50% { opacity: ${opacityLevel * 3}; transform: scale(1.1); }
        }
        @keyframes tech-flow-${variant} { 
          0% { transform: translateX(-20px); opacity: 0; }
          50% { opacity: ${opacityLevel * 2}; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Grid pattern berdasarkan variant */}
        {config.elements.includes('grid') && (
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: variant === 'services' 
                ? `
                  linear-gradient(${config.primaryColor}${Math.round(opacityLevel * 255).toString(16)} 1px, transparent 1px),
                  linear-gradient(90deg, ${config.primaryColor}${Math.round(opacityLevel * 255).toString(16)} 1px, transparent 1px)
                `
                : variant === 'about'
                ? `radial-gradient(circle at 20px 20px, ${config.primaryColor}${Math.round(opacityLevel * 255).toString(16)} 1px, transparent 1px)`
                : `
                  linear-gradient(${config.primaryColor}${Math.round(opacityLevel * 255).toString(16)} 1px, transparent 1px),
                  linear-gradient(90deg, ${config.primaryColor}${Math.round(opacityLevel * 255).toString(16)} 1px, transparent 1px)
                `,
              backgroundSize: variant === 'about' ? '40px 40px' : '25px 25px',
            }}
          />
        )}

        {/* Scanning lines */}
        {config.elements.includes('scan') && (
          <div className="absolute inset-0">
            <div
              className="absolute w-full h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`,
                animation: `tech-scan-${variant} ${8 + (variant.length % 3) * 2}s linear infinite`,
                animationDelay: `${(variant.charCodeAt(0) % 3)}s`,
              }}
            />
          </div>
        )}

        {/* Binary rain (untuk services dan contact) */}
        {config.elements.includes('binary') && (
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`binary-${i}`}
                className="absolute text-xs font-mono"
                style={{
                  left: `${10 + i * 10}%`,
                  color: config.primaryColor,
                  opacity: opacityLevel,
                  animation: `tech-flow-${variant} ${12 + i * 2}s linear infinite`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} style={{ marginBottom: '8px' }}>
                    {(i + j) % 2 === 0 ? '1' : '0'}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Tech dots (untuk about, portfolio, team) */}
        {config.elements.includes('dots') && (
          <div className="absolute inset-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  backgroundColor: config.primaryColor,
                  animation: `tech-pulse-${variant} ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Connection lines (untuk portfolio dan team) */}
        {config.elements.includes('connections') && (
          <div className="absolute inset-0">
            <svg className="w-full h-full" style={{ opacity: opacityLevel }}>
              <defs>
                <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'transparent' }} />
                  <stop offset="50%" style={{ stopColor: config.primaryColor }} />
                  <stop offset="100%" style={{ stopColor: 'transparent' }} />
                </linearGradient>
              </defs>
              <path
                d="M 0,50 Q 150,20 300,50 T 600,50"
                stroke={`url(#gradient-${variant})`}
                strokeWidth="1"
                fill="none"
                strokeDasharray="5,5"
                style={{
                  animation: `tech-pulse-${variant} 4s ease-in-out infinite`,
                }}
              />
            </svg>
          </div>
        )}

        {/* Floating particles (untuk hero) */}
        {config.elements.includes('particles') && (
          <div className="absolute inset-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2"
                style={{
                  left: `${25 + i * 20}%`,
                  top: `${40 + (i % 2) * 20}%`,
                  background: `radial-gradient(circle, ${config.primaryColor}, transparent)`,
                  animation: `tech-pulse-${variant} ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Flow elements (untuk portfolio) */}
        {config.elements.includes('flow') && (
          <div className="absolute inset-0">
            <div
              className="absolute h-px w-20"
              style={{
                top: '60%',
                background: `linear-gradient(90deg, transparent, ${config.primaryColor}, transparent)`,
                animation: `tech-flow-${variant} 6s linear infinite`,
              }}
            />
          </div>
        )}

        {/* Pulse center (untuk team) */}
        {config.elements.includes('pulse') && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: `radial-gradient(circle, ${config.primaryColor}, transparent)`,
                animation: `tech-pulse-${variant} 3s ease-in-out infinite`,
              }}
            />
            {/* Additional network nodes for team */}
            {variant === 'team' && (
              <>
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '20%',
                    top: '30%',
                    background: config.primaryColor,
                    opacity: opacityLevel * 3,
                    animation: `tech-pulse-${variant} 2.5s ease-in-out infinite`,
                    animationDelay: '0.5s',
                  }}
                />
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    right: '20%',
                    top: '40%',
                    background: config.primaryColor,
                    opacity: opacityLevel * 3,
                    animation: `tech-pulse-${variant} 2.8s ease-in-out infinite`,
                    animationDelay: '1s',
                  }}
                />
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '30%',
                    bottom: '30%',
                    background: config.primaryColor,
                    opacity: opacityLevel * 3,
                    animation: `tech-pulse-${variant} 3.2s ease-in-out infinite`,
                    animationDelay: '1.5s',
                  }}
                />
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    right: '30%',
                    bottom: '40%',
                    background: config.primaryColor,
                    opacity: opacityLevel * 3,
                    animation: `tech-pulse-${variant} 2.3s ease-in-out infinite`,
                    animationDelay: '2s',
                  }}
                />
              </>
            )}
          </div>
        )}

      </div>
    </>
  );
}
