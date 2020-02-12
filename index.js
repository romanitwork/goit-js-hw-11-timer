"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.spanDays = document.querySelector('span[data-value="days"]');
    this.spanHours = document.querySelector('span[data-value="hours"]');
    this.spanMinutes = document.querySelector('span[data-value="mins"]');
    this.spanSeconds = document.querySelector('span[data-value="secs"]');
    this.startCountdown();
  }
  startCountdown() {
    this.timer = setInterval(() => {
      this.currentTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - this.currentTime;
      this.days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
      if (this.deltaTime <= 0) {
        clearInterval(this.timer);
      }

      this.spanDays.textContent = this.days;
      this.spanHours.textContent = this.hours;
      this.spanMinutes.textContent = this.mins;
      this.spanSeconds.textContent = this.secs;
    }, 1000);
  }
}

const count = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Feb 12, 2021")
});
