export const checkJSONObject = (data) => {
    let isJSON = true;
    try {
        let json = JSON.parse(data);
    }
    catch (err) {
        isJSON = false;
    }
    return isJSON;
}