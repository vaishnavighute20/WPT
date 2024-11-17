
import axios from 'axios';

const API_KEY = '04f7adbfd59f419483cda3030d3a86dc';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (category = 'general', language = 'en') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        category,
        language,
        country: 'in', 
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
