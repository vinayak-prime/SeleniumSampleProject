@login 
Feature: Login test

   
   Background: check login
     Given I open website "https://www.phptravels.net/admin"
     And I login as admin
     
   Scenario: sample
     When I click general 
     Then should expand 
     And I should see "SETTINGS"
     And I should see "MODULES"
     
     Scenario: sample 2
     When I click general 
     Then should expand 
     And I should see "SETTINGS"
     And I should see "MODULES"
     
     
