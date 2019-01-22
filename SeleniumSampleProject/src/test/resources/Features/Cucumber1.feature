@smoke 
Feature: check Google 


Scenario: test google 
	Given I open website "https://www.google.co.uk"" 
	When I enter keyword "selenium" 
	Then I should see results with "selenium - Google Search" 
	
	
Scenario Outline: test multiple data 
	Given I open google website "https://www.google.co.uk"" 
	When I enter keyword "<keyword>" 
	Then I should see results with "<expectedresult>" 
	
	
	Examples: 
		|keyword|expectedresult|
		|selenium|selenium - Google Search|
		|protractor|selenium - Google Search|
 