function FindProxyForURL(url, host) {

	if (shExpMatch(host, "*.google.com"))
	{
		return "PROXY proxy.cal.sap.corp:8080; DIRECT";
	}
	
	if (shExpMatch(host, "*.quora.com"))
	{
		return "PROXY proxy.cal.sap.corp:8080; DIRECT";
	}

	return "DIRECT";
}
