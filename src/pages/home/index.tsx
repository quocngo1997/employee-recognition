import { useNavigate } from "react-router-dom";
import { Button } from "@clayui/core";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="block-center">
      <h1 className="text-xl mb-4">Employee Home Page</h1>
      <Button displayType="primary" onClick={() => navigate("/recognize")}>
        Recognize employee
      </Button>
    </div>
  );
};

export default Home;
