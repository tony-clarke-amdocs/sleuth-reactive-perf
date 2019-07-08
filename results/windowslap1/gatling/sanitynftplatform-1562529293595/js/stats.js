var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "590172",
        "ok": "590169",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "2347"
    },
    "maxResponseTime": {
        "total": "7559",
        "ok": "7559",
        "ko": "2756"
    },
    "meanResponseTime": {
        "total": "763",
        "ok": "763",
        "ko": "2495"
    },
    "standardDeviation": {
        "total": "292",
        "ok": "292",
        "ko": "185"
    },
    "percentiles1": {
        "total": "784",
        "ok": "784",
        "ko": "2381"
    },
    "percentiles2": {
        "total": "959",
        "ok": "958",
        "ko": "2569"
    },
    "percentiles3": {
        "total": "1137",
        "ok": "1137",
        "ko": "2719"
    },
    "percentiles4": {
        "total": "1418",
        "ok": "1418",
        "ko": "2749"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 296235,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 276968,
        "percentage": 47
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16966,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "983.62",
        "ok": "983.615",
        "ko": "0.005"
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
        "total": "590172",
        "ok": "590169",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "2347"
    },
    "maxResponseTime": {
        "total": "7559",
        "ok": "7559",
        "ko": "2756"
    },
    "meanResponseTime": {
        "total": "763",
        "ok": "763",
        "ko": "2495"
    },
    "standardDeviation": {
        "total": "292",
        "ok": "292",
        "ko": "185"
    },
    "percentiles1": {
        "total": "784",
        "ok": "784",
        "ko": "2381"
    },
    "percentiles2": {
        "total": "958",
        "ok": "959",
        "ko": "2569"
    },
    "percentiles3": {
        "total": "1137",
        "ok": "1137",
        "ko": "2719"
    },
    "percentiles4": {
        "total": "1418",
        "ok": "1418",
        "ko": "2749"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 296235,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 276968,
        "percentage": 47
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 16966,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "983.62",
        "ok": "983.615",
        "ko": "0.005"
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
