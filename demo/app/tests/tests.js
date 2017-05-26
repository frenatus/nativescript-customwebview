var Customwebview = require("nativescript-customwebview").Customwebview;
var customwebview = new Customwebview();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(customwebview.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(customwebview.functionname()).toEqual(jasmine.any(Promise));
  });
});