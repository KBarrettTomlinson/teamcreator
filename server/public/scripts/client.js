//global variables

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
    $( '#newByTeams' ).on( 'click', generateTeam);
    //$( '#outputDiv').on( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').on( 'click', '.generateTeamBtn', generateAllTeams);
  }//ends if
  else{
    $( '#newByTeams' ).off( 'click', generateTeam);
    //$( '#outputDiv').off( 'click', '.saveTeamBtn', saveTeam);
    //$( '#outputDiv').off( 'click', '.generateTeamBtn', generateAllTeams);
  }
}


//event handlers
  //click generate teams
  function generateTeam(){
    console.log( "inside generate team" );
    retrieveNumTeams();
    getPeople();
    randomizePeople();
    assignTeams();
    displayTeam();
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
}//ends retrieveNumTeams

function randomizePeople(){
  console.log( "inside randomizePeople" );
}//ends randomizePeople

function assignTeams(){
  console.log( "inside assignTeams" );

}//ends assignTeams

//DOM methods
function displayTeam(){
  console.log( "inside displayTeam" );

}//ends displayTeam


//REST interface

  //get /people -GET PEOPLE
  function getPeople(){
    console.log( "inside getPeople" );
  }//ends ajax get getPeople

  //get /teams -GET PAST teams
  function getTeams(){
    console.log( "inside getTeams");
  }//ends ajax get getTeams

  //post /teams -POST CURRENT teams
  function postTeam(){
    console.log( "inside postTeam" );

  }//ends ajax post postTeam
