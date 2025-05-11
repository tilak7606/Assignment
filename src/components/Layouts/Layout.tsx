import Header from "./Header";
import Footer from './Footer';


import type React from "react";

interface props {
  children : React.ReactNode;
}

function Layout({ children  } : props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
