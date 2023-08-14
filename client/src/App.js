import Main from "./pages/Main";
import Shop from "./pages/Shop";
import User from "./pages/User";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Contact1 from "./pages/Contact1";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact1" element={<Contact1 />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />

          {/* 블로그 */}
          <Route exact path="/blogView/:id" element={<BlogComponent />} />

          {/* 로그인 / 회원가입 */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
