import Hero from './../../Component/HomeSectiones/Hero'
import About from './../../Component/HomeSectiones/About'
import Projects from './../../Component/HomeSectiones/Projects'
import Clients from './../../Component/HomeSectiones/Clients'
import Services from './../../Component/HomeSectiones/Services'
import Contact from './../../Component/HomeSectiones/Contact'

export default function Home() {
  return (
    <div className="dark:bg-gray-800 pt-0">
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Services />
      <Contact />
    </div>
  );
}