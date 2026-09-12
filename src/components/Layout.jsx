import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Cursor from "./Cursor.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen cursor-none-desktop">
      <div className="grain-layer" />
      <Cursor />
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
