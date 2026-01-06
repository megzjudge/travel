const locations = [
  { name: "Paddington",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.882417, lon: 151.2228195,
    image: "images/map/paddington.png",
    text: "Historic suburb.",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paddington,_New_South_Wales"},
        {text: "About", url: "https://www.findandconnect.gov.au/entity/royal-hospital-for-women/"}],
    relationId: 2943469
  },
  { name: "Lilyfield",
    countryName: "Australia",
    countryCode: "AU",
    image: "images/map/",
    text: ".",
    lat: -33.8710125, lon: 151.1511846,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lilyfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5680773
  },
  { name: "Kings Park",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7436716, lon: 150.8955779,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kings_Park,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501387
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Sanctuary Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -35.1028172, lon: 150.6159478,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sanctuary_Point"},
        {text: "Site", url: ""}],
    relationId: 6076712
  },
  { name: "Glenwood",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7367984, lon: 150.9248587,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Glenwood,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 3003355
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Richmond",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.6057411, lon: 150.7380309,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Richmond,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5498187
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},,
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.0669456,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5640228
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.0669456,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5640228
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Greystanes",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.823747, lon: 150.9197412,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greystanes"},
        {text: "Site", url: ""}],
    relationId: 3182521
  },
  { name: "North St Marys",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7533917, lon: 150.7759456,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/North_St_Marys"},
        {text: "Site", url: ""}],
    relationId: 5472801
  },
  { name: "Leura",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7097519, lon: 150.3182404,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leura,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5496188
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Strathfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8791358, lon: 151.0707644,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Strathfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5683354
  },
  { name: "North Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.7879174, lon: 153.2628592,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/City_of_Lismore"},
        {text: "Site", url: ""}],
    relationId: 6070055
  },
  { name: "Mackay",
    countryName: "Australia",
    countryCode: "AU",
    lat: -21.1039596, lon: 149.1002078,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mackay,_Queensland"},
        {text: "Site", url: ""}],
    relationId: 11677563
  },
  { name: "Howard",
    countryName: "Australia",
    countryCode: "AU",
    lat: -25.3383131, lon: 152.5053847,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Howard,_Queensland"},
        {text: "Site", url: ""}],
    relationId: 11676280
  },
  { name: "Tenterfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -29.0928317, lon: 151.9515158,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tenterfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 6163155
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Kariong",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.4555523, lon: 151.2524666,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kariong"},
        {text: "Site", url: ""}],
    relationId: 6039388
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8189077, lon: 153.2537111,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 6069981
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8189077, lon: 153.2537111,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 6069981
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Castle Hill",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7301873, lon: 150.9770304,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Hill,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5504782
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "London",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 51.5287393, lon: -0.2667437,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/London"},
        {text: "Site", url: ""}],
    relationId: 175342
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",
    lat: 30.6587195, lon: 103.9103989,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    relationId: 2110264
  },
  { name: "Beijing",
    countryName: "China",
    countryCode: "CN",
    lat: 39.9389417, lon: 116.0671495,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beijing"},
        {text: "Site", url: ""}],
    relationId: 912940
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",
    lat: 30.6587195, lon: 103.9103989,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    relationId: 2110264
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",
    lat: 26.5961841, lon: 106.6338134,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    relationId: 2782246
  },
  { name: "Xiamen",
    countryName: "China",
    countryCode: "CN",
    lat: 24.4793314, lon: 118.0266356,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Xiamen"},
        {text: "Site", url: ""}],
    relationId: 3242930
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Quanzhou",
    countryName: "China",
    countryCode: "CN",
    lat: 24.9038679, lon: 118.5011077,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Quanzhou"},
        {text: "Site", url: ""}],
    relationId: 2666969
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",
    lat: 26.5961841, lon: 106.6338134,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    relationId: 2782246
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.4380556, lon: -3.7621078,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    relationId: 5326784
  },
  { name: "Casablanca",
    countryName: "Morocco",
    countryCode: "MA",
    lat: 33.5724031, lon: -7.6695639,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Casablanca"},
        {text: "Site", url: ""}],
    relationId: 4072985
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.4380556, lon: -3.7621078,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    relationId: 5326784
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578027, lon: 6.8021772,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    relationId: 62578
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578027, lon: 6.8021772,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    relationId: 62578
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Frankfurt",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.1212928, lon: 8.5539929,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Frankfurt"},
        {text: "Site", url: ""}],
    relationId: 62400
  },
  { name: "São Paulo",
    countryName: "Brazil",
    countryCode: "BR",
    lat: -23.6820104, lon: -46.7604464,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo"},
        {text: "Site", url: ""}],
    relationId: 298285
  },
  { name: "Bogotá",
    countryName: "Colombia",
    countryCode: "CO",
    lat: 4.6484638, lon: -74.1903787,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bogot%C3%A1"},
        {text: "Site", url: ""}],
    relationId: 7426387
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3909829, lon: -99.3087608,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    relationId: 17483459
  },
  { name: "Cancún",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 21.1231853, lon: -86.9389756,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Canc%C3%BAn"},
        {text: "Site", url: ""}],
    relationId: 17611454
  },
  { name: "Austin",
    countryName: "America",
    countryCode: "US",
    lat: 30.2963067, lon: -97.8981175,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Austin,_Texas"},
        {text: "Site", url: ""}],
    relationId: 113314
  },
  { name: "Arlington",
    countryName: "America",
    countryCode: "US",
    lat: 32.7021225, lon: -97.2180969,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arlington,_Texas"},
        {text: "Site", url: ""}],
    relationId: 115329
  },
  { name: "Dallas",
    countryName: "America",
    countryCode: "US",
    lat: 32.8186842, lon: -96.8972433,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dallas"},
        {text: "Site", url: ""}],
    relationId: 6571629
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3909829, lon: -99.3087608,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    relationId: 1376330
  },
  { name: "Tokyo",
    countryName: "Japan",
    countryCode: "JP",
    lat: 35.5042696, lon: 138.4481472,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tokyo"},
        {text: "Site", url: ""}],
    relationId: 1543125
  },
  { name: "Singapore",
    countryName: "Singapore",
    countryCode: "SG",
    lat: 1.3143378, lon: 103.6791015,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Singapore"},
        {text: "Site", url: ""}],
    relationId: 536780
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kurraba Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8419788, lon: 151.220246,
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kurraba_Point"},
        {text: "Site", url: ""}],
    relationId: 5650674
  },
];

