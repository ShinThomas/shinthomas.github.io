/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        cream: '#fbf7ef',
        sage: {
          50: '#f2f6ef',
          100: '#e4ecdc',
          200: '#cbdcc0',
        },
        lavender: {
          50: '#f6f2fb',
          100: '#ede5f6',
          200: '#dacceb',
        },
        peach: {
          50: '#fff2eb',
          100: '#f8ded1',
        },
      },
      boxShadow: {
        soft: '0 16px 40px rgba(92, 82, 70, 0.08)',
      },
    },
  },
  plugins: [],
};
