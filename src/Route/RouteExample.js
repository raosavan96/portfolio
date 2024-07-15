import React from 'react'
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function RouteExample() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="no" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteExample;
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/no">no</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
const Home = () => {
  return <h1>Home</h1>;
};

const Blogs = () => {
  return <h1>Blog Articles</h1>;
};
const Contact = () => {
  return <h1>Contact Me</h1>;
};
const NoPage = () => {
  return <h1>404</h1>;
};
