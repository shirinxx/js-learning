'use-strict';

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
};

// #1
poll.registerNewAnswer = function () {
    // const question = Math.trunc(Number());
    // const question = prompt(`${this.question}\n${this.options.join('\n')}`);
    // if (question != '')
    // question =
    // if (question >= 0 && question <= 3) {
    //     console.log(question);
    // }
};

poll.registerNewAnswer();
