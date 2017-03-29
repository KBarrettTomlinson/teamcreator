//global variables

//document ready
$( document ).ready(function(){
  console.log( "I'm here for you." );
  init();
});

//function init
function init(){
  console.log( "inside function init");
  enable();
}//ends init

//function enable
function enable(){
  console.log( "inside enable" );
  //on click generateTeam -  gets PEOPLE
  generateTeam();
  //on click save team - posts Team
  saveTeam();
  //on click toggle between views - gets teams
  generateAllTeams();
}


//event handlers
  //click generate teams
  function generateTeam(){
    console.log( "inside generate team" );
    retrieveNumTeams();
    getPeople();
  }//ends generateTeam

  //click save teams
  function saveTeam(){
      console.log( "inside saveTeam" );
  }//ends saveTeam

  //toggle past teams

//logic
function retrieveNumTeams(){
  console.log( "inside retrieveNumTeams" );

}//ends retrieveNumTeams

//DOM methods

//REST interface

  //get /people -GET PEOPLE
  function getPeople(){
    console.log( "inside getPeople" );

  }//ends ajax get getPeople

  //get /teams -GET PAST teams

  //post /teams -POST CURRENT teams
