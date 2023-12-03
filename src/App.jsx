import { Outlet } from "react-router-dom";
import MainLayout from "./Component/MainLayout/MainLayout";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
     
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer></Footer>
    </>
  );
}

export default App;
