{
	"_version": "1.12.0",
	"sap.app": {
		"id": "sap.ui.demo.nav",
		"type": "application",
		"i18n": "i18n/i18n.properties",
		"title": "{{appTitle}}",
		"description": "{{appDescription}}",
		"applicationVersion": {
			"version": "1.0.0"
		},
		"dataSources": {
			"employeeRemote": {
				"uri": "/here/goes/your/serviceUrl/",
				"type": "OData",
				"settings": {
					"odataVersion": "2.0",
					"localUri" : "localService/metadata.xml"
				}
			}
		}
	},
	"sap.ui": {
		"technology": "UI5",
		"deviceTypes": {
			"desktop": true,
			"tablet": true,
			"phone": true
		}
  	},
	"sap.ui5": {
		"rootView": {
			"viewName": "sap.ui.demo.nav.view.App",
			"type": "XML",
			"async": true,
			"id": "app"
		},
		"dependencies": {
			"minUI5Version": "1.30",
			"libs": {
				"sap.m": {},
				"sap.ui.core": {}
			}
		},
		"models": {
			"i18n": {
				"type": "sap.ui.model.resource.ResourceModel",
				"settings": {
					"bundleName": "sap.ui.demo.nav.i18n.i18n"
				}
			},
			"": {
				"dataSource": "employeeRemote"
			}
		},
		"routing": {
			"config": {
				"routerClass": "sap.m.routing.Router",
				"viewType": "XML",
				"viewPath": "sap.ui.demo.nav.view",
				"controlId": "app",
				"controlAggregation": "pages",
				"transition": "slide",
				"bypassed": {
					"target": "notFound"
				},
				"async": true
			},
			"routes": [{
				"pattern": "",
				"name": "appHome",
				"target": "home"
			}],
			"targets": {
				"home": {
					"viewId": "home",
					"viewName": "Home",
					"viewLevel" : 1
				},
				"notFound":{
				    "viewId": "notFound",
				    "viewName": "NorFound",
				    "transition": "show"
				}
			}
		}
	}
}
