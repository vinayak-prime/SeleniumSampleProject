package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.relevantcodes.extentreports.ExtentReports;

import java.io.File;
import java.io.IOException;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        plugin = {"pretty",
                  "html:target/cucumber-html-report",
                  "json:target/cucumber.json",
                  "rerun:failed/rerun.txt"},
        glue = {"step_definitions"},
        monochrome = false,
        tags = {"@smoke"}
)

public class ExtentRunnerAT {

    @AfterClass
    public static void setUp() throws IOException {
        String path = "src\\test\\resources\\extent-config.xml";

		ExtentReports report = new ExtentReports(path);
		report.loadConfig(new File(path));
		report.addSystemInfo("user", System.getProperty("user.name"));
		report.addSystemInfo("OS", "windows");
		report.setTestRunnerOutput("Sample Test Runner");
    }
}
