export const parseArgs = () => {
    const comArgs = process.argv;
    const variablesArray = [];

    for (let i = 0; i < comArgs.length; i++) {
        if (comArgs[i].match((/^--/))) {
            variablesArray.push(`${comArgs[i]} is ${comArgs[i + 1]}`);
            i++;
        }
    }

    console.log(variablesArray.join(', '));
};
