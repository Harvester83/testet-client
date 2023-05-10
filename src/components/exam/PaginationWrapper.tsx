import * as React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const DEFAULT_VISIBLE_COUNT_NUMS = 10;
const INTERVAL_NUM = 3;
const DEFAULT_FIRST_VISIBLE_INDEX = 1;
const DEFAULT_LAST_VISIBLE_INDEX = 9;

interface IPaginationWrapper {
  changeQuestion: (value: number) => void;
  questionNumber: number;
  count: number;
}

export const PaginationWrapper = (props: IPaginationWrapper) => {
  const { changeQuestion, questionNumber, count } = props;
  const LAST_INTERACTIVE_NUMBER = count - 1;

  const getVisiblePageItem = (questionNumber: number) => {

    console.log({questionNumber})
    //console.log({questionNumber})




    if (questionNumber + 1 >= DEFAULT_VISIBLE_COUNT_NUMS && !(count - questionNumber <= INTERVAL_NUM)) {
      console.log(1);
      const arr = [];

      for (let i = questionNumber - INTERVAL_NUM; i <= questionNumber + INTERVAL_NUM; i++) {
        arr.push(i);
      }

      return arr;
    }

    if (count - questionNumber <= INTERVAL_NUM) {
      console.log(2);
      const arr = [];
      for (let i = questionNumber - INTERVAL_NUM; i < count - INTERVAL_NUM; i++) {
        arr.push(i);
      }

      return arr;
    }

    const arr = [];
    for (let i = DEFAULT_FIRST_VISIBLE_INDEX; i <= DEFAULT_LAST_VISIBLE_INDEX; i++) {
      arr.push(i);
    }

    return arr;
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => changeQuestion(0)} />
      <Pagination.Prev onClick={() => changeQuestion(questionNumber - 1)} />
      <Pagination.Item active={1 === questionNumber + 1} onClick={() => changeQuestion(0)}>
        {1}
      </Pagination.Item>
      {questionNumber + 1 >= DEFAULT_VISIBLE_COUNT_NUMS ? <Pagination.Ellipsis /> : null}
      {getVisiblePageItem(questionNumber).map(number => (
        <Pagination.Item
          active={number === questionNumber}
          key={number}
          onClick={() => changeQuestion(number)}
        >
          {number + 1}
        </Pagination.Item>
      ))}

      {questionNumber + 1 + INTERVAL_NUM >= count - 1 ? null: <Pagination.Ellipsis />}
      <Pagination.Item active={count === questionNumber + 1} onClick={() => changeQuestion(count - 1)}>
        {count}
      </Pagination.Item>
      <Pagination.Next onClick={() => changeQuestion(questionNumber + 1)} />
      <Pagination.Last onClick={() => changeQuestion(count - 1)} />
    </Pagination>
  );
};
