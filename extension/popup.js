// https://developer.chrome.com/extensions/manifest
// chrome.extension.getBackgroundPage().console.log()

function getCurrentTab(callback) {  
	var queryInfo = {
		active: true, 
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs) {
		[ activeTab ] = tabs; 
		callback(activeTab.title, activeTab.url);
	});
}

function printOnScreen(tabName, url) {
	document.getElementById('tab-title').textContent = tabName;
	document.getElementById('tab-url').textContent = url;
}

document.addEventListener('DOMContentLoaded', function() {
	getCurrentTab(function(tabName, url) {
		printOnScreen(tabName, url); 
	});
});