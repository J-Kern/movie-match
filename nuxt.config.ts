import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    css: [
        'virtual:windi.css'
    ],
    nitro: {
        preset: 'cloudflare'
    },
    windicss: {
        scan: {
            dirs: ['./'],
            exclude: [
                'node_modules',
                'dist',
            ],
        },
    }
})
