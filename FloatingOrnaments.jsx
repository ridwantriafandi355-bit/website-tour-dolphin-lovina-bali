import React from 'react';

const FloatingOrnaments = () => {
  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-4 pointer-events-none">
      {/* 
        Custom animation 'animate-float' should be defined in your tailwind.config.js:
        theme: {
          extend: {
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-12px)' },
              }
            },
            animation: {
              float: 'float 6s ease-in-out infinite',
            }
          }
        }
        
        Or you can use the built-in 'animate-bounce' if preferred.
      */}

      {/* Ornament 1 */}
      <img
        src="/ornamen bali png/bali.png"
        alt="Ornamen Bali 1"
        className="w-32 h-auto opacity-85 animate-[float_6s_ease-in-out_infinite]"
      // Using arbitrary value animate-[...] as a fallback if tailwind config isn't updated
      />

      {/* Ornament 2 */}
      <img
        src="/ornamen bali png/daun kelapa emas.png"
        alt="Ornamen Bali 2"
        className="w-32 h-auto opacity-85 animate-[float_7s_ease-in-out_infinite_animation-delay-1000ms]"
      />

    </div>
  );
};

export default FloatingOrnaments;
