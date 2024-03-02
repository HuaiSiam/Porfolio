import Profile from './components/Profile';
import './App.css'
import About from './components/About';
import Experience from './components/Experience';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [itemactive, setitemactive] = useState('about');
  const sectionRefs = useRef([] as any);

  useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        // Find the active section based on scroll position
        const newActiveSection = sectionRefs.current.find((item:any) => {
          return scrollPosition <= item.offsetTop
        });

        setitemactive(newActiveSection.id)
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleCallback = (childData:any) => setitemactive(childData);

  return (
    <div className='main-container grid grid-cols-1 lg:grid-cols-2 xl:gap-5'>
      <div className="lg:py-24 flex flex-col justify-between lg:sticky lg:max-h-screen lg:top-0">
        <Profile isActive={itemactive} parentCallback={handleCallback} />
      </div>

      <div className='pt-24 lg:py-24 main-content'>
        <section id='about' ref={ref => ref?.offsetTop!=undefined ? (sectionRefs.current[0] = { id: 'about', ref, offsetTop: ref.offsetTop }) : null}
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
          <About />
        </section>

        <section id='experience' ref={ref => ref?.offsetTop!=undefined ? (sectionRefs.current[1] = { id: 'experience', ref, offsetTop: ref.offsetTop }) : null}
        className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
          <Experience />
        </section>
      </div>
    </div>
  )
}

export default App
