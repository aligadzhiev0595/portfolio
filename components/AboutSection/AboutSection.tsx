import React, { FC } from 'react'
import Image from 'next/future/image'

import { Skills } from '../Skills/Skills'
import { Tabs } from '../Tabs/Tabs'

import avatar from '/public/avatar.jpeg'
import s from './AboutSection.module.scss'

export const AboutSection: FC = () => {
  return (
    <section className={s.aboutMe}>
      <div className='container'>
        <h2 className='main-title'>About-me</h2>
        <div className={`${s.rowReverse} row shadow`}>
          <div className='col col-8 col-lg-7 col-md-12'>
            <div className={s.wrapper}>
              <p className={s.wrapperTitle}>
                I started to get into programming at the age of 16. I studied
                various basic spheres at university and finally settled on Web
                development, and now I fully dedicate myself to this direction.
              </p>
              <a className={s.wrapperBtn} download href='/CV.pdf'>
                Download CV
              </a>
            </div>
          </div>
          <div className='col col-4 col-lg-5 col-md-12'>
            <div className={s.wrapper}>
              <div className={s.wrapperImg}>
                <Image
                  className={s.img}
                  src={avatar}
                  alt='me'
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        <Skills />
        <Tabs />
      </div>
    </section>
  )
}
