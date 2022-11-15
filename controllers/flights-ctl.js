const flights = require("../models/flights");

const getAllFlights = (req, res) => {
  res.send({ massage: "all flights", flights });
};
const addNewflight = (req, res) => {
  flights.push(req.body.flight);
  res.send({ massage: "add a new flights" });
};
const updateFlightById = (req, res) => {
  itemIndex = findFlightById(req, flights);
  flights[itemIndex] == req.body.flight;
  res.send({ massage: "flight update" });
};
const deleteFlightById = (req, res) => {
  itemIndex = findFlightById(req, flights);
  flights.splice(itemIndex, 1);
  res.send({ massage: "flight deleted" });
};
const getFlightById = (req, res) => {
  itemIndex = findFlightById(req, flights);
  res.send({ massage: "flight found", flight: flights[itemIndex] });
};
const getFlightByFlightNumber = (req, res) => {
  itemIndex = findFlightByFlightNumber(req, flights);
  res.send({ massage: "flight found", flight: flights[itemIndex] });
};
const getFlightWithFirstClass = (req, res) => {
  flightWithFirstClass = findflightWithFirstClass(req, flights);
  res.send({ massage: "flight with first class", flightWithFirstClass });
};
const getFlightByFlightDepartureTime = (req, res) => {
  fligthDepartureTime = findFlightByFlightDepartureTime(req, flights);
  res.send({ massage: "all the flight by depare time", fligthDepartureTime });
};
const getFlightsByTakeOffLanding = (req, res) => {
  flightsByTakeOffLanding = findFlightsByTakeOffLanding(req, flights);
  res.send({
    massage: "flight by take off and landing found",
    flightsByTakeOffLanding,
  });
};
const getFlightsByTakeOffTimeAndLandingTime = (req, res) => {
  const newArray = flights.filter((item) =>
    findFlightsByTakeOffTimeAndLandingTime(req, item)
  );
  if (newArray.length > 0) {
    res.send({ massage: "saccsses", newArray });
  }
  res.send({ massage: "flight not found" });
};

const getFlightsBylandingTimeAndlanding = (req, res) => {
  const newArray = flights.filter(item =>
    findFlightsBylandingTimeAndlanding(req, item)
  );
  if (newArray.length > 0) {
    res.send({ message: "flight found", newArray });
  }
  res.send({ massage: "flight not found" });
};
const getFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime = (req, res)=>{
    const flightNewArray= flights.filter(item =>
        findFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime(req, item)
        );
        if(flightNewArray.length > 0){
            res.send({message:'flight found',flightNewArray})
        }
        res.send({ massage: "flight not found" });
}

module.exports = {
  getAllFlights,
  addNewflight,
  updateFlightById,
  deleteFlightById,
  getFlightById,
  getFlightByFlightNumber,
  getFlightWithFirstClass,
  getFlightByFlightDepartureTime,
  getFlightsByTakeOffLanding,
  getFlightsByTakeOffTimeAndLandingTime,
  getFlightsBylandingTimeAndlanding,
  getFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime
};

function findFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime(req, item) {
    return (
        item.takeOff == req.body.takeOff &&
        item.departureTime == req.body.departureTime &&
        item.landing == req.body.landing &&
        item.landingTime == req.body.landingTime &&
        item.isThereSeatsAvailable == true

    );
}

function findFlightsBylandingTimeAndlanding(req, item) {
  return (
    item.landing == req.body.landing &&
    item.landingTime == req.body.landingTime &&
    item.isThereSeatsAvailable == true
  );
}

function findFlightsByTakeOffTimeAndLandingTime(req, item) {
  return (
    item.departureTime == req.body.departureTime &&
    item.takeOff == req.body.takeOff &&
    item.isThereSeatsAvailable == true
  );
}

function findFlightsByTakeOffLanding(req, arr) {
  const flightsByTakeOffLanding = [];
  arr.forEach((item) => {
    if (req.body.takeOff == item.takeOff && req.body.landing == item.landing) {
      flightsByTakeOffLanding.push(item);
    }
  });
  return flightsByTakeOffLanding;
}

function findFlightById(req, arr) {
  wanntedItem = arr.find((item) => item.id == req.params.id);
  itemIndex = arr.indexOf(wanntedItem);
  return itemIndex;
}
function findFlightByFlightNumber(req, arr) {
  wanntedItem = arr.find(
    (item) => item.flightNumber == req.params.flightNumber
  );
  itemIndex = arr.indexOf(wanntedItem);
  return itemIndex;
}
function findflightWithFirstClass(req, arr) {
  const flightWithFirstClass = [];
  arr.forEach((item) => {
    if (item.IsThereFirstClass == true) {
      flightWithFirstClass.push(item);
    }
  });
  return flightWithFirstClass;
}
function findFlightByFlightDepartureTime(req, arr) {
  const fligthDepartureTime = [];
  arr.forEach((item) => {
    if (item.departureTime == req.params.departureTime) {
      fligthDepartureTime.push(item);
    }
  });
  return fligthDepartureTime;
}
