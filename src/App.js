import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./layouts/login/AdminLogin";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "pages/dashboard/Dashboard.jsx";
import { AuthorCreate, AuthorEdit, Authors } from "features/authors";
import { CategoryCreate, CategoryEdit, Categories } from "features/categories";
import {
  PublisherCreate,
  PublisherEdit,
  Publishers,
} from "features/publishers";
import { BookCreate, BookEdit, Books } from "features/books";
import Users from "./features/users/pages/Users";
import Policy from "./pages/Policy";
import NotFound from "./pages/not-found/NotFound";
import ServerFailed from "./pages/server-failed/ServerFailed";
import MainLayout from "layouts/MainLayout";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route
          path="/change-password"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <ChangePassword />
            </MainLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/authors"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Authors />
            </MainLayout>
          }
        />
        <Route
          path="/authors/create"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <AuthorCreate />
            </MainLayout>
          }
        />
        <Route
          path="/authors/:id/edit"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <AuthorEdit />
            </MainLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Categories />
            </MainLayout>
          }
        />
        <Route
          path="/categories/create"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <CategoryCreate />
            </MainLayout>
          }
        />
        <Route
          path="/categories/:id/edit"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <CategoryEdit />
            </MainLayout>
          }
        />
        <Route
          path="/publishers/"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Publishers />
            </MainLayout>
          }
        />
        <Route
          path="/publishers/create"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <PublisherCreate />
            </MainLayout>
          }
        />
        <Route
          path="/publishers/:id/edit"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <PublisherEdit />
            </MainLayout>
          }
        />
        <Route
          path="/books"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Books />
            </MainLayout>
          }
        />
        <Route
          path="/books/create"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <BookCreate />
            </MainLayout>
          }
        />
        <Route
          path="/books/:id/edit"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <BookEdit />
            </MainLayout>
          }
        />
        <Route
          path="/users"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <Users />
            </MainLayout>
          }
        />
        <Route path="/policy" element={<Policy />} />
        <Route path="/server-failed" element={<ServerFailed />} />
        <Route
          path="*"
          element={
            <MainLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
