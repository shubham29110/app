var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProjectSchema = Schema({
	title: {
    type: String,
    required: true
	},
	technology: {
    type: String,
    required: true
	},
	discription: {
    type: String,
    required: true 
	},
	date: {
    type :String,
    required: true 
  },
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true 
}]
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;