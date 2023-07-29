import Main from "./pages/Main";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Navigation";
import styled from "styled-components";
import "./App.css";
import BlogComponent from "./components/BlogComponent";

function App() {
  return (
    <BrowserRouter>
      <Div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />

          {/* 블로그 */}
          <Route exact path="/blogView/:id" element={<BlogComponent />} />
        </Routes>
      </Div>
    </BrowserRouter>
  );
}

const Div = styled.div`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`;

export default App;
