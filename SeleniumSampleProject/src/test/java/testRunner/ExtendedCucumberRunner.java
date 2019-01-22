package testRunner;

import com.cucumber.listener.Reporter;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
        jsonReport = "target/cucumber.json",
        jsonUsageReport = "target/cucumber-usage.json",
        outputFolder = "target/cucumber-html-report",
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        usageReport = true,
        retryCount = 1,
        screenShotLocation = "screenshots/",
        screenShotSize = "300px",
        toPDF = true
)

@CucumberOptions(
        features = "classpath:features",
        plugin = {"pretty:target/cucumber-pretty.txt", "html:target/cucumber-html-report",
                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-html-report/extentreport.html",
                "json:target/cucumber.json",
                "rerun:failed/rerun.txt"},
        glue = {"step_definitions"},
        monochrome = false,
        tags = {"@smoke"}
)
public class ExtendedCucumberRunner {
	@AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));
    } 

}