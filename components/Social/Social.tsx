import React, { FC } from 'react'
import { FaGitlab } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'

import s from './Social.module.scss'
export const Social: FC = () => {
  return (
      <div className={s.wrapper}>
        <div className={s.wrapperSocial}>
          <div className={s.social}>
            <div className={s.socialTooltip}>GitHub</div>
            <a
              className={s.socialLink}
              href='https://github.com/aligadzhiev0595'
              target='_blank'
              rel='noreferrer'
            >
              <FaGitlab className={s.socialSvg} />
            </a>
          </div>
          <div className={s.social}>
            <div className={s.socialTooltip}>Telegram</div>
            <a
              className={s.socialLink}
              href='https://t.me/hopetodiex'
              target='_blank'
              rel='noreferrer'
            >
              <FaTelegramPlane className={s.socialSvg} />
            </a>
          </div>
          <div className={s.social}>
            <div className={s.socialTooltip}>Phone</div>
            <a className={s.socialLink} href='tel:79250330948'>
              <IoMdCall className={s.socialSvg} />
            </a>
          </div>
        </div>
      </div>
  )
}
