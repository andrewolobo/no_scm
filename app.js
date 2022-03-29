var request = require('request');

let times = 0;

const options = {
    method: "POST",
    url: "http://147.182.210.87/dsjgfsdhfgsjdhftejhfbftyrerrw/sdghtrrehvdchwvjvjvhfvd/ftwewqkfrggwvhntedkjd56536jbd.php",
    port: 443,
    headers: {
        "Content-Type": "multipart/form-data"
    },
    formData : {
        "ai" :  (Math.random() + 1).toString(36).substring(3)+"@"+(Math.random() + 1).toString(36).substring(3)+".com",
        "pr":  (Math.random() + 1).toString(36).substring(1)
    }
};

function sendSpam(){
    request(options, function (err, res, body) {
        if(err) console.log(err);
        // console.log(body);
        times += 1;
        console.log(times)
        console.log((Math.random() + 1).toString(36).substring(3)+"@"+(Math.random() + 1).toString(36).substring(3)+".com")
    });
}


setInterval(sendSpam, 3000);