const locations = [
  { name: "Paddington",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.882417, lon: 151.2228195,
    image: "images/map/paddington.png",
    text: "Historic suburb.",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paddington,_New_South_Wales"},
        {text: "About", url: "https://www.findandconnect.gov.au/entity/royal-hospital-for-women/"}],
    polygon: "images/polygons/paddington.json",
    relationId: 2943469
  },
  { name: "Lilyfield",
    countryName: "Australia",
    countryCode: "AU",
    image: "images/map/",
    length: "",
    text: ".",
    lat: -33.8710125, lon: 151.1511846,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lilyfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lilyfield.json",
    relationId: 5680773
  },
  { name: "Kings Park",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7436716, lon: 150.8955779,
    image: "images/map/",
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kings_Park,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kings_park.json",
    relationId: 5501387
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Sanctuary Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -35.1028172, lon: 150.6159478,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sanctuary_Point"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/sanctuary_point.json",
    relationId: 6076712
  },
  { name: "Glenwood",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7367984, lon: 150.9248587,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Glenwood,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/glenwood.json",
    relationId: 3003355
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505
  },
  { name: "Richmond",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.6057411, lon: 150.7380309,
    image: "images/map/",
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Richmond,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/richmond.json",
    relationId: 5498187
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/baulkham_hills_1.jpg",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},,
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.0669456,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/epping.json",
    relationId: 5640228
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.0669456,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/epping.json",
    relationId: 5640228
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/kellyville_1.png",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Greystanes",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.823747, lon: 150.9197412,
    image: "images/map/greytanes.jpg",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greystanes"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/greystanes.json",
    relationId: 3182521
  },
  { name: "North St Marys",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7533917, lon: 150.7759456,
    image: "images/map/north_st_marys.png",
    length: "short stint",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/North_St_Marys"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/north_st_marys.json",
    relationId: 5472801
  },
  { name: "Leura",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7097519, lon: 150.3182404,
    image: "images/map/leura.png",
    length: "short stint",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leura,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/leura.json",
    relationId: 5496188
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/kellyville.png",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/baulkham_hills.png",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924
  },
  { name: "Strathfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8791358, lon: 151.0707644,
    image: "images/map/strathfield.jpg",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Strathfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/strathfield.json",
    relationId: 5683354
  },
  { name: "North Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.7879174, lon: 153.2628592,
    image: "images/map/north_lismore.jpg",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/City_of_Lismore"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/north_lismore.json",
    relationId: 6070055
  },
  { name: "Mackay",
    countryName: "Australia",
    countryCode: "AU",
    lat: -21.1039596, lon: 149.1002078,
    image: "images/map/mackay.png",
    length: "layover",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mackay,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mackay.json",
    relationId: 11677563
  },
  { name: "Howard",
    countryName: "Australia",
    countryCode: "AU",
    lat: -25.3383131, lon: 152.5053847,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Howard,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/howard.json",
    relationId: 11676280
  },
  { name: "Tenterfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -29.0928317, lon: 151.9515158,
    image: ["images/map/tenterfield.png", "images/map/tenterfield_2.png", "images/map/tenterfield_3.png"],
    length: "buzzing around",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tenterfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tenterfield.json",
    relationId: 6163155
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622547,
    image: "images/map/baulkham_hills.png",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924
  },
  { name: "Kariong",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.4555523, lon: 151.2524666,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kariong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kariong.json",
    relationId: 6039388
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8189077, lon: 153.2537111,
    image: ["images/map/lismore_1.png", "images/map/lismore_3.jpg"],
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lismore.json",
    relationId: 6069981
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8189077, lon: 153.2537111,
    image: "images/map/lismore_2.png",
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lismore.json",
    relationId: 6069981
  },
  { name: "Tregeagle",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8688226, lon: 153.3320197,
    image: ["images/map/tregeagle.png", "images/map/tregeagle_2.jpg"],
    length: "short stint",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tregeagle,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tregeagle.json",
    relationId: 6070192
  },
  { name: "Fortitude Valley",
    countryName: "Australia",
    countryCode: "AU",
    lat: -27.4572725, lon: 153.0301574,
    image: "images/map/fortitude_valley.png",
    length: "buzzing around",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fortitude_Valley,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/fortitude_valley.json",
    relationId: 11677748
  },
  { name: "Byron Bay",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.646829, lon: 153.582257,
    image: ["images/map/byron_bay.png", "images/map/byron_bay_1.png", "images/map/byron_bay_2.png"],
    length: "buzzed around",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Byron_Bay"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/byron_bay.json",
    relationId: 6069744
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    length: "",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505
  },
  { name: "Castle Hill",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7301873, lon: 150.9770304,
    image: "images/map/",
    length: "chilled out",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Hill,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/castle_hill.json",
    relationId: 5504782
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/manchester_1.png",
    length: "3",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 146656
  },
  { name: "London",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 51.5287393, lon: -0.2667437,
    image: ["images/map/london.png", "images/map/london_2.png"],
    length: "3",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/London"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/london.json",
    relationId: 175342
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/manchester_1.png",
    length: "1",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 146656
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169465,
    image: "images/map/",
    length: "203",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",
    lat: 30.6587195, lon: 103.9103989,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/chengdu.json",
    relationId: 2110264
  },
  { name: "Beijing",
    countryName: "China",
    countryCode: "CN",
    lat: 39.9389417, lon: 116.0671495,
    image: "images/map/beijing_2018-02-22-17-48-57.jpeg",
    length: "11",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beijing"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/beijing.json",
    relationId: 912940
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",
    lat: 30.6587195, lon: 103.9103989,
    image: "images/map/",
    length: "3",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/chengdu.json",
    relationId: 2110264
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",
    lat: 26.5961841, lon: 106.6338134,
    image: "images/map/guiyang_2018-03-08.jpeg",
    length: "73",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/guiyang.json",
    relationId: 2782246
  },
  { name: "Xiamen",
    countryName: "China",
    countryCode: "CN",
    lat: 24.4793314, lon: 118.0266356,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Xiamen"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/xiamen.json",
    relationId: 3242930
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/",
    length: "1",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132
  },
  { name: "Quanzhou",
    countryName: "China",
    countryCode: "CN",
    lat: 24.9038679, lon: 118.5011077,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Quanzhou"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/quanzhou.json",
    relationId: 2666969
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",
    lat: 26.5961841, lon: 106.6338134,
    image: "images/map/guiyang_2018-03-08.jpeg",
    length: "61",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/guiyang.json",
    relationId: 2782246
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.3529581, lon: 113.974252,
    image: "images/map/hong_kong_airport_2018-07-17.jpeg",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/manchester_1.png",
    length: "5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 146656
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    length: "518",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/düsseldorf.json",
    relationId: 62539
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.0762421, lon: 55.0623401,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    length: "40",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/düsseldorf.json",
    relationId: 62539
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.4380556, lon: -3.7621078,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/madrid.json",
    relationId: 5326784
  },
  { name: "Casablanca",
    countryName: "Morocco",
    countryCode: "MA",
    lat: 33.5724031, lon: -7.6695639,
    image: "images/map/",
    length: "3",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Casablanca"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/casablanca.json",
    relationId: 4072985
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.4380556, lon: -3.7621078,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/madrid.json",
    relationId: 5326784
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    length: "207",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/düsseldorf.json",
    relationId: 62539
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578027, lon: 6.8021772,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cologne.json",
    relationId: 62578
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4723192, lon: -2.3060336,
    image: "images/map/manchester_2.png",
    length: "3",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 146656
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578027, lon: 6.8021772,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cologne.json",
    relationId: 62578
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.2385332, lon: 6.7317793,
    image: "images/map/",
    length: "174",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/D%C3%BCsseldorf"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/düsseldorf.json",
    relationId: 62539
  },
  { name: "Frankfurt",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.1212928, lon: 8.5539929,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Frankfurt"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/frankfurt.json",
    relationId: 62400
  },
  { name: "São Paulo",
    countryName: "Brazil",
    countryCode: "BR",
    lat: -23.6820104, lon: -46.7604464,
    image: ["images/map/sao_paulo_vila_buarque.jpg", "images/map/sao_paulo_vila_buarque_2.jpg", "images/map/sao_paulo_vila_buarque_3_20210304_121238.jpg", "images/map/sao_paulo_vila_buarque_4_20210723_102330.jpg"],
    length: "176",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/são_paulo.json",
    relationId: 298285
  },
  { name: "São Paulo",
    countryName: "Brazil",
    countryCode: "BR",
    lat: -23.6820104, lon: -46.7604464,
    image: ["images/map/sao_paulo_cambuci_3.png", "images/map/sao_paulo_cambuci_2.jpg", "images/map/sao_paulo_cambuci_4.png", "images/map/sao_paulo_cambuci_5.png"],
    length: "176",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/são_paulo.json",
    relationId: 298285
  },
  { name: "Bogotá",
    countryName: "Colombia",
    countryCode: "CO",
    lat: 4.6484638, lon: -74.1903787,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bogot%C3%A1"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/bogotá.json",
    relationId: 7426387
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3909829, lon: -99.3087608,
    image: ["images/map/portales_sur_mexico_city.png", "images/map/portales_sur_mexico_city_3.jpg", "images/map/portales_sur_mexico_city_2.jpg"],
    length: 73,
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mexico_city.json",
    relationId: 17483459
  },
  { name: "Cancún",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3606277, lon: -99.1472733,
    image: "images/map/",
    length: "1",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Canc%C3%BAn"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cancún.json",
    relationId: 17611454
  },
  { name: "Austin",
    countryName: "America",
    countryCode: "US",
    lat: 30.2963067, lon: -97.8981175,
    image: "images/map/austin.png",
    length: "7",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Austin,_Texas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/austin.json",
    relationId: 113314
  },
  { name: "Arlington",
    countryName: "America",
    countryCode: "US",
    lat: 32.7021225, lon: -97.2180969,
    image: ["images/map/arlington.png", "images/map/arlington_2.png"],
    length: "7",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arlington,_Texas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/arlington.json",
    relationId: 115329
  },
  { name: "Dallas",
    countryName: "America",
    countryCode: "US",
    lat: 32.8186842, lon: -96.8972433,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dallas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dallas.json",
    relationId: 6571629
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3909829, lon: -99.3087608,
    image: ["images/map/mexico_city_portales_norte.png", "images/map/mexico_city_portales_norte_2.png"],
    length: "182",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mexico_city.json",
    relationId: 1376330
  },
  { name: "Tokyo",
    countryName: "Japan",
    countryCode: "JP",
    lat: 35.5042696, lon: 138.4481472,
    image: "images/map/",
    length: "0.5",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tokyo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tokyo.json",
    relationId: 1543125
  },
  { name: "Singapore",
    countryName: "Singapore",
    countryCode: "SG",
    lat: 1.3143378, lon: 103.6791015,
    image: "images/map/",
    length: "1",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Singapore"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/singapore.json",
    relationId: 536780
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.9366511,
    image: "images/map/",
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713
  },
  { name: "Kurraba Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8419788, lon: 151.220246,
    image: "images/map/",
    length: "long stay",
    text: ".",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kurraba_Point"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kurraba_point.json",
    relationId: 5650674
  },
];

