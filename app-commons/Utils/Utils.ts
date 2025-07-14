import test, {type Page, expect, PageScreenshotOptions} from 'playwright/test'


class Utils{
constructor(public page:Page){
    this.page =page
}

async navigateTo(url:string){
    return await this.page.goto(url)
}
async maximizeWindow(){
    return   await this.page.setViewportSize({ width: 1920, height: 1080 });
}
async wait(waitTimeInMiliSeconds:number){
    return await this.page.waitForTimeout(waitTimeInMiliSeconds)
}
async waitForPageLoad(){
    return await this.page.waitForLoadState('domcontentloaded')
}

async clickOn(selector:string){
    return await this.page.click(selector)
}
async doubleClickOn(selector:string){
    return await this.page.dblclick(selector)
}
async enterText(selector:string,text:string){
    return await this.page.fill(selector,text)
}
async selectValueFromDropdownList(selector:string,text:any){
    const dropdown=this.page.locator(selector)
    return await dropdown.selectOption({value:text})
}
async  scrollDown(page: Page, scrollHeight: number = 1000) {
    await page.evaluate(async (scrollHeight) => {
      let currentScroll = 0;
      const maxHeight = document.documentElement.scrollHeight;
      
      // Scroll down until the bottom of the page or for a specific distance
      while (currentScroll < maxHeight) {
        window.scrollBy(0, scrollHeight); // Scroll down by the given amount
        currentScroll += scrollHeight;
        await new Promise(resolve => setTimeout(resolve, 300)); // Wait for 300ms to simulate scrolling delay
      }
    }, scrollHeight);

    
  }

  async setElementTextAsBufferedValue(selector:string){
    const element=this.page.locator(selector)
    const textContent=await element.textContent()
    setBuffer('buffered text value',textContent);
};

async verifyValueExistsInTable(tableselector:string,value:string){
    //Construct the selector for specefic cell containing the value
 
    await this.page.waitForSelector(tableselector);
    const cellSelector=`${tableselector} td`;

    //find all cells in the table
    const cells=await this.page.$$(cellSelector);

    //check if any of the cells contain the specified value
    let isValueFound =false;
    for(const cell of cells){
        const cellText=await cell.textContent();
        if (cellText && cellText.includes(value)){
            isValueFound=true;
            break;
        }
    }

    //If value is not found inside the table , throw an error
    if (!isValueFound){
        throw new Error(`Value "${value}" not found in the table: ${tableselector}`);
    }
}


//assertions
async isElementVisible(selector:string){
    const element=this.page.locator(selector)
    await this.page.waitForSelector(selector);
    await element.scrollIntoViewIfNeeded();
    try{
        const isVisible=await element.isVisible()
        expect(isVisible).toBeTruthy() 
    } catch(error){
        throw new Error(`${error}`)
    }
}

async verifyElementToContainText(selector:string,text:any){
    const locatorText=this.page.locator(selector)
    return await expect(locatorText).toContainText(text)
}















}
export default Utils

function setBuffer(arg0: string, textContent: string | null) {
    throw new Error('Function not implemented.')
}
