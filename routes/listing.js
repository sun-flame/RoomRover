const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listings");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

router.route("/")
.get( wrapAsync(listingController.index))
.post( isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing)
);

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/id:")
.get( wrapAsync(listingController.showListing))
.put( isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing) 
)
.delete( isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListings)
);

//edite route
router.get("/:id/edit", isLoggedIn,
  isOwner,
  wrapAsync(listingController.rendereditForm)
);

module.exports = router;