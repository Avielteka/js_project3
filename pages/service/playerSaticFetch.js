const api = "https://shoes-app-server.herokuapp.com/players";
const searchInput = document.getElementById("myinput");
let filterArray = [];
let playersGalleryArray = [];
window.onload = () => {
  loadPlayersData();
};

async function loadPlayersData() {
  data();
}

async function data() {
  let players = await getPlayers().then((res) => {
    playersGalleryArray = res;
    return res;
  });
  getPlayerData(players);
}

async function getPlayers() {
  try {
    const response = await fetch(api);
    return await response.json().then(console.log(response));
  } catch (err) {
  } finally {
  }
}

//  display data

// display video skills
function popVideo() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").innerHTML = `
<section class="h-100">
<div class="container py-5 ">
  <div class="row d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center">
    <div id="vid_con" class="bg-dark p-5 rounded-4 ">
    <button  onclick="clickClose()" type="button" class=" btn-close btn-close-white " aria-label="Close"></button>
        <div >
        <video width="600" height="400" controls>
  <source src="../our player/video/football_vid.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
      </div>
      </div>
    </div>
  </div>
</div>
</section>
`;
}

// close overlay
function clickClose() {
  document.getElementById("overlay").style.display = "none";
}

// disply card
function getPlayerData(playersArr) {
  let myCard = document.getElementById("cardContainer");
  myCard.innerHTML = "";
  playersArr.forEach((player) => {
    createPlayerCard(player,myCard)
  
  });
}

function createPlayerCard(player,myCard) {

   const { name, photo, age, strengths } = player;
    myCard.innerHTML +=  `<div onclick="popVideo()" id="cards_landscape_wrap-2" class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
          <div class="card-flyer">
              <div class="text-box">
                  <div class="image-box">
                      <img src="${photo}" alt="" />
                  </div>
                  <div class="text-container">
                      <h6>${name}</h6>
                      <p>${age}</p>
                      <p>${strengths}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
              </div>
          </div>       
</div>
`;
}

searchInput.addEventListener("keyup", function () {
  filterData(playersGalleryArray);
});

function filterData(playersGalleryArray) {
  let userInput = document.getElementById("myinput").value;
  if (userInput == "") {
    getPlayerData(playersGalleryArray);
  }else{

  
  filterArray = playersGalleryArray.filter(function (player) {
    if (player.position.toLowerCase().includes(userInput.toLowerCase())) {
      return player;
    }
  });

    if (filterArray.length == 0) {
      document.getElementById("para").style.display = "block";
      document.getElementById("cardContainer").innerHTML = "";
    } else {
      getPlayerData(filterArray);
      document.getElementById("para").style.display = "none";
    }
  }
}
