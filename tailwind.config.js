module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '0px',       // Extra small devices
      'sm': '640px',     // Small devices
      'md': '768px',     // Medium devices
      'lg': '1024px',    // Large devices
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
