import { useState } from "react";
import { Body, Cell, Text, Head, Row, Table, useModal } from "@clayui/core";

import { EMPLOYEES } from "../../MOCK_DATA";
import recognizeIcon from "../../assets/images/recognize.png";
import RecognizeForm from "./RecognizeForm";
import { Employee } from "../../types/Employee";
import "./index.scss";

const EmployeeList = () => {
  const { observer, onOpenChange, open } = useModal();
  const [employeeRecognize, setEmployeeRecognize] = useState<Employee>();

  return (
    <div className="p-4 employee-list">
      <h1 className="text-center mb-4">List Employee</h1>
      {open && (
        <RecognizeForm
          employee={employeeRecognize}
          observer={observer}
          onOpenChange={onOpenChange}
        />
      )}
      <Table>
        <Head
          items={[
            { id: "name", name: "Name" },
            { id: "email", name: "Email" },
            { id: "age", name: "Age" },
            { id: "recognize", name: "Recognize" },
          ]}
        >
          {(column) => (
            <Cell key={column.id} sortable>
              {column.name}
            </Cell>
          )}
        </Head>

        <Body defaultItems={EMPLOYEES}>
          {(row) => (
            <Row>
              <Cell>
                <Text size={3} weight="semi-bold">
                  {row["name"]}
                </Text>
              </Cell>
              <Cell>{row["email"]}</Cell>
              <Cell>{row["age"]}</Cell>
              <Cell className="action">
                <span
                  onClick={() => {
                    onOpenChange(true);
                    setEmployeeRecognize(row);
                  }}
                >
                  <img src={recognizeIcon} alt="recognize" />
                </span>
              </Cell>
            </Row>
          )}
        </Body>
      </Table>
    </div>
  );
};

export default EmployeeList;
