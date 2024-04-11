/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      "2xl": [
        "32px",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "200",
        },
      ],
      "3xl": [
        "3rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
