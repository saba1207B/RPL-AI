/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: 'var(--color-primary)', dark: 'var(--color-primary-dark)', light: 'var(--color-primary-light)' },
        teal: { DEFAULT: 'var(--color-accent)', light: 'var(--color-accent-light)', dark: 'var(--color-accent-dark)' },
        primary: { DEFAULT: 'var(--color-primary)', dark: 'var(--color-primary-dark)', light: 'var(--color-primary-light)' },
        accent: { DEFAULT: 'var(--color-accent)', light: 'var(--color-accent-light)', dark: 'var(--color-accent-dark)' },
        charcoal: '#0a0b12',
        surface: 'var(--color-surface)',
        pageBg: 'var(--color-page-bg)',
        borderClr: 'var(--color-border)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        textMuted: 'var(--color-text-muted)',
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        card: '14px',
      },
    },
  },
  plugins: [],
}
