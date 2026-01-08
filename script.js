const locations = [
  { name: "Paddington",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.882417, lon: 151.2228195,
    image: "images/map/paddington.png",
    length: 4,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paddington,_New_South_Wales"},
        {text: "About", url: "https://www.findandconnect.gov.au/entity/royal-hospital-for-women/"}],
    polygon: "images/polygons/paddington.json",
    relationId: 2943469,
    jumpId: 1
  },
  { name: "Lilyfield",
    countryName: "Australia",
    countryCode: "AU",
    image: "images/map/",
    length: "Long Stay",
    lat: -33.8710125, lon: 151.1512061,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lilyfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lilyfield.json",
    relationId: 5680773,
    jumpId: 2
  },
  { name: "Kings Park",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7436716, lon: 150.8955994,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kings_Park,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kings_park.json",
    relationId: 5501387,
    jumpId: 3
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 4
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 5
  },
  { name: "Sanctuary Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -35.101114, lon: 150.628243,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sanctuary_Point"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/sanctuary_point.json",
    relationId: 6076712,
    jumpId: 6
  },
  { name: "Glenwood",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7367984, lon: 150.9248801,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Glenwood,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/glenwood.json",
    relationId: 3003355,
    jumpId: 7
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169679,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505,
    jumpId: 8
  },
  { name: "Richmond",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.602238, lon: 150.766999,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Richmond,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/richmond.json",
    relationId: 5498187,
    jumpId: 9
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622976,
    image: "images/map/baulkham_hills_1.jpg",
    length: "Medium Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924,
    jumpId: 10
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},,
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 11
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622976,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924,
    jumpId: 12
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.066967,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/epping.json",
    relationId: 5640228,
    jumpId: 13
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7739124, lon: 151.066967,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Epping,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/epping.json",
    relationId: 5640228,
    jumpId: 14
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 15
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/kellyville_1.png",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 16
  },
  { name: "Greystanes",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.823747, lon: 150.9197841,
    image: "images/map/greytanes.jpg",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greystanes"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/greystanes.json",
    relationId: 3182521,
    jumpId: 17
  },
  { name: "North St Marys",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7533917, lon: 150.775967,
    image: "images/map/north_st_marys.png",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/North_St_Marys"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/north_st_marys.json",
    relationId: 5472801,
    jumpId: 18
  },
  { name: "Leura",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.708755, lon: 150.339485,
    image: "images/map/leura.png",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Leura,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/leura.json",
    relationId: 5496188,
    jumpId: 19
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169679,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505,
    jumpId: 20
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/kellyville.png",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 21
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622976,
    image: "images/map/baulkham_hills.png",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924,
    jumpId: 22
  },
  { name: "Strathfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8791358, lon: 151.0707858,
    image: "images/map/strathfield.jpg",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Strathfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/strathfield.json",
    relationId: 5683354,
    jumpId: 23
  },
  { name: "North Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.7930136, lon: 153.2734593,
    image: "images/map/north_lismore.jpg",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/City_of_Lismore"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/north_lismore.json",
    relationId: 6070055,
    jumpId: 24
  },
  { name: "Mackay",
    countryName: "Australia",
    countryCode: "AU",
    lat: -21.1426694, lon: 149.1721428,
    image: "images/map/mackay.png",
    length: 1,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mackay,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mackay.json",
    relationId: 11677563,
    jumpId: 25
  },
  { name: "Howard",
    countryName: "Australia",
    countryCode: "AU",
    lat: -25.314806, lon: 152.554609,
    image: "images/map/",
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Howard,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/howard.json",
    relationId: 11676280,
    jumpId: 26
  },
  { name: "Tenterfield",
    countryName: "Australia",
    countryCode: "AU",
    lat: -29.0928318, lon: 151.9516875,
    image: ["images/map/tenterfield.png", "images/map/tenterfield_2.png", "images/map/tenterfield_3.png"],
    length: "Chilled Out",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tenterfield,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tenterfield.json",
    relationId: 6163155,
    jumpId: 27
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7536974, lon: 150.9622976,
    image: "images/map/baulkham_hills.png",
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Baulkham_Hills"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/baulkham_hills.json",
    relationId: 2964924,
    jumpId: 28
  },
  { name: "Kariong",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.437541, lon: 151.283752,
    image: "images/map/",
    length: "Chilled Out",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kariong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kariong.json",
    relationId: 6039388,
    jumpId: 29
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 30
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169679,
    image: "images/map/",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505,
    jumpId: 31
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.81144, lon: 153.28709,
    image: ["images/map/lismore_1.png", "images/map/lismore_3.jpg"],
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lismore.json",
    relationId: 6069981,
    jumpId: 32
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.81144, lon: 153.28709,
    image: "images/map/lismore_2.png",
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lismore,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/lismore.json",
    relationId: 6069981,
    jumpId: 33
  },
  { name: "Tregeagle",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.8717478, lon: 153.3398079,
    image: ["images/map/tregeagle.png", "images/map/tregeagle_2.jpg"],
    length: "",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tregeagle,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tregeagle.json",
    relationId: 6070192,
    jumpId: 34
  },
  { name: "Fortitude Valley",
    countryName: "Australia",
    countryCode: "AU",
    lat: -27.4572725, lon: 153.0250183,
    image: "images/map/fortitude_valley.png",
    length: "Chilled Out",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fortitude_Valley,_Queensland"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/fortitude_valley.json",
    relationId: 11677748,
    jumpId: 35
  },
  { name: "Byron Bay",
    countryName: "Australia",
    countryCode: "AU",
    lat: -28.647997, lon: 153.611139,
    image: ["images/map/byron_bay.png", "images/map/byron_bay_1.png", "images/map/byron_bay_2.png"],
    length: "Buzzed Around",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Byron_Bay"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/byron_bay.json",
    relationId: 6069744,
    jumpId: 36
  },
  { name: "Castle Hill",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7301873, lon: 150.9770733,
    image: "images/map/",
    length: "Chilled Out",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Castle_Hill,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/castle_hill.json",
    relationId: 5504782,
    jumpId: 37
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169679,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505,
    jumpId: 38
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.346925, lon: 114.178845,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132,
    jumpId: 39
  },
  { name: "Manchester",
    suburbName: "Ashton-under-Lyne",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4986661, lon: -2.1086492,
    image: "images/map/manchester_1.png",
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 88084,
    jumpId: 40
  },
  { name: "London",
    suburbName: "Paddington",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 51.5165851, lon: 0.2165927,
    image: ["images/map/london.png", "images/map/london_2.png"],
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/London"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/london.json",
    relationId: 175342,
    jumpId: 41
  },
  { name: "Manchester",
    suburbName: "Ashton-under-Lyne",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4986661, lon: -2.1086492,
    image: "images/map/manchester_1.png",
    length: 1,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 88084,
    jumpId: 42
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.346925, lon: 114.178845,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132,
    jumpId: 43
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.715492, lon: 150.9169679,
    image: "images/map/",
    length: 203,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stanhope_Gardens,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/stanhope_gardens.json",
    relationId: 5501505,
    jumpId: 44
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",
    lat: 30.6587199, lon: 103.9107422,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/chengdu.json",
    relationId: 2110264,
    jumpId: 45
  },
  { name: "Beijing",
    suburbName: "Fengtai District",
    countryName: "China",
    countryCode: "CN",
    lat: 39.808528, lon: 116.145462,
    image: "images/map/beijing_2018-02-22-17-48-57.jpeg",
    length: 11,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beijing"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/beijing.json",
    relationId: 912940,
    jumpId: 46
  },
  { name: "Chengdu",
    suburbName: "Wuhou District",
    countryName: "China",
    countryCode: "CN",
    lat: 30.644191, lon: 104.042029,
    image: "images/map/",
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chengdu"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/chengdu.json",
    relationId: 2110264,
    jumpId: 47
  },
  { name: "Guiyang",
    suburbName: "Nanming District",
    countryName: "China",
    countryCode: "CN",
    lat: 26.569787, lon: 106.714222,
    image: "images/map/guiyang_2018-03-08.jpeg",
    length: 73,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/guiyang.json",
    relationId: 2782246,
    jumpId: 48
  },
  { name: "Fujian",
    suburbName: "Xiamen",
    countryName: "China",
    countryCode: "CN",
    lat: 24.4793315, lon: 118.0268073,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Xiamen"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/fujian.json",
    relationId: 553303,
    jumpId: 49
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.346925, lon: 114.178845,
    image: "images/map/",
    length: 1,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132,
    jumpId: 50
  },
  { name: "Fujian",
    suburbName: "Quanzhou",
    countryName: "China",
    countryCode: "CN",
    lat: 24.903868, lon: 118.5012794,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Quanzhou"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/fujian.json",
    relationId: 553303,
    jumpId: 51
  },
  { name: "Guiyang",
    suburbName: "Nanming District",
    countryName: "China",
    countryCode: "CN",
    lat: 26.569787, lon: 106.714222,
    image: "images/map/guiyang_2018-03-08.jpeg",
    length: 61,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guiyang"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/guiyang.json",
    relationId: 2782246,
    jumpId: 52
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",
    lat: 22.346925, lon: 114.178845,
    image: "images/map/hong_kong_airport_2018-07-17.jpeg",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hong_Kong"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/hong_kong.json",
    relationId: 20044132,
    jumpId: 53
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.135933, lon: 55.216492,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752,
    jumpId: 54
  },
  { name: "Manchester",
    suburbName: "Ashton-under-Lyne",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4986661, lon: -2.1086492,
    image: "images/map/manchester_1.png",
    length: 5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 88084,
    jumpId: 55
  },
  { name: "Mülheim an der Ruhr",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.417798, lon: 6.876769,
    image: "images/map/",
    length: 174,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/M%C3%BClheim"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mülheim.json",
    relationId: 62385,
    jumpId: 56
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.135933, lon: 55.216492,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752,
    jumpId: 57
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: 5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 58
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",
    lat: 25.135933, lon: 55.216492,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dubai"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dubai.json",
    relationId: 4479752,
    jumpId: 59
  },
  { name: "Mülheim an der Ruhr",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.417798, lon: 6.876769,
    image: "images/map/",
    length: 174,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/M%C3%BClheim"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mülheim.json",
    relationId: 62385,
    jumpId: 60
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.442759, lon: -3.663059,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/madrid.json",
    relationId: 5326784,
    jumpId: 61
  },
  { name: "Casablanca",
    suburbName: "Lissasfa",
    countryName: "Morocco",
    countryCode: "MA",
    lat: 33.5310563, lon: -7.6771152,
    image: "images/map/",
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Casablanca"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/casablanca.json",
    relationId: 4072985,
    jumpId: 62
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",
    lat: 40.442759, lon: -3.663059,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Madrid"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/madrid.json",
    relationId: 5326784,
    jumpId: 63
  },
  { name: "Mülheim an der Ruhr",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.417798, lon: 6.876769,
    image: "images/map/",
    length: 174,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/M%C3%BClheim"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mülheim.json",
    relationId: 62385,
    jumpId: 64
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578032, lon: 6.9261168,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cologne.json",
    relationId: 62578,
    jumpId: 65
  },
  { name: "Manchester",
    suburbName: "Northern Quarter",
    countryName: "United Kingdom",
    countryCode: "UK",
    lat: 53.4812463, lon: -2.2352939,
    image: "images/map/manchester_2.png",
    length: 3,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Manchester"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/manchester.json",
    relationId: 88084,
    jumpId: 66
  },
  { name: "Cologne",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.9578032, lon: 6.9261168,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cologne"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cologne.json",
    relationId: 62578,
    jumpId: 67
  },
  { name: "Mülheim an der Ruhr",
    countryName: "Germany",
    countryCode: "DE",
    lat: 51.417798, lon: 6.876769,
    image: "images/map/",
    length: 174,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/M%C3%BClheim"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mülheim.json",
    relationId: 62385,
    jumpId: 68
  },
  { name: "Frankfurt",
    countryName: "Germany",
    countryCode: "DE",
    lat: 50.115129, lon: 8.650295,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Frankfurt"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/frankfurt.json",
    relationId: 62400,
    jumpId: 69
  },
  { name: "São Paulo",
    suburbName: "Vila Buarque",
    countryName: "Brazil",
    countryCode: "BR",
    lat: -23.5420087, lon: -46.6527285,
    image: ["images/map/sao_paulo_vila_buarque.jpg", "images/map/sao_paulo_vila_buarque_2.jpg", "images/map/sao_paulo_vila_buarque_3_20210304_121238.jpg", "images/map/sao_paulo_vila_buarque_4_20210723_102330.jpg"],
    length: 176,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/são_paulo.json",
    relationId: 298285,
    jumpId: 70
  },
  { name: "São Paulo",
    suburbName: "Cambuci",
    countryName: "Brazil",
    countryCode: "BR",
    lat: -23.565629, lon: -46.6265554,
    image: ["images/map/sao_paulo_cambuci_3.png", "images/map/sao_paulo_cambuci_2.jpg", "images/map/sao_paulo_cambuci_4.png", "images/map/sao_paulo_cambuci_5.png"],
    length: 176,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/são_paulo.json",
    relationId: 298285,
    jumpId: 71
  },
  { name: "Bogotá",
    countryName: "Colombia",
    countryCode: "CO",
    lat: 4.659927, lon: -74.115706,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bogot%C3%A1"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/bogotá.json",
    relationId: 7426387,
    jumpId: 72
  },
  { name: "Mexico City",
    suburbName: "Portales Sur",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3618003, lon: -99.1542003,
    image: ["images/map/portales_sur_mexico_city.png", "images/map/portales_sur_mexico_city_3.jpg", "images/map/portales_sur_mexico_city_2.jpg"],
    length: 73,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mexico_city.json",
    relationId: 17483459,
    jumpId: 73
  },
  { name: "Cancún",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 21.1231854, lon: -86.9388039,
    image: "images/map/",
    length: 1,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Canc%C3%BAn"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/cancún.json",
    relationId: 17611454,
    jumpId: 74
  },
  { name: "Austin",
    suburbName: "Franklin Park",
    countryName: "America",
    countryCode: "US",
    lat: 30.1977124, lon: -97.7873933,
    image: "images/map/austin.png",
    length: 7,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Austin,_Texas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/austin.json",
    relationId: 113314,
    jumpId: 75
  },
  { name: "Arlington",
    suburbName: "Southeast Arlington",
    countryName: "America",
    countryCode: "US",
    lat: 32.739436, lon: -97.103847,
    image: ["images/map/arlington.png", "images/map/arlington_2.png"],
    length: 7,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Arlington,_Texas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/arlington.json",
    relationId: 115329,
    jumpId: 76
  },
  { name: "Dallas",
    countryName: "America",
    countryCode: "US",
    lat: 32.782039, lon: -96.7790207,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dallas"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/dallas.json",
    relationId: 6571629,
    jumpId: 77
  },
  { name: "Mexico City",
    suburbName: "Portales Norte",
    countryName: "Mexico",
    countryCode: "MX",
    lat: 19.3691224, lon: -99.1547999,
    image: ["images/map/mexico_city_portales_norte.png", "images/map/mexico_city_portales_norte_2.png"],
    length: 182,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico_City"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/mexico_city.json",
    relationId: 1376330,
    jumpId: 78
  },
  { name: "Tokyo",
    countryName: "Japan",
    countryCode: "JP",
    lat: 35.686258, lon: 139.747700,
    image: "images/map/",
    length: 0.5,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tokyo"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/tokyo.json",
    relationId: 1543125,
    jumpId: 79
  },
  { name: "Singapore",
    countryName: "Singapore",
    countryCode: "SG",
    lat: 1.3143379, lon: 103.6794449,
    image: "images/map/",
    length: 1,
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Singapore"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/singapore.json",
    relationId: 536780,
    jumpId: 80
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.7098369, lon: 150.936694,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kellyville,_New_South_Wales"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kellyville.json",
    relationId: 5501713,
    jumpId: 81
  },
  { name: "Kurraba Point",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8419788, lon: 151.2202513,
    image: "images/map/",
    length: "Long Stay",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kurraba_Point"},
        {text: "Site", url: ""}],
    polygon: "images/polygons/kurraba_point.json",
    relationId: 5650674,
    jumpId: 82
  },
];

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

