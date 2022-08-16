import { Route, Routes} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Writeups from './pages/Writeups'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import Error from './pages/Error'


function App() {
  return (
    <div className="App">
    
    <Header/>
    <Routes>
      <Route path="/" element= {<AboutMe/>}></Route>
      <Route path="/writeups/:slug" element= {<SinglePost/>}></Route>
      <Route path="/writeups" element= {<Writeups/>}></Route>
      <Route path="/contact" element= {<Contact/>}></Route>
      <Route path="/*" element= {<Error/>}></Route>
    </Routes>

    {/*<Footer/>*/}

    </div>
   
  );
}

export default App;
