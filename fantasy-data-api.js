Future = Npm.require('fibers/future');

FanData = function ( apiKey, options ) {
    this.options = {
            'apiKey' : apiKey
        };
};

FanData.prototype.call = function(league_type, version, method, params, callback) {
    callback  = typeof callback  !== "undefined" ? callback  : false;
    if(!callback){
        var future = new Future();
        HTTP.get("https://api.fantasydata.net/" + league_type + "/v" + version + "/json/" + method, {
            params: params,
            headers: {
                "Ocp-Apim-Subscription-Key" : this.options.apiKey
            }
        }, function(err, message) {
            if(err) {
                future.throw(err);
            } else if(!message.data.ok){
                future.return(message.data);
            } else {
                // Send back the relevant part of the payload.
                future.return(message.data);
            }
        });
        return future.wait();
    } else {
        HTTP.get("https://api.fantasydata.net/" + league_type + "/v" + version + "/json/" + method, {
            params: params,
            headers: {
                "Ocp-Apim-Subscription-Key": this.options.apiKey
            }
        }, function(err, message) {
            if(err) {
                return callback(err);
            } else if(!message.data.ok){
                return callback(message.data);
            } else {
                // Send back the relevant part of the payload.
                return callback(null, message.data);
            }
        });
    }
};