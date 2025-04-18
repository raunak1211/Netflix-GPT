import Body from './components/Body'
import {Provider} from 'react-redux'
import AppStore from './Utilities/AppStore'
import {useEffect} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './Utilities/firebase'
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from './Utilities/userSlice'

function App() {

  
  return (
    <Provider store={AppStore}>
      <Body/>
    </Provider>
  )
}

export default App
