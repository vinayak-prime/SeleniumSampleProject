package step_definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import bsh.org.objectweb.asm.Constants;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import excelutils.ExcelReader;

import page_objects.*;

 public class LoginFeature {
	 
	public WebDriver driver;
	public SamplePageObjects page;
	public static ExcelReader TestData = new ExcelReader("./testdata/SampleData.xlsx");
	
	public LoginFeature(WebDriver driver) {
		this.driver = Hooks.driver;
		page = new SamplePageObjects(driver);
	}
	
	@Given("I login as admin$")
	public void login() {
		page.login(driver, "admin@phptravels.com", "demoadmin", "DASHBOARD");
	}
	
	@Given("^I enter username \"([^\"]*)\"$")
	public void i_enter_username(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement email = driver.findElement(By.name("email"));
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(email));
		
		
		 driver.findElement(By.name("email")).clear();
	     driver.findElement(By.name("email")).sendKeys(TestData.getData("LeadSubmissionData", 1, 1));
	}

	@Given("^I enter password \"([^\"]*)\"$")
	public void i_enter_password(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 driver.findElement(By.name("password")).clear();
		 driver.findElement(By.name("password")).sendKeys(TestData.getData("LeadSubmissionData", 1, 1));
	}

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.className("ladda-button")).click();
	   Thread.sleep(10000);
	}

	@Then("^I should see dashboard$")
	public void i_should_see_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    String text = driver.findElement(By.className("fa-home")).getText();
	    Assert.assertEquals(text, "DASHBOARD");
	}


}
