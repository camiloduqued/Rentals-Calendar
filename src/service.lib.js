// import jsforce from 'jsforce';

export default class Service {

    conn;

    constructor(){
        this.conn = new window.jsforce.Connection({ 
            accessToken : '00D1g000000QEiW!AQMAQEOt2lfq_ir61MelbCBJPWXlMo2g3fdPvaJzw34R9OXmLY96fYAU8h4L8KZ8yYpovJa16nHWNKI_vofrWYUzlXys5Evi',
            instanceUrl : 'https://velocity-innovation-8248-dev-ed.my.salesforce.com',
        });
    }

    /**
     * Method that gets some rentals with the filter criteria sent on the parameters
     * @param {Number} numberOfGuests 
     * @param {String} category 
     * @param {String(timestamp)} rentalDate 
     * @param {String(timestamp)} startTime 
     * @param {String(timestamp)} endTime 
     */
    async getRentals(numberOfGuests, category, rentalDate, startTime, endTime) {

        return new Promise((resolve, reject) => {
            const params = new URLSearchParams({
                numberOfGuests,
                category,
                rentalDate,
                startTime,
                endTime,
            });
    
            this.conn.apex.get(`/Auctifera/rentals/v1?${params.toString()}`, function(error, response) {
                if (error) { 
                    console.log('error', error)
                    return reject(error)
                }
                return resolve(response)
            });
        })
    }

    /**
     * Method that creates a POS Purchase with a rental template request
     */
    purchase = async (request) => this.post('/Auctifera/pos/v2/purchase', request);

    /**
     * Method that charges som rental event
     */
    pay = async (request) => this.post('/Auctifera/pos/v1/payment?method=online', request);

    async post(url, body) {
        return new Promise((resolve, reject) => {
            this.conn.apex.post(url, body, function(error, response) {
                if (error) { 
                    console.log('error', error)
                    return reject(error)
                }
                return resolve(response)
            });
        })
    }

}