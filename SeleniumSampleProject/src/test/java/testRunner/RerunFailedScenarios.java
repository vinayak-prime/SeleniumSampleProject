package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"@failed/rerun.txt"}, 
                plugin = {"pretty", "html:target/cucumber-html-report",
        "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-html-report/extentreport.html", 
        "json:target/cucumber.json"}, 
         monochrome = false,
         glue = {"step_definitions"})

public class RerunFailedScenarios {

}