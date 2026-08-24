Feature: Hello App Page

Scenario: Navigate from Home to Hello page
  When The user visit home page
  And The user clicks on the Hello button from Home
  Then The user see the hello word message
