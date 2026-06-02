import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NewsletterPopup from "./component/popup/NewsLetterPopup";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <NewsletterPopup />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
        } />
        <Route path="/shop" element={
          <MainLayout>
            <Shop />
          </MainLayout>
        } />
        <Route path="/cart" element={
          <MainLayout>
            <Cart />
          </MainLayout>
        } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
