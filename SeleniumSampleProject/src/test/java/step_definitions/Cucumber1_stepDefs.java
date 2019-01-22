package step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Cucumber1_stepDefs {
	
	public WebDriver driver;
	
	public Cucumber1_stepDefs() {
		this.driver = Hooks.driver;
	}
	
	@Given("^I open website \"([^\"]*)\"$")
	public void i_open_website(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(arg1);
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	

	@When("^I enter keyword \"([^\"]*)\"$")
	public void i_enter_keyword(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.name("q")).sendKeys(arg1);
	    driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
	}

	@Then("^I should see results with \"([^\"]*)\"$")
	public void i_should_see_results_with(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   String title = driver.getTitle();
	   Assert.assertEquals(title, arg1);
	}

	@Then("^I close driver$")
	public void close_driver() {
		driver.close();
	}

}
