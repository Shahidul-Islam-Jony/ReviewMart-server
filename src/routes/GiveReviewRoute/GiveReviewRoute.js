const express = require("express");
const GiveReviewApi = require("../../api/GiveReviewApi/GiveReviewApi");
const router = express.Router();

router.post("/give/review/:id", GiveReviewApi);


module.exports = router;