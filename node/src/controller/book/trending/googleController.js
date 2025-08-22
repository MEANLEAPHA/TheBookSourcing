// Import fetchJson using require
const { fetchJson } = require('../../../util/apiClient');

// Define the async function
async function getGoogleTrending() {
  const url = "https://www.googleapis.com/books/v1/volumes?q=trending&maxResults=10";
  const data = await fetchJson(url);

  if (!data || !data.items) return [];

  return data.items.map(book => ({
    source: "Google Books",
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors || [],
    description: book.volumeInfo.description || "No description available",
    cover: book.volumeInfo.imageLinks?.thumbnail || null,
    publishedDate: book.volumeInfo.publishedDate,
    categories: book.volumeInfo.categories || []
  }));
}

// Export the function using CommonJS
module.exports = {
  getGoogleTrending
};
