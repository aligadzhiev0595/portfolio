import React, { PropsWithChildren } from 'react'
import Head from 'next/head'

interface PageProps {
  title?: string
}

export const Page = ({
  children,
  title = 'Home',
}: PropsWithChildren<PageProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
