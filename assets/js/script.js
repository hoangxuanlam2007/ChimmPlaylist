// Declare variables
// Khai báo các biến
const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
playPauseBtn = wrapper.querySelector(".play-pause"),
prevBtn = wrapper.querySelector("#prev"),
nextBtn = wrapper.querySelector("#next"),
mainAudio = wrapper.querySelector("#main-audio"),
progressArea = wrapper.querySelector(".progress-area"),
progressBar = progressArea.querySelector(".progress-bar"),
musicList = wrapper.querySelector(".music-list"),
moreMusicBtn = wrapper.querySelector("#more-music"),
closemoreMusic = musicList.querySelector("#close")

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const menuClose2 = doc.querySelector("#about-1");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClose2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  playingSong(); 
});

// Scroll to About
// Lăn đến phần About
function scrollAbout(){
  var element = document.querySelector(".footer-right");
  element.scrollIntoView({ behavior: 'smooth', block: 'end'})
  element.scrollIntoView();
}

// Load Music
// Load nhạc
function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `./assets/images/${allMusic[indexNumb - 1].src}-min.jpg`;
  mainAudio.src = `./songs/${allMusic[indexNumb - 1].src}.mp3`;
}

// Show volume btn & close volume box
// Hiện nút volume và tắt volume-box
function showVolume(){
  var elms = document.getElementsByClassName("volume-box");
  var y = document.getElementById("closeVolumeBtn")

  Array.from(elms).forEach((x) => {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  })
}

function closeVolumeBtn() {
  var x = document.getElementById("closeVolumeBtn");
  var y = document.getElementById("volumeBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function closeVolume() {
  var x = document.getElementById("closeVolumeBtn");
  var y = document.getElementById("volumeBtn");
  var z = document.getElementById("volume-box")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none"
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// Show  info btn & close info-box
// Hiển thị nút info và nút đóng info-box
function showInfo(){
  var elms = document.getElementsByClassName("info-box1");

  Array.from(elms).forEach((x) => {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  })
}

function closeInfoBtn() {
  var x = document.getElementById("closeInfoBtn");
  var y = document.getElementById("infoBtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function closeInfo() {
  var x = document.getElementById("closeInfoBtn");
  var y = document.getElementById("infoBtn");
  var z = document.getElementById("info-box1")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none"
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// Display Volume
// Hiển thị âm lượng
var slider = document.getElementById("slider");
var output = document.getElementById("volume-txt");
/* Hiển thị giá trị mặc định + "%" */
output.innerHTML = ' ' + slider.value + '%'; 
/* Cập nhật giá trị hiện tại của slider + "%" */
slider.oninput = function() {
  output.innerHTML =  ' ' + this.value + '%';
}

// Play music function
// Function phát nhạc
function playMusic(){
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}

// Pause music function
// Function dừng nhạc
function pauseMusic(){
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}

// Prev music function
// Function bài trước
function prevMusic(){
  musicIndex--; //decrement of musicIndex by 1
  // If musicIndex is less than 1 then musicIndex will be the array length so the last music play
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

// Next music function
// Function bài sau
function nextMusic(){
  // Random next song
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong(); 
}

// Prevent the page scrolling when pressed Spacebar
// Không cho trang tự lướt xuống dưới khi ấn enter (fix bug)
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

// Play or pause button event
// Biến cố sau khi phát / dừng nhạc
playPauseBtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  //if isPlayMusic is true then call pauseMusic else call playMusic
  isMusicPlay ? pauseMusic() : playMusic();
  playingSong();
});

// Prev music button event
// Biến cố sau khi chuyển bài trước
prevBtn.addEventListener("click", ()=>{
  prevMusic();
});

// Next music button event
// Biến cố sau khi chuyển bài sau
nextBtn.addEventListener("click", ()=>{
  nextMusic();
});

// Update progress bar width according to music current time
// Cập nhật *chiều rộng* của thanh tiến độ bài hát theo thời gian chuẩn của bài hát
mainAudio.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime; //Getting playing song currentTime - Lấy thời gian chuẩn của bài hát đang phát
  const duration = e.target.duration; //Getting playing song total duration - Lấy tổng độ dài bài hát đang phát
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current-time"),
  musicDuartion = wrapper.querySelector(".max-duration");
  mainAudio.addEventListener("loadeddata", ()=>{
    // Update song total duration - Cập nhật số liệu độ dài bài hát
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){ //If sec is less than 10 then add 0 before it - Nếu số giầy < 10 thì thêm số 0 đằng trước
      totalSec = `0${totalSec}`;
    }
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });
  // Update playing song current time - Cập nhật thời gian của bài hát đang phát
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){ //If sec is less than 10 then add 0 before it - Nếu số giầy < 10 thì thêm số 0 đằng trước
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// Update playing song currentTime on according to the progress bar width
// Cập nhật thời gian của bài hát đang phát dựa trên độ dài của thanh tiến độ
progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth; // Getting width of progress bar - Lấy độ dài của thanh tiến độ
  let clickedOffsetX = e.offsetX; // Getting offset x value - Lấy phần bù giá trị x
  let songDuration = mainAudio.duration; // Getting song total duration - Lấy tổng độ dài bài hát
  
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic(); // Calling playMusic function - Gọi hàm playMusic
  playingSong();
});

