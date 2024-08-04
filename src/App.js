import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/header';
import Page404 from './pages/404';
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Categoria from './pages/categoria';
import Post from './pages/post';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  // const location = window.location.pathname
  // console.log(location);

  // const router = () =>{
  //   if(location === "/"){
  //     return <Home/>
  //   }
  //   else{
  //     return <Sobre/>
  //   }
  // }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/categoria/:id/*' element={<Categoria/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
