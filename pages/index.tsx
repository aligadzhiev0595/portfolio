import { RootLayout } from '../layouts/RootLayout'
import { ReactElement } from 'react'

import type { NextPageWithLayout } from './_app'
import { HomeSection } from '../components'

const Home: NextPageWithLayout = () => {
  return <HomeSection />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout {...page}>{page}</RootLayout>
}

export default Home
