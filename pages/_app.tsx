import { Provider } from 'react-redux'
import store from '../redux/store'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import 'macro-styles'
import '../styles/global.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<any> & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <motion.div
      key={router.route}
      initial='pageInitial'
      animate='pageAnimate'
      transition={{ duration: 1.3,  }}
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </motion.div>
  )
}

export default MyApp
