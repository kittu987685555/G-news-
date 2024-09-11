
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5500;

const API_KEY = '0bba478beeabeeb228b6f314786a1f43';
const BASE_URL = 'https://gnews.io/api/v4/top-headlines';


app.get('/', (req, res) => {
    res.send('Welcome to the News API. Use /news to fetch news data.');
});

app.get('/news', async (req, res) => {
    const {
        search = '',          // keyword search
        category = 'general', // default category
        lang = 'en',          // language of news
        country = 'us',       // country of news
        max = 10,             // max results per page
        page = 1              // current page
    } = req.query;

    try {
        const response = await axios.get(`${BASE_URL}`, {
            params: {
                q: search,
                category,
                lang,
                country,
                max,
                page,
                apikey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


