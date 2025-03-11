function FindProxyForURL(url, host) {
    if (shExpMatch(url, "https://matrix.beeper.com/_matrix/client/v3/rooms/*/read_markers")) {
        return "PROXY 127.0.0.1:3421";
    }
    if (shExpMatch(url, "https://matrix.beeper.com/_matrix/client/v3/user/*/account_data/im.vector.setting.breadcrumbs")) {
        return "PROXY 127.0.0.1:3421";
    }
    return "DIRECT";
}
