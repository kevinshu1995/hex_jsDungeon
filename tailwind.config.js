const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./app/**/*.pug'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
        },
        colors: {
            transparent: 'transparent',
            warmGray: colors.warmGray,
            white: colors.white,
            black: colors.black,
            primary: colors.amber,
        },
        fontFamily: {
            sans: ['sans-serif'],
            serif: ['serif'],
            body: ['"Noto Serif TC"', 'serif'],
        },
        extend: {
            zIndex: {
                1000: '1000',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-focus', 'group-hover'],
            padding: ['group-hover'],
        },
    },
    plugins: [],
}
