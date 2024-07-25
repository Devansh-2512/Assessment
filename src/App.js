import { Button, Card, Input, Layout, Space } from "antd";
import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [inputDelimeter, setInputDelimeter] = useState("");
  const [resultString, setResultString] = useState("");

  
  const add = () => {
    let newString = inputString;
    console.log(newString, "newString");
    if (newString.length == 0) {
      setResultString("0");
    } else if (inputDelimeter.length == 0) {
      setResultString(newString);
    } else {
      let arrayOfNums = newString.split(inputDelimeter);
      console.log(arrayOfNums, "arrayOfNums", inputDelimeter);
      if (!newString.includes(inputDelimeter)) {
        setResultString("Invalid Delimeter");
      } else {
        let Result = 0;
        let negativeNumbers = [];
        for (let nums of arrayOfNums) {
          if (Number(nums) < 0) {
            negativeNumbers.push(nums);
          }
          if (Number(nums)) {
            Result += Number(nums);
          }
        }
        if (negativeNumbers.length > 0) {
          setResultString(
            `Negative Numbers not allowed ${negativeNumbers.join(",")}`
          );
          return;
        }
        setResultString(Result.toString());
      }
    }
  };
  return (
    <Layout>
      <Card>
        <Space direction="vertical">
          <Input.TextArea
            placeholder="Input String of Numbers"
            value={inputString}
            onChange={(e) => {
              setInputString(e.target.value);
            }}
          />
          <Input
            placeholder="Input Delimeter"
            value={inputDelimeter}
            onChange={(e) => {
              setInputDelimeter(e.target.value);
            }}
          />
          <Button
            type="primary"
            onClick={() => {
              add();
            }}
          >
            Calculate
          </Button>
          <h2>Result:- {resultString} </h2>
        </Space>
      </Card>
    </Layout>
  );
}

export default App;
