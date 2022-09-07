const api =  'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc'
let filterArray =[]; 
let galleryArray =[];
async function getDetails(){
	try{
		const response = await fetch(api)
		return await response.json()
		.then(console.log(response))
		
	}
	catch(err){}
	finally{}
}

async function showTeam(data){
	card.innerHTML =""
	data.forEach(element => {
		let card = document.getElementById("card");
		card.innerHTML += `
		<div class="col-md-4 mt-3">
		 <div class="card p-3 ps-5 pe-5 text-black">
				<h4 class="text-capitalize text-center">${element.team.name}</h4>
				<img src="${element.team.logos[0].href}">
				<h4 class="text-capitalize text-center">${element.stats[0].name}:${element.stats[0].displayValue}</h4>
				<h4 class="text-capitalize text-center">lose : 13 </h4>
				<h4 class="text-capitalize text-center">Representative players : 3</h4>
				<br><br>
			</div>
				</div>`
	});
		
}


 document.getElementById("myinput").addEventListener("keyup",function(){
	let text = document.getElementById("myinput").value;
	filterArray = [];
	filterArray = galleryArray.filter(function(a){
	if(a.team.name.toLowerCase().includes(text.toLowerCase())){
		return a;
	}	
	});
	if(this.value ==""){
		showTeam(galleryArray);
	}
	else{
		if(filterArray.length == 0){
			document.getElementById("para").style.display = 'block';
			document.getElementById("card").innerHTML = "";
		}
		else{
			showTeam(filterArray);
			document.getElementById("para").style.display = 'none';
		}
	}
 })
async function loadTeamData(){
	const res = await getDetails();
	galleryArray= res.data.standings;

	showTeam(galleryArray)
}