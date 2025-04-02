import { defineConfig } from "eslint/config";

export default defineConfig([
	{        
        rules: {
        // Basic code style rules
        "semi": ["error", "always"],  // Always require semicolons
        "quotes": ["error", "single"],  // Enforce single quotes for strings
        "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],  // Warn on unused variables except those starting with "_"
        "indent": ["error", 2],  // Enforce 2 spaces for indentation
        "linebreak-style": ["error", "unix"],  // Enforce UNIX linebreaks (\n)
        "no-console": "warn",  // Warn on console usage
        "no-debugger": "warn",  // Warn on debugger usage
        "eqeqeq": ["error", "always"],  // Enforce strict equality (===)
        },
	},
]);