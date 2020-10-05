module.exports = {
    purge: ['./src/**/*.tsx'],
    theme: {
        extend: {
            fontSize: {
                hero: '20rem',
            },
            colors: {
                black: '#101318',
                white: '#eaeaea',
                'white-o-50': 'rgba(234,234,234,0.5)',
                gray: {
                    100: '#b3bcca',
                    200: '#9faabc',
                    300: '#8b98af',
                    400: '#7786a1',
                    500: '#657591',
                    600: '#57657d',
                    700: '#495569',
                    800: '#3b4555',
                    900: '#2d3441',
                },
                accent: {
                    100: '#e6f9fe',
                    200: '#c4f1fe',
                    300: '#a3eafd',
                    400: '#82e2fc',
                    500: '#61dafb',
                    600: '#40d2fa',
                    700: '#1fcaf9',
                    800: '#06bef0',
                    900: '#05a4cf',
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
