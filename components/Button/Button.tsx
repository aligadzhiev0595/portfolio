import React, { FC, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { themeToggled } from '../../redux/themeSlice'
import { BsFillSunFill } from 'react-icons/bs'
import { RiMoonClearFill } from 'react-icons/ri'

import s from './Button.module.scss'

export const Button: FC = () => {
  const dispatch = useAppDispatch()
  const isTheme = useAppSelector((s) => s.theme.isChanged)
  const isMounted = useRef(false)

  if (typeof window !== 'undefined') {
    if (isTheme) {
      document.body.setAttribute('data-theme', 'light')
    } else {
      document.body.setAttribute('data-theme', 'dark')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('isTheme') !== null) {
      dispatch(
        themeToggled(JSON.parse(localStorage.getItem('isTheme') || '{}'))
      )
    }
  }, [dispatch])

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('isTheme', JSON.stringify(isTheme))
    }

    isMounted.current = true
  }, [isTheme])

  const themeToggler = () => {
    dispatch(themeToggled(!isTheme ? true : false))
  }
  return (
    <div className={s.button} onClick={themeToggler}>
      {isTheme ? (
        <RiMoonClearFill className={s.buttonTheme} />
      ) : (
        <BsFillSunFill className={s.buttonTheme} />
      )}
    </div>
  )
}
