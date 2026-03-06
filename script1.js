//scores
let votes=[];


//Available options
const options=["yes","no","maybe"];

//functions
function vote(choice){
    votes.push(choice);
    //console.log("votes array", votes);
    updateResults();
    //updateVoteList(); 
}