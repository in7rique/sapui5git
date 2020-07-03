/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"VIEWER/PDF/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"VIEWER/PDF/test/integration/pages/View1",
	"VIEWER/PDF/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "VIEWER.PDF.view.",
		autoWait: true
	});
});