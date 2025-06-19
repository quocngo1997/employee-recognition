import { useNavigate } from "react-router-dom";
import { Button } from "@clayui/core";

import successIcon from "../../assets/images/success-icon.png";

const RecognizeSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="block-center">
      <img src={successIcon} alt="success" />
      <h1 className="mb-4 mt-4">Recognition successful!</h1>
      <Button displayType="primary" onClick={() => navigate("/home")}>
        Back to Home Page
      </Button>
    </div>
  );
};

export default RecognizeSuccess;
