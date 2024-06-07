const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({

    user:{
type:mongoose.Schema.Types.ObjectId,
ref:'user',
required:true,
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Goal', GoalSchema);