// Change loop, shuffle, repeat icon onclick
// Đổi nút Ngẫu nhiên, Lặp lại danh sách, Lặp lại 1 bài hát
// const repeatBtn = wrapper.querySelector("#repeat-plist");
// repeatBtn.addEventListener("click", ()=>{
//   let getText = repeatBtn.innerText; // Getting this tag innerText - Lấy chữ Attribute bên trong thẻ
//   switch(getText){
//     case "repeat":
//       repeatBtn.innerText = "repeat_one";
//       repeatBtn.setAttribute("title", "Lặp lại 1 bài");
//       break;
//     case "repeat_one":
//       repeatBtn.innerText = "shuffle";
//       repeatBtn.setAttribute("title", "Phát ngẫu nhiên");
//       break;
//     case "shuffle":
//       repeatBtn.innerText = "repeat";
//       repeatBtn.setAttribute("title", "Lặp lại danh sách");
//       break;
//   }
// });

const repeatBtn = wrapper.querySelector("#shuffle-plist");
repeatBtn.addEventListener("click", ()=>{
  let getText = repeatBtn.innerText; // Getting this tag innerText - Lấy chữ Attribute bên trong thẻ
  switch(getText){
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Lặp lại danh sách");
      break;
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Lặp lại 1 bài");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Phát ngẫu nhiên");
      break;
  }
});

// Volume bar
// Thanh âm lượng
var audio = document.querySelector('audio');

let volume = document.querySelector("#slider");
  volume.addEventListener("change", function(e) {
  audio.volume = e.currentTarget.value / 100;
})

var $slider = $("#slider");
var $fill = $(".bar .fill");
function setBar() {
	$fill.css("width", $slider.val() + "%");
}
$slider.on("input", setBar);
setBar();


// Code for what to do after song ended
// Code chạy sau khi bài hát kết thúc
mainAudio.addEventListener("ended", ()=>{
  // We'll do according to the icon means if user has set icon to
  // Chúng ta sẽ đặt Function dựa trên biểu tượng mà người dùng đã đặt
  // Set loop song then we'll repeat the current song and will do accordingly
  // Đặt hàm lặp lại sau đó ta sẽ cho lặp lại bài hát hiện tại và thực hiện hàm tiếp theo sau đó
  let getText = repeatBtn.innerText; // Getting this tag innerText - Lấy chữ Attribute bên trong thẻ
  switch(getText){
    case "repeat":
      nextMusic(); // Calling nextMusic function - Gọi hàm nextMusic
      break;
    case "repeat_one":
      mainAudio.currentTime = 0; // Setting audio current time to 0 - Đặt thời gian hiện tại thành 0
      // Calling loadMusic function with argument, in the argument there is a index of current song
      // Gọi hàm loadMusic đối với số liệu, trong đó có chứa mục của bài hát hiện tại
      loadMusic(musicIndex);
      playMusic(); // Calling playMusic function - Gọi hàm playMusic
      break;
    case "shuffle":
      // Genereting random index/numb with max range of array length
      // Phát ngẫu nhiên số mục lục với phạm vi tối đa của độ dài array
      let randIndex = Math.floor((Math.random() * allMusic.length) + 1);
      do{
        randIndex = Math.floor((Math.random() * allMusic.length) + 1);
      // This loop run until the next random number won't be the same of current musicIndex
      // Vòng lặp này chạy cho đến khi số ngẫu nhiên tiếp theo không giống với số musicIndex của hiện tại
      }while(musicIndex == randIndex);
      musicIndex = randIndex; // Passing randomIndex to musicIndex - Chuyển randomIndex sang musicIndex
      loadMusic(musicIndex);
      playMusic();
      playingSong();
      break;
  }
});

