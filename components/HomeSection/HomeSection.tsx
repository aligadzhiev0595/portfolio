import React, { FC } from 'react'
import Image from 'next/future/image'
import { Social } from '../Social/Social'

import * as mac from '/public/notebook.svg'
import s from './HomeSection.module.scss'

export const HomeSection: FC = () => {
  return (
    <section className={s.home}>
      <div className='container'>
        <div className='row'>
          <div className='col col-12'>
            <div className={s.wrapper}>
              <div className={s.wrapperElipse}>
                <Image
                  className={s.wrapperImg}
                  src={mac}
                  alt='macBook'
                  width={320}
                  height={320}
                  priority={true}
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col col-12'>
              <div className={s.wrapper}>
                <h2 className={s.wrapperTitle}>
                  Hello, I&apos;m Gadzhiev Alikhan Frontend Web - Developer
                </h2>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col col-12'>
              <div className={s.wrapper}>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
