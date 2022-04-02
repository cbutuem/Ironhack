class Chronometer {
  constructor() {
    let currentTime = 0;
    let intervalId = 0;
  }

  start(callback) {
    this.setInterval(this.computeTwoDigitNumber, 1000);
    // ... your code goes here
  }

  getMinutes() {
    for (static i = 0; i < 60; i++){
      return i;
    }
    if (i == 60){
      i = 0;
    }
    // ... your code goes here
  }

  getSeconds() {
    for (static i = 0; i < 60; i++){
      return i;
    }
    if (i == 60){
      i = 0;
    }
    
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if 
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
