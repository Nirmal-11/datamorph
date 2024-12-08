import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#features",
  },
  // {
  //   id: 3,
  //   title: "Service",
  //   newTab: false,
  //   path: "/blog",
  // },
  {
    id: 5,
    title: "Service",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 6,
    title: "Career",
    newTab: false,
    path: "/support",
  },

  {
    id: 7,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
