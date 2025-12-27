# Weather App 🌦

A clean, responsive web application that provides real-time weather updates for cities in the Philippines using the **OpenWeather API**. The interface features a dynamic layout with a background inspired by local weather broadcasting.

---

## 🚀 Features

* **Real-time Data**: Fetches current temperature, humidity, and weather descriptions.
* **Visual Icons**: Displays weather condition icons (e.g., sun, clouds, rain) directly from OpenWeather.
* **Responsive Design**: Optimized for both desktop and mobile viewing using CSS Media Queries.
* **Interactive UI**: Includes hover effects, loading states, and error handling for invalid city names.

---

## 🛠️ Built With

* **HTML5**: Semantic structure for the web interface.
* **CSS3**: Custom styling with Flexbox and transitions for a smooth user experience.
* **JavaScript (ES6+)**: Handles asynchronous API calls using `fetch` and `async/await`.
* **OpenWeather API**: The data source for global weather information.

---

## 📂 Project Structure

```text
├── kim.jpg          # Background image asset
├── index.html       # Main HTML structure
├── style.css        # Custom styling and layout
├── script.js        # API logic and DOM manipulation
├── package.json     # Node.js configuration
└── launch.json      # VS Code debug configuration

```

---

## ⚙️ Setup and Installation

1. **Clone the files** to your local machine.
2. **API Key**: The project currently uses a built-in API key in `script.js`. For production, it is recommended to use your own key from [OpenWeather](https://openweathermap.org/api).
3. **Run the App**:
* Open `index.html` directly in your browser.
* Alternatively, if you have Node.js installed, run `npm start` to execute the backend script (as defined in `package.json`).
* For VS Code users, a `launch.json` is provided to debug directly in **Chrome** via `localhost:8000`.



---

## 📖 Usage

1. Type the name of a city in the Philippines (e.g., "Manila" or "Cebu") into the search bar.
2. Click the **Search** button.
3. View the weather card containing the city name, icon, description, temperature, and humidity.