fetchSpecificPolygon('Lismore');
*/

// Define custom trip connections here
// Each trip is an object with 'name', 'legs' array (each leg has 'from', 'to' using jumpId, and optional 'mode'), and 'color'
const trips = [
  {
    name: "Fleeing the Nest at 18",
    color: "#ff0000ff",
    legs: [
      { from: 8, to: 9, mode: "car" },
      { from: 9, to: 10, mode: "car" },
      { from: 10, to: 11, mode: "car" }
    ]
  },
  {
    name: "Fleeing #2",
    color: "#ff0000ff",
    legs: [
      { from: 11, to: 12, mode: "car" },
      { from: 12, to: 13, mode: "car" },
      { from: 13, to: 14, mode: "car" },
      { from: 14, to: 15, mode: "car" }
    ]
  },
  {
    name: "Fleeing #3",
    color: "#ff9100ff",
    legs: [
      { from: 15, to: 16, mode: "car" },
      { from: 16, to: 17, mode: "car" },
      { from: 17, to: 18, mode: "car" },
      { from: 18, to: 19, mode: "car" },
      { from: 19, to: 20, mode: "car" },
      { from: 20, to: 21, mode: "car" },
      { from: 21, to: 22, mode: "car" },
      { from: 22, to: 23, mode: "car" }
    ]
  },
  {
    name: "Lets live in a Van",
    color: "#ffd000ff",
    legs: [
      { from: 23, to: 24, mode: "car" },
      { from: 24, to: 25, mode: "plane" },
      { from: 25, to: 26, mode: "van" },
      { from: 26, to: 27, mode: "van" },
      { from: 27, to: 28, mode: "van" },
      { from: 28, to: 29, mode: "car" },
      { from: 29, to: 30, mode: "car" }
    ]
  },
  {
    name: "To Uni",
    color: "#ffd000ff",
    legs: [
      { from: 30, to: 31, mode: "car" },
      { from: 31, to: 32, mode: "plane" },
      { from: 32, to: 33, mode: "car" },
      { from: 33, to: 34, mode: "car" },
      { from: 34, to: 35, mode: "car" },
      { from: 35, to: 36, mode: "car" },
      { from: 36, to: 37, mode: "plane" },
      { from: 37, to: 38, mode: "car" }
    ]
  },
  {
    name: "To Preachcon #1",
    color: "#91ff00ff",
    legs: [
      { from: 38, to: 39, mode: "plane" },
      { from: 39, to: 40, mode: "plane" },
      { from: 40, to: 41, mode: "train" },
      { from: 41, to: 42, mode: "train" },
      { from: 42, to: 43, mode: "plane" },
      { from: 43, to: 44, mode: "plane" }
    ]
  },
  {
    name: "China Home",
    color: "#00ff73ff",
    legs: [
      { from: 44, to: 45, mode: "plane" },
      { from: 45, to: 46, mode: "plane" },
      { from: 46, to: 47, mode: "plane" },
      { from: 47, to: 48, mode: "plane" }
    ]
  },
  {
    name: "Resetting Visa",
    color: "#00ffddff",
    legs: [
      { from: 48, to: 49, mode: "plane" },
      { from: 49, to: 50, mode: "plane" },
      { from: 50, to: 51, mode: "plane" },
      { from: 51, to: 52, mode: "plane" }
    ]
  },
  {
    name: "To Preachcon #2",
    color: "#00d9ffff",
    legs: [
      { from: 52, to: 53, mode: "plane" },
      { from: 53, to: 54, mode: "plane" },
      { from: 54, to: 55, mode: "plane" },
      { from: 55, to: 56, mode: "plane" }
    ]
  },
  {
    name: "Aus for Xmas",
    color: "#0066ffff",
    legs: [
      { from: 56, to: 57, mode: "plane" },
      { from: 57, to: 58, mode: "plane" },
      { from: 58, to: 59, mode: "plane" },
      { from: 59, to: 60, mode: "plane" }
    ]
  },
  {
    name: 'To "Africa"',
    color: "#1100ffff",
    legs: [
      { from: 60, to: 61, mode: "plane" },
      { from: 61, to: 62, mode: "plane" },
      { from: 62, to: 63, mode: "plane" },
      { from: 63, to: 64, mode: "plane" }
    ]
  },
  {
    name: "To Mensa",
    color: "#7700ffff",
    legs: [
      { from: 64, to: 65, mode: "train" },
      { from: 65, to: 66, mode: "plane" },
      { from: 66, to: 67, mode: "plane" },
      { from: 67, to: 68, mode: "train" }
    ]
  },
  {
    name: "Brazil Home",
    color: "#ff00d4ff",
    legs: [
      { from: 68, to: 69, mode: "train" },
      { from: 69, to: 70, mode: "plane" },
      { from: 70, to: 71, mode: "plane" }
    ]
  },
  {
    name: "Mexico Home",
    color: "#ff0077ff",
    legs: [
      { from: 71, to: 72, mode: "plane" },
      { from: 72, to: 73, mode: "plane" }
    ]
  },
  {
    name: "To USA and Back",
    color: "#ff0037ff",
    legs: [
      { from: 73, to: 74, mode: "plane" },
      { from: 74, to: 75, mode: "plane" },
      { from: 75, to: 76, mode: "train" },
      { from: 76, to: 77, mode: "car" },
      { from: 77, to: 78, mode: "plane" }
    ]
  },
  {
    name: "Back to Oz",
    color: "#3F7500",
    legs: [
      { from: 78, to: 79, mode: "plane" },
      { from: 79, to: 80, mode: "plane" },
      { from: 80, to: 81, mode: "plane" }
    ]
  },
  {
    name: "Oz Home",
    color: "#ff0000ff",
    legs: [{ from: 81, to: 82, mode: "car" }]
  }
];

