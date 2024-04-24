import Navbar from './components/Navbar'
import Carosel from './components/Carosel'
import "./App.css";
import Card from './components/Card';
import About from './components/About'
import Footer from './components/Footer';
// import { BrowserRouter,
//          Switch,
//          Route,
//          Routes,
//          Link} from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar/>
   <Carosel/>
   <Card/>
   {/* <BrowserRouter>
   <Switch>
   <Route path='/about' element ={<About/>}>
   </Route>
   </Switch>
   </BrowserRouter> */}
   <About/>
   <Footer/>
   </>
  );
}

export default App;
