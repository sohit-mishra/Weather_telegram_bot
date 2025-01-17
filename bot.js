const express = require('express');
const app = express();
require('dotenv').config();
const { Telegraf } = require('telegraf')
const axios = require('axios');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const PORT = process.env.PORT || 3000;


const getWeather = async (city) => {

    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;

        return `🌆 Weather in ${city}:
        
🌫️ Description: ${weatherDescription}
🌡️ Temperature: ${temperature}°C
🌡️ Feels Like: ${feelsLike}°C
💧 Humidity: ${humidity}%`;

    } catch (error) {
        return ('Sorry, I could not retrieve the weather for that location. Please check the city name or try again later.')
    }
}

bot.command('start', (ctx) => {
    ctx.reply('Hello! Send me a city name to get the current weather.');
});

bot.on('text', async (ctx) => {
    const city = ctx.message.text;
    const weatherReport = await getWeather(city);
    ctx.reply(weatherReport);
});

bot.launch().then(() => console.log('Weather bot is running...'));


app.get('', (req, res) => {
    res.send('Bot is running!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
