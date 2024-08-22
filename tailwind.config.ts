import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['noto-sans']
  },
  plugins: [],
} satisfies Config;
