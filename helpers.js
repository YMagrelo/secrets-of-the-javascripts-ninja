const assert = (value, desc) => {
    const isTrully = value ? true : false;
    const result = `${isTrully}: ==> ${desc}`
    console.log(result)
    return result;
}

export { assert };
