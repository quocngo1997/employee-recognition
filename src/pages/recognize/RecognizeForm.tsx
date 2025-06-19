import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "@clayui/core";
import { ClaySelect, ClayInput } from "@clayui/form";
import Alert from "@clayui/alert";

import { RECOGNIZE_VALUES } from "../../MOCK_DATA";
import { Employee } from "../../types/Employee";

import log from "../../utils/logger";

interface Props {
  onOpenChange: (value: boolean) => void;
  observer: any;
  employee?: Employee;
}

const RecognizeForm = ({ employee, observer, onOpenChange }: Props) => {
  const navigate = useNavigate();

  //setSelectedValue is true when click button continue in step 2
  const [isSelectedValue, setSelectedValue] = useState(false);
  // message in step Recognition Details
  const [message, setMessage] = useState("");
  //choose recognize value in step 2
  const [recognizeValue, setRecognizeValue] = useState<number>(
    RECOGNIZE_VALUES[0].value
  );
  //set error when not entering recognize details
  const [error, setError] = useState("");

  // TO DO call api
  const handleSubmit = () => {
    log.info("message", message);
    if (!message) {
      setError("Please enter recognition detail.");
      return;
    }
    navigate("/recognize/success");
  };

  // Create Recognition Step 2
  const ChooseRecognizeValueForm = () => {
    return {
      body: (
        <>
          <h3 className="mb-3">
            Select employee recognition value for {employee?.name}
          </h3>
          <ClaySelect
            aria-label="Select value"
            onChange={(e) => setRecognizeValue(Number(e.target.value))}
          >
            {RECOGNIZE_VALUES.map((item) => (
              <ClaySelect.Option
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </ClaySelect>
        </>
      ),
      footer: (
        <Button.Group spaced>
          <Button displayType="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => setSelectedValue(true)}>Continue</Button>
        </Button.Group>
      ),
    };
  };

  // Recognition details
  const RecognitionDetail = () => {
    return {
      body: (
        <>
          {error && <Alert displayType="danger" title={error} />}
          <h3 className="mb-3">
            Enter a recognition message with the value of{" "}
            {RECOGNIZE_VALUES.find((i) => i.value === recognizeValue)?.label}{" "}
            for employee {employee?.name}.
          </h3>
          <ClayInput
            component="textarea"
            id="message"
            placeholder="Enter recognition detail..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </>
      ),
      footer: (
        <Button.Group spaced>
          <Button
            displayType="secondary"
            onClick={() => setSelectedValue(false)}
          >
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </Button.Group>
      ),
    };
  };

  return (
    <Modal observer={observer} size="full-screen" status="info">
      <Modal.Header>Employee recognition</Modal.Header>
      <Modal.Body>
        {isSelectedValue
          ? RecognitionDetail().body
          : ChooseRecognizeValueForm().body}
      </Modal.Body>
      <Modal.Footer
        last={
          isSelectedValue
            ? RecognitionDetail().footer
            : ChooseRecognizeValueForm().footer
        }
      />
    </Modal>
  );
};

export default RecognizeForm;
