module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',       // Extra small devices
      'sm': '640px',     // Small devices
      'sm-mid': '700px', // Mid-size between sm and md
      'md': '768px',     // Medium devices
      'md-mid': '850px', // Mid-size between md and lg
      'lg': '1024px',    // Large devices
      'lg-mid': '1150px',// Mid-size between lg and xl
      'xl': '1280px',    // Extra large devices
      '2xl': '1536px',   // 2x large devices
    },
    extend: {
      fontFamily: {
        mateSc: ["Mate SC, serif"],
        mate: ["Mate, serif"],
        GowunBatang: ['Gowun Batang, system-ui'],
      },
      backgroundImage: {
        'Background': "url('../src/assets/Images/HomeBg.png')",
        'hero-pattern': "url('../src/Assets/hero-pattern.png')",
      },
    },
  },
  plugins: [],
}
