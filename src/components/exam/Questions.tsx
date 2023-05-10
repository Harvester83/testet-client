import * as React from 'react';
import { Container, Row, Col, Button, Image, Alert } from 'react-bootstrap';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import Pagination from 'react-bootstrap/Pagination';
import './exam.css';
import { Answer, QuestionsData } from './models';
import { PaginationWrapper } from './PaginationWrapper';

interface IQuestions {
  questions: QuestionsData[];
  setQuestions: () => void;
}

const Questions = props => {
  const { questions, questionNumber } = props;

  const changeQuestion = (index: number) => {

    console.log({index})

    if (index < 0) {
      index = 0;
    }

    if (index >= questions.length) {
      index = questions.length - 1;
    }

    props.setQuestionNumber(index);
  };

  const selectAnswer = (index: number, answer: 'A' | 'B' | 'C' | 'D' | 'E') => {
    let questionsAnswer = [...questions];
    questionsAnswer[index].answer = answer;

    props.setQuestions(questionsAnswer);
  };

  const getVariant = (question: any, answer: string): ButtonVariant => {
    if (question.answer === answer && !question.correct_answer) {
      return 'dark';
    }

    if (question.answer === answer && question.correct_answer !== answer) {
      return 'danger';
    }

    if (question.correct_answer === answer) {
      return 'success';
    }

    return 'primary';
  };

  return (
    <Row>
      {questions.map((question: QuestionsData, index) => (
        <Container fluid key={question.id} className={index === questionNumber ? '' : 'd-none'}>
          <Alert
            key={question.id}
            variant={question.correct ? 'success' : 'danger'}
            className={question.correct_answer ? '' : 'd-none'}
          >
            {question.correct ? 'Правильный ответ' : 'Неправильный ответ'}
          </Alert>

          <Row style={{ height: '500px' }}>
            <Col className="col-lg-12 text-center align-self-center">
              <Image src={`https://sinaq-images-dev.s3.eu-central-1.amazonaws.com/ru/${question.image}`}></Image>
            </Col>
          </Row>

          <Row className={'mt-2'}>
            {['A', 'B', 'C', 'D', 'E'].map((answer: Answer) => (
              <Col key={answer}>
                <Button variant={getVariant(question, answer)} block onClick={() => selectAnswer(index, answer)}>
                  {answer}
                </Button>
              </Col>
            ))}
          </Row>

          <Row className={'mt-5'}>
            <Col>
              <Button onClick={() => changeQuestion(index - 1)} variant="dark" size="sm" block>
                Предыдущий
              </Button>
            </Col>

            <Col>
              <Button onClick={() => changeQuestion(index + 1)} variant="dark" size="sm" block>
                Следующий
              </Button>
            </Col>
          </Row>
        </Container>
      ))}

      <Container fluid className={'mt-3'}>
        <Row>
          <Col>
            <PaginationWrapper
              changeQuestion={changeQuestion}
              questionNumber={questionNumber}
              count={questions.length}
            />
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Questions;
