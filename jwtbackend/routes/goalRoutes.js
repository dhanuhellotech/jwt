const express = require("express");
const router = express.Router();
const { getGoals,setGoals,putGoals,deleteGoals } = require("../controller/goalsController");



//this is for shorting the code 
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGoals).delete(deleteGoals)


// second basic 
// router.get("/", getGoals);
// router.post("/", setGoals);
//   router.put("/:id",putGoals);
//   router.delete("/:id", deleteGoals);


//basic 
// router.post("/", (req, res) => {
//   res.status(201).json({ message: "welcome all" });
// });
// router.put("/:id", (req, res) => {
//   res.status(201).json({ message: `put goals ${req.params.id}` });
// });
// router.delete("/:id", (req, res) => {
//   res.status(201).json({ message: `delete goals ${req.params.id}` });
// });

module.exports = router;