// Function to get category and icon based on length
function getCategoryAndIcon(length) {
    let category;
    let days = 0;
    if (typeof length === 'number') {
        days = length;
    } else if (typeof length === 'string') {
        days = parseFloat(length) || 0;
    }

    if (days <= 0.5) category = 'layover';
    else if (days <= 3) category = 'popped in';
    else if (days <= 30) category = 'chilled out';
    else if (days <= 120) category = 'buzzed around';
    else if (days <= 210) category = 'medium stay';
    else category = 'long stay';

    const iconMap = {
        'layover': 'images/icons/layover_icon.png',
        'popped in': 'images/icons/popped_in_icon.png',
        'chilled out': 'images/icons/chilled_out_icon.png',
        'buzzed around': 'images/icons/buzzed_around_icon.png',
        'medium stay': 'images/icons/medium_stay_icon.png',
        'long stay': 'images/icons/long_stay_icon.png'
    };

    const iconUrl = iconMap[category] || 'images/location_icon.png';
    const icon = L.icon({
        iconUrl: iconUrl,
        iconSize: [55, 55],
        iconAnchor: [27, 55],
        popupAnchor: [0, -55]
    });

    return { category: category.replace(/\b\w/g, l => l.toUpperCase()), days, icon };
}

// Initialize the map
const map = L.map('map').setView([0, 0], 3);