function getCategoryAndIcon(length) {
  let category;
  let days = 0;

  if (typeof length === 'number') {
    days = length;
  } else if (typeof length === 'string') {
    const parsed = parseFloat(length);
    if (!isNaN(parsed)) {
      days = parsed;
    } else {
      category = length.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
      const validCategories = ['Layover', 'Popped In', 'Chilled Out', 'Buzzed Around', 'Medium Stay', 'Long Stay'];
      if (!validCategories.includes(category)) {
        category = 'Long Stay';
      }
      const categoryDays = {
        'Layover': 0.25,
        'Popped In': 2,
        'Chilled Out': 15,
        'Buzzed Around': 60,
        'Medium Stay': 150,
        'Long Stay': 300
      };
      days = categoryDays[category] || 300;
    }
  }

  if (!category) {
    if (days <= 0.5) category = 'layover';
    else if (days <= 3) category = 'popped in';
    else if (days <= 30) category = 'chilled out';
    else if (days <= 120) category = 'buzzed around';
    else if (days <= 210) category = 'medium stay';
    else category = 'long stay';

    category = category.replace(/\b\w/g, l => l.toUpperCase());
  }

  const iconMap = {
    'layover': 'images/icons/layover_icon.png',
    'popped in': 'images/icons/popped_in_icon.png',
    'chilled out': 'images/icons/chilled_out_icon.png',
    'buzzed around': 'images/icons/buzzed_around_icon.png',
    'medium stay': 'images/icons/medium_stay_icon.png',
    'long stay': 'images/icons/long_stay_icon.png'
  };

  const iconUrl = iconMap[category.toLowerCase()] || 'images/location_icon.png';
  const icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [55, 55],
    iconAnchor: [27, 55],
    popupAnchor: [0, -55]
  });

  return { category, days, icon };
}

