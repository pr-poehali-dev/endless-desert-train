
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1745660162507430918.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				desert: {
					sand: '#E6C587',
					dune: '#D4A76A',
					rock: '#9A7A5A',
					deep: '#E8C087'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'moveLeftSlow': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'moveLeftMedium': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'moveLeftFast': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'rotateWheel': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'dustFloat': {
					'0%': { opacity: '0', transform: 'translateY(0) translateX(0)' },
					'25%': { opacity: '0.7' },
					'75%': { opacity: '0.4' },
					'100%': { opacity: '0', transform: 'translateY(-100px) translateX(200px)' }
				},
				'smokeRise': {
					'0%': { opacity: '0.9', transform: 'translateY(0) scale(1) translateX(0)' },
					'50%': { opacity: '0.5', transform: 'translateY(-30px) scale(1.8) translateX(15px)' },
					'100%': { opacity: '0', transform: 'translateY(-60px) scale(2.5) translateX(30px)' }
				},
				'mirageEffect': {
					'0%': { opacity: '0.1', transform: 'scaleY(0.9) translateY(1px)' },
					'50%': { opacity: '0.2', transform: 'scaleY(1.1) translateY(-1px)' },
					'100%': { opacity: '0.1', transform: 'scaleY(0.9) translateY(1px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'moveLeftSlow': 'moveLeftSlow 120s linear infinite',
				'moveLeftMedium': 'moveLeftMedium 80s linear infinite',
				'moveLeftFast': 'moveLeftFast 30s linear infinite',
				'rotateWheel': 'rotateWheel 0.7s linear infinite',
				'dustFloat': 'dustFloat 12s ease-out infinite',
				'smokeRise': 'smokeRise 3s ease-out forwards',
				'mirageEffect': 'mirageEffect 5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
