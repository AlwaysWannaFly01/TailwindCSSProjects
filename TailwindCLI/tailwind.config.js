/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d'
            }
        },
        letterSpacing: {
            '1': '0em',
            '2': '0.025em',
            '3': '0.05em',
            '4': '0.1em'
        }
    },
    plugins: []
}