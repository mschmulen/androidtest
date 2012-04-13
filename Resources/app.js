// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var winactivityTest = Titanium.UI.createWindow({ title:'activityTest',  backgroundColor:'#fff', url:'activityTest.js' }); 
var tabactivityTest = Titanium.UI.createTab({ icon:'KS_nav_views.png', title:'activityTest', window:winactivityTest });  
tabGroup.addTab(tabactivityTest);


// open tab group
tabGroup.open();


