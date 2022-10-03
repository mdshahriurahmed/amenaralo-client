/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF6600",
          secondary: "#000000",
          accent: "#d1cfcf",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "base-200": "#fff8e0",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
