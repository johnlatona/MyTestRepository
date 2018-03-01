
export default class Launch {
    constructor({
        details, 
        flight_number: number, 
        launch_success: succeeded, 
        launch_year: year
    }) {
        this.details = details;
        this.number = number;
        this.succeeded = succeeded;
        this.year = year;
    }
    wasFailure = () => {
        if(this.succeeded) {
            return false;
        }
        else {
            return true;
        }
    }
    launchInfo = () => `Year: ${this.year}\nFlight Number: ${this.number}\nLaunch Details: ${this.details}`;
}