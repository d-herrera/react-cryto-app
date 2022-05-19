
import { ReactElement } from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import CryptoPrice from './features/crypto-price';
import { AppHeader } from './components/Header';


function App():ReactElement {
  return (
    <>
      <AppHeader/>
      <CryptoPrice/>
    </>

  )
}

const AppWrapper = ()=>(
  <Provider store={store}>
      <App/>
  </Provider>
)

export default AppWrapper


