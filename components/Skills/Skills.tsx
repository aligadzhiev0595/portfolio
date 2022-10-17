import React, { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'

import s from './Skills.module.scss'
export const Skills: FC = () => {
  const data = useAppSelector((s) => s.skills.dataSkills)
  return (
    <>
      <h2 className='main-title'>My skills</h2>
      <div className='row shadow'>
        <div className='col col-12'>
          <div className={s.wrapper}>
            {data?.map((item, idx) => (
              <p className={s.wrapperItem} key={idx}>
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