// Create panes for overlay order control
map.createPane('railwayPane').style.zIndex = 400;
map.createPane('waterPane').style.zIndex = 450;
map.createPane('labelsPane').style.zIndex = 500;

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
    attribution: '&copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> &copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
    opacity: 0.6
});

// Create layer groups for marker categories
const markerLayers = {
    "Layover - 0-0.5 days": L.layerGroup(),
    "Popped In - 1-3 days": L.layerGroup(),
    "Chilled Out - 3-30 days": L.layerGroup(),
    "Buzzed Around - 1-4 months": L.layerGroup(),
    "Medium Stay - 4-7 months": L.layerGroup(),
    "Long Stay - 7+ months": L.layerGroup()
};

// Add overlays with icons for marker layers
const overlays = {
    "Railways": railwayOverlay,
    "Waterways": waterOverlay,
    "Labels": osmLabelsOverlay,
    "<img src='images/icons/layover_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Layover - 0-0.5 days": markerLayers["Layover - 0-0.5 days"],
    "<img src='images/icons/popped_in_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Popped In - 1-3 days": markerLayers["Popped In - 1-3 days"],
    "<img src='images/icons/chilled_out_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Chilled Out - 3-30 days": markerLayers["Chilled Out - 3-30 days"],
    "<img src='images/icons/buzzed_around_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Buzzed Around - 1-4 months": markerLayers["Buzzed Around - 1-4 months"],
    "<img src='images/icons/medium_stay_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Medium Stay - 4-7 months": markerLayers["Medium Stay - 4-7 months"],
    "<img src='images/icons/long_stay_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Long Stay - 7+ months": markerLayers["Long Stay - 7+ months"]
};
L.control.layers(null, overlays).addTo(map);

