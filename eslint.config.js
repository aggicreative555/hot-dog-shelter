import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig({
  env: {
    browser: true,
    es2021: true, 
  },
  extends: [
    'eslint:recommended',            
    'plugin:import/recommended',     
    'plugin:n/recommended',          
    'plugin:promise/recommended',    
    'plugin:prettier/recommended',   
  ],
  
  parserOptions: {
    ecmaVersion: 12,     
    sourceType: 'module', 
  },
  
  plugins: [
    'import',        // Import plugin for managing import/export rules
    'n',             // Node.js plugin (optional)
    'promise',       // Promise plugin for async operations
    'prettier',      // Prettier plugin to enforce formatting rules
  ],

  rules: {
    // Prettier formatting options 
    'prettier/prettier': [
      'error', 
      {
        singleQuote: true,      
        semi: true,             
        trailingComma: 'es5',   
      },
    ],
    // Warn if `console` is used in production
    'no-console': 'warn',
    // Warn if there are unused variables, but allow unused function arguments with underscores
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Disabling the rule for unresolved imports
    'import/no-unresolved': 'off',
  },
});
