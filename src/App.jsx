import "./App.css"
import AboutMe from "./Components/AboutMe"
import MyProjects from './Components/MyProjects'
import Navbar from "./Components/Navbar"

export default function App() {
  return (
    <div>
      <Navbar/>
      <AboutMe/>
      <MyProjects/>
      <MyProjects/>
      <MyProjects/>
    </div>
  )
}
