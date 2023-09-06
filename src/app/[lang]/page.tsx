import { getDictionary } from '../../../get-dictionary'
import type { Locale } from '../../../i18n-config'
import LocaleSwitcher from './components/locale-switcher'
import styles from './page.module.css'

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>This text is rendered on the server: {dictionary['server-component'].welcome}</p>
      </div>
    </main>
  )
}
