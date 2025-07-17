import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./components/pages/AdminLogin";
import ChangePassword from "./components/pages/ChangePassword";
import Dashboard from "./components/pages/Dashboard";
import Authors from "./authors/Authors";
import AuthorCreate from "./authors/AuthorCreate";
import AuthorEdit from "./authors/AuthorEdit";
import Categories from "./categories/Categories";
import CategoryCreate from "./categories/CategoryCreate";
import CategoryEdit from "./categories/CategoryEdit";
import Publishers from "./publishers/Publishers";
import PublisherCreate from "./publishers/PublisherCreate";
import PublisherEdit from "./publishers/PublisherEdit";
import Books from "./books/Books";
import BookCreate from "./books/BookCreate";
import BookEdit from "./books/BookEdit";
import Users from "./users/Users";
import NavBar from "./components/navBar/NavBar";
import Policy from "./components/pages/Policy";
import NotFound from "./components/pages/NotFound";
import ServerFailed from "./components/pages/ServerFailed";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const hideNavBarPaths = ["/", "/server-failed"];
  const shouldHideNavBar = hideNavBarPaths.includes(location.pathname);
  return (
    <div className="app">
      {!shouldHideNavBar && (
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      {!menuOpen && (
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/create" element={<AuthorCreate />} />
          <Route path="/authors/:id/edit" element={<AuthorEdit />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
          <Route path="/categories/:id/edit" element={<CategoryEdit />} />
          <Route path="/publishers" element={<Publishers />} />
          <Route path="/publishers/create" element={<PublisherCreate />} />
          <Route path="/publishers/:id/edit" element={<PublisherEdit />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/create" element={<BookCreate />} />
          <Route path="/books/:id/edit" element={<BookEdit />} />
          <Route path="/users" element={<Users />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/server-failed" element={<ServerFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
