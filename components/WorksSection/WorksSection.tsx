import Image from 'next/image'
import Link from 'next/link'
import { IWorks } from '../../interfaces'

import s from './WorksSection.module.scss'

interface WorksProps {
  data: IWorks[]
}

export const WorksSection = ({ data }: WorksProps) => {
  return (
    <section className={s.work}>
      <div className='container'>
        <h2 className='main-title'>Works</h2>
        <div className='row shadow'>
          {data?.map((item) => (
            <div className='col col-4 col-md-6 col-sm-12' key={item.id}>
              <div className={`${s.wrapper} shadow`}>
                <Link href={`/works/${item.id}`}>
                  <a className={s.wrapperLink}>
                    <Image
                      className={s.wrapperImg}
                      src={`/${item.img}.webp`}
                      alt={item.title}
                      height={150}
                      width={270}
                      layout='responsive'
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
              <Link href={`/works/${item.id}`}>
                <a className={s.wrapperBtn}>{item.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
