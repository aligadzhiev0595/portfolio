import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setTabs } from '../../redux/tabsSlice'

import s from './Tabs.module.scss'

export const Tabs: FC = () => {
  const dispatch = useAppDispatch()
  const { dataTabs, tabs } = useAppSelector((s) => s.tabs)
  return (
    <>
      <div className={s.tabsBtns}>
        <button
          onClick={() => dispatch(setTabs('Education'))}
          className={[
            tabs === 'Education' ? `${s.active} ${s.tabsBtn}` : `${s.tabsBtn}`,
          ].join(' ')}
        >
          {'Education'}
        </button>
        <button
          onClick={() => dispatch(setTabs('Experience'))}
          className={[
            tabs === 'Experience' ? `${s.active} ${s.tabsBtn}` : `${s.tabsBtn}`,
          ].join(' ')}
        >
          {'Experience'}
        </button>
      </div>
      <div className='row shadow'>
        <div className={s.timeLine}>
          {dataTabs
            ?.filter((meta) => meta.meta === tabs)
            ?.map((item, idx) => (
              <div className={s.tabsItem} key={idx}>
                <span>{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
