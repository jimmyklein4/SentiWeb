/*
	Content script - modifies the UI; responsible for using the Watson API sentiment analyis API and blocking 
	relevant content.
*/

//listen to a message from the background script, and on message, do stuff
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var urlData = JSON.parse(request);

	console.log(urlData.type);

	sendResponse("Got the message");
});