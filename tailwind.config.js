/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        buzz: "buzz 2.3s ease-in-out infinite",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },

      keyframes: {
        wiggle: {
          "10%, 90%": {
            origin: "top",
            transform: "rotate(5deg)",
          },

          "20%, 80%": {
            transform: "rotate(-5deg)",
          },

          "30%, 50%, 70%": {
            transform: "rotate(5deg)",
          },

          "40%, 60%": {
            transform: "rotate(-5deg)",
          },
        },
        buzz: {
          "0%": { transform: "translateY(0px)" },
          "5%": { transform: "translateY(1px)" },
          "10%": { transform: "translateY(-1px)" },
          "15%": { transform: "translateY(1px)" },
          "20%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(1px)" },
          "30%": { transform: "translateY(-1px)" },
          "35%": { transform: "translateY(1px)" },
          "40%": { transform: "translateY(0px)" },
          "45%": { transform: "translateY(1px)" },
          "50%": { transform: "translateY(-1px)" },
          "55%": { transform: "translateY(1px)" },
          "60%": { transform: "translateY(0px)" },
          "65%": { transform: "translateY(1px)" },
          "70%": { transform: "translateY(-1px)" },
          "75%": { transform: "translateY(1px)" },
          "80%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
