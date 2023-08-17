// ——————————————————————————————————————————————————
// Loader
// ——————————————————————————————————————————————————

gsap.fromTo(
  ".reverse-round",
  {
    rotate: 0,
    scale: 0.5,
  },
  {
    ease: "power4.inOut",
    rotate: 180,
    scale: 1,
    stagger: 0.05,
    yoyo: true,
    repeat: -1,
  }
);

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Sentences
// ——————————————————————————————————————————————————

const phrases = ["Bienvenue !"];

const el = document.querySelector(".first-title-anim");
const fx = new TextScramble(el);

let counter = 0;
const nextFirst = () => {
  fx.setText(phrases[counter]).then(() => {});
  counter = (counter + 1) % phrases.length;
};

setTimeout(nextFirst, 4000);

nextFirst();

const phrases2 = ["Camille"];

const el2 = document.querySelector(".second-title-anim");
const fx2 = new TextScramble(el2);

let counter2 = 0;
const nextSecond = () => {
  fx2.setText(phrases2[counter2]).then(() => {});
  counter2 = (counter2 + 1) % phrases2.length;
};

setTimeout(nextSecond, 5200);

nextSecond();

const phrases3 = ["Développeur Web"];

const el3 = document.querySelector(".third-title-anim");
const fx3 = new TextScramble(el3);

let counter3 = 0;
const nextThird = () => {
  fx3.setText(phrases3[counter3]).then(() => {});
  counter3 = (counter3 + 1) % phrases3.length;
};

setTimeout(nextThird, 6400);

nextThird();
