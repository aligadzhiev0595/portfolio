import React, { ReactElement, useEffect } from 'react'
import { NextPageWithLayout } from './_app'
import { RootLayout } from '../layouts/RootLayout'
import { AboutSection } from '../components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import axios from 'axios'
import { useAppDispatch } from '../redux/hooks'
import { addTabsData } from '../redux/tabsSlice'
import { addSkillsData } from '../redux/skillsSlice'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const tabs = await (await axios(`${process.env.API_KEY}/tabs`)).data
    const skills = await (await axios(`${process.env.API_KEY}/skills`)).data
  
    return {
      props: {
        tabs,
        skills,
      },
    }
  } catch {
    return {
      props: {
        tabs: null,
        skills: null,
      },
    }
  }

}

const About: NextPageWithLayout = ({
  tabs,
  skills,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(addTabsData(tabs))
    dispatch(addSkillsData(skills))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AboutSection />
}

About.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout title='About me'>{page}</RootLayout>
}
export default About
