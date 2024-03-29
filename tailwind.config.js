/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)'],
      },
      backgroundImage: {
        'titlePC': "url('../public/Images/TitlePC.jpg')",
        'titleCode': "url('../public/Images/TitleCode.jpg')",
      },
    },
  },
  plugins: [],
}
