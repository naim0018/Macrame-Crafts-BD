import { Outlet } from "react-router-dom";
import MainLayout from "./Component/MainLayout/MainLayout";
import Banner from "./Component/Pages/Banner/Banner/Banner";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
     
      <MainLayout>
        <Banner></Banner>
        <Outlet />
        <Footer></Footer>
      </MainLayout>
    </>
  );
}

export default App;
