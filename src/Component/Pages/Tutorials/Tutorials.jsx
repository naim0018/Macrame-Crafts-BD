import { Helmet} from "react-helmet-async";
import useTutorialsData from "../../../hooks/useTutorialsData";
import TutorialsCard from "../Common/TutorialsCard/TutorialsCard";

const Tutorials = () => {

  const tutorials = useTutorialsData();
  console.log(tutorials)

  return (
    <div>
      <Helmet>
        <title>Macrame Crafts BD | Tutorials</title>
      </Helmet>
      <div className="container mx-auto space-y-10">
        {
          tutorials.map(data => <TutorialsCard key={data.id} data={data}></TutorialsCard>)
        }
      </div>

     
    </div>
  );
};

export default Tutorials;