// Initialize the map
const map = L.map('map').setView([0, 0], 3);

// Create panes for overlay order control
map.createPane('railwayPane').style.zIndex = 400;  // Bottom of overlays
map.createPane('waterPane').style.zIndex = 450;    // Middle
map.createPane('labelsPane').style.zIndex = 500;   // Top

const esriImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
}).addTo(map);

const railwayOverlay = L.tileLayer('https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    opacity: 0.7
});

const osmLabelsOverlay = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    opacity: 0.7
});

const waterOverlay = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    opacity: 0.6
});

// Add layer control to toggle the overlays
const overlays = {
    "Railways": railwayOverlay,
    "Waterways": waterOverlay,
    "Labels": osmLabelsOverlay  // Listed last for toggle order
};
L.control.layers(null, overlays).addTo(map);

// Custom icon for smaller markers
const smallIcon = L.icon({
    iconUrl: 'images/location_icon.png',
    iconSize: [55, 55],
    iconAnchor: [27, 55],  // horizontal center, bottom pixel (tip)
    popupAnchor: [0, -55]  // popup appears above the tip
});

// Add markers immediately
locations.forEach(location => {
    if (location.lat && location.lon) {
        const marker = L.marker([location.lat, location.lon], { icon: smallIcon }).addTo(map);
        console.log(`Marker added for ${location.name}`);

        // Popup setup
        marker.bindPopup(`
            <b>${location.name}</b><br>
            ${location.countryName} (${location.countryCode})<br>
            Lat: ${location.lat}, Lon: ${location.lon}<br>
            <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
            <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
        `);

        marker.on('dblclick', () => map.flyTo([location.lat, location.lon], 10));

        marker.on('popupopen', function() {
            const currentZoom = map.getZoom();
            const showDetails = currentZoom >= 8;
            const popupContent = `
                <b>${location.name}</b><br>
                ${location.countryName} (${location.countryCode})<br>
                Lat: ${location.lat}, Lon: ${location.lon}<br>
                ${showDetails && location.image ? `<img src="${location.image}" width="100" style="margin: 5px 0;"><br>` : ''}
                ${showDetails && location.text ? `${location.text}<br>` : ''}
                ${showDetails && location.urls ? location.urls.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(' | ') + '<br>' : ''}
                <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
                <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
            `;
            marker.setPopupContent(popupContent);

            const zoomBtn = document.getElementById(`zoom-btn-${location.name.replace(/\s+/g, '-')}`);
            const zoomOutBtn = document.getElementById(`zoom-out-btn-${location.name.replace(/\s+/g, '-')}`);
            if (zoomBtn) {
                zoomBtn.onclick = () => {
                    map.flyTo([location.lat, location.lon], 10);
                    map.closePopup();
                };
            }
            if (zoomOutBtn) {
                zoomOutBtn.onclick = () => {
                    map.flyTo([0, 0], 3);
                    map.closePopup();
                };
            }
        });
    }
});

