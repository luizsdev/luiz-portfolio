/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
      },
      animation: {
        "cursor-blink": "blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  daisyui: {
    themes: ["light", "cupcake", "dracula"],
  },
  plugins: [require("daisyui")],
};
