// vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi: {
        chevronLeft: mdiChevronLeft,
        chevronRight: mdiChevronRight
      }
    }
  }
})