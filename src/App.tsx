import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import TypeTestContainer from './components/Typing  Text/TypeTextContainer'
function App() {
  return (
    <div className='flex justify-center'>
      <div className='wrapper'>
        <div className=''>
          <NavBar></NavBar>
        </div>
        <TypeTestContainer></TypeTestContainer>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
