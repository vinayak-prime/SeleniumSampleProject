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
  "duration": 1828159865,
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
  "duration": 2763881066,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.login()"
});
formatter.result({
  "duration": 1002015,
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: step_definitions.LoginFeature has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public step_definitions.LoginFeature(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@24f43aa3:4\u003c|\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:686)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1010)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:717)\n\tat org.testng.TestRunner.run(TestRunner.java:618)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:357)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:352)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:310)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:259)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1199)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1124)\n\tat org.testng.TestNG.run(TestNG.java:1032)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n\tat ✽.And I login as admin(features/Login.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "update profile - read data from excel",
  "description": "",
  "id": "login-test;update-profile---read-data-from-excel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click Profile",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I update profile data",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see success message \"CHANGES SAVED!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.i_click_general()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard.should_expand()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CHANGES SAVED!",
      "offset": 30
    }
  ],
  "location": "Dashboard.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.phptravels.net/admin");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 591875256,
  "status": "passed"
});
formatter.before({
  "duration": 1155689820,
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
  "duration": 2201182508,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.login()"
});
formatter.result({
  "duration": 506501,
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: step_definitions.LoginFeature has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public step_definitions.LoginFeature(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@27a0a5a2:4\u003c|\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:686)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1010)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:717)\n\tat org.testng.TestRunner.run(TestRunner.java:618)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:357)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:352)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:310)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:259)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1199)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1124)\n\tat org.testng.TestNG.run(TestNG.java:1032)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n\tat ✽.And I login as admin(features/Login.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "update profile - read data from excel",
  "description": "",
  "id": "login-test;update-profile---read-data-from-excel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click Profile",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I update profile data",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see success message \"CHANGES SAVED!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.i_click_general()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard.should_expand()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CHANGES SAVED!",
      "offset": 30
    }
  ],
  "location": "Dashboard.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.phptravels.net/admin");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 504093777,
  "status": "passed"
});
formatter.before({
  "duration": 1044970866,
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
  "duration": 2278660294,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.login()"
});
formatter.result({
  "duration": 435466,
  "error_message": "org.picocontainer.injectors.AbstractInjector$UnsatisfiableDependenciesException: step_definitions.LoginFeature has unsatisfied dependency \u0027interface org.openqa.selenium.WebDriver\u0027 for constructor \u0027public step_definitions.LoginFeature(org.openqa.selenium.WebDriver)\u0027 from org.picocontainer.DefaultPicoContainer@51671b08:4\u003c|\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:191)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\n\tat org.testng.TestRunner$1.run(TestRunner.java:686)\n\tat org.testng.TestRunner.runWorkers(TestRunner.java:1010)\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:717)\n\tat org.testng.TestRunner.run(TestRunner.java:618)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:357)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:352)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:310)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:259)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1199)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1124)\n\tat org.testng.TestNG.run(TestNG.java:1032)\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n\tat ✽.And I login as admin(features/Login.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "update profile - read data from excel",
  "description": "",
  "id": "login-test;update-profile---read-data-from-excel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I click Profile",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I update profile data",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see success message \"CHANGES SAVED!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Dashboard.i_click_general()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Dashboard.should_expand()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CHANGES SAVED!",
      "offset": 30
    }
  ],
  "location": "Dashboard.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://www.phptravels.net/admin");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 534064692,
  "status": "passed"
});
});