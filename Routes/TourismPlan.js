const express = require("express");
const router = express.Router();
const TourismPlanController = require("../Controllers/TourismPlanController");



router.get("/:id", TourismPlanController.VisualizerTourismPlan);
router.get("/", TourismPlanController.VisualizerTourismPlans);
router.post("/", TourismPlanController.CreateTourismPlan);


module.exports = router;