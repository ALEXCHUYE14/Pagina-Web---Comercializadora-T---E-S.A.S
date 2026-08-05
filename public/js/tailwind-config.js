/* =====================================================================
   TAILWIND CONFIG — tokens de color, tipografía y radios de la marca
   ===================================================================== */

    tailwind.config = {
      theme: {
        extend: {
          colors: {
            /* Paleta blanco / gris suave — sin azul, tono neutro (zinc) más cálido que el negro puro. */
            navy:   { DEFAULT: '#27272A', 900: '#27272A', 800: '#3F3F46' },
            accent: { DEFAULT: '#52525B', bright: '#71717A', 700: '#52525B' },
            slate:  { 600: '#525252', 500: '#737373' },
            surface:{ DEFAULT: '#FFFFFF', muted: '#F7F7F7' },
            ok:     '#10B981',
            warn:   '#F59E0B',
            danger: '#EF4444',
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
          },
          borderRadius: { lg: '8px', xl: '12px' },
          boxShadow: {
            sm: '0 1px 2px 0 rgba(0,0,0,0.04)',
            md: '0 4px 12px -2px rgba(0,0,0,0.06)',
          },
        },
      },
    };
