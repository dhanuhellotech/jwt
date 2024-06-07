const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel')


const getGoals = asyncHandler(async (req, res) => {
const goals =  await Goal.find();

    console.log(req.body);
    res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please enter text field');
    }

const goal = await  Goal.create({text:req.body.text,})
    res.status(201).json(goal);
});

const putGoals = asyncHandler(async (req, res) => {
    console.log(req.body);
const goal = await Goal.findById(req.params.id)
if(!goal){
    res.status(400)
    throw new Error('Goal not found ')
}
const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
res.status(200).json(updatedGoal)
});

const deleteGoals = asyncHandler(async (req, res) => {
    console.log(req.body);
    const goal = await Goal.findById(req.params.id)
if(!goal){
    res.status(400)
    throw new Error('Goal not found ')
}
 await Goal.remove()
res.status(200).json({id:req.params.id})
});


module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
};
