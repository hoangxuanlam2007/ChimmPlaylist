const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");


const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  songs: [
    {
      name: "0 Cần Mật (Cukak Remix)",
      singer: "Fous ft. UMIE",
      path: "./music/0 Cần Mật  Fous ft UmieCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/0 cần mật.png"
    },
    {
      name: "11h Tối (Cukak Remix)",
      singer: "HuyR",
      path: "./music/11h Tối  HuyRCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/11h tối.png"
    },
    {
      name: "Anh Thề Đấy (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Anh Thề Đấy  Thanh HưngCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Anh thề đấy.png"
    },
    {
      name: "Bật Nhạc Lên (Cukak Remix)",
      singer: "HIEUTHUHAI ft. Harmonie",
      path: "./music/Bật Nhạc Lên  HIEUTHUHAI ft HarmonieCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Bật nhạc lên.png"
    },
    {
      name: "Chạy Về Khóc Với Anh (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Chạy Về Khóc Với Anh  ErikCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Chạy về khóc với anh.png"
    },
    {
      name: "Em Là Hoàng Hôn (Frexs Remix)",
      singer: "Thanh Hưng",
      path: "./music/Em Là Hoàng Hôn Frexs Remix.mp3",
      image: "./assets/img/Em là hoàng hôn.png"
    },
    {
      name: "Liều Thuốc Cho Trái Tim (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Liều Thuốc Cho Trái Tim  Nguyễn Đình Vũ ft NekoCukak Remix Official Lyrics Video.mp3",
      image: "./assets/img/Liều thuốc cho trái tim.png"
    },
    {
      name: "Lời Nói Điêu Trên Môi em (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Lời Nói Điêu Trên Môi Em  Đỗ Nguyên Phúc ft Lil ZpoetCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Lời nói điêu trên môi em.png"
    },
    {
      name: "Ngại Nói (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Ngại Nói  Tú Đào ft EZFluvCukak Remix Audio Lyrics.mp3",
      image: "./assets/img/Ngại nói.png"
    },
    {
      name: "PRECIOUS (Cukak Remix)",
      singer: "DADUC x KIPER T",
      path: "./music/PRECIOUS  DADUC ft KIPER TCukak Remix  Official Lyrics Video.mp3",
      image: "./assets/img/PRECIOUS.png"
    },
    {
      name: "Tàn Nhẫn (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Tàn Nhẫn  Lương Minh TrangCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Tàn nhẫn.png"
    },
    {
      name: "Thích Em Hơi Nhiều (Cukak Remix)",
      singer: "Thanh Hưng",
      path: "./music/Thích Em Hơi Nhiều  Wren EvansCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Thích em hơi nhiều.png"
    },
    {
      name: "Tình Yêu Của Anh (Cukak Remix)",
      singer: "HuyR",
      path: "./music/Tình Yêu Của Anh  Phú QuíCukak Remix Audio Lyrics.mp3",
      image: "./assets/img/Tình yêu của anh.png"
    },
    {
      name: "U Are So Sweet (Cukak Remix)",
      singer: "HuyR",
      path: "./music/U Are So Sweet  D Empty ft TDYCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/U are so sweet.png"
    },
    {
      name: "Yêu Đừng Sợ Đau (Cukak Remix)",
      singer: "HuyR",
      path: "./music/Yêu Đừng Sợ Đau  Ngô Lan HươngCukak Remix Audio Lyrics Video.mp3",
      image: "./assets/img/Yêu đừng sợ đau.png"
    },
    {
      name: "Yêu Thương Quay Về (Cukak Remix)",
      singer: "HuyR",
      path: "./music/Yêu Thương Quay Về  Young D ft BOTCukak Remix  Audio Lyrics.mp3",
      image: "./assets/img/Yêu thương quay về.png"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div>
                            </div>
                            <div class="option">
                                <i class="gg-music" style="margin-right: 2px;"></i>
                            </div>
                            <div class="thumb"
                                style="background-image: url('${song.image}") center">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Thanh volume 
    let volume = document.querySelector("#volume-control");
    volume.addEventListener("change", function(e) {
    audio.volume = e.currentTarget.value / 100;
    })

    // Hiển thị âm lượng
    var slider = document.getElementById("volume-control");
    var output = document.getElementById("giatri");
    /* Hiển thị giá trị mặc định */
    output.innerHTML = '(' + slider.value + '%)'; 
   /* cập nhật giá trị hiện tại của ranger slider*/
    slider.oninput = function() {
      output.innerHTML = '(' + this.value + '%)';
    }

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Ấn phím Cách để Play/Pause
    // Using Spacebar to Play/Pause
    if (audio) {
      window.addEventListener('keydown', function (event) {
        var key = event.which || event.keyCode;
        if (key === 32) { // spacebar
          // disable scroll page : Spacebar
          event.preventDefault();
          audio.paused ? audio.play() : audio.pause();
        }
      });
    }

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    
    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();