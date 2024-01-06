

import { Helmet } from "react-helmet-async";
import useToolsData from "../../../hooks/useToolsData";
import ToolCard from "../Common/ToolCard/ToolCard";
import Loading from "../Loading/Loading";
import Loadingui from "../Loading/Loadingui/Loadingui";
const Tools = () => {
  const {tools,loading} =useToolsData()
  console.log(tools)
    return (
        <div className="min-h-screen">
             <div className="container mx-auto my-10 place-content-center space-y-5">
              <Helmet>
                <title>Macrame Carft BD | Tools</title>
              </Helmet>
      {
        loading ? <><Loadingui/></> : 
        tools.map(tool => <ToolCard key={tool.id} tool={tool}/>)
      }
      </div>
        </div>
    );
};

export default Tools;