// Add markers to their layer groups
locations.forEach(location => {
    if (location.lat && location.lon) {
        const { category, days, icon } = getCategoryAndIcon(location.length);
        const marker = L.marker([location.lat, location.lon], { icon });
        console.log(`Marker added for ${location.name} (${category})`);

        // Popup setup with tooltip on category text from the start
        marker.bindPopup(`
            <b>${location.name}</b><br>
            ${location.countryName} (${location.countryCode})<br>
            <span title="Exact length: ${days} days">Category: ${category}</span><br>
            Lat: ${location.lat}, Lon: ${location.lon}<br>
            <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
            <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
        `);

        marker.on('dblclick', () => map.flyTo([location.lat, location.lon], 10));

        marker.on('popupopen', function() {
            const currentZoom = map.getZoom();
            const showDetails = currentZoom >= 8;
            let imageHtml = '';
            if (showDetails && Array.isArray(location.image) && location.image.length > 0) {
                imageHtml = location.image.map(img => `<img src="${img}" width="100" style="margin: 5px 0;"><br>`).join('');
            }
            const popupContent = `
                <b>${location.name}</b><br>
                ${location.countryName} (${location.countryCode})<br>
                <span title="Exact length: ${days} days">Category: ${category}</span><br>
                Lat: ${location.lat}, Lon: ${location.lon}<br>
                ${imageHtml}
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

        // Add marker to the appropriate layer group
        const layerKey = Object.keys(markerLayers).find(key => key.startsWith(category));
        if (layerKey) {
            markerLayers[layerKey].addLayer(marker);
        }
    }
});

// Add all marker layer groups to the map by default (so they are ticked on)
Object.values(markerLayers).forEach(layerGroup => layerGroup.addTo(map));

// Function to load polygon from local .json only
function loadPolygon(location) {
    if (!location.polygon) {
        console.log(`No polygon path specified for ${location.name}`);
        return Promise.resolve(null);
    }
    console.log(`Attempting to load ${location.polygon} for ${location.name}`);
    return fetch(location.polygon)
        .then(response => {
            console.log(`Fetch response for ${location.polygon}: ${response.status} (${response.statusText})`);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Local file not found: ${response.status} - Check if ${location.polygon} exists.`);
            }
        })
        .then(geoJson => {
            console.log(`Loaded polygon for ${location.name} from local file`);
            return geoJson;
        })
        .catch(error => {
            console.log(`Error loading polygon for ${location.name}: ${error.message}`);
            return null;
        });
}

