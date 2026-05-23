import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const ASSET_EXTENSIONS = "svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff";
const STYLE_EXTENSIONS = "css|scss|sass|less";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "prettier/prettier": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Node built-ins
            ["^node:"],
            // External packages (npm) — react/next first, then rest
            ["^react", "^next", "^@?\\w"],
            // Internal: lib & config
            ["^@/lib", "^@/config", "^@/constants"],
            // Internal: components
            ["^@/components"],
            // Internal: hooks
            ["^@/hooks"],
            // Internal: utils & helpers
            ["^@/utils", "^@/helpers"],
            // Internal: types
            ["^@/types"],
            // Other internal paths
            ["^@/"],
            // Relative imports
            [
              "^\\.(?!.*\\.(" +
                ASSET_EXTENSIONS +
                "|" +
                STYLE_EXTENSIONS +
                ")$)",
            ],
            // Assets: images & stylesheets (local and alias)
            [
              "^.+\\.(" + ASSET_EXTENSIONS + ")$",
              "^.+\\.(" + STYLE_EXTENSIONS + ")$",
            ],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
