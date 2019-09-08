const USER_ID = "266581638";
const CLIENT_ID = "0i643efgwitb9mk96bd4vaxshcgjj7";

const TWITCH_API = "application/vnd.twitchtv.v5+json";

let setHeaders = function (request) {
    request.setRequestHeader("Accept", TWITCH_API);
    request.setRequestHeader("Client-ID", CLIENT_ID);
}

let TwitchAPIWrapper = {
    getFollowersNames: function (callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                let followersList = JSON.parse(xmlHttp.responseText);

                console.log(followersList);

                let result = new Array();
                followersList.follows.forEach(item => {
                    result.push(item.user.display_name);
                });

                callback(result);
            }
        }

        xmlHttp.open("GET", "https://api.twitch.tv/kraken/channels/" + USER_ID + "/follows", true);
        setHeaders(xmlHttp);

        xmlHttp.send(null);
    },
};