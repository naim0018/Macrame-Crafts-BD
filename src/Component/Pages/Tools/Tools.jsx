

import useToolsData from "../../../hooks/useToolsData";
import ToolCard from "../Common/ToolCard/ToolCard";
const Tools = () => {
  const tools =useToolsData()
    return (
        <div>
             <div className="container mx-auto my-10 place-content-center space-y-5">
      {
        tools.map(tool => <ToolCard key={tool.id} tool={tool}/>)
      }
      </div>
        </div>
    );
};

export default Tools;