const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    members:  [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    issues: [{ type: Schema.Types.ObjectId, ref: 'issue' }],
})

module.exports = mongoose.model('Project', projectSchema);