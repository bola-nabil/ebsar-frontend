import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./layouts/login/AdminLogin";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Authors from "./features/authors/pages/Authors";
import AuthorCreate from "./features/authors/pages/AuthorCreate";
import AuthorEdit from "./features/authors/pages/AuthorEdit";
import Categories from "./features/categories/pages/Categories";
import CategoryCreate from "./features/categories/pages/CategoryCreate";
import CategoryEdit from "./features/categories/pages/CategoryEdit";
import Publishers from "./features/publishers/pages/Publishers";
import PublisherCreate from "./features/publishers/pages/PublisherCreate";
import PublisherEdit from "./features/publishers/pages/PublisherEdit";
import Books from "./features/books/pages/Books";
import BookCreate from "./features/books/pages/BookCreate";
import BookEdit from "./features/books/pages/BookEdit";
import Users from "./features/users/pages/Users";
import NavBar from "./components/navBar/NavBar";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
import ServerFailed from "./pages/ServerFailed";

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
          <Route path="/features/publishers/pages" element={<Publishers />} />
          <Route path="/features/publishers/pages/create" element={<PublisherCreate />} />
          <Route path="/features/publishers/pages/:id/edit" element={<PublisherEdit />} />
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
