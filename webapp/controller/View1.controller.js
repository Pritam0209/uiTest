sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/xml/XMLModel"
], function (Controller,XMLModel) {
	"use strict";

	return Controller.extend("InnoTest.InnoTest.controller.View1", {
		onInit: function () {
			
				var oModel = new XMLModel();
		      oModel.loadData("InnoTest/InnoTest/controller/output.xml");
		      oModel.attachRequestCompleted(function(oEvent) {
		        sap.ui.getCore().setModel(oEvent.getSource());
		      });
		     // console.log(sap.ui.getCore().getModel().getData().find('Row')[0]);
		}
	});
});