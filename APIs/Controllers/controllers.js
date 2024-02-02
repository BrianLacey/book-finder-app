const readAllService = require("../Services/services");

module.exports = readAllController;

async function readAllController(req, res) {
  try {
    const result = await readAllService();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
}
