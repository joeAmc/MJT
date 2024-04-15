/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-gradient-to-l":
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
      },
    },
  },
  plugins: [],
};
