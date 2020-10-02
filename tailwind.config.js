module.exports = {
    purge: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                black: '#101318',
                white: '#eaeaea',
                accent: {
                    300: '#a3eafd',
                    400: '#82e2fc',
                    500: '#61dafb',
                    600: '#40d2fa',
                    700: '#1fcaf9'
                }
            },
        },
    },
    variants: {},
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};
