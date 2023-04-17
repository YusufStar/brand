import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './pages/Home';
import "./Style/global.css"
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="category/:cid/search/:searchTerm" element={<Products Iscategory={true}/>} />
          <Route path="search/:searchTerm" element={<Products Iscategory={false}/>} />
          <Route path="detail/:productId" element={<p>products detail</p>} />
          <Route path="cart" element={<p>My Cart</p>} />
        </Routes>
        <Footer isnewsletter={true}/>
      </div>
    </BrowserRouter>
  );
}

export default App;