$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/Guru99.feature");
formatter.feature({
  "line": 2,
  "name": "Guru99 website",
  "description": "",
  "id": "guru99-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@guru99_Features"
    }
  ]
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "Check that main elements on a google homepage are displayed",
  "id": "guru99-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@tc02"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "launch an chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens google homepage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "verify textbox",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "google_steps.launch_an_chrome_browser()"
});
formatter.result({
  "duration": 11850957323,
  "error_message": "java.lang.AbstractMethodError: org.openqa.selenium.chrome.ChromeOptions.is(Ljava/lang/String;)Z\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.init(RemoteWebDriver.java:176)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:112)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat main_java.google_java.url(google_java.java:18)\r\n\tat steps.google_steps.launch_an_chrome_browser(google_steps.java:12)\r\n\tat ✽.Given launch an chrome browser(src/main/resources/features/Guru99.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "google_steps.the_user_opens_google_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "google_steps.verify_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "google_steps.click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
});