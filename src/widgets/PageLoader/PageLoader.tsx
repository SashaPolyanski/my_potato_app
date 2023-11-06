import cls from './PageLoader.module.scss'
import { Preloader } from 'widgets'

export const PageLoader = () => {
  return (
    <div className={cls.pageLoader}>
      <Preloader/>
    </div>
  )
}
