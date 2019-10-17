# Twitch followers list
This is a OBS-compatible twitch followers list page.

![alt Twitch followers list demo](https://imgur.com/6RwPG10.gif)

## Installing
Download source code and copy all files from ``src/`` to any folder on your computer you want. Then open file ``config.js`` and change any settings you want.

- ``caption`` - text that displays in begin of the followers line
- ``username`` - twitch channel name whose followers will to display
- ``theme`` - current theme. List of available themes are descript after this parameter

For example this config will display followers of channel ``https://www.twitch.tv/grustniyoleg`` with caption ``folowrs))``:

```JavaScript
let config = {
    caption:  "folowrs)):",
    username: "grustniyoleg",
    theme: "light", /* Avaialable themes: ... */
};
```

## Adding to OBS

Select the scene and press **+** button in **Sources** block. Then select **BrowserSource**. In opened window check the Local File box and set path to ``followers.htm``.

If you changed config while the page is running then refresh a **BrowserSource**.
