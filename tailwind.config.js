/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./functions/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#1F2421",
        canopy: "#245C4A",
        spice: "#C7572D",
        turmeric: "#D9A441",
        lagoon: "#1D7A8C",
        rice: "#F5F1E8",
        mist: "#E6ECE8"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(31, 36, 33, 0.14)"
      }
    }
  },
  plugins: []
};
