import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'

function App() {

  return (
    <div className='w-11/12 m-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Players></Players>
    </div>
  )
}

export default App
