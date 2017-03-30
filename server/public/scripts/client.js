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
  console.log("inside randomizePeople");
  var m = array.length,
      t, i;
  // While there remain elements to shuffle…
  while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
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
  return teamsArray;
}//ends assignTeams

//DOM methods
function displayTeam(teamsArray){
  console.log( "inside displayTeam" );
  console.log( "inside displayTeam, teamsArray", teamsArray);

  var $el = $ ( '#outputDiv' );
  // for loop that appends 1 team
  for ( var i = 0; i < teamsArray.length; i++){
    $el.append( '<div class = "col-md-4" "team"></div>');
    var $el1 = $el.children().last();
    $el1.append( '<p class = "teamNumber">Team '+(i+1)+'</p>');

    for (var j = 0; j < teamsArray[i].length; j++){
      $el1.append('<p class = "teamMember">'+teamsArray[i][j].person+'</p>');
    }//ends for loop that appends team members
  }//ends team append for loop






  // <div class="row">
  //       <div class="col-md-4" "teamFour">
  //         <p class= teamNumber>Team 4</p>
  //       </div>
  //       <div class="col-md-4" "teamFive">
  //         <p class= teamNumber>Team 5</p>
  //       </div>
  //       <div class="col-md-4" "teamSix">
  //         <p class= teamNumber>Team 6</p>
  //       </div>
  // </div>

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
          console.log( "this is response[4]", response[4]);
          console.log( "inside getPeople numTeams", numTeams);
          randomArray = randomizePeople(response);
          teamsArray = assignTeams(numTeams, randomArray);
          console.log( "inside get people after assignTeams, teamsArray", teamsArray);
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
