/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b8b5",
        "primary-content": "#000c0c",
        secondary: "#fb7185",
        "secondary-content": "#ffe4e6",
        accent: "#00a2ff",
        "accent-content": "#000a16",
        neutral: "#101700",
        "neutral-content": "#c9cbc4",
        "base-100": "#242424",
        "base-200": "#1e1e1e",
        "base-300": "#181818",
        "base-content": "#cecece",
        info: "#00c9ff",
        "info-content": "#000f16",
        success: "#00e2a6",
        "success-content": "#00120a",
        warning: "#ff9c00",
        "warning-content": "#160900",
        error: "#ff6687",
        "error-content": "#160306",
      },
    },
  },
  plugins: [require("daisyui")],
};
