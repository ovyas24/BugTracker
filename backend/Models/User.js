const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    projects: [{type: Schema.Types.ObjectId, ref: 'project'}],
    issues: [{ type: Schema.Types.ObjectId, ref: 'issue' }],
})