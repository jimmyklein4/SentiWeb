
/*
	background script - responsible for monitoring changes in the url/page, analyzing the URL,
	and sending information to the content script which will then decide how to parse the page 
*/

chrome.webNavigation.onCompleted.addListener(function(details) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//analyze the url so we can determine how to parse the page  
		var tabURL = tabs[0].url;
		var tabID = tabs[0].id;
		if(typeof tabURL == "string" && tabURL != null) {
			var pageObj = {
				"type": null
			}
			//here we create an object that gives us the relevent info for parsing 
			if(tabURL.contains("reddit")) {
				if(tabURL.contains("comments")) {
					pageObj.type = "reddit_comments";
				} else {
					pageObj.type = "reddit_general";
				}
			} else if(tabURL.contains("youtube") && tabURL.contains("watch?")) {
				pageObj.type = "youtube_comments";
			} else if(tabURL.contains("facebook")) {
				pageObj.type = "facebook_comments";
			}

			chrome.tabs.sendMessage(tabID, JSON.stringify(pageObj), function(response) {
				//send the page type to the content script so it can start parsing the page
				alert("message sent");
			});
		}
	});
});