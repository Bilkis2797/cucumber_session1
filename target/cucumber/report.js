$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/TechfiosLogin.feature");
formatter.feature({
  "name": "Techfios billing login page functionality validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to login with valid credential",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
});