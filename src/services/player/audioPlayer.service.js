/**
 * For the audio player, I used a singelton architecure
 * This singelton wraps iframe player functions
 * I used classes and getters and setters, Java style
 */

class AudioPlayer {
  constructor() {
    // instance check
    if (AudioPlayer.instance) {
      return AudioPlayer.instance
    }

    //singelton audio element
    this.audio = new Audio()
    this.audio.volume = 1

    // listen
    this.audio.addEventListener('timeupdate', () => {
      window.parent.postMessage({
        type: 'timeupdate',
        currentTime: this.audio.currentTime,
        duration: this.audio.duration,
      })
    })

    // cacheing
    AudioPlayer.instance = this
  }

  // getIsntance
  static getInstance() {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer()
    }
    return AudioPlayer.instance
  }

  // methods

  play() {
    return this.audio.play()
  }

  pause() {
    return this.audio.pause()
  }

  // currentTime - getter setter
  get currentTime() {
    return this.audio.currentTime
  }

  set currentTime(time) {
    this.audio.currentTime = time
  }

  // duration
  get duration() {
    return this.audio.duration
  }

  // volume - getter setter
  get volume() {
    return this.audio.volume
  }

  set volume(vol) {
    this.audio.volume = vol
  }

  //important! src setter
  setSource(src) {
    this.audio.src = src
  }
}

// instance
const audioPlayer = AudioPlayer.getInstance()

// add player on the window - better preformance as global
window.audioPlayer = audioPlayer

//export instance to a module --
//export default audioPlayer
