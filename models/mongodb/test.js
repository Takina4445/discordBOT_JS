// const { boolean, bool } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        isOpen: {
            type: Boolean,
            required: true,
            default: true,
        },
        pacs: {
            type: Boolean,
            default: true,
        },
        patientId: {
            type: Boolean,
            default: true,
        },
        accessionNumber: {
            type: Boolean,
            default: true,
        },
        gender: {
            type: Boolean,
            default: true,
        },
        reportDate: {
            type: Boolean,
            default: true,
        },
        openViewer: {
            type: Boolean,
            default: true,
        },
        SeriesValue: {
            type: Boolean,
            default: true,
        },
        update: {
            type: Number,
            default: 10,
        },
        
        role: Number,
    },
    { timestamps: true }
)

module.exports = { USER: mongoose.model('User', userSchema) }
