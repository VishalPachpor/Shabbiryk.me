import nextPlugin from "@eslint/js";
import nextConfig from "eslint-config-next";

export default [
  nextPlugin.configs.recommended,
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
];
