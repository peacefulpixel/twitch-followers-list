const USER_ID = getUserId();

let TwitchAPIWrapper = {
    getFollowersNames: function (callback) {
        let parentCallback = function(xmlHttp) {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                let followersList = JSON.parse(xmlHttp.responseText);

                let result = new Array();
                followersList.follows.forEach(item => {
                    result.push(item.user.display_name);
                });

                callback(result);
            }
        }

        requestGet("https://api.twitch.tv/kraken/channels/" + USER_ID + "/follows",
                true, parentCallback);
    },
};