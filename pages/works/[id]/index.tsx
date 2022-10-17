import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../../_app'
import { IWorks } from '../../../interfaces'
import { RootLayout } from '../../../layouts/RootLayout'

import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import axios from 'axios'
import { ParsedUrlQuery } from 'querystring'
import { WorkCard } from '../../../components/'

export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async () => {
  try {
    const workCards = await (await axios(`${process.env.API_KEY}/works`)).data

    const paths = workCards.map((el: any) => ({
      params: {
        id: el.id,
      },
    }))
    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const workCard = await (
      await axios(`${process.env.API_KEY}/works/${params?.id}/`)
    ).data

    return {
      props: {
        workCard,
      },
    }
  } catch {
    return {
      props: {
        workCard: null,
      },
    }
  }
}

const Card: NextPageWithLayout = ({
  workCard,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {workCard?.map((item: IWorks) => (
        <WorkCard {...item} key={item.id} />
      ))}
    </>
  )
}

Card.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout title='Work'>{page}</RootLayout>
}
export default Card
