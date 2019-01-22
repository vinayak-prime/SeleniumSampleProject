package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features",
		 plugin = {"pretty:target/cucumber-pretty.txt",
                 "html:target/cucumber-html-report",
                 "json:target/cucumber.json",
                 "rerun:failed/rerun.txt"},
       glue = {"step_definitions"},
       monochrome = true,
       dryRun = false,
       tags = {"@login"})
		

public class RunCukesTest {

}
