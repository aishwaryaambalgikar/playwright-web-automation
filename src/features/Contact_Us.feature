# Contact Us page tests for WebDriverUniversity.com
# Verifies successful form submission.
Feature: WebDriverUniversity.com - Contact Us Page

    # Successful Contact Us form submission.
    Scenario: Valid Contact Us Form Submission
        Given I navigate to the WebDriverUniversity.com homepage
        When I click on the Contact Us button
        And I enter a valid first name
        And I enter a valid last name
        And I enter a valid email address
        And I enter a valid message
        And I click on the submit button
        Then I should see a success message confirming the form submission