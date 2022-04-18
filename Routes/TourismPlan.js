const express = require("express");
const router = express.Router();
const TourismPlanController = require("../Controllers/TourismPlanController");
const { validateJWT } = require('../middlewares/validateJWT');


router.post("/",TourismPlanController.CreateTourismPlan);
router.get("/", TourismPlanController.VisualizerTourismPlans);
router.get("/:id", TourismPlanController.VisualizerTourismPlan);
// router.put("/:id", TourismPlanController.EditTourismPlan);


module.exports = router;
