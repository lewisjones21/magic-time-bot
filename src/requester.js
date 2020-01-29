const request = require("request");

module.exports = class Requester {
    static get(url, successCallback, errorCallback) {
        request.get(url, { "json": false }, (error, response) => {
            if (error) {
                if (errorCallback !== null) {
                    errorCallback(response);
                } else {
                    console.log("Request failed: " + error);
                }
            }
            if (response && response.ok) {
                if (successCallback !== null) {
                    successCallback(response);
                } else {
                    console.log("Request successful: " + response);
                }
            }
        });
    }
};
