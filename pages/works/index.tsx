import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import { RootLayout } from '../../layouts/RootLayout'
import { WorksSection } from '../../components'
import axios from 'axios'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const workCards = await (
      await axios(`${process.env.API_KEY}/works`)
    ).data

    return {
      props: {
        workCards,
      },
    }
  } catch {
    return {
      props: {
        workCards: null,
      },
    }
  }
}

const Works: NextPageWithLayout = ({
  workCards,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <WorksSection data={workCards} />
}

Works.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout title='Works'>{page}</RootLayout>
}
export default Works
