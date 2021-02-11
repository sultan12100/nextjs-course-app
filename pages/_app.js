import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../src/components/Nav'
// import '../src/styles.css'
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