// Initialize the map
const map = L.map('map', { worldCopyJump: true }).setView([0, 0], 3);

// Create panes for overlay order control
map.createPane('labelsPane').style.zIndex = 500;
map.createPane('tripPane').style.zIndex = 350;
map.createPane('tripShadowPane').style.zIndex = 340;
map.createPane('railwayPane').style.zIndex = 400;
map.createPane('waterPane').style.zIndex = 450;

const esriImagery = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
  }
).addTo(map);

const railwayOverlay = L.tileLayer('https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openrailwaymap.org/">OpenRailwayMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
  opacity: 0.7
});

const osmLabelsOverlay = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
  opacity: 0.7
});

const waterOverlay = L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> &copy; <a href="https://www.openseamap.org/">OpenSeaMap</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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

// Create per-journey layer groups (each becomes its own checkbox)
const journeyLayersByName = {};
trips.forEach(t => {
  if (!t.name) return;
  journeyLayersByName[t.name] = L.layerGroup();
});

// Create a layer group for polygons (areas)
const polygonLayerGroup = L.layerGroup();

// Add overlays with icons for marker layers
const overlays = {
  "Labels": osmLabelsOverlay,
  "Railways": railwayOverlay,
  "Waterways": waterOverlay,
  "Areas": polygonLayerGroup,
  "<img src='images/icons/layover_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Layover - 0-0.5 days":
    markerLayers["Layover - 0-0.5 days"],
  "<img src='images/icons/popped_in_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Popped In - 1-3 days":
    markerLayers["Popped In - 1-3 days"],
  "<img src='images/icons/chilled_out_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Chilled Out - 3-30 days":
    markerLayers["Chilled Out - 3-30 days"],
  "<img src='images/icons/buzzed_around_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Buzzed Around - 1-4 months":
    markerLayers["Buzzed Around - 1-4 months"],
  "<img src='images/icons/medium_stay_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Medium Stay - 4-7 months":
    markerLayers["Medium Stay - 4-7 months"],
  "<img src='images/icons/long_stay_icon.png' style='width:20px; height:20px; margin-right:5px; vertical-align:middle;'>Long Stay - 7+ months":
    markerLayers["Long Stay - 7+ months"]
};

