Dice Game – Theory Based Structure

Project Structure dice-game/ styling to dice6.png) index.html → Game ka main structure (skeleton) index.js → Game ka logic (JavaScript code)
index.html (HTML Structure) styles.css → Design aur /images → Dice images (dice1.png HTML file game ka skeleton hai jisme: - h1: Game ka title - div: Players ke dice images aur text img: Dice images - button: Roll Dice button Flow: User button dabata hai → JS function run hota hai → Dice images update hoti hain → Result show hota hai.
styles.css (CSS Styling) CSS file game ka design banati hai: - Background dark aur attractive hai - Title bada aur yellow color ke sath shadowed - Dice images fixed size aur shadow ke sath - Result text bold aur green color Ye sab game ko visually appealing banata hai.
index.js (JavaScript Logic) JavaScript game ka dimaag hai. Steps: 1. Random number generate karna (1–6) 2. Dice images ko update karna 3. Comparison karna aur winner decide karna Flow: Button click → Random dice numbers → Images update → Result display.
Bootstrap Integration Bootstrap ka use layout aur design easy banata hai: - Container: content center karne ke liye - Row & Columns: Player dice ko side-by-side dikhane ke liye - Buttons: Ready-made attractive buttons Ye custom CSS ka kaam kam kar deta hai.
Complete Game Flow
Page load → Default dice image show hoti hai. 2. User "Roll Dice" button click karta hai. 3. JavaScript run hoti hai aur random numbers generate hote hain. 4. Dice images update hoti hain. 5. Winner decide hota hai aur result show hota hai.
Recap- HTML → Structure (skeleton) - CSS → Styling (colors, fonts, layout) - JavaScript → Logic (random numbers, image update, winner) - Bootstrap → Ready-made design & layout | Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot 4 | |--------------|--------------|--------------|--------------| |
