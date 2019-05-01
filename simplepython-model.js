const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	score: { type: Number, required: true },
	progress: { type: Number, required: true },
	usertype: { type: Number, required: true }
});

let exercisesSchema = mongoose.Schema({
	id: { type: String, required: true, unique: true },
	answer: { type: String, required: true }
});

let Users = mongoose.model('users', userSchema);
let Exercises = mongoose.model('exercises', exercisesSchema);

const listPython = {
	getAllUsers: function () {
		return Users.find()
			.then(users => {
				return users;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	getUser: function (user) {
		return Users.find({ username: user })
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	createUser: function (newUser) {
		return Users.create(newUser)
			.then(newUser => {
				return newUser;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	deleteUser: function (username) {
		return Users.findOneAndRemove({ username: username })
			.then(deletedUser => {
				if (deletedUser) {
					return deletedUser;
				}
				throw new Error("User not found");
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	updateScore: function (username, newScore, newProgress) {
		return Users.findOneAndUpdate({ username: username }, { $set: { score: newScore, progress: newProgress } })
			.then(oldData => {
				return oldData;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	getAllExercises: function () {
		return Exercises.find()
			.then(exercises => {
				return exercises;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	getExercise: function (exercise) {
		return Exercises.find({ id: exercise })
			.then(exercise => {
				return exercise;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	createExercise: function (newExercise) {
		return Exercises.create(newExercise)
			.then(newExercise => {
				return newExercise;
			})
			.catch(err => {
				throw new Error(err);
			})
	},
	deleteExercise: function (id) {
		return Exercises.findOneAndRemove({ id: id })
			.then(deletedExercise => {
				if (deletedExercise) {
					return deletedExercise;
				}
				throw new Error("Exercise not found");
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	updateExercise: function (id, newAnswer) {
		return Exercises.findOneAndUpdate({ id: id }, { $set: { answer: newAnswer}})
			.then(oldData => {
				return oldData;
			})
			.catch(err => {
				throw new Error(err);
			})
	}
}

module.exports = { listPython }