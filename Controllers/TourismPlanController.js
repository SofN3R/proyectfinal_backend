const { find } = require('../Models/Tourism_plan');
const Tourism_plan = require('../Models/Tourism_plan');

exports.CreateTourismPlan = async(req, res)=>{
    try {
        let Tourismplan;
        Tourismplan = new Tourism_plan(req.body)
        await Tourismplan.save();
        res.send(Tourismplan)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
    }

}
exports.VisualizerTourismPlans = async(req, res)=>{
    try {
        const get_plans = await Tourism_plan.find({Active : 1});
        res.json(get_plans)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500");
    }
}
exports.VisualizerTourismPlan = async(req, res )=>{
    try {
        
        const get_plan = await Tourism_plan.findById(req.params.id);
        if (!get_plan) {
            res.status(404).send("Registro no fue encontrado")
        }else{

            res.json(get_plan);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error 500")
    }
}

// exports.EditTourismPlan = async(req, res) => {
// try {
//     const EditPlan = await Tourism_plan.find(req.param.id);
//     if (!EditPlan) {
//         console.log("No aparece registro");
//     }else{
//         res.json(EditPlan);
//     }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error 500")
//     }

// };

