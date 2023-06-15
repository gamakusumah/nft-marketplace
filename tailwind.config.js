/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "4xl": ["67px", "110%"],
      "3xl": ["51px", "110%"],
      "2xl": ["38px", "120%"],
      xl: ["28px", "140%"],
      lg: ["22px", "140%"],
      base: ["16px", "140%"],
      sm: ["12px", "110%"],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-work-sans)"],
        mono: ["var(--font-space-mono)"],
      },
      colors: {
        prim: "#2B2B2B",
        sec: "#3B3B3B",
        caption: "#858584",
        cta: "#A259FF",
        blueAcc: "#377DF7",
        redAcc: "#FF7262",
      },
    },
  },
  plugins: [],
};
