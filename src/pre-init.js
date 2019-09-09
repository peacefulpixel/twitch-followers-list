const CLIENT_ID = "0i643efgwitb9mk96bd4vaxshcgjj7";
const TWITCH_API = "application/vnd.twitchtv.v5+json";

let log = function(message) {
    console.log(message);
};

let requestGet = function(url, isASync, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, isASync);

    if (callback) {
        xmlHttp.onreadystatechange = () => callback(xmlHttp);
    }

    xmlHttp.setRequestHeader("Accept",    TWITCH_API);
    xmlHttp.setRequestHeader("Client-ID", CLIENT_ID);

    xmlHttp.send(null);

    if (!isASync) {
        return xmlHttp.responseText;
    }
}

let getUserId = function() {
    if (!config.username) {
        log("Can't find \"username\" property in config")
        return null;
    }

    let responseString = requestGet(
            "https://api.twitch.tv/helix/users?login=" + config.username, false);

    let responseObject = JSON.parse(responseString);

    return responseObject.data[0].id;
};