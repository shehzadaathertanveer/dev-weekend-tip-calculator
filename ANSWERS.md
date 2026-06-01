# Tip Calculator Assessment Answers
https://shehzadaathertanveer.github.io/dev-weekend-tip-calculator/

### 1. How to run
To run this project locally on a fresh machine:
1. Clone this repository or download the project folder.
2. Open the folder on your computer.
3. Double-click the index.html file to open it instantly in any web browser.
No installation or terminal setups are required because the project uses pure HTML, CSS, and JavaScript.

### 2. Stack & design choices
* **Stack Choice:** I chose plain HTML, CSS, and JavaScript because this is a single-screen app. Also i didn't know any else stacks.

* **Visual/Interaction Decision 1:** I chose a two sides Flexbox layout for the main container. This keeps the user inputs on the left and the calculation results on the right, making it look like a calculator

* **Visual/Interaction Decision 2:** For the tip percentage options i placed the buttons in a singlle row right above the custom text box. This gives the user the immediate convenience of clicking common given percentages (10%, 15%, 20%)

### 3. Responsive & accessibility
* **Screen Scaling:** On a 1440px laptop screen this app sits centered. On a small 360px mobile device, the Flexbox layout automatically stacks vertically so the inputs sit directly on top of the results panel, preventing horizontal scrolling or broken text boundaries.

* **Accessibility Consideration Handled:** I added label tags linked to each corresponding input field using matching IDs. This ensures screen readers can see the purpose of the text field clearly.

### 4. AI usage
* **Tools Used:** I used an AI assistant called Gemini.

* **What I Asked:** I asked the AI to help me build a beginner-friendly tip calculator that triggers instantly on user input, implements 10%/15%/20% preset buttons, handles custom inputs, and validates against a 0-person entry.

* **What it Gave Me:** The AI originally generated a highly complex JavaScript structure using advanced event listeners like .querySelectorAll, .forEach loop iterations, and custom data-tip HTML data properties.

* **What I Changed:** I completely rewrote the AI output. I stripped away the complex selectors and loops, replacing them with standard  HTML attributes like onclick and oninput. This keeps the state tracking basic and ensures the logic is understandable 


### 5. Honest gap
If I had one more day the main thing I would polish is the my knowledge of functions as I have already told my knowledge of jawascript is very limited. when I wanted to do somethething and I used a function I knew but it would't work properly so I had to go back to my AI chatbox and ask him that I am trying to do this with this function and it would guide me
