const express = require("express");

const bootcampControllers = require("../controllers/bootcampController");
const router = express.Router();

// @route - /api/bootcamps/
router
  .route("/")
  .get(bootcampControllers.getAllBootcamps)
  .post(bootcampControllers.createNewBootcamp);

// @route - /api/bootcamps/someid

router
  .route("/:id")
  .put(bootcampControllers.updateBootcampById)
  .delete(bootcampControllers.deleteBootcampById);

module.exports = router;