// Show music list onclick of music icon
// Hiển thị danh sách nhạc khi nhấp vào biểu tượng Nhạc
moreMusicBtn.addEventListener("click", ()=>{
  musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", ()=>{
  moreMusicBtn.click();
});

const ulTag = wrapper.querySelector("ul");
// Create li tags according to array length for list
// Tạo thẻ li dựa trên độ dài array cho danh sách
for (let i = 0; i < allMusic.length; i++) {
  // Pass the song name, artist from the array - Chuyển tên bài hát, tên nghệ sĩ từ array
  let liTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration"></span>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag); // Inserting the li inside ul tag - Nhập vào thẻ li bên trong thẻ ul

  let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if(totalSec < 10){ // If sec is less than 10 then add 0 before it - Nếu số giầy < 10 thì thêm số 0 đằng trước
      totalSec = `0${totalSec}`;
    };
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; // Passing total duation of song - Chuyển độ dài bài hát
     // Adding t-duration attribute with total duration value
     //  Thêm thuộc tính t-duration bằng tổng giá trị độ dài bài hát
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}

// Play particular song from the list onclick of li tag
// Phát bài hát cụ thể từ danh sách khi click vào thẻ li
function playingSong(){
  const allLiTag = ulTag.querySelectorAll("li");
  
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".audio-duration");
    
    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }

    // If the li tag index is equal to the musicIndex then add playing class in it
    // Nếu số thứ tự thẻ li bằng musicIndex thì thêm Attribute "playing" vào thẻ đó
    if(allLiTag[j].getAttribute("li-index") == musicIndex){
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Đang phát";
    }

    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

// Particular li clicked function
// Khởi chạy hàm đặc biệt sau khi click vào the li
function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  // Updating current song index with clicked li index
  // Cập nhật số thứ tự của bài hát hiện tại với số thứ tự của thẻ li vừa click
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}

// Loading Function
function loadingFunction() {
  document.getElementsByTagName("BODY")[0].style.overflowY = "scroll";
  document.getElementById("loading-bg").style.opacity = "0";
  document.getElementById("loading-bg").style.zIndex = "-1";
}

// Scroll to top after a refresh
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

// Shortcut Events
var audio = document.querySelector('audio');
document.body.onkeydown = function(e){
  if(e.keyCode == 32) {
    audio.paused ? playMusic() : pauseMusic(); //Spacebar to Play/Pause Music
  }
  else if (e.keyCode == '37') {
    prevMusic(); //Arrow left to play previous music
  }
  else if (e.keyCode == '39') {
    nextMusic(); //Arrow right to play next music
  }
  else if(e.keyCode == 9) {
    musicList.classList.toggle("show"); //TAB to toggle the music list
  }
}

// Disable Default TAB function
$(document).keydown(function(objEvent) {
  if (objEvent.keyCode == 9) {
      objEvent.preventDefault();
  }
})

// Add a text at the end of the music list
function endList() {
  var element = document.createElement("div");
  element.appendChild(document.createTextNode('-- Hết --'));
  element.className = "endList";
  document.getElementById('list').appendChild(element);
}

// Scroll to top of the music list
$('#toTopList').on("click",function(){
  $('#list').scrollTop(0);
});