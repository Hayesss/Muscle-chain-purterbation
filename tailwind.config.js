/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        evidence: {
          A: '#10B981',
          B: '#3B82F6',
          C: '#F59E0B',
          D: '#EF4444',
        },
        muscle: {
          highlight: '#FF6B35',
          trigger: '#D32F2F',
          chain: {
            sbl: '#E53935',
            sfl: '#43A047',
            ll: '#FB8C00',
            sl: '#8E24AA',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
