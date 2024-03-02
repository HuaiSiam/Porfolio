import Profile from './components/Profile';
import './App.css'
import About from './components/About';
import Experience from './components/Experience';

function App() {

  return (
    <div className='main-container grid grid-cols-1 lg:grid-cols-2 xl:gap-5'>
      <div className="lg:py-24 flex flex-col justify-between lg:sticky lg:max-h-screen lg:top-0">
        <Profile />
      </div>

      <div className='pt-24 lg:py-24 main-content'>
        <section id='about'
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
          <About />
        </section>

        <section id='experience'
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
          <Experience />
        </section>
      </div>
    </div>
  )
}

export default App
