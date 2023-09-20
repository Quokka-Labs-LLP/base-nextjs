import AppDrawer from '@/components/AppDrawer/AppDrawer'
import AppHeader from '@/components/Header/Header'

import style from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.boxContainer}>
      <AppHeader />
      <AppDrawer />
      <main className={style.childContainer}>{children}</main>
    </div>
  )
}
