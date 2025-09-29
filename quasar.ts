import { App } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/material-icons'

// Importa CSS compilado
import 'quasar/dist/quasar.css'

export default (app: App) => {
  app.use(Quasar, {
    plugins: {},
    lang: quasarLang,
    iconSet: quasarIconSet
  })
}
