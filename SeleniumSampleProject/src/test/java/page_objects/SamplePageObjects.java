package page_objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class SamplePageObjects {
	
	
	public SamplePageObjects(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name = "email")
	public WebElement email_field;
	
	@FindBy(name = "password")
	public WebElement password_field;
	
	@FindBy(className = "ladda-button")
	public WebElement login_field;
	
	@FindBy(className = "dash")
	public WebElement dashboard_field;
	
	
	
	public void login(WebDriver driver, String username, String password, String expected) {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOf(email_field));
		email_field.clear();
		email_field.sendKeys(username);
		password_field.clear();
		password_field.sendKeys(password);
		login_field.click();
		
		WebDriverWait wait2 = new WebDriverWait(driver, 20);
		wait2.until(ExpectedConditions.visibilityOf(dashboard_field));
		String text = dashboard_field.getText();
		Assert.assertEquals(text, expected);
	}

}
