import './App.css'
import TodoList from './pages/TodoList/TodoList'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  )
}

export default App