Object.entries(journeyLayersByName).forEach(([name, layer]) => {
  overlays[name] = layer;
});

L.control.layers(null, overlays).addTo(map);

// ------------------------------
// Auto-toggle Areas on zoom
// ------------------------------
const AREAS_AUTO_ZOOM = 6;

function syncAreasAuto() {
  const z = map.getZoom();
  if (z >= AREAS_AUTO_ZOOM) {
    if (!map.hasLayer(polygonLayerGroup)) polygonLayerGroup.addTo(map);
  } else {
    if (map.hasLayer(polygonLayerGroup)) map.removeLayer(polygonLayerGroup);
  }
}

syncAreasAuto();
map.on('zoomend', syncAreasAuto);

// ------------------------------
// Layer-control attention hint (pulse only)
// ------------------------------
const LAYER_HINT_MS = 5000;
let layerHintTimer = null;

function injectLayerHintCSS() {
  if (document.getElementById('layer-hint-css')) return;

  const css = document.createElement('style');
  css.id = 'layer-hint-css';
  css.textContent = `
    .layer-hint-pulse {
      position: absolute;
      z-index: 99998;
      pointer-events: none;
      border-radius: 10px;
      animation: layerHintPulse 1.2s ease-out infinite;
    }
    @keyframes layerHintPulse {
      0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.85); }
      100% { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
    }
  `;
  document.head.appendChild(css);
}

function removeLayerHint() {
  document.querySelectorAll('.layer-hint-pulse').forEach(n => n.remove());
  if (layerHintTimer) clearTimeout(layerHintTimer);
  layerHintTimer = null;
}

function showLayerHint() {
  injectLayerHintCSS();
  removeLayerHint();

  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const pos = getComputedStyle(mapEl).position;
  if (pos === 'static') mapEl.style.position = 'relative';

  const controlEl = document.querySelector('.leaflet-control-layers');
  if (!controlEl) return;

  const mapRect = mapEl.getBoundingClientRect();
  const cRect = controlEl.getBoundingClientRect();

  const pulse = document.createElement('div');
  pulse.className = 'layer-hint-pulse';
  pulse.style.left = `${cRect.left - mapRect.left - 6}px`;
  pulse.style.top  = `${cRect.top  - mapRect.top  - 6}px`;
  pulse.style.width  = `${cRect.width + 12}px`;
  pulse.style.height = `${cRect.height + 12}px`;

  mapEl.appendChild(pulse);
  layerHintTimer = setTimeout(removeLayerHint, LAYER_HINT_MS);
}

// Show AFTER zoom finishes, only when zooming in past a threshold (once)
const HINT_ZOOM = 6;
let prevZoom = map.getZoom();
let hintShownOnce = false;

