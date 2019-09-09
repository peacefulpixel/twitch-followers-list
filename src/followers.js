let captionDOM = document.getElementById("caption");
let followersDOM = document.getElementById("followers-container");
let followersWrapperDOM = document.getElementById("followers");

let xPoint = followersDOM.getBoundingClientRect().x;

let swipeUsers = function () {
    let width = followersDOM.getBoundingClientRect().width;
    let margin = followersWrapperDOM.getBoundingClientRect().width;

    let id = setInterval(function () {
        if (!(followersDOM.getBoundingClientRect().x > xPoint - width)) {
            clearInterval(id);
            refreshUsers();
        }

        followersDOM.style.marginLeft = margin + "px";
        margin -= 0.7;
    }, 5);
}

let refreshUsers = function () {
    TwitchAPIWrapper.getFollowersNames(followers => {
        followersDOM.innerHTML = "";

        let buildRandomHSL = function () {
            return "hsl(" + Math.floor(Math.random() * 360) + ", 65%, 70%);"
        };

        followers.forEach(follower => {
            followersDOM.innerHTML +=
                "<div class=\"follower\" style=\"color:" + buildRandomHSL() + "\">"
                + follower +
                "</div>";
        });

        swipeUsers();
    });
};

captionDOM.innerHTML = config.caption;
refreshUsers();