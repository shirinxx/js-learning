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
    const question = prompt(
        `${this.question}\n${this.options.join('\n')}`
    ).trim();
    if (question != '') {
        const answer = Math.trunc(Number(question));
        if (answer >= 0 && answer <= 3) {
            // console.log(question);
            this.answers[answer]++;
            // console.log(this.answers);
            poll.displayResults();
            poll.displayResults('string');
        }
    }
};

// #2
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.registerNewAnswer();

// #3
poll.displayResults = function (type = 'array') {
    if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(',')}`);
    } else if (type === 'array') {
        console.log(this.answers);
    }
};

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
