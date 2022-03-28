const express = require("express");
const router = express.Router();
const TourismPlanController = require("../Controllers/TourismPlanController");
const { validateJWT } = require('../middlewares/validateJWT');


router.post("/", validateJWT ,TourismPlanController.CreateTourismPlan);
router.get("/", validateJWT ,TourismPlanController.VisualizerTourismPlans);
router.get("/:id", validateJWT ,TourismPlanController.VisualizerTourismPlan);
// router.put("/:id", TourismPlanController.EditTourismPlan);


module.exports = router;
