import {
  faBook,
  faUser,
  faUsers,
  faLock,
  faChartLine,
  faNewspaper,
  faList,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
    { id: 1, title: "Dashboard", path: "/dashboard", icon: faChartLine },
    { id: 2, title: "Books", path: "/books", icon: faBook },
    { id: 3, title: "Authors", path: "/authors", icon: faFeather },
    { id: 4, title: "Publishers", path: "/publishers", icon: faUser },
    { id: 5, title: "Categories", path: "/categories", icon: faList },
    { id: 6, title: "Users", path: "/users", icon: faUsers },
    { id: 7, title: "Change Password", path: "/change-password", icon: faLock },
    { id: 8, title: "Privacy Policy", path: "/policy", icon: faNewspaper },
];
