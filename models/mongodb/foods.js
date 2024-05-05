// const { boolean, bool } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const foods = new Schema(
    {
        foodName: {
            type: String,
            required: true,
            // unique: true,
        },
        foodPrice:{
            type:Number,
            required: false,
        },
        //食物類型 任意[0] 早餐[1] 午餐[2] 晚餐[3] 宵夜[4] 點心[5] 飲料[6] 
        foodType: {
            type:[Number],
            enum:[0,1,2,3,4,5,6],
            default:[0],
            required: false,
        },
        
    },
    { timestamps: true }
)

module.exports = mongoose.model("Foods", foods,"Foods")

// module.exports = { USER: mongoose.model('User', userSchema) }