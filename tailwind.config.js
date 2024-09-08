/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#001f3f",
        "custom-light-gray": "#f4f1fa", // Add your custom color here
      },
    },
  },
  plugins: [],
};
