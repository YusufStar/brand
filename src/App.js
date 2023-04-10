import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './pages/Home';
import "./Style/global.css"

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="products/:listType" element={<p>Products</p>} />
          <Route path="detail/:productId" element={<p>products detail</p>} />
          <Route path="cart" element={<p>My Cart</p>} />
        </Routes>
        <Footer isnewsletter={true}/>
      </div>
    </BrowserRouter>
  );
}

export default App;