

import { Helmet } from "react-helmet-async";
import useToolsData from "../../../hooks/useToolsData";
import ToolCard from "../Common/ToolCard/ToolCard";
import Loading from "../Loading/Loading";
import Loadingui from "../Loading/Loadingui/Loadingui";
const Tools = () => {
  const tools =useToolsData()
  const {data,isLoading}=tools
  
    return (
        <div className="min-h-screen">
             <div className="container mx-auto my-10 place-content-center space-y-5">
              <Helmet>
                <title>Macrame Carft BD | Tools</title>
              </Helmet>
      {
        isLoading ? <><Loadingui/></> : 
        data.map(tool => <ToolCard key={tool.id} tool={tool}/>)
      }
      </div>
        </div>
    );
};

export default Tools;