// Function to fetch polygon
function fetchPolygon(location) {
    return new Promise((resolve, reject) => {
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];relation(${location.relationId});out geom;`;
        fetch(overpassUrl)
            .then(response => {
                if (response.status === 429) {
                    reject(new Error('Rate limit for ' + location.name));
                    return;
                }
                if (!response.ok) {
                    reject(new Error(`HTTP ${response.status} for ${location.name}`));
                    return;
                }
                return response.json();
            })
            .then(data => {
                const relation = data.elements.find(el => el.type === 'relation');
                if (relation && relation.members) {
                    const coordinates = [];
                    relation.members.forEach(member => {
                        if (member.type === 'way' && member.geometry) {
                            const polyCoords = member.geometry.map(point => [point.lon, point.lat]);
                            coordinates.push([polyCoords]);
                        }
                    });
                    if (coordinates.length === 0) {
                        resolve(null);
                        return;
                    }
                    const geoJson = {
                        type: 'Feature',
                        geometry: { type: 'MultiPolygon', coordinates }
                    };
                    const polygon = L.geoJSON(geoJson, {
                        style: { color: 'red', fillColor: 'red', fillOpacity: 0.1, weight: 2 }
                    });
                    resolve(polygon);
                } else {
                    resolve(null);
                }
            })
            .catch(error => reject(error));
    });
}

// Batch fetch polygons on page load (but don't show yet)
async function loadPolygonsInBatches(locations, batchSize = 5, delay = 2000) {
    const results = [];
    for (let i = 0; i < locations.length; i += batchSize) {
        const batch = locations.slice(i, i + batchSize);
        const batchPromises = batch.map(loc => fetchPolygon(loc).then(polygon => ({ location: loc, polygon })));
        try {
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);
            console.log(`Polygon batch ${Math.floor(i / batchSize) + 1} fetched`);
        } catch (error) {
            console.log('Polygon batch error:', error);
        }
        if (i + batchSize < locations.length) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    return results;
}

// Fetch polygons on load, store them
loadPolygonsInBatches(locations).then(results => {
    results.forEach(({ location, polygon }) => {
        if (polygon) {
            location.polygon = polygon;  // Store for later
            console.log(`Polygon fetched for ${location.name}`);
        }
    });
    console.log('All polygons fetched and ready');
}).catch(error => console.log('Polygon fetch error:', error));

// Show/hide polygons based on zoom
const updatePolygons = () => {
    const currentZoom = map.getZoom();
    locations.forEach(loc => {
        if (loc.polygon) {
            if (currentZoom >= 10) {
                if (!map.hasLayer(loc.polygon)) {
                    loc.polygon.addTo(map);
                    console.log(`Polygon shown for ${loc.name} at zoom ${currentZoom}`);
                }
            } else {
                if (map.hasLayer(loc.polygon)) {
                    map.removeLayer(loc.polygon);
                    console.log(`Polygon hidden for ${loc.name} at zoom ${currentZoom}`);
                }
            }
        }
    });
};

map.on('zoomend', updatePolygons);

console.log('Map loaded with markers and pre-fetched polygons!');