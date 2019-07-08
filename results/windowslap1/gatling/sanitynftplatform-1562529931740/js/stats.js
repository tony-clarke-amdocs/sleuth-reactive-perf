var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "566527",
        "ok": "566521",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "2755"
    },
    "maxResponseTime": {
        "total": "12999",
        "ok": "12999",
        "ko": "3485"
    },
    "meanResponseTime": {
        "total": "821",
        "ok": "821",
        "ko": "3124"
    },
    "standardDeviation": {
        "total": "424",
        "ok": "424",
        "ko": "256"
    },
    "percentiles1": {
        "total": "750",
        "ok": "750",
        "ko": "3191"
    },
    "percentiles2": {
        "total": "1030",
        "ok": "1031",
        "ko": "3277"
    },
    "percentiles3": {
        "total": "1246",
        "ok": "1246",
        "ko": "3438"
    },
    "percentiles4": {
        "total": "1613",
        "ok": "1613",
        "ko": "3476"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 293744,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 237266,
        "percentage": 42
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 35511,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "942.641",
        "ok": "942.631",
        "ko": "0.01"
    }
},
contents: {
"req_withsleuth-28dfe": {
        type: "REQUEST",
        name: "withsleuth",
path: "withsleuth",
pathFormatted: "req_withsleuth-28dfe",
stats: {
    "name": "withsleuth",
    "numberOfRequests": {
        "total": "566527",
        "ok": "566521",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "8",
        "ko": "2755"
    },
    "maxResponseTime": {
        "total": "12999",
        "ok": "12999",
        "ko": "3485"
    },
    "meanResponseTime": {
        "total": "821",
        "ok": "821",
        "ko": "3124"
    },
    "standardDeviation": {
        "total": "424",
        "ok": "424",
        "ko": "256"
    },
    "percentiles1": {
        "total": "750",
        "ok": "750",
        "ko": "3191"
    },
    "percentiles2": {
        "total": "1030",
        "ok": "1031",
        "ko": "3277"
    },
    "percentiles3": {
        "total": "1246",
        "ok": "1246",
        "ko": "3438"
    },
    "percentiles4": {
        "total": "1613",
        "ok": "1613",
        "ko": "3476"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 293744,
        "percentage": 52
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 237266,
        "percentage": 42
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 35511,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 6,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "942.641",
        "ok": "942.631",
        "ko": "0.01"
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
