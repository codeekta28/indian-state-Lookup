console.log("This is my re attempt of program");
let search = document.querySelector("#search");
let matchData = document.querySelector("#matchData");
search.addEventListener("input",filteringData);
async function filteringData(){
        let fetchData = await fetch("state.json");
        let states = await fetchData.json();
        let matches = states.filter((state)=>{
            let reg= new RegExp(`^${search.value}`,`gi`);
            return (state.state.match(reg)||state.capital.match(reg));
        })
        if(search.value.length===0){
            matches=[];
            matchData.innerHTML="";
        }
        displayMatches(matches);
}
function displayMatches(matches){
    if(search.value.length>0){
        const html = matches.map((match)=>`
        <div class="card card-body mb-1">
        <h4>${match.state} [Capital- <span class="text-primary">${match.capital}</span> ]</h4>
        </div>
        `).join('');
        matchData.innerHTML = html;
    }
}