const flightsRouter = require("express").Router();
const {
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
} = require("../controllers/flights-ctl");

flightsRouter.get("/", getAllFlights);
flightsRouter.post("/addNewflight", addNewflight);
flightsRouter.put("/updateFlightById/:id", updateFlightById);
flightsRouter.delete("/deleteFlightById/:id", deleteFlightById);
flightsRouter.get("/getFlightById/:id", getFlightById);
flightsRouter.get("/getFlightByFlightNumber/:flightNumber",getFlightByFlightNumber);
flightsRouter.get(
  "/getFlightWithFirstClass/:IsThereFirstClass",
  getFlightWithFirstClass
);
flightsRouter.get(
  "/getFlightByFlightDepartureTime/:departureTime",
  getFlightByFlightDepartureTime
);
flightsRouter.get("/getFlightsByTakeOffLanding", getFlightsByTakeOffLanding);
flightsRouter.get(
  "/getFlightsByTakeOffTimeAndLandingTime",
  getFlightsByTakeOffTimeAndLandingTime
);
flightsRouter.get(
  "/getFlightsBylandingTimeAndlanding",
  getFlightsBylandingTimeAndlanding
);
flightsRouter.get('/getFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime',getFlightsByDepartureTimeAndTakeOffLandingTimeLandingTime)

module.exports = { flightsRouter };
