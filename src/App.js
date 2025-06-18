import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './Pages/Main/Main';
import './global.css'
import Cart from './Pages/Cart/Cart';
import News from './Pages/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/news' element={<News/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
