// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import 'shared/config/i18n/i18n'
import { Suspense } from 'react'
import { PageLoader } from 'widgets'

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={<PageLoader/>}>
        <App/>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
