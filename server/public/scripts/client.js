//global variables
var peopleArray = [];
var randomArray = [];
var teamsArray= [];
//document ready
$( document ).ready(function(){
  console.log( "I'm here for you." );
  init();
});

//function init
function init(){
  console.log( "inside function init");
  enable(true);
}//ends init

//function enable
function enable(value){
  console.log( "inside enable" );
  //on click generateTeam -  gets PEOPLE
  if(value){
    $( '#getTeamBtn' ).on( 'click', generateTeam);
    //$( '#outputDiv').on( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').on( 'click', '.generateTeamBtn', generateAllTeams);
  }//ends if
  else{
    $( '#getTeamBtn' ).off( 'click', generateTeam);
    //$( '#outputDiv').off( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').off( 'click', '.generateTeamBtn', generateAllTeams);
  }
}


//event handlers
  //click generate teams
  function generateTeam(){
    console.log( "inside generate team" );
    var numTeams = retrieveNumTeams();
    peopleArray = getPeople();
    randomArray = randomizePeople(peopleArray);
    teamsArray = assignTeams(randomArray);
    displayTeam(numTeams, teamsArray);
  }//ends generateTeam

  //click save teams
  function saveTeam(){
      console.log( "inside saveTeam" );
  }//ends saveTeam

  //toggle past teams
  function viewAllTeams(){
    console.log( "inside viewAllTeams");
  }//ends viewAllTeams

//logic
function retrieveNumTeams(){
  console.log( "inside retrieveNumTeams" );
  var numTeams = $( '#newTeams' ).val();
  console.log( "the number of teams they want", numTeams);
  return numTeams;
}//ends retrieveNumTeams

function randomizePeople(array){
  console.log( "inside randomizePeople" );
  while (array.length > 0) {
    var randInt = Math.floor(Math.random() * array.length);
    console.log ( "inside while loop randInt:", randInt );
    var randPerson = array.splice(randInt, 1);
    console.log ( "inside while loop randPerson:", randPerson);
    randomArray.push(randPerson);
    console.log ( "inside while loop randomArray:", randomArray);
  }//ends while loop
  console.log( "after the while loop is done randomArray:", randomArray);
  return randomArray;
}//ends randomizePeople

function assignTeams(){
  console.log( "inside assignTeams" );

}//ends assignTeams

//DOM methods
function displayTeam(num, array){
  console.log( "inside displayTeam" );

}//ends displayTeam


//REST interface

  //get /people -GET PEOPLE
  function getPeople(){
    console.log( "inside getPeople" );
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(response){
          console.log( "I've come back from /people, and I brought this:", response);
          return response;
        }//end success
    });//ends ajax GET
  }//ends ajax get getPeople

  //get /teams -GET PAST teams
  function getTeams(){
    console.log( "inside getTeams");
  }//ends ajax get getTeams

  //post /teams -POST CURRENT teams
  function postTeam(){
    console.log( "inside postTeam" );

  }//ends ajax post postTeam
