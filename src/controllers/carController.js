// External Dependancies
const boom = require('boom');

// Get Data Models
const Car = require('../models/Car');

// Get all cars
exports.getCars = async (request, reply) => {
  try {
    const cars = await Car.find();
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single car by ID
exports.getSingleCar = async (request, reply) => {
  try {
    const id = request.params.id;
    const car = await Car.findById(id);
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new car
exports.addCar = async (request, reply) => {
  try {
    const car = await Car.create(request.body);
    return car.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing car
exports.updateCar = async (request, reply) => {
  try {
    const id = request.params.id;
    const car = request.body;
    const { ...updateData } = car;
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
      .setOptions({ runValidators: true })
      .exec();
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a car
exports.deleteCar = async (request, reply) => {
  try {
    const id = request.params.id;
    const car = await Car.findById(id).exec();
    await car.remove();
    return car;
  } catch (err) {
    throw boom.boomify(err);
  }
};
