import * as React from 'react';

const Answer = (props: any) => {
    return (
        <div>
            <button onClick={() => props.onClick(props.answer)}>{props.answer}</button>
        </div>
    );
};

export default Answer;
