import React, { FC } from 'react'
import { useRouter } from 'next/router'

import s from './GoBack.module.scss'

export const GoBack: FC = () => {
  const router = useRouter()

  const goBackHandler = () => {
    router.back()
  }
  return (
    <div className={s.goBack} onClick={goBackHandler}>
      Go back...
    </div>
  )
}
