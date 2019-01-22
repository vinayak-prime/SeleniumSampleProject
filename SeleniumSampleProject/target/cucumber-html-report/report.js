$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 3011383897,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "check login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open website \"https://www.phptravels.net/admin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login as admin",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.phptravels.net/admin",
      "offset": 16
    }
  ],
  "location": "Cucumber1_stepDefs.i_open_website(String)"
});
formatter.result({
  "duration": 2548070417,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.login()"
});
formatter.result({
  "duration": 5918447294,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "sample",
  "description": "",
  "id": "login-test;sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click general",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "should expand",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see \"SETTINGS\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see \"MODULES\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 121229682,
  "status": "passed"
});
});