let warned = false

module.exports = {
    black: '#000',
    white: '#fff',
    padiColor: {
        deepBlue : '#004aad'
    },

    get lightBlue() {
        if (!warned) {
            console.log('warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.')
            console.log('warn - Please update your color palette to eliminate this warning.')
            warned = true
        }
        return {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
        }
    },

}
