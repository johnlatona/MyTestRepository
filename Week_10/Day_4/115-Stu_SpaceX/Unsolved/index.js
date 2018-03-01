// import axios, a small library similar to $.ajax for making AJAX requests
import axios from "axios";

import Launch from "./Launch";

const ROCKETID = 'falcon9'

// Get SpaceX launch data and log the response
// If there is an error making the request, log the error
axios
  .get("https://api.spacexdata.com/v2/launches")
  .then(response => getFailureData(data.response))
  .catch(err => console.log(err));

const getFailureData = (data) => {
  data.filter(rawLaunch => rawLaunch.rocket.rocket_id === ROCKETID)
    .map(relevantLaunch => new Launch (relevantLaunch))
    .filter(relevantLaunch => relevantLaunch.wasFailure())
    .forEach(failedLaunch => console.log(failedLaunch.launchInfo()));
}
