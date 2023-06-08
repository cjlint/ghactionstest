const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Is this a [p]rod or [q]a release?: ', answer => {
    switch (answer.toLowerCase()) {
        case 'p':
            console.log('p');
            break;
        case 'q':
            console.log('q');
            break;
        default:
            console.log('\x1b[31mAborted\x1b[0m');
            break;
    }

    rl.close();
});

