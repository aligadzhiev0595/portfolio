import React, { PropsWithChildren } from 'react'
import { Header } from './Header/Header'
import Head from 'next/head'

interface RootLayoutProps {
  title?: string
}
export const RootLayout = ({
  children,
  title = 'Home',
}: PropsWithChildren<RootLayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={title} />
        <meta name='keywords' content={title} />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}
