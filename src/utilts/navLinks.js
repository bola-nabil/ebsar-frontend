import {
  faBook,
  faUser,
  faUsers,
  faChartLine,
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
];
