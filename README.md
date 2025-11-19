<!-- Please update value in the {}  -->

<h1 align ="center">FlippyCoin | devChallenges</h1>

<div align ="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/flip-the-coin" target="_blank">Flip The Coin</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align ="center">
  <h3>
    <a href="https://smartee-17.github.io/FlippyCoin/Flip-the-coin-challenge-answer/">
      Live Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solution/60062">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/flip-the-coin">
      Challenge
    </a>
  </h3>
</div>

# FlippyCoin – A Coin Flip Guessing Game

A simple but fun “flip the coin” web game — **with a twist**.  
Instead of only flipping a coin, the game compares your guess with the computer’s random pick.  
If both match when the coin flips, you earn a **correct point**; if not, it’s marked as **wrong**.  
The app includes animations, sound effects, and a responsive mobile-friendly UI.

<!-- TABLE OF CONTENTS -->

## 📑 Table of Contents
- [Screenshot](#-screenshot)
- [Overview](#overview)
  - [Challenges I Faced](#-challenges-i-faced)
  - [Solutions](#-solutions)
- [Built with](#built-with)    
- [What I Learned](#-what-i-learned)
- [Features](#features)
- [Acknowledgements](#acknowledgements)
- [Author](#author)
-[License](#-license)


## 📸 Screenshot

![Large screen screenshot](/Macbook-Air-127.0.0.1.png)


<!-- OVERVIEW -->

## 📖 Overview

FlippyCoin is a lightweight interactive game built to practice DOM manipulation, animations, and responsive design.  
You select **Heads** or **Tails**, the computer randomly chooses its own, and then the coin flips with animation.  
After the animation:

- If your choice matches the computer's → **Correct +1**
- If not → **Wrong +1**

A scoreboard tracks your total correct and wrong guesses.

### 🧠 Challenges I Faced


#### 1. **Adapting a New Template to My Code**
I wanted to rebuild the UI using a new layout I created, so I spent a lot of time restructuring and adapting the old logic into the new template.

#### 2. **Mobile Responsiveness**
I focused heavily on making the design mobile-friendly.  
I had to learn how to use **layers, positioning, and stacking (z-index) in CSS** to keep all elements aligned.

#### 3. **Synchronizing Animations**
The coin flip animation had to match the timing of the logic.  
Getting the animation and the "reveal" of the result to sync correctly took several adjustments.

#### 4. **Adding Sound**
Integrating sound effects without causing delays or overlapping audio gave me some difficulty.

#### 5. **General UI Layout Issues**
Positioning absolute/relative elements (like buttons and info tooltips) caused some bugs, but I fixed them with careful structuring.


### ✔️ Solutions

- Rebuilt the entire UI and logic into a clean, structured template  

- Used **Iteris (Iteris UI / Iteration Design)** principles to keep design consistent  

- Improved CSS layering using `z-index`, `position: relative`, and `position: absolute`

- Synced animations with JavaScript using `setTimeout()`  

- Added sound effects using the `Audio()` constructor  

- Reused previously written game logic to save time and reduce errors  


## 🛠️ Built With

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

### 📚 What I Learned

- How to sync animations with interactive logic  
- Improved layering, stacking, and responsive CSS  
- Better JavaScript DOM manipulation skills  
- Handling audio smoothly in web apps  
- Structuring a clean UI from scratch

## 🚀 Features

- Smooth flip animation using CSS transforms  
- Simple and clear UI  
- Scoreboard that updates in real-time  
- Sound effects added for flipping and scoring  
- Fully mobile-responsive  
- Clean code structure (HTML, CSS, JS)

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## 🙏 Acknowledgements

Special thanks to **OpenAI (ChatGPT)** for assisting with debugging, explanations, and design help throughout the challenge.

## 👤 Author

- GitHub [@Smartee-17](https://github.com/smartee-17)

## 📄 License

This project is for educational and personal portfolio use.
