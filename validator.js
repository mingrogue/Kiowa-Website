this.loggedUsers = {}


exports.validate = function (token, data, fields) {
var ad = this.loggedUsers[token]
    if(!ad) {
        throw Error ("User not logged in");
    }
    var response = []
    for(var i = 0; i < fields.length; i++) {
        if(!data[fields[i]]) {
            response.push(fields[i]);
        }
    }
    if(response.length > 0) {
        throw Error ( "Mandatory fields missing: " + JSON.stringify(response));
    }
    return ad;
}

exports.validatelogin = function (token) {
    var ad = this.loggedUsers[token]
    if(!ad) {
        throw Error ("User not logged in");
    }
    return ad
}



exports.validateparams = function (data, fields) {
    var response = []
    for(var i = 0; i < fields.length; i++) {
        if(!data[fields[i]]) {
            response.push(fields[i]);
        }
    }
    if(response.length > 0) {
        throw new Error ("Mandatory fields missing: " + JSON.stringify(response));
    }
    return true;
}

exports.loggedUsers = this.loggedUsers
