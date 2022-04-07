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
  //  await element.all(by.xpath("//select[@name='RoleId']")).click();
    await element(by.xpath("//input[@name='Email']")).sendKeys("AravindNatesan@gmail.com");
    await element(by.xpath("//input[@name='Mobilephone']")).sendKeys("5555555555");
    await element(by.xpath("//button[contains(text(),'Save')]")).click();
    browser.sleep(6000);
    let details=element.all(by.xpath("(//*[@class='smart-table-data-cell'])")).getText();
    console.log(details);
  //  expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe("Aravind");
  //  let rowCount = element.all(by.xpath("//*[@class='smart-table-data-cell']")); column in columns
  // let rowCount = element.all(by.repeater('column in columns'));  
  // browser.sleep(6000);
  //   rowCount.each(function(record){
  //     let cells = record.$$('td');
  //     cells.get(0).getText().then(function(txt){
  //       if(txt == 'Aravind')
  //       cells.get(10).$(Button).click();
  //     });
  //   })
                //   element(by.model('todoList.todoText')).sendKeys('write first protractor test');
  //   element(by.css('[value="add"]')).click();

  //   var todoList = element.all(by.repeater('todo in todoList.todos'));
  //   expect(todoList.count()).toEqual(3);
  //   expect(todoList.get(2).getText()).toEqual('write first protractor test');

  //   // You wrote your first test, cross it off the list
  //   todoList.get(2).element(by.css('input')).click();
  //   var completedAmount = element.all(by.css('.done-true'));
  //   expect(completedAmount.count()).toEqual(2);
  });

    xit('To delete Novac user and to validate if the user has been deleted from the table', async function() {
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