// Batch load polygons on page load (but don't show yet)
async function loadPolygonsInBatches(locations, batchSize = 5, delay = 1000) {
    const results = [];
    for (let i = 0; i < locations.length; i += batchSize) {
        const batch = locations.slice(i, i + batchSize);
        const batchPromises = batch.map(loc => loadPolygon(loc).then(geoJson => ({ location: loc, geoJson })));
        try {
            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);
            console.log(`Polygon batch ${Math.floor(i / batchSize) + 1} loaded`);
        } catch (error) {
            console.log('Polygon batch error:', error);
        }
        if (i + batchSize < locations.length) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    return results;
}

// Load polygons on load, store them
loadPolygonsInBatches(locations).then(results => {
    results.forEach(({ location, geoJson }) => {
        if (geoJson) {
            location.polygon = L.geoJSON(geoJson, {
                style: { color: 'red', fillColor: 'red', fillOpacity: 0.1, weight: 2 }
            });
            console.log(`Polygon ready for ${location.name}`);
        }
    });
    console.log('All polygons loaded and ready');
}).catch(error => console.log('Polygon load error:', error));

// Show/hide polygons based on zoom
const updatePolygons = () => {
    const currentZoom = map.getZoom();
    locations.forEach(loc => {
        if (loc.polygon && typeof loc.polygon !== 'string') {  // Check if it's a Leaflet layer, not the path string
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

console.log('Map loaded with categorized markers, toggle control, tooltips on category text, and local .json polygons!');

/*
async function fetchSpecificPolygon(locationName) {
    const location = locations.find(loc => loc.name === locationName);
    if (!location) {
        console.log(`Location ${locationName} not found in locations array.`);
        return;
    }
    const filePath = location.polygon || `./polygons/${location.name.toLowerCase().replace(/\s+/g, '_')}.json`;
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            console.log(`Fetching polygon for ${location.name}...`);
            // Fetch from API with retry
            let geoJson = null;
            let retries = 3;
            while (retries > 0 && !geoJson) {
                try {
                    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];relation(${location.relationId});out geom;`;
                    const apiResponse = await fetch(overpassUrl);
                    if (apiResponse.status === 429 || apiResponse.status === 504) {
                        console.log(`Rate limit for ${location.name}, retrying in 5s...`);
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        retries--;
                        continue;
                    }
                    if (apiResponse.ok) {
                        const data = await apiResponse.json();
                        const relation = data.elements.find(el => el.type === 'relation');
                        if (relation && relation.members) {
                            const coordinates = [];
                            relation.members.forEach(member => {
                                if (member.type === 'way' && member.geometry) {
                                    const polyCoords = member.geometry.map(point => [point.lon, point.lat]);
                                    coordinates.push([polyCoords]);
                                }
                            });
                            if (coordinates.length > 0) {
                                geoJson = {
                                    type: 'Feature',
                                    geometry: { type: 'MultiPolygon', coordinates }
                                };
                            }
                        }
                    } else {
                        console.log(`API error for ${location.name}: ${apiResponse.status}`);
                        retries--;
                    }
                } catch (error) {
                    console.log(`Fetch error for ${location.name}: ${error.message}`);
                    retries--;
                }
            }
            if (geoJson) {
                // Download
                const blob = new Blob([JSON.stringify(geoJson)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = location.polygon ? location.polygon.split('/').pop() : `${location.name.toLowerCase().replace(/\s+/g, '_')}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                console.log(`Downloaded polygon for ${location.name}. Save it in the correct folder (e.g., polygons/ or images/polygons/).`);
            } else {
                console.log(`Failed to fetch polygon for ${location.name} after retries.`);
            }
        } else {
            console.log(`Polygon already exists for ${location.name}`);
        }
    } catch (error) {
        console.log(`Error for ${location.name}: ${error.message}`);
    }
}

fetchSpecificPolygon('Bogotá');
*/