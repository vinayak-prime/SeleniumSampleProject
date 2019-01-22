$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Cucumber1.feature");
formatter.feature({
  "line": 2,
  "name": "check Google",
  "description": "",
  "id": "check-google",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 1692849709,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "test google",
  "description": "",
  "id": "check-google;test-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I open google website \"https://www.google.co.uk\"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter keyword \"selenium\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see results with \"selenium - Google Search\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.uk",
      "offset": 23
    }
  ],
  "location": "Cucumber1_stepDefs.i_open_google_website(String)"
});
formatter.result({
  "duration": 1069425526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 17
    }
  ],
  "location": "Cucumber1_stepDefs.i_enter_keyword(String)"
});
formatter.result({
  "duration": 1602640906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium - Google Search",
      "offset": 27
    }
  ],
  "location": "Cucumber1_stepDefs.i_should_see_results_with(String)"
});
formatter.result({
  "duration": 7732801,
  "status": "passed"
});
formatter.after({
  "duration": 88112437,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "test multiple data",
  "description": "",
  "id": "check-google;test-multiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I open google website \"https://www.google.co.uk\"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter keyword \"\u003ckeyword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see results with \"\u003cexpectedresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "check-google;test-multiple-data;",
  "rows": [
    {
      "cells": [
        "keyword",
        "expectedresult"
      ],
      "line": 18,
      "id": "check-google;test-multiple-data;;1"
    },
    {
      "cells": [
        "selenium",
        "selenium - Google Search"
      ],
      "line": 19,
      "id": "check-google;test-multiple-data;;2"
    },
    {
      "cells": [
        "protractor",
        "protractor - Google Search"
      ],
      "line": 20,
      "id": "check-google;test-multiple-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 947548018,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "test multiple data",
  "description": "",
  "id": "check-google;test-multiple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I open google website \"https://www.google.co.uk\"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter keyword \"selenium\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see results with \"selenium - Google Search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.uk",
      "offset": 23
    }
  ],
  "location": "Cucumber1_stepDefs.i_open_google_website(String)"
});
formatter.result({
  "duration": 938379327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 17
    }
  ],
  "location": "Cucumber1_stepDefs.i_enter_keyword(String)"
});
formatter.result({
  "duration": 1580438907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium - Google Search",
      "offset": 27
    }
  ],
  "location": "Cucumber1_stepDefs.i_should_see_results_with(String)"
});
formatter.result({
  "duration": 4200436,
  "status": "passed"
});
formatter.after({
  "duration": 82566642,
  "status": "passed"
});
formatter.before({
  "duration": 922497351,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "test multiple data",
  "description": "",
  "id": "check-google;test-multiple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I open google website \"https://www.google.co.uk\"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter keyword \"protractor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see results with \"protractor - Google Search\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.uk",
      "offset": 23
    }
  ],
  "location": "Cucumber1_stepDefs.i_open_google_website(String)"
});
formatter.result({
  "duration": 571144027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "protractor",
      "offset": 17
    }
  ],
  "location": "Cucumber1_stepDefs.i_enter_keyword(String)"
});
formatter.result({
  "duration": 1304986338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "protractor - Google Search",
      "offset": 27
    }
  ],
  "location": "Cucumber1_stepDefs.i_should_see_results_with(String)"
});
formatter.result({
  "duration": 3932254,
  "status": "passed"
});
formatter.after({
  "duration": 84791886,
  "status": "passed"
});
});