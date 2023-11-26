import { Outlet } from "react-router-dom";
import MainLayout from "./Component/MainLayout/MainLayout";

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
