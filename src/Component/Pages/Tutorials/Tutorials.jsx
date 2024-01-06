import { Helmet} from "react-helmet-async";
import useTutorialsData from "../../../hooks/useTutorialsData";
import TutorialsCard from "../Common/TutorialsCard/TutorialsCard";
import Loadingui from "../Loading/Loadingui/Loadingui";

const Tutorials = () => {

  const {tutorials,loading} = useTutorialsData();
  console.log(tutorials)

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Macrame Crafts BD | Tutorials</title>
      </Helmet>
      
      {loading? <><Loadingui/></> :
      <div className="container mx-auto space-y-10">
        {
          tutorials.map(data => <TutorialsCard key={data._id} data={data}></TutorialsCard>)
        }
      </div>
      }

     
    </div>
  );
};

export default Tutorials;
