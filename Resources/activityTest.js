
var uiSplash = (function() {
  
  var API = { }; 
  
  API.factoryView = function(opts){ 
    topView = Ti.UI.createView({});
    
    var imageView = Titanium.UI.createImageView({
		image:'http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png',
		width:261,
		height:178,
		top:20
	});
	topView.add( imageView );
	
	var kickActivityButton = Ti.UI.createButton({
		top: 100, title:"PRESSME",
		width:200
	});
	topView.add( kickActivityButton );
	
	kickActivityButton.addEventListener('click', function(e)
	{
		
		Ti.API.info( " kick the activity " );
		
		var intent = Ti.Android.createIntent({
			action: Ti.Android.ACTION_MAIN,
			url: 'act.js'
		});
		intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
		//Ti.Android.currentActivity.startActivity(intent);
		Ti.Android.currentActivity.startActivityForResult(intent,function(e) {
			Ti.API.info ( "startActivityForResult  e.resultCode:" + e.resultCode );
		    if (e.resultCode == Ti.Android.RESULT_OK) {
		    	Ti.API.info( "Ti.Android.RESULT_OK ")
		    }
		});//end startActivityForResult
		
	});//end click	
    return topView; 
  };
  
  API.factoryWindow = function(options){
     win = Ti.UI.createWindow({title:'Activity'}); 
     win.add( API.factoryView( options ) ); 
     return win; 
  };
  
  return API;
})(); //end uiSplash
Ti.UI.currentWindow.add( uiSplash.factoryView({}) ); 



