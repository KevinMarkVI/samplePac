function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.Staging.facebook4cats.com"))
    {
        //Here we return DIRECT, which means the host machine itself knows how to get to *.Staging.Abba.com
        return "DIRECT";
    }
    if (shExpMatch(host, "*.Dev.facebook4cats.com"))
    {
        //Here we are returning a proxy, this is often done to segment networks or enforce security
        return "PROXY MyProxy:8080"
    }
    //If neither of the above match then the traffic will be sent to proxyToTheInternet by default.  Should that connection not return
    //anything, then DIRECT will be returned as a failover.
    return "PROXY proxyToTheInternet:8080; DIRECT";
}