Overview:-
This is a React based “Spot the Difference” game where players identify differences between two images. The game dynamically loads its configuration from a JSON file, making it easy to update images or difference hotspots without changing the code.

Features:- 

Displays two images side by side.
Players click on differences to find them.
Highlights differences when found.
Tracks score and time taken.
Displays a success message when all differences are found.
Responsive layout for desktop and mobile.
Configurable via a JSON file

Demo:-
Play the game here - https://spot-the-difference-4456.vercel.app/

JSON Configuration:-
{
  "gameTitle": "Spot the Difference - Topic",
  "images": {
    "image1": "./Image1.jpg",
    "image2": "./Image2.jpg"
  },
  "differences": [
    { "x": 20, "y": 10, "width": 50, "height": 50 },
    { "x": 50, "y": 50, "width": 50, "height": 50 },
    { "x": 90, "y": 80, "width": 50, "height": 50 }
  ]
}

JSON Fields Explained:-

gameTitle: Title displayed on the page.
images.image1 & images.image2: Paths to the two images.
differences: Array of objects defining the hotspots.
x - horizontal position as a percentage of the image width (0–100%).
y - vertical position as a percentage of the image height (0–100%).
width - width of the highlight box in pixels.
height - height of the highlight box in pixels.

The combination of percentage-based coordinates (x, y) and pixel-based size (width, height) ensures the highlights stay correctly positioned on responsive images.


Installation:-

Clone the repository :-
git clone <your-repo-url>
cd <your-repo-folder>

Install dependencies :-
npm install

Run the development server:-
npm run dev

Open the browser at http://localhost:5173 (Vite default).


How It Works :-

The app loads config.json using fetch in App.jsx.
Each ImagePanel renders the image and listens for clicks.
When a player clicks a hotspot, it checks if the click is inside any difference’s boundaries.
Found differences are highlighted, and the score is updated.
The timer runs until all differences are found, then displays a win popup.


Technologies Used :-

React (functional components & hooks)
Vite (development environment)
CSS (responsive layout and highlights)
JSON (game configuration)



