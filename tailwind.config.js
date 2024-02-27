/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "my-bg-image" : "url('https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/wallpapers/desktop/2021/2021-dodge-wallpaper-challenger-06.jpg')"
      },
    },
  },
  plugins: [],
};
