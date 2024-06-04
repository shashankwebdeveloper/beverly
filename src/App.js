import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProductsPage from './components/ProductsPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {

  
  return (
    <div className="app">
{/*      
     <h1 >Elon musk</h1> */}

     <Header/>

     <Router>
     <Routes>
     <Route path="/"  element={<ProductsPage/>} />
          <Route path="/products"  element={<ProductsPage/>} />
          <Route path="/products/:id" element={<Main/>} />
          </Routes>
        </Router>

     {/* <Main/> */}
     {/* <ProductsPage/> */}
    </div>
  );
}

export default App;
