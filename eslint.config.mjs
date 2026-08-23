import nextConfig from "eslint-config-next";
import nextTypescript from "eslint-config-next/typescript";

export default [
  ...nextConfig,
  ...nextTypescript,
  {
    settings: {
      react: {
        version: "19.2.8"
      }
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn",
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off"
    }
  }
];
