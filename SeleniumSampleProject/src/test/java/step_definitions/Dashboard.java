package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import excelutils.ExcelReader;


public class Dashboard {
	
	public WebDriver driver;
	public static ExcelReader Testdata = new ExcelReader("./testdata/SampleData.xlsx");
	
	public Dashboard() {
		this.driver = Hooks.driver;
		
	}
	
	@When("^I click Profile$")
	public void i_click_general() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.className("btn-success")).click();
	}

	@Then("^I update profile data$")
	public void should_expand() throws Throwable {
		driver.findElement(By.name("fname")).clear();
		driver.findElement(By.name("fname")).sendKeys(Testdata.getData("LeadSubmissionData", 1, 0));
		driver.findElement(By.name("lname")).clear();
		driver.findElement(By.name("lname")).sendKeys(Testdata.getData("LeadSubmissionData", 1, 1));
		driver.findElement(By.name("mobile")).clear();
		driver.findElement(By.name("mobile")).sendKeys(Testdata.getData("LeadSubmissionData", 1, 3));
		
		// select country
		WebElement element = driver.findElement(By.className("select2-arrow"));
		Actions action = new Actions(driver);
		action.moveToElement(element);
		action.click();	
		action.sendKeys("Malaysia");
		action.click();
		action.build().perform();
		
		Thread.sleep(2000);
		driver.findElement(By.name("address1")).clear();
		driver.findElement(By.name("address1")).sendKeys(Testdata.getData("LeadSubmissionData", 1, 6));
		driver.findElement(By.name("address2")).clear();
		driver.findElement(By.name("address2")).sendKeys(Testdata.getData("LeadSubmissionData", 1, 6));
		
		// submit btn
		WebElement submitbtn  = driver.findElement(By.className("btn-primary"));
		Actions action2 = new Actions(driver);
		action2.moveToElement(submitbtn).click().perform();
	}

	@Then("^I should see success message \"([^\"]*)\"$")
	public void i_should_see(String arg1) throws Throwable {
	   
		WebElement element = driver.findElement(By.className("ui-pnotify-title"));
		String text = element.getText();
		Assert.assertEquals(text, arg1);
	}

}
