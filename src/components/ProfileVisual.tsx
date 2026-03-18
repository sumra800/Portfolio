import { useState } from 'react';

export function ProfileVisual() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group w-full max-w-[180px] aspect-[4/5] overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image */}
      <img 
        src="/profile.png" 
        alt="Profile" 
        className={`w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 ${isHovered ? 'scale-105' : 'scale-100'}`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop';
        }}
      />

      {/* Simplified Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* All decorative elements removed for debugging */}
      </div>
    </div>
  );
}
