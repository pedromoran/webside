/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
        // sm	640px
        // md	768px
        // lg	1024px
        // xl	1280px
        // 2xl	1536px
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "21px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[36px] sm:text-[40px] font-medium": {} },
        h2: { "@apply text-[24px] sm:text-[28px] font-medium": {} },
        h3: { "@apply text-[20px] sm:text-[24px] font-medium": {} },
        h4: { "@apply text-[14px] sm:text-[16px] font-bold": {} },
        ".container-xs": { "@apply w-[95%] md:w-[80%] mx-auto max-w-[1120px]": {} },
        ".container-sm": { "@apply w-[91%] mx-auto max-w-[1120px]": {} },
        ".container": { "@apply w-[87%] md:w-[80%] mx-auto max-w-[1120px]": {} },
        ".flex-center": { "@apply flex items-center justify-center": {} },
        body: { "@apply text-md": {} },
      });
    },
  ],
};
