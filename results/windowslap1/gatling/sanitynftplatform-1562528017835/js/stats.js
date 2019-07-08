var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "446069",
        "ok": "446040",
        "ko": "29"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1502"
    },
    "maxResponseTime": {
        "total": "8536",
        "ok": "8536",
        "ko": "5033"
    },
    "meanResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "2712"
    },
    "standardDeviation": {
        "total": "217",
        "ok": "216",
        "ko": "1390"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "1868"
    },
    "percentiles2": {
        "total": "15",
        "ok": "16",
        "ko": "4351"
    },
    "percentiles3": {
        "total": "67",
        "ok": "67",
        "ko": "4933"
    },
    "percentiles4": {
        "total": "827",
        "ok": "823",
        "ko": "5006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 441369,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2618,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2053,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 29,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "743.448",
        "ok": "743.4",
        "ko": "0.048"
    }
},
contents: {
"req_nosleuth-9ef0d": {
        type: "REQUEST",
        name: "nosleuth",
path: "nosleuth",
pathFormatted: "req_nosleuth-9ef0d",
stats: {
    "name": "nosleuth",
    "numberOfRequests": {
        "total": "446069",
        "ok": "446040",
        "ko": "29"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "1502"
    },
    "maxResponseTime": {
        "total": "8536",
        "ok": "8536",
        "ko": "5033"
    },
    "meanResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "2712"
    },
    "standardDeviation": {
        "total": "217",
        "ok": "216",
        "ko": "1390"
    },
    "percentiles1": {
        "total": "9",
        "ok": "9",
        "ko": "1868"
    },
    "percentiles2": {
        "total": "16",
        "ok": "16",
        "ko": "4351"
    },
    "percentiles3": {
        "total": "67",
        "ok": "67",
        "ko": "4933"
    },
    "percentiles4": {
        "total": "827",
        "ok": "823",
        "ko": "5006"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 441369,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2618,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2053,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 29,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "743.448",
        "ok": "743.4",
        "ko": "0.048"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
