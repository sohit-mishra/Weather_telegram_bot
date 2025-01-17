# 🌦️ ClimateCast_Bot

A simple Telegram bot that provides current weather information for any city. The bot fetches weather data from the OpenWeather API and returns the weather details such as temperature, humidity, and description.

---

## ✨ Features

- 🌍 Get current weather for any city.
- 🌡️ Displays temperature, feels-like temperature, humidity, and a weather description.
- 💻 Built using **Node.js**, **Telegraf** (Telegram Bot Framework), and **Axios** for API requests.

---

## 🔧 Prerequisites

- ✅ Node.js installed on your system.
- 🤖 A Telegram Bot token (can be obtained by chatting with [BotFather](https://core.telegram.org/bots#botfather) on Telegram).
- 🔑 An OpenWeather API key (can be obtained from [OpenWeatherMap](https://openweathermap.org/api)).

---

## ⚙️ Setup

Follow these steps to run the Weather Telegram Bot locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sohit-mishra/Weather_telegram_bot
cd weather-telegram-bot
```

### 2️⃣ Install Dependencies
Make sure you have Node.js installed, then run:

```
npm install
```

### 3️⃣ Set Up Environment Variables

Create a .env file in the root of your project directory and add your Telegram Bot Token and OpenWeather API Key:

```
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
WEATHER_API_KEY=your-openweathermap-api-key
```

You can obtain these keys from:

- 🤖 Telegram Bot Token: BotFather
- 🌐 OpenWeather API Key: OpenWeatherMap

### 4️⃣ Run the Bot
Start the bot by running:
```
npm start
```
Once the bot is running, it will start listening for messages on Telegram.



## 💬 Usage

### 5️⃣ Interact with the Bot

🔎 Open Telegram and search for your bot by its name or username (e.g., `ClimateCast_Bot`).  
📩 Send a message with the name of any city (e.g., "London", "New York").  
🌦️ The bot will respond with the current weather data for that city.

---

### 🌟 Example Interaction

**User**: London  
**ClimateCast_Bot**:  

🌍 Current weather in London:  
- 🌡️ Temperature: 15°C  
- 🌡️ Feels Like: 14°C  
- 💧 Humidity: 72%  
- 🌬️ Wind: 10 km/h  
- 🌤️ Condition: Partly Cloudy  

---

## 🌐 Visit Link

If you are using this project via the live bot, click here to visit:  

**Name**: ClimateCast_Bot  
🤖[Bot Live Link](https://web.telegram.org/k/#@ClimateCast_Bot)  

---

## 🤝 Like This Project? Connect With Me!

If you like this project and want to create more Telegram bots, feel free to connect with me on LinkedIn:  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/sohitmishra/)
