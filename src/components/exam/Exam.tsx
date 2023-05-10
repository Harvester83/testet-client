import * as React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Timer from "../timer/Timer";
import { useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";
import { testQuestions } from "./test-questions";
import "./exam.css";

//const url = 'https://jsonplaceholder.typicode.com/photos';
const url = 'https://imc33vxkt9.execute-api.eu-central-1.amazonaws.com/Prod/exam';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const finish = async () => {
    const response = await axios.post(
        url,
        {questions: questions}
    );

    setQuestions(response.data);    
    //setQuestions(testQuestions);
  };

  useEffect(() => {
    async function fetchQuestions() {
        const response = await axios.get(
        url,
        );

        let questions = await response.data;
        setQuestions(questions);
        //setQuestionNumber(questions.length)
    }

    fetchQuestions();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="mt-2 col-lg-8">
          <h1>TestEt</h1>
        </Col>

        <Col className="col-lg-2 mt-2 text-right">
          <Button onClick={() => finish()} variant="warning" size="lg">
            Завершить
          </Button>
        </Col>

        <Col className="col-lg-2 mt-2 text-center time">
          <Timer />
        </Col>
      </Row>

      <div></div>
      


      <Questions
        setQuestions={setQuestions}
        questions={questions}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </Container>
  );
};

export default Exam;
