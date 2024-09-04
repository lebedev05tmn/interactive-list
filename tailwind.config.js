/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        adding: {
          "0%": { transform: "translateX(-20vw)" },
          "100%": { transform: "rotate(0)" },
        },
        delete: {
          "0%": { tranform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      animation: {
        adding: "adding 0.5s ease-in-out",
        delete: "delete 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
