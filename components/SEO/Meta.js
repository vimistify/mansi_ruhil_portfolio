import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Mansi Ruhil Portfolio - Computer Science Student</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Mansi Ruhil Portfolio - Computer Science Student" />
            <meta name="description"
                content="Mansi Ruhil's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Mansi Ruhil (vimistify)" />
            <meta name="keywords"
                content="vimsitify, mansiruhil's portfolio, mansiruhil linux, ubuntu portfolio, mansiruhil protfolio, mansiruhil, mansi ubuntu" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Mansi Ruhil Portfolio - Computer Science Student" />
            <meta itemProp="description"
                content="Mansi Ruhil's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/fevicon.png" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Mansi Ruhil Portfolio - Computer Science Student" />
            <meta name="twitter:description"
                content="Mansi Ruhil's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="cantexitvim" />
            <meta name="twitter:creator" content="cantexitvim" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Mansi Ruhil Portfolio - Computer Science Student" />
            <meta name="og:description"
                content="Mansi Ruhil's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="https://github.com/vimistify" />
            <meta name="og:site_name" content="Mansi Ruhil Personal Portfolio" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
