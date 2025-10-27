/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F2743',
                secondary: '#5A4FCF',
                accent: '#FF6B6B',
            },
            fontFamily: {
                sans: ['Vazirmatn', 'Arial', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            spacing: {
                108: '108px',
            },
        },
    },
    plugins: [],
}
