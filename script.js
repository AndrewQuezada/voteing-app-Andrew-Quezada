//scores
let votes=[];


//Available options
const options=["yes","no","maybe"];

//functions
function vote(choice){
    votes.push(choice);
    //console.log("votes array", votes);
    updateResults();
    updateVoteList(); 
}
//update resluts
function updateResults(){
    const resultDiv = document.getElementById("results")
    if(votes.length === 0){
        resultDiv.innerHTML = `
                       <h2> Results </h2>
                       <p class="no-votes"> No votes yet</p>

        
        
        `;
        return;
    }
// Get two separte arrays
const [voteOptions, voteCounts] = countVotes(votes);
let html = `<h2> Results </h2>`;
let index = 0;

for(let option of voteOptions){
    const count = voteCounts[index]
    console.log(count);
    console.log(option);
  

    const percentage = getPercentage(option, votes);
    html += `
            <div class="result-item">
              <span class="result-label"> ${option} ${percentage} </span>
                 <span class="result-count"> ${count} </span>
    
    
    `;
    index++;
}

const totalVotes = getTotalVotes(votes);
html += `
        <p class="total-votes"> Total Votes : ${totalVotes} </p>;
`


  resultDiv.innerHTML = html;
}


// funutions contvotesn - count votes using for of and reurn arrays
function countVotes(votesArray){
// create parralliel arrays
const voteOptions=[];
const voteCounts=[];

//loop
for(let currentVote of votesArray){
    let foundIndex = -1;
    let index = 0;

    for(let option of voteOptions){
        if(option === currentVote)
            {
            foundIndex = index;
            break;
        }
        index++;
    }

    if(foundIndex !== -1){
        voteCounts[foundIndex]++;
    }else{
        voteOptions.push(currentVote);
        voteCounts.push(1);
    }
}
return [voteOptions, voteCounts]
}

//finction to calculate total votes useing for of

function getTotalVotes(votesArray){
    let total =0;
    for(let vote of votesArray){
        total++;
    }
    console.log(votesArray);
    return total;
}

//function get percentage
function getPercentage(option, votesArray){
    let optionCount =0;
    let total =0;
    for(let vote of votesArray){
        total++;
        if(vote === option){
            optionCount++
        }
    }

    if(total === 0){
        return 0;
    }

    return ((optionCount / total) * 100).toFixed(1);
}
//funtion to diplay vote history
function updateVoteList(){
    const voteListDiv = document.getElementById("voteList")
    const voteItemDiv = document.getElementById("voteItems")
    if( votes.length === 0){
        voteListDiv.style.display ="none";
        return;
    }

    voteListDiv.style.display = "block";
    let html = '';
    let count = 0;

    for(let vote of votes){
        count++;
        html += `
            <span class="vote-item"> #️⃣${count}: ${vote} </span>
        `;

        voteItemDiv.innerHTML = html;
    }
}
//function reset votes
function resetVotes(){
    votes = [];
    updateResults(); 
}