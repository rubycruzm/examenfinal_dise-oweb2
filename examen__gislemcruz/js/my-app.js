// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Plants', 	//title for modals
	panel: {
    swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
        {
		path: '/plants/',
    	url: 'plants.html',
    	name: 'plants',
  		},
        {
		path: '/flores/',
    	url: 'flores.html',
    	name: 'flores',
  		},
        {
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
        {
		path: '/herramientas-tabs/',
	url: 'herramientas-tabs.html',
    	name: 'herramientas-tabs',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

