/**
 * This test:
 * - Search for a product using search funtionality
 * - Go to product details page
 * - Change quantity and size of the product
 * - Add item to the cart and Continue shoping
 * - Go back to home page   
 */
// @TEST_ENVIRONMENTS: testing
//=include ../environments.js
//=include ../includes/common_steps.js
//
//
  //Going to the URL
  TestingUrl(testingRootUrl).then(function() {
   console.info("Main page accessed");


  //Ensure Site logo is present
  $browser.waitForAndFindElement($driver.By.xpath('//img[(@class="logo img-responsive")]'), 7000).then(function() {
    console.info("Main page logo present");

  }).then(function() {

  //Searching for a specific product using search functionality
  $browser.findElement($driver.By.xpath('//*[@id="search_query_top"]')).sendKeys("Blouse");
   $browser.findElement($driver.By.name("submit_search")).click();

    console.info("Search submitted");

  }).then(function() {

  //Verify search result and go to product details page
  $browser.waitForAndFindElement($driver.By.linkText("Blouse"), 7000).then(function(detailsElement) {
     detailsElement.click();
    console.info("Clicked product Name");
  });

  }).then(function() {

  //Changing quantity of the product
  $browser.waitForAndFindElement($driver.By.className("icon-plus"), 7000).then(function(addmoreElement) {
	  addmoreElement.click();

    console.info("One more product added");
  });  

  }).then(function() {

  //Changing size of the product
  $browser.findElement($driver.By.xpath('//*[@id="group_1"]/option[@value="2"]')).click();
    console.info("Product size selected");

  }).then(function() {

  //Selecting color of the product
  $browser.findElement($driver.By.xpath('//*[@id="color_11"]')).click();
    console.info("Product color selected");

  }).then(function() {

  //Adding the product to cart	  
  $browser.findElement($driver.By.xpath('//*[(@class="exclusive")]')).click();
   console.info("Item added to your cart")

  }).then(function() {

  //Continue shopping option	  
  $browser.waitForAndFindElement($driver.By.xpath('//*[(@class="icon-chevron-left left")]'), 7000).then(function(shopElement) {
	  shopElement.click();

   console.info("Continue Shopping Option Clicked")
  });

  }).then(function() {

  //Going back to home page	  
  $browser.waitForAndFindElement($driver.By.xpath('//a[(@class="home")]'), 7000).then(function(homeElement) {
	  homeElement.click();

   console.info("Going back to the home page")
  });

  });
});
