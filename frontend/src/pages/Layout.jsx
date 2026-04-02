import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col mt-5">

            <header>
                <Header />
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer>
                <Footer />
            </footer>

            </div>
        </>
    );
}

export default Layout;