map.on('zoomend', () => {
  const z = map.getZoom();
  const crossed = prevZoom < HINT_ZOOM && z >= HINT_ZOOM;

  if (!hintShownOnce && crossed) {
    setTimeout(showLayerHint, 250);
    hintShownOnce = true;
  }

  prevZoom = z;
});

// ------------------------------
// Bearings / path sampling helpers
// ------------------------------

function calculateBearing(start, end) {
  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const lat1 = start.lat * toRad;
  const lat2 = end.lat * toRad;
  const dLon = (end.lng - start.lng) * toRad;

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

  const brng = Math.atan2(y, x) * toDeg;
  return (brng + 360) % 360;
}

// unwrap longitudes so line + arrows stay on the same world copy
function unwrapLngs(startLL, endLL) {
  let sLng = startLL.lng;
  let eLng = endLL.lng;

  const d = eLng - sLng;
  if (d > 180) eLng -= 360;
  if (d < -180) eLng += 360;

  return {
    start: L.latLng(startLL.lat, sLng),
    end: L.latLng(endLL.lat, eLng)
  };
}

function sampleQuadraticBezierProjected(map, startLL, controlLL, endLL, steps = 240) {
  const z = 0;

  const s = map.project(startLL, z);
  const c = map.project(controlLL, z);
  const e = map.project(endLL, z);

  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const oneMinusT = 1 - t;

    const x =
      oneMinusT * oneMinusT * s.x +
      2 * oneMinusT * t * c.x +
      t * t * e.x;

    const y =
      oneMinusT * oneMinusT * s.y +
      2 * oneMinusT * t * c.y +
      t * t * e.y;

    pts.push(map.unproject(L.point(x, y), z));
  }
  return pts;
}

function cumulativeDistances(map, pts) {
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    cum[i] = cum[i - 1] + map.distance(pts[i - 1], pts[i]);
  }
  return cum;
}

function pointAtDistanceAlong(pts, cum, distMeters) {
  const total = cum[cum.length - 1];
  if (total <= 0) return { latLng: pts[0], idx: 0 };

  const d = Math.max(0, Math.min(distMeters, total));

  let i = 1;
  while (i < cum.length && cum[i] < d) i++;

  if (i >= cum.length) return { latLng: pts[pts.length - 1], idx: pts.length - 2 };

  const prevD = cum[i - 1];
  const segD = cum[i] - prevD;
  const t = segD === 0 ? 0 : (d - prevD) / segD;

  const a = pts[i - 1];
  const b = pts[i];

  const lat = a.lat + (b.lat - a.lat) * t;
  const lng = a.lng + (b.lng - a.lng) * t;

  return { latLng: L.latLng(lat, lng), idx: i - 1 };
}

function localBearingFromSample(pts, idx) {
  const i = Math.max(0, Math.min(idx, pts.length - 2));
  return calculateBearing(pts[i], pts[i + 1]);
}

function screenAngleAtSample(map, pts, idx) {
  const z = map.getZoom();
  const i = Math.max(0, Math.min(idx, pts.length - 2));
  const p1 = map.project(pts[i], z);
  const p2 = map.project(pts[i + 1], z);
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function offsetLatLngPerpendicularPx(map, latLng, screenAngleRad, offsetPx) {
  const z = map.getZoom();
  const p = map.project(latLng, z);

  const nx = -Math.sin(screenAngleRad);
  const ny =  Math.cos(screenAngleRad);

  const pOff = L.point(p.x + nx * offsetPx, p.y + ny * offsetPx);
  return map.unproject(pOff, z);
}

function bearingToCssRotationDeg(bearingDeg) {
  return bearingDeg - 90;
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 2);
}

// ------------------------------
// Color helpers (gradient stroke)
// ------------------------------

