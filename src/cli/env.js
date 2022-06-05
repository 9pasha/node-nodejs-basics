export const parseEnv = () => {
    const envProps = process.env;
    const variablesArray = [];

    for (let prop in envProps) {
        if (prop.match(/^RSS_/)) {
            variablesArray.push(`${prop}=${envProps[prop]}`);
        }
    }

    console.log(variablesArray.join('; '));
};