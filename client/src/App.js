import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
