// Import dependencies using require
const { getGoogleTrending } = require('./googleController');
const { getGutenbergTrending } = require('./gutenbergController');
const { getOpenLibraryTrending } = require('./openLibraryController');

// Define the controller function
async function getAllTrending(req, res) {
  try {
    const [google, gutenberg, openLibrary] = await Promise.all([
      getGoogleTrending(),
      getGutenbergTrending(),
      getOpenLibraryTrending()
    ]);

    res.json({
      success: true,
      data: {
        google,
        gutenberg,
        openLibrary
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching trending books" });
  }
}

// Export the function using CommonJS
module.exports = {
  getAllTrending
};
