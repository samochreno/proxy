var normal = "DIRECT", blackhole = "PROXY 127.0.0.1:3421";

function FindProxyForURL(url, host) {
    if (/^https:\/\/matrix\.beeper\.com\/_matrix\/client\/v3\/rooms\/.*\/read_markers/i.test(url)) {
        alert("url = " + url + " *** host = " + host + " *** Resolved IP = " + dnsResolve(host));
        return blackhole;
    }
    if (/^https:\/\/matrix\.beeper\.com\/_matrix\/client\/v3\/user\/.*\/account_data\/im\.vector\.setting\.breadcrumbs/i.test(url)) {
        alert("url = " + url + " *** host = " + host + " *** Resolved IP = " + dnsResolve(host));
        return blackhole;
    }

    // deny google for testing 
    if (/^https:\/\/www\.google\.com\/.*\/i.test(url)) {
        alert("url = " + url + " *** host = " + host + " *** Resolved IP = " + dnsResolve(host));
        return blackhole;
    }

    return normal;
}


