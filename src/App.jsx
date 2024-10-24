import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Newslatter from './components/Newslatter/Newslatter'
import Players from './components/Players/Players'

function App() {

  const [coin, setCoin] = useState(0)
  const handleClaimFreeCredit =()=>{
        setCoin(coin + 10000000)
  }
  
  return (
   <>
    <div className='w-11/12 m-auto'>
      <Navbar coin={coin}></Navbar>
      <Hero handleClaimFreeCredit={handleClaimFreeCredit}></Hero>
      <Players></Players>
      <Newslatter></Newslatter>
    </div>
      <Footer></Footer>
   </>
  )
}

export default App
