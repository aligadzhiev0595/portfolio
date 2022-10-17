import React from 'react'
import Image from 'next/future/image'

import s from './WorkCard.module.scss'
import { GoBack } from '../GoBack/GoBack'

interface WorksProps {
  title: string
  img: string
  href: string
  stack: string
  descr: string
  created: string
}

export const WorkCard = ({
  title,
  img,
  href,
  stack,
  descr,
  created,
}: WorksProps) => {
  return (
    <section className={s.workCard}>
      <div className='container'>
        <div className='row'>
          <div className='col col-12'>
            <div className={s.wrapper}>
              <div className={s.wrapperInfo}>
                <div className='d-flex j-between'>
                  <h1>{title}</h1>
                  <GoBack />
                </div>
                <hr />
                <p>{descr}</p>
                <p>
                  Technologies Used - <span>{stack}</span>
                </p>
                <p>
                  Created - <span>{created}</span>
                </p>
                <p>
                  View Online -{' '}
                  <a href={href} target='_blank' rel='noreferrer'>
                    {href}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='col col-12'>
            <div className={s.wrapper}>
              <Image
                className={s.wrapperImg}
                src={`/${img}.webp`}
                alt={title}
                height={384}
                width={384}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
