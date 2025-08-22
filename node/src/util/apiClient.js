// Import node-fetch using require
const fetch = require('node-fetch');

// Define the async utility function
async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("❌ Fetch error:", err.message);
    return null;
  }
}

// Export the function using CommonJS
module.exports = {
  fetchJson
};
