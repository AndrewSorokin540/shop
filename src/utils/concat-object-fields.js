const concatObjectFields = (object) => {
    let result = [];
    Object.keys(object).forEach(key => {
        result = [...result, ...object[key]]
    })
    return result;
}