document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    if (document.querySelector('textarea').value !== '') {
        const userVariables = document
            .querySelector('textarea')
            .value.split('\n');
        let longest = 0;
        const finalArr = [];
        for (const variable of userVariables) {
            if (variable.length > longest) longest = variable.length;
            const sepParts = variable.trim().toLowerCase().split('_');
            finalArr.push(
                [
                    sepParts[0],
                    sepParts[1][0].toUpperCase(),
                    sepParts[1].slice(1),
                ].join('')
            );
        }
        for (const [counter, variable] of finalArr.entries()) {
            console.log(
                `${variable.padEnd(longest + 4, ' ')}${'✅'.repeat(
                    counter + 1
                )}`
            );
        }
    }
});
