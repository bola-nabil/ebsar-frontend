import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faFeather,
  faUser,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useDashboard } from "../../hooks/useDashboard";
import {DashboardBooks, DashboardCounts, DonutChart, DashboardNav} from "components/dashboard";
import Loading from "components/ui/loading/Loading";
import PageTitle from "components/ui/PageTitle";
import "./dashboard.css";

const Dashboard = () => {

  const {books, counts, loading, logout} = useDashboard();
  const [showNav, setShowNav] = useState(false);

  const dashboardCounts = useMemo(
    () => [
      { id: 1, title: "Total Books", nums: counts.books ?? 0, icon: faBook },
      { id: 2, title: "Total Authors", nums: counts.authors ?? 0, icon: faFeather },
      { id: 3, title: "Total Publishers", nums: counts.publishers ?? 0, icon: faUser },
      { id: 4, title: "Total Categories", nums: counts.categories ?? 0, icon: faList },
    ],
    [counts]
  );

  const lastBooks = useMemo(() => books.slice(-5), [books]);

  if (loading) return <Loading />;

  return (
    <div className="dashboard position-relative">
      <PageTitle title="Dashboard" />

      <div className="dashboard-header d-flex justify-content-between align-items-center w-100">
        <h2>Dashboard</h2>
        <div
          className="dashboard-user bg-white rounded-circle center-row"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      { showNav && <DashboardNav onLogout={logout}/>}

      <DashboardCounts dashboardCounts={dashboardCounts}/>

      <div className="dashboard-statistics">

        <DashboardBooks lastBooks={lastBooks} />

        <div className="books-category bg-white rounded-4 center-col">
          <h3>Books Per Category</h3>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
