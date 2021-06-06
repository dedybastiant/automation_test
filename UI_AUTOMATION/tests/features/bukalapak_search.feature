Feature: Bukalapak - Search Item

Scenario: Search Item
  Given user at bukalapak home page
  When user click searchbox
  And user input keyword "Airpods"
  Then user will see search result label of "Airpods"
  And user will see the first item contain keyword "Airpods" 