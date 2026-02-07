import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./layouts/login/AdminLogin";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "pages/Dashboard";
import {AuthorCreate, AuthorEdit, Authors} from "features/authors";
import {CategoryCreate, CategoryEdit, Categories} from "features/categories";
import {PublisherCreate, PublisherEdit, Publishers} from "features/publishers";
import {BookCreate, BookEdit, Books} from "features/books";
import Users from "./features/users/pages/Users";
import NavBar from "./components/navBar/NavBar";
import Policy from "./pages/Policy";
import NotFound from "./pages/not-found/NotFound";
import ServerFailed from "./pages/server-failed/ServerFailed";

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
          <Route path="/publishers/" element={<Publishers />} />
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
