# Twitch followers list
This is a OBS-compatible twitch followers list page.

![alt GIF](https://s152iva.storage.yandex.net/rdisk/c6d637efcd010366308c80b465e7f7258743d4c88f8a8deaddf99e618ed4710d/5d763b84/fCju12uqbEiJQjYpSTDj5hwpXu0rqE-T0rLHHEbogpr5fPeu9yTRj0SbZitXu4GQNgcDYrMM4eddoaPWcTWy0Q==?uid=0&filename=summary.gif&disposition=inline&hash=&limit=0&content_type=image%2Fgif&owner_uid=0&fsize=17196968&hid=baa78206c5ab6d059718e8e6ae1d1825&media_type=image&tknv=v2&etag=5dca097d7aa5757cad787a22057a4f3f&rtoken=eAvjks2CXDyV&force_default=no&ycrid=na-7b1e72ce707e5640e06c80f9e2d55aeb-downloader7h&ts=5921d55a2e900&s=364bce567f644a0ee7cd7ba5556107ee5a81fac2bd7059059f369f55c724fadb&pb=U2FsdGVkX1_arbp1Y4kGcLYEcOpNZ8URRyBvzsE7onTLwmsh6r0ZTmGaSAg9m5Ffw2zk4E9GCYfoVGV-9S8V8MkYEMJTKt_P_WDWNVFhx_s)

## Installing
Download source code and copy all files from ``src/`` to any folder on your computer you want. Then open file ``config.js`` and change any settings you want.

- ``caption`` - text that displays in begin of the followers line
- ``username`` - twitch channel name whose followers will to display

For example this config will display followers of channel ``https://www.twitch.tv/grustniyoleg`` with caption ``folowrs))``:

```JavaScript
let config = {
    caption:  "folowrs)):",
    username: "grustniyoleg",
};
```

## Adding to OBS

Select the scene and press **+** button in **Sources** block. Then select **BrowserSource**. In opened window check the Local File box and set path to ``followers.htm``.

If you changed config while the page is running then refresh a **BrowserSource**.