
Ti.API.info( " act.js ");

var activity = Ti.Android.currentActivity;
var win = Ti.UI.currentWindow;

activity.addEventListener("create", function(e) {
	var button = Ti.UI.createButton({title: "CLOSE ME"});
	button.addEventListener("click", function(e) {
		activity.finish();
	});
	win.add(button);
});
