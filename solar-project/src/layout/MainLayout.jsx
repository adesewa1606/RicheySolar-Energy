import Navbar from "../component/Navbar";

const MainLayout = ({ children }) => {
    return (

        <>

            <Navbar />
            <main>
                {children}
            </main>

        </>

    );
};

export default MainLayout;