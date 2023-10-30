import * as React from 'react'
import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import '../shared/styles/globals.css'
import '../shared/styles/colors.css'
import '../shared/styles/typography.css'

export const metadata: Metadata = {
    description: 'Organizations overview app',
    metadataBase: null,
    title: 'Organizations App',
}

const proximaNovaFont = localFont({
    display: 'swap',
    src: [
        {
            path: '../../public/fonts/Proxima-Nova-Regular.ttf',
            weight: '500',
        },
    ],
    variable: '--font-proximaNova',
})

export default function RootLayout(props: PropsWithChildren) {
    const { children } = props

    return (
        <html
            className={proximaNovaFont.className}
            lang="en"
        >
            <body>{children}</body>
        </html>
    )
}
