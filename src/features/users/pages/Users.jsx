import React, { useState, useEffect, useMemo } from "react";
import { api } from "api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Pagination from "components/pagination/Pagination";
import Loading from "components/ui/loading/Loading";
import ErrorMessage from "components/ui/error/error-message/ErrorMessage";
import PageTitle from "components/ui/PageTitle";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const usersPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch users data => ", error);
        navigate("/server-failed");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;
    setLoading(true);
    try {
      const response = await api.delete(`/users/${id}`);

      if (response.data.status === "success") {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        navigate("/server-failed");
      }
    } catch (error) {
      console.error("Failed to delete user => ", error);
      navigate("/server-failed");
    } finally {
      setLoading(false);
    }
  };

  const currentUsers = useMemo(() => {
    const indexOfLast = currentPage * usersPerPage;
    const indexOfFirst = indexOfLast - usersPerPage;
    return users.slice(indexOfFirst, indexOfLast);
  }, [currentPage, users]);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <Loading />;

  return (
    <div className="users edit-page mobile-container">
      <PageTitle title="Users" />

      <div className="users-header">
        <h2>Users</h2>
      </div>

      {currentUsers.length === 0 ? (
        <ErrorMessage message="No users found" />
      ) : (
        <div className="users-card">
          {currentUsers.map((user) => (
            <div
              className="box center-col bg-white rounded-3 text-center"
              key={user.id}
            >
              <div className="box-details">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <div className="del-user center-row bg-danger text-white rounded-circle">
                <div
                  onClick={() => handleDelete(user.id)}
                  title="Delete user"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleDelete(user.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default Users;
