const mongoose = require('mongoose');

const { Schema } = mongoose;

const issueSchema = new Schema({
    num: { type: Number, required: true },
    title: { type:String,required:true },
    description: { type: String }, 
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    type: { type: 'String', enum : ['bug', 'feature', 'discussion'], default: 'disscussion' },
    is_closed: { type: Boolean, default: false },
    status: { type: String, enum: ['open', 'in-progress', 'closed'] },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assigned_to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    is_deleted: { type: Boolean, default: false }, 
},{
    timestamps: true
})

module.exports = mongoose.model('Issue', issueSchema);