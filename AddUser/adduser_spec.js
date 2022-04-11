const { element, browser, Button, $$, $ } = require("protractor");

describe('Webtable Validation', function() {

  beforeEach(function(){
    browser.get('https://www.way2automation.com/angularjs-protractor/webtables/');
  })

  it('Test to add a user and to validate if the user has been added to the table', async function() {
    await element(by.xpath("//button[contains(text(),'Add User')]")).click();
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
    expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe("Aravind");
    let tableDetails=await $("table.smart-table tbody");
    let rowDetails=tableDetails.$$("tr");
    let noOfRows=rowDetails.count();
    for(let i=0; i<noOfRows; i++)
    {
      let firstRowDet=await rowDetails.get(i).$$("td");
      let firstData=await firstRowDet.get(0);
      let text=await firstData.getText();
      if(text === "Aravind")
      {
        console.log("The Record related to Aravind has been inserted successfully");
        break;
      }
      else
      console.log("The Record related to Aravind is not found")
    }
  });

  it('To delete Novac user and to validate if the user has been deleted from the table', async function() {
    let tableDetails2=$("table.smart-table tbody");
    let rowDetails2=tableDetails2.$$("tr");
    let noOfRows2=await rowDetails2.count();
    console.log(noOfRows2);
    for(let i=0; i<noOfRows2; i++)
    {
      let firstRowDet2=rowDetails2.get(i).$$("td");
      let firstData2=firstRowDet2.get(2);
      let text2=await firstData2.getText();
      if(text2 === "novak")
      {
        let deleteBtn=firstRowDet2.last().$(".icon.icon-remove");
        await deleteBtn.click();
        let okBtn=await element(by.xpath("//button[contains(text(),'OK')]"));
        await okBtn.click();
        break;
      }
    }
  });
});