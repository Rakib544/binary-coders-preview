module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        SpaceGroteskSemiBold: 'SpaceGroteskSemiBold',
        SpaceGroteskMedium: 'SpaceGroteskMedium',
        SpaceGroteskVariable: 'SpaceGroteskVariable',
        SpaceGroteskRegular: 'SpaceGroteskRegular',
        SpaceGroteskBold: 'SpaceGroteskBold',
        SpaceGroteskLight: 'SpaceGroteskLight',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}

// default paragraph font-color: text-slate-500
// default heading font-color: text-slate-700
