var config = require("./config.js");
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

By = webdriver.By;
driver.get('https://login.salesforce.com');
var name = driver.findElement(By.id('username'));
name.click();
// console.log(config.test);
name.sendKeys(config.username);
var pass = driver.findElement(By.id('password'))
pass.sendKeys(config.password);
var button = driver.findElement(By.id('Login'));
button.click();
driver.sleep(100000);
