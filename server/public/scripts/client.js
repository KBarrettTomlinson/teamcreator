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
    $( '#numberOfTeamsBtn' ).on( 'click', generateTeam);
    //$( '#outputDiv').on( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').on( 'click', '.generateTeamBtn', generateAllTeams);
  }//ends if
  else{
    $( '#numberOfTeamsBtn' ).off( 'click', generateTeam);
    //$( '#outputDiv').off( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').off( 'click', '.generateTeamBtn', generateAllTeams);
  }
}


//event handlers
  //click generate teams
  function generateTeam(){
    console.log( "inside generate team" );
    var numTeams = retrieveNumTeams();
    getPeople(numTeams);
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
  var numTeams = $( '#newByTeams' ).val();
  console.log( "the number of teams they want", numTeams);
  return numTeams;
}//ends retrieveNumTeams

function randomizePeople(array){
  console.log( "inside randomizePeople" );
  while (array.length > 0) {
    var randInt = Math.floor(Math.random() * array.length);
    var randPerson = array.splice(randInt, 1);
    console.log("inside randomizePeople while loop randPerson", randPerson);
    randomArray.push(randPerson);
  }//ends while loop
  console.log( "after the while loop is done randomArray:", randomArray);
  return randomArray;
}//ends randomizePeople

function assignTeams(numTeams, randArray){

  console.log( "inside assignTeams" );
  console.log( "here is the array that I have to assign teams from:", randArray);
  console.log( "inside assignTeams numTeams:", numTeams);
  var teamsArray = [];
  for (var i = 0; i < numTeams; i++){
    teamsArray.push([]);
  }//ends for loop create empty team arrays
  for ( i = 0; i < randArray.length; i++){
    teamsArray[i % numTeams].push(randArray[i]);
  }//ends for loop add people to teamsdata
  console.log( "inside assignTeams, teamsArray", teamsArray);
}//ends assignTeams

//DOM methods
function displayTeam(num, array){
  console.log( "inside displayTeam" );

}//ends displayTeam


//REST interface

  //get /people -GET PEOPLE
  function getPeople(numTeams){
    console.log( "inside getPeople" );
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(response){
          console.log( "I've come back from /people, and I brought this:", response);
          console.log("inside getPeople numTeams", numTeams);
          randomArray = randomizePeople(response);
          teamsArray = assignTeams(numTeams, randomArray);
          displayTeam(teamsArray);
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