function hexToRgb(hex) {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? h.split('').map(ch => ch + ch).join('') : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex({ r, g, b }) {
  const toHex = (v) => v.toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpColorHex(fromHex, toHex, t) {
  const a = hexToRgb(fromHex);
  const b = hexToRgb(toHex);
  return rgbToHex({
    r: Math.round(lerp(a.r, b.r, t)),
    g: Math.round(lerp(a.g, b.g, t)),
    b: Math.round(lerp(a.b, b.b, t))
  });
}

function lightenHex(hex, amount = 0.80) {
  return lerpColorHex(hex, '#FFFFFF', amount);
}

// ------------------------------
// Trip line creation (curve + arrows + emoji + GRADIENT LINE + hover jump labels)
// ------------------------------

function arrowSpacingForZoom(z) {
  if (z <= 3) return 1200000;
  if (z === 4) return 800000;
  if (z === 5) return 450000;
  if (z === 6) return 250000;
  return 150000;
}

function createTripLine(
  startLatLng,
  endLatLng,
  startName,
  endName,
  mode = 'plane',
  startColor = 'red',
  endColor = null,
  jumpNumber = 1
) {
  const { start: sLL, end: eLL } = unwrapLngs(startLatLng, endLatLng);

  const midLat = (sLL.lat + eLL.lat) / 2;
  const midLng = (sLL.lng + eLL.lng) / 2;

  const controlPoint = L.latLng(midLat + 2, midLng);

  const useCurve = (typeof L.curve === 'function');
  const samplePts = useCurve
    ? sampleQuadraticBezierProjected(map, sLL, controlPoint, eLL, 240)
    : [sLL, eLL];

  const cum = cumulativeDistances(map, samplePts);
  const totalLength = cum[cum.length - 1];

  const _startColor = startColor;
  const _endColor = endColor ?? lightenHex(startColor, 0.80);

  const label = `Jump ${jumpNumber}: ${startName} → ${endName} (${mode})`;

  // Prepare emoji marker (created later, but referenced by hover handlers)
  let transportMarker = null;

  const lineLayers = [];
  const segCount = Math.max(1, samplePts.length - 1);

  for (let i = 0; i < segCount; i++) {
    const t = segCount === 1 ? 0 : i / (segCount - 1);
    const tt = easeOut(t);
    const segColor = lerpColorHex(_startColor, _endColor, tt);

    // white shadow underlay
    const shadow = L.polyline([samplePts[i], samplePts[i + 1]], {
      color: '#ffffff',
      weight: 7,
      opacity: 0.55,
      lineCap: 'round',
      lineJoin: 'round',
      pane: 'tripShadowPane'
    });
    shadow.bindTooltip(label, { sticky: true, direction: 'top', opacity: 0.95 });

    shadow.on('mouseover', () => {
      if (transportMarker) transportMarker.setOpacity(1);
    });
    shadow.on('mouseout', () => {
      if (transportMarker) {
        transportMarker.setOpacity(0);
        transportMarker.closeTooltip();
      }
    });

    lineLayers.push(shadow);

    // main colored segment
    const seg = L.polyline([samplePts[i], samplePts[i + 1]], {
      color: segColor,
      weight: 3,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round',
      pane: 'tripPane'
    });
    seg.bindTooltip(label, { sticky: true, direction: 'top', opacity: 0.95 });

    seg.on('mouseover', () => {
      if (transportMarker) transportMarker.setOpacity(1);
    });
    seg.on('mouseout', () => {
      if (transportMarker) {
        transportMarker.setOpacity(0);
        transportMarker.closeTooltip();
      }
    });

    lineLayers.push(seg);
  }

  // Hide BOTH arrows + emoji when zoomed out
  const z = map.getZoom();
  if (z <= 3) {
    return { lineLayers, arrowMarkers: [], transportMarker: null };
  }

  // Arrows
  const spacingMeters = arrowSpacingForZoom(z);
  const arrowCount = Math.max(1, Math.floor(totalLength / spacingMeters));
  const arrowMarkers = [];

  for (let i = 0; i < arrowCount; i++) {
    const dist = spacingMeters * (i + 0.5);
    if (dist >= totalLength) break;

    const { latLng, idx } = pointAtDistanceAlong(samplePts, cum, dist);
    const brng = localBearingFromSample(samplePts, idx);
    const cssDeg = bearingToCssRotationDeg(brng);

    const arrowIcon = L.divIcon({
      html: `<div style="
        font-size: 30px;
        text-align: center;
        transform: rotate(${cssDeg}deg);
        transform-origin: center;
        color: ${_startColor};
        text-shadow:
          -1px -1px 0 #fff,
           1px -1px 0 #fff,
          -1px  1px 0 #fff,
           1px  1px 0 #fff;
      ">➢</div>`,
      className: 'arrow-icon',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const m = L.marker(latLng, { icon: arrowIcon, pane: 'tripPane' });
    m.bindTooltip(label, { sticky: true, direction: 'top', opacity: 0.95 });

    // (optional) hovering arrows also reveals emoji
    m.on('mouseover', () => {
      if (transportMarker) transportMarker.setOpacity(1);
    });
    m.on('mouseout', () => {
      if (transportMarker) {
        transportMarker.setOpacity(0);
        transportMarker.closeTooltip();
      }
    });

    arrowMarkers.push(m);
  }

  // Transport emoji
  const transportEmojis = {
    plane: '✈️',
    train: '🚂',
    car: '🚗',
    boat: '🛥️',
    van: '🚐',
  };
  const emoji = transportEmojis[mode] || '✈️';

  const midByDistance = totalLength * 0.5;
  const midPos = pointAtDistanceAlong(samplePts, cum, midByDistance);

  const midBearing = localBearingFromSample(samplePts, midPos.idx);
  const transportCssDeg = bearingToCssRotationDeg(midBearing + 180);

  // Offset emoji "next to" the line
  const zNow = map.getZoom();
  const px = (zNow >= 10) ? 20 : (zNow >= 7 ? 16 : 12);
  const ang = screenAngleAtSample(map, samplePts, midPos.idx);
  const emojiLatLng = offsetLatLngPerpendicularPx(map, midPos.latLng, ang, px);

  const transportIcon = L.divIcon({
    html: `<div style="
      font-size: 30px;
      text-align: center;
      transform: rotate(${transportCssDeg}deg);
      transform-origin: center;
      text-shadow:
        -2px -2px 2px #fff,
        2px -2px 2px #fff,
        -2px  2px 2px #fff,
        2px  2px 2px #fff;
    ">${emoji}</div>`,
    className: 'transport-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  transportMarker = L.marker(emojiLatLng, { icon: transportIcon, pane: 'tripPane' });

  // Hidden until hover
  transportMarker.setOpacity(0);

  // Emoji tooltip uses same label
  transportMarker.bindTooltip(label, { sticky: true, direction: 'top', opacity: 0.95 });

  // Hovering emoji shows itself + tooltip
  transportMarker.on('mouseover', () => {
    transportMarker.setOpacity(1);
    transportMarker.openTooltip();
  });
  transportMarker.on('mouseout', () => {
    transportMarker.setOpacity(0);
    transportMarker.closeTooltip();
  });

  return { lineLayers, arrowMarkers, transportMarker };
}

// ------------------------------
// Location map (jumpId -> latLng + name)
// ------------------------------
const locationMap = {};
locations.forEach(location => {
  if (location.lat && location.lon && location.jumpId) {
    locationMap[location.jumpId] = {
      latLng: L.latLng(location.lat, location.lon),
      name: location.name
    };
  }
});

// Clear previous layers before adding new ones to avoid duplication
Object.values(markerLayers).forEach(layerGroup => layerGroup.clearLayers());

// Add markers to their layer groups
locations.forEach(location => {
  if (location.lat && location.lon) {
    const { category, days, icon } = getCategoryAndIcon(location.length);
    const marker = L.marker([location.lat, location.lon], { icon });
    console.log(`Marker added for ${location.name} (${category})`);

    marker.bindPopup(`
      <b>${location.name}</b><br>
      ${location.suburbName ? `${location.suburbName}<br>` : ''}
      ${location.countryName} (${location.countryCode})<br>
      <span title="Exact length: ${days} days">Category: ${category}</span><br>
      Lat: ${location.lat}, Lon: ${location.lon}<br>
      <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
      <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
    `);

    marker.on('dblclick', () => map.flyTo([location.lat, location.lon], 10));

    marker.on('popupopen', function () {
      const currentZoom = map.getZoom();
      const showDetails = currentZoom >= 8;
      let imageHtml = '';

      if (showDetails && Array.isArray(location.image) && location.image.length > 0) {
        imageHtml = location.image
          .map(img => `<img src="${img}" width="100" style="margin: 5px 0;"><br>`)
          .join('');
      }

      const popupContent = `
        <b>${location.name}</b><br>
        ${location.suburbName ? `${location.suburbName}<br>` : ''}
        ${location.countryName} (${location.countryCode})<br>
        <span title="Exact length: ${days} days">Category: ${category}</span><br>
        Lat: ${location.lat}, Lon: ${location.lon}<br>
        ${imageHtml}
        ${showDetails && location.text ? `${location.text}<br>` : ''}
        ${showDetails && location.urls
          ? location.urls.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(' | ') + '<br>'
          : ''}
        <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
        <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
      `;
      marker.setPopupContent(popupContent);

      const zoomBtn = document.getElementById(`zoom-btn-${location.name.replace(/\s+/g, '-')}`);
      const zoomOutBtn = document.getElementById(`zoom-out-btn-${location.name.replace(/\s+/g, '-')}`);

      if (zoomBtn) {
        zoomBtn.onclick = () => {
          map.flyTo([location.lat, location.lon], 10);
          map.once('moveend', updatePolygons);
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

    const layerKey = Object.keys(markerLayers).find(key => key.startsWith(category));
    if (layerKey) {
      markerLayers[layerKey].addLayer(marker);
    }
  }
});

// ------------------------------
// Create trip lines based on the trips array
// ------------------------------
function renderTrips() {
  // clear every journey layer
  Object.values(journeyLayersByName).forEach(layer => layer.clearLayers());

  trips.forEach(trip => {
    const group = journeyLayersByName[trip.name];
    if (!group) return;
    if (!Array.isArray(trip.legs) || trip.legs.length === 0) return;

    const n = trip.legs.length;
    const tripEndColor = lightenHex(trip.color, 0.80);

    trip.legs.forEach((leg, legIndex) => {
      const startData = locationMap[leg.from];
      const endData = locationMap[leg.to];
      if (!startData || !endData) return;

      const denom = Math.max(1, n);
      const t0 = legIndex / denom;
      const t1 = (legIndex + 1) / denom;

      const legStartColor = lerpColorHex(trip.color, tripEndColor, t0);
      const legEndColor = lerpColorHex(trip.color, tripEndColor, t1);

      const { lineLayers, arrowMarkers, transportMarker } = createTripLine(
        startData.latLng,
        endData.latLng,
        startData.name,
        endData.name,
        leg.mode,
        legStartColor,
        legEndColor,
        legIndex + 1 // jump number
      );

      if (Array.isArray(lineLayers)) lineLayers.forEach(seg => group.addLayer(seg));
      if (Array.isArray(arrowMarkers)) arrowMarkers.forEach(m => group.addLayer(m));
      if (transportMarker) group.addLayer(transportMarker);
    });
  });
}

// initial
renderTrips();

// redraw on zoom (debounced)
let tripRenderTimer = null;
map.on('zoomend', () => {
  clearTimeout(tripRenderTimer);
  tripRenderTimer = setTimeout(renderTrips, 80);
});

// Add all marker layer groups to the map by default
Object.values(markerLayers).forEach(layerGroup => layerGroup.addTo(map));

// ------------------------------
// --- POLYGON LOGIC ---
// ------------------------------
const polygonLayers = new Map();

async function loadAllPolygons(locations) {
  for (const location of locations) {
    if (!location.polygon) continue;
    try {
      const response = await fetch(location.polygon);
      if (!response.ok) {
        console.warn(`Polygon not found for ${location.name}`);
        continue;
      }
      const geoJson = await response.json();
      geoJson.properties ??= {};
      const layer = L.geoJSON(geoJson, {
        style: { color: 'red', fillColor: 'red', fillOpacity: 0.1, weight: 2 }
      });
      polygonLayers.set(location.name, layer);
      polygonLayerGroup.addLayer(layer);
      console.log(`Polygon loaded for ${location.name}`);
    } catch (err) {
      console.error(`Error loading polygon for ${location.name}:`, err);
    }
  }

  updatePolygons();
}

function updatePolygons() {
  const zoom = map.getZoom();
  locations.forEach(location => {
    const layer = polygonLayers.get(location.name);
    if (!layer) return;
    if (zoom >= 6) {
      if (!polygonLayerGroup.hasLayer(layer)) {
        polygonLayerGroup.addLayer(layer);
        console.log(`Polygon shown: ${location.name}`);
      }
    } else {
      if (polygonLayerGroup.hasLayer(layer)) {
        polygonLayerGroup.removeLayer(layer);
        console.log(`Polygon hidden: ${location.name}`);
      }
    }
  });
}

map.on('zoomend', updatePolygons);

// Load all polygons immediately
loadAllPolygons(locations);

console.log('Map loaded with categorized markers, toggle control, hover jump tooltips (lines/arrows/emoji), per-journey checkboxes, gradient journeys + shadows, and local .json polygons!');
