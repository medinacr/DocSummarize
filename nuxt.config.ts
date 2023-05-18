// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        link: [
            {
                rel: "preconnect",
                href: "https://rsms.me/",
            },
            {
                rel: "stylesheet",
                href: "https://rsms.me/inter/inter.css",
            }
        ],
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
            OPEN_API_KEY: process.env.OPEN_API_KEY
        }
    }
})
