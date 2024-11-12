# Weather Telegram Bot

A simple Telegram bot that provides current weather information for any city. The bot fetches weather data from the OpenWeather API and returns the weather details such as temperature, humidity, and description.

## Features

- Get current weather for any city.
- Displays temperature, feels-like temperature, humidity, and a weather description.
- Built using **Node.js**, **Telegraf** (Telegram Bot Framework), and **Axios** for API requests.

## Prerequisites

- Node.js installed on your system.
- A Telegram Bot token (can be obtained by chatting with [BotFather](https://core.telegram.org/bots#botfather) on Telegram).
- An OpenWeather API key (can be obtained from [OpenWeatherMap](https://openweathermap.org/api)).

## Setup

Follow these steps to run the Weather Telegram Bot locally:

### 1. Clone the repository

```bash
git clone https://github.com/sohit-mishra/Weather_telegram_bot
cd weather-telegram-bot
```
## 2. Install dependencies
Make sure you have Node.js installed, then run:

```
npm install
```

# Set up environment variables
Create a .env file in the root of your project directory and add your Telegram Bot Token and OpenWeather API Key:

```
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
WEATHER_API_KEY=your-openweathermap-api-key
```

You can get these keys from:

Telegram Bot Token: [BotFather](https://web.telegram.org/k/#@BotFather)
OpenWeather API Key: [OpenWeatherMap](https://openweathermap.org/)

# 4. Run the bot
Start the bot by running:

```
npm start
```

Once the bot is running, it will start listening for messages on Telegram.

# 5. Interact with the bot
Open Telegram and search for your bot by its name or username.
Type the name of any city (e.g., "London", "New York", etc.).
The bot will respond with the current weather data for that city.

### Example Interaction

**User:** London  
**ClimateCast_Bot:**  
- Current weather in London:  
- Temperature: 15°C  
- Humidity: 72%  
- Wind: 10 km/h  
- Condition: Partly Cloudy