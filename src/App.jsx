import { useRef } from 'react';
import './App.css'
import { Navbar, Hero, Profile } from './components';

function App() {

  const projectsRef = useRef(null);

  const scrollToElementProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'end'});

  return (
    <>
      <div className="background min-h-screen w-full fixed -z-10"></div>

      <main>

        <section className="w-11/12 lg:w-4/5 m-auto pt-6 md:pt-8 lg:pt-[50px]">
          <Navbar scrollToElementProjects={scrollToElementProjects} />
        </section>

        <section className="w-4/5 m-auto pt-[50px] min-h-screen">
          <Hero />
        </section>

        <section className="w-5/5 min-h-screen flex justify-center items-center bg-dark-purple" id="projects" ref={projectsRef}>
          <Profile />
        </section>

      </main>

    </>
  )
}

export default App
