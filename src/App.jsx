import { Outlet } from "react-router-dom";
import MainLayout from "./Component/MainLayout/MainLayout";
import Banner from "./Component/Pages/Banner/Banner/Banner";

function App() {
  return (
    <>
     
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
