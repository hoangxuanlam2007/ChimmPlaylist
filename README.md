<div id="top"></div>

[![Github author](https://img.shields.io/static/v1?label=AUTHOR&message=Chimmyw&color=blueviolet&style=for-the-badge)](https://facebook.com/chimmywnhatt)
[![GitHub contributors](https://img.shields.io/github/contributors/hoangxuanlam2007/ChimmywPlaylist?color=%2300a3ff&logo=github&style=for-the-badge)](https://github.com/hoangxuanlam2007)
[![Github stars](https://img.shields.io/static/v1?label=STARS&message=1.4k&color=fff000&style=for-the-badge)](https://github.com/hoangxuanlam2007/ChimmywPlaylist)
[![Github liscene](https://img.shields.io/static/v1?label=LISCENCE&message=AGPL-3.0&color=green&style=for-the-badge)](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/LICENSE.txt)
[![YouTube Channel Views](https://img.shields.io/youtube/channel/views/UCVzxZyNZfd_O23kRpb1cT8Q?color=red&logo=youtube&style=for-the-badge)](https://www.youtube.com/channel/UCVzxZyNZfd_O23kRpb1cT8Q)
[![HackerNews User Karma](https://img.shields.io/hackernews/user-karma/chimmyw2007?label=HACKERNEWS%20U%2FCHIMMYW2007&style=for-the-badge)](https://news.ycombinator.com/user?id=chimmyw2007)
[![karma](https://img.shields.io/static/v1?label=Karma&message=27&color=orange&style=for-the-badge)](https://www.facebook.com/chimmywnhatt)
[![iuwuynn](https://img.shields.io/static/v1?label=iu&message=wuynn&color=blueviolet&style=for-the-badge)](https://www.facebook.com/wuynnycnhatt)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://hoangxuanlam2007.github.io/ChimmywPlaylist/">
    <img src="favicon.ico" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Chimmyw's Playlist</h3>

  <p align="center">
    An awesome Music Player Website, inspired by me!<br/>
    I made this website as a gift for my girlfriend and I just want to say that I love you sm!
    <br />
    <a href="https://hoangxuanlam2007.github.io/ChimmywPlaylist/"><strong>Explore the website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/hoangxuanlam2007/ChimmywPlaylist/">View Source Code</a>
    ·
    <a href="https://github.com/hoangxuanlam2007/ChimmywPlaylist/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#shortcut-keys">Shortcut Keys</a></li>
        <li><a href="#code-instruction">Code Instruction</a></li>
      </ul>
    </li>
    <li><a href="#changelog">Changelog</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributor">Contributor</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Banner][banner]](https://hoangxuanlam2007.github.io/ChimmywPlaylist)

I made this website just to say that I love Quyen so much! <br/>
I first started this website a couple of months ago.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Built-in Website:

* [HTML](https://html.com/)
* [CSS](https://html.com/css/)
* [JavaScript](https://javascript.com/)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is a **Website User Manual**.

### Shortcut Keys

These are some shortcut keys for you to control the Music Player.
* Play/Pause ***audio***: `Spacebar`
* Toggle *Show/Hide* Music List: `TAB`
* Play Previous Music: `Left_Arrow`
* Play Next Music: `Right_Arrow`

### Code Instruction

_Below is an example of how you can write these code by yourself._

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
> `app.start` Function
```
app.start();
```
_These are just a few examples for you. Make sure to let your imagination run free by using code to create mesmerising visual displays._

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CHANGELOG -->
## Changelog

## v1.1.1 - Latest

### Added or Changed
- Added `README.md` (**[Click here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/README.md)**).
- Added `CHANGELOG.md` (**[Click here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/CHANGELOG.md)**).
- Added `LICENSE.txt` (**[Click here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/LICENSE.txt)**).
- Added `Shortcut Keys` for better *user experience*. Click **[here](https://github.com/hoangxuanlam2007/ChimmywPlaylist#getting-started)** for more **Information**!
- Reset the scroll `x-axis` and `y-axis` to `0`  when the page is **Refreshed**.
- Added an `endListText` element at bottom of **Music List** to end the Music List.
- Colors Changed.
- Added **Website Loader**.
- Make **Website Loader** appear until the `img` loaded.
- Added and Replaced some songs.
- Added and Replaced some song images.
- Added `Back To Top` for the Music List.
- Use `cubic bezier transition` instead of `default ease-inout transition` for the most **elements**.
- Added `.3s ease-in-out` transition for 3 social button links at the **footer**.

### Removed
- Removed some songs.
- Removed some song images.

For more `Changelogs` click **[here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/CHANGELOG.md)**

Report issue or bug **[here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/issues)** to get it fixes **as soon as possible**.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Readme.md.
- [x] Fix some bugs.
- [x] Improve Website User Interface.
- [x] Use `Cubic Bezier`
- [ ] Have 50 songs in the list
    - [x] 20 songs
    - [x] 30 songs
    - [x] 40 songs
    - [ ] 50 songs

See the [open issues](https://github.com/hoangxuanlam2007/ChimmywPlaylist/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributor

There is only 1 *contributor* to this project:
 1. Chimmyw (Author)

***If you have a suggestion that would make this better, please let me know [here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/issues).***
***Don't forget to give the project a star! Thanks again!***

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the *AGPL-3.0 License*. <br/>
See `LICENSE.txt` for more information or click **[here](https://github.com/hoangxuanlam2007/ChimmywPlaylist/blob/main/LICENSE.txt)**.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

**Chimmyw - [Xuân Lâm](https://facebook.com/chimmywnhatt) - chim31102007@gmail.com**

**Project Link: [Chimmyw's Playlist (Click Here)](https://github.com/hoangxuanlam2007/ChimmywPlaylist)**

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[banner]: site_lib/og_img.png
