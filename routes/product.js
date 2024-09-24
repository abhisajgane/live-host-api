const express = require("express");
const router = express.Router();

module.exports = {
     getAllProducts, 
     getAllProductsTesting
} = require("../controllers/product")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;