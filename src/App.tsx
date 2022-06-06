import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { TechList } from './components/TechList/TechList'
import { UserLayout } from './layouts/UserLayout/UserLayout'
import "typeface-allerta-stencil"

export const App = () => {
  return (
    <CssBaseline>
      <BrowserRouter>
        <UserLayout>
          <TechList />
        </UserLayout>
      </BrowserRouter>
    </CssBaseline>
  )
}
