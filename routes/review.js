const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js")
const Listing = require("../models/listings.js");
const {isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//post route
router.post("/",
  isLoggedIn,
  wrapAsync(reviewController.createReview));
  
  //Delete Review route
  router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
  );
  
  module.exports = router;