# ChimmywPlaylist
Iu Quyên lắm lunn ó :3

# Latest Updates `v1.1.0`.
- Added  **Website Loader** (There'll be a loading gif exist until the body fully loaded).
- Added **Shortcut Keys**:
   Arrow right: Next song
   Arrow left: Previous song
   Spacecar: Play/Pause song
   TAB: Toggle show/hide Music List
- Adjust all transition for better **visual** and **performance**.
- Use `cubic bezier` instead of `ease-in-out` transition for **smoother experience**.
- Added **Scroll to top** for the music list.
- Added `endList` at the bottom of the music list.
- Fixed some **Bugs**.

## Code Examples for you guys
1. Make sure to *declare* your *variables* with `const`:
```
const your_variables_name = $("your_element_id_or_class");    //Your element can be given by id or class
```
  >All of mine
  ```
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const PlAYER_STORAGE_KEY = "MUSIC_PLAYER";

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
  ```
2. *Declare* all of your songs:
```
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  songs: [
    {
      name: "Song name",
      singer: "Author/Singer",
      path: "path to your music",
      image: "path to your music image"
    },
 ],
```
   //Some Extras
 ```
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
```
3. Play/Pause Funtions _(add your own button)_:
```
    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
 ```
 ```
    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
 ```
 ```
    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
```
 >Use spacebar `(e.keyCode == 32)` to *Play/Pause* the `audio`
```
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
```
4. Function when the song progress *changes*
```
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
```
5. Make sure to add some buttons to control the audio likes: _Forward, Backward, Play, Pause, Loop, Shuffle_
```
    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
```
```
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
```
```
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
```
```
    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
``` 
```
    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
```
```
    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
```
```
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
```
```
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();
```
```
    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();
```
```
    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();
```
```
    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();
```
```
    // Render playlist
    this.render();
```
```
    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};
```
> Ended JavaScript
```
app.start();
```
