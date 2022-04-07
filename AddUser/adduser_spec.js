const { element, browser, Button } = require("protractor");

describe('Webtable Validation', function() {

  beforeEach(function(){
    browser.get('https://www.way2automation.com/angularjs-protractor/webtables/');
  })

  it('Test to add a user and to validate if the user has been added to the table', async function() {
    browser.sleep(6000);
    await element(by.xpath("//button[contains(text(),'Add User')]")).click();
    browser.sleep(10000);
    await  element(by.xpath("//input[@name='FirstName']")).sendKeys("Aravind");
    await element(by.xpath("//input[@name='LastName']")).sendKeys("Natesan");
    await element(by.xpath("//input[@name='UserName']")).sendKeys("AravindNatesan");
    await element(by.xpath("//input[@name='Password']")).sendKeys("Pwd@123");
    await element(by.xpath("(//input[@type='radio'])[1]")).click();
    await element(by.xpath("//select[@name='RoleId']")).click();
    await element(by.xpath("//option[contains(text(),'Sales Team')]")).click();
    await element(by.xpath("//input[@name='Email']")).sendKeys("AravindNatesan@gmail.com");
    await element(by.xpath("//input[@name='Mobilephone']")).sendKeys("5555555555");
    await element(by.xpath("//button[contains(text(),'Save')]")).click();
    browser.sleep(6000);
    expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe("Aravind");
  });

    it('To delete Novac user and to validate if the user has been deleted from the table', async function() {
      let rowCount = element.all(by.repeater('column in columns'));  
      browser.sleep(6000);
        rowCount.each(function(record){
          let cells = record.$$('td');
          cells.get(0).getText().then(function(txt){
            if(txt == 'Novak')
            cells.get(10).$(Button).click();
          })
        })
    });
  });