import Header from "../components/Header1/page";
import Footer from "../components/Footer/page";
export default function MainLayout({ children }) {
    return (
      <div>
        <Header/>
        <main className="p-20">{children}</main>
        <Footer/>
      </div>
    );
  }
  