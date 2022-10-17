import React, { FC, useState } from 'react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { burgerToggled } from '../../redux/burgerSlice'
import { Button } from '../../components'

import s from './Header.module.scss'
import { useRouter } from 'next/router'

interface IRoutes {
  route: string
  routeName: string
}
;[]

export const Header: FC = () => {
  const dispatch = useAppDispatch()
  const isOpened = useAppSelector((s) => s.burger.isOpened)
  const [routes] = useState<IRoutes[]>([
    { route: '/', routeName: 'Home' },
    { route: '/about', routeName: 'About' },
    { route: '/works', routeName: 'Works' },
  ])
  const { asPath } = useRouter()

  const burgerOpen = () => {
    dispatch(burgerToggled(!isOpened))
    document.body.classList.toggle('overflow')
  }
  const burgerClose = () => {
    dispatch(burgerToggled(false))
    document.body.classList.remove('overflow')
  }

  return (
    <header className={`${s.header}`}>
      <div className='container'>
        <div className={`${s.cleanFlex} d-flex j-center a-center`}>
          <nav
            className={[isOpened ? `${s.active} ${s.nav}` : s.nav].join(' ')}
          >
            <ul className={s.navList}>
              {routes.map((item, idx) => (
                <li key={idx} className={s.navItem} onClick={burgerClose}>
                  <Link href={item.route}>
                    <a
                      className={
                        asPath === item.route ? `${s.activeRoute}` : ''
                      }
                    >
                      {item.routeName}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button />
        </div>
        <div
          className={[
            isOpened ? `${s.active} ${s.burger}` : `${s.burger}`,
          ].join(' ')}
          onClick={burgerOpen}
        >
          <span className={s.burgerLine}></span>
        </div>
      </div>
    </header>
  )
}
