const promisedFunction = () => new Promise((resolve) => {
    resolve('test');
});

const asyncFunction = async () => {
    const resolved = await promisedFunction();

    return resolved;
};

asyncFunction();
