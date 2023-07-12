import Router from './router/Router'
import Header from './components/Header'
import Main from './components/Main'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main><Router /></Main>
    </div>
  )
}

export default App
