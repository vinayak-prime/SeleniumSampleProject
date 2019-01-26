@login 
Feature: Login test

   
   Background: check login
     Given I open website "https://www.phptravels.net/admin"
     And I login as admin
     
   Scenario: update profile - read data from excel 
     When I click Profile 
     And I update profile data 
     Then I should see success message "CHANGES SAVED!"
     
    Scenario: update profile - read data from excel 
     When I click Profile 
     And I update profile data 
     Then I should see success message "CHANGES SAVED!"
     
     
    Scenario: update profile - read data from excel 
     When I click Profile 
     And I update profile data 
     Then I should see success message "CHANGES SAVED!"
     
