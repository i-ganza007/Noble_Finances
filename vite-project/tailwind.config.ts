/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

 export default {
    content:[
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme:{
        extend:{
            colors:{
                background:{
                    "100":"#A0F1BD",
                    "200":"#F9F9F9",
                    "300":"#2E4F21",
                    "400":"#FFFFFF",
                    "500":"#F4F7F5",
                    "600":"#D2F8DC"
                },
                accent:{
                    "100":"#D2F8DC",
                    "200":"#D7D7D7",
                },
                hug:{
                    "100":"#2E4F21",
                    "200":"#FFFFFF",
                    "300":"#506349",
                    "400":"#7D9276",
                    "500":"#D5E4D0"
                },
                divider:{
                    "100":"#2E4F21",
                    "200":"#C7C7C7"
                }
            }
        }
    },
    plugins:[]
 } satisfies Config