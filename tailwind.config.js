/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scrollDown: {
                    '0%': { opacity: 0, transform: 'rotate(45deg) translate(0, 0)' },
                    '50%': { opacity: 1, transform: 'rotate(45deg) translate(5px, 5px)' },
                    '100%': { opacity: 0, transform: 'rotate(45deg) translate(10px, 10px)' },
                },
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
                'float-delay': 'float 3s ease-in-out 1.5s infinite',
                scrollDown: 'scrollDown 2s infinite',
            }
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.animation-delay-200': {
                    'animation-delay': '200ms',
                },
                '.animation-delay-400': {
                    'animation-delay': '400ms',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}