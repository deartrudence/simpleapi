// namespace
//this is a javascript object.  Everything with app. prepended to it becomes an element of this object
//really for more complex code, but a convention nonetheless
var app = {};

//--------------------------------------------------------

// called from getQuote()
app.displayQuote = function(quote){
	//quote here is exactly equal to result from the success function in getQuote().  We passed the info, the name doesn't need to be the same :)

   // the response is an array with only 1 item, so we use [0] to the get first (and only) item	
  $('.quote').text(quote[0].words);
  $('.book').text(quote[0].book)
  console.log(quote);

} // end app.displayQuote

//--------------------------------------------------------

// get douglas adams quote from API
app.getQuote = function(){

	//this is the AJAX call. All you really need to know is the URL (aka the endpoint). Everything else remains the same.  And then the result is sent to another function to do something with it

  $.ajax({
    url: "http://www.dontpanic.space/api/v1/quotes/random",
    type: "GET",
    dataType: "json",
    //if the response is successful create a function that console logs "success" and then calls the function to display the quote on the page
    success : function(result){
      console.log("success");
      app.displayQuote(result);
    }
  }); //end ajax 

} // end app.getQuote

//--------------------------------------------------------

// initialisation function --> called from ready function 
app.init =  function() {

    // get quote immediately (on page load)
    app.getQuote();

    // listens for 'Get New Quote' button to be clicked and runs the getQuote function again
    $('.quoteButton').on('click', function(){
      app.getQuote();
    });

} // end of init function

//--------------------------------------------------------

// Ready function: START HERE 

$(function() {

  // everything that is in init function runs on page load.  All other functions will wait to be called
  app.init(); 


}); //end ready