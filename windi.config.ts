import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    attributify: true,
    darkMode: 'media',
    plugin: [
        require('@windicss/plugin-question-mark'),
    ],
    preflight: true,
    shortcuts: {
        'glass-morphic': '!bg-clip-padding !backdrop-filter !backdrop-blur-xl bg-opacity-80',
        'glass-border': 'border dark:border-gray-700 border-gray-200',
        'custom-flex-container': 'flex',
        'center-container': 'flex items-center justify-content-center',
    },
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
            serif: ['Montserrat', 'ui-serif', 'Georgia'],
            mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
            accent: ['Rouge Script', 'Open Sans'],
            heading: ['Pacifico', 'Roboto', 'Open Sans'],
            monofett: ['monofett', 'Open Sans'],
        },
    },
});
