/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	screens: {
  		sm: '576px',
  		md: '768px',
  		md1: '885px',
  		lg: '992px',
  		xl: '1200px',
  		xxl: '1400px'
  	},
  	extend: {
  		fontFamily: {
  			PlusJakartaSans: [
  				'Plus Jakarta Sans',
  				'sans-serif'
  			],
  			DmSans: [
  				'DM Sans',
  				'sans-serif'
  			],
  			GeneralSans: [
  				'General Sans',
  				'sans-serif'
  			],
  			Cabin: [
  				'Cabin',
  				'sans-serif'
  			],
  			PublicSans: [
  				'Public Sans',
  				'sans-serif'
  			],
  			Syne: [
  				'Syne',
  				'sans-serif'
  			],
  			ClashDisplay: [
  				'Clash Display',
  				'sans-serif'
  			],
  			Kanit: [
  				'Kanit',
  				'sans-serif'
  			],
  			Sora: [
  				'Sora',
  				'sans-serif'
  			],
  			Outfit: [
  				'Outfit',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'sans-serif'
  			],
  			FontAwesome: [
  				'Font Awesome 6 Pro'
  			]
  		},
  		colors: {
  			ColorDark: '#191919',
  			ColorBlack: '#010202',
  			ColorBlue: '#3147FF',
  			ColorOffWhite: '#FAF9F5',
  			ColorPurple: '#A259FF',
  			ColorBluePurple: '#7949F6',
  			ColorYellow: '#F39B03',
  			ColorViolet: '#4B2AAD',
  			ColorAtomicTangerine: '#FF9966',
  			ColorLime: '#C1FF00',
  			ColorLunarGreen: '#324438',
  			ColorAlmond: '#EBDECE',
  			ColorCorn: '#F4B905',
  			ColorOil: '#221F1A',
  			ColorPaleGold: '#FFD874',
  			ColorEggSour: '#FFF4D9',
  			ColorDenimDarkBlue: '#2D2B92',
  			ColorCaribbeanGreen: '#15CF92',
  			ColorMidnightMoss: '#010D09',
  			ColorHoneySuckle: '#E9FF97',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss"), require("autoprefixer"), require("tailwindcss-animate")],
};
