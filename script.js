const locations = [
  { name: "Paddington",
    countryName: "Australia",
    countryCode: "AU",
    lat: -33.8833, lon: 151.2227,
    image: "images/map/paddington.png",
    text: "Historic suburb.",
    urls: [{text: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lyon"},
        {text: "Official Site", url: "https://www.lyon-france.com"}],
    relationId: 2943469
  },
  { name: "Lilyfield",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5680773
  },
  { name: "Kings Park",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501387
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Glenwood",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 3003355
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Richmond",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5498187
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5640228
  },
  { name: "Epping",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5640228
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Greystanes",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 3182521
  },
  { name: "North St Marys",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5472801
  },
  { name: "Leura",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5496188
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Strathfield",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5683354
  },
  { name: "North Lismore",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6070055
  },
  { name: "Mackay",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 11677563
  },
  { name: "Howard",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 11676280
  },
  { name: "Tenterfield",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6163155
  },
  { name: "Baulkham Hills",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2964924
  },
  { name: "Kariong",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6039388
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6069981
  },
  { name: "Lismore",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6069981
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Castle Hill",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5504782
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "London",
    countryName: "United Kingdom",
    countryCode: "UK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 175342
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Stanhope Gardens",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501505
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2110264
  },
  { name: "Beijing",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 912940
  },
  { name: "Chengdu",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2110264
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2782246
  },
  { name: "Xiamen",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 3242930
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Quanzhou",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2666969
  },
  { name: "Guiyang",
    countryName: "China",
    countryCode: "CN",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 2782246
  },
  { name: "Hong Kong",
    countryName: "Hong Kong",
    countryCode: "HK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 20044132
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Dubai",
    countryName: "United Arab Emirates",
    countryCode: "AE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 4479752
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5326784
  },
  { name: "Casablanca",
    countryName: "Morocco",
    countryCode: "MA",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 4072985
  },
  { name: "Madrid",
    countryName: "Spain",
    countryCode: "ES",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5326784
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Köln",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62578
  },
  { name: "Manchester",
    countryName: "United Kingdom",
    countryCode: "UK",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 146656
  },
  { name: "Köln",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62578
  },
  { name: "Düsseldorf",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62539
  },
  { name: "Frankfurt",
    countryName: "Germany",
    countryCode: "DE",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 62400
  },
  { name: "São Paulo",
    countryName: "Brazil",
    countryCode: "BR",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 298285
  },
  { name: "Bogotá",
    countryName: "Colombia",
    countryCode: "CO",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 7426387
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 17483459
  },
  { name: "Cancún",
    countryName: "Mexico",
    countryCode: "MX",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 17611454
  },
  { name: "Austin",
    countryName: "America",
    countryCode: "US",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 113314
  },
  { name: "Arlington",
    countryName: "America",
    countryCode: "US",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 115329
  },
  { name: "Dallas",
    countryName: "America",
    countryCode: "US",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 6571629
  },
  { name: "Mexico City",
    countryName: "Mexico",
    countryCode: "MX",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 1376330
  },
  { name: "Tokyo",
    countryName: "Japan",
    countryCode: "JP",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 1543125
  },
  { name: "Singapore",
    countryName: "Singapore",
    countryCode: "SG",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 536780
  },
  { name: "Kellyville",
    countryName: "Australia",
    countryCode: "AU",

    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
        {text: "Site", url: ""}],
    relationId: 5501713
  },
  { name: "Kurraba Point",
    countryName: "Australia",
    countryCode: "AU",
    image: "images/map/",
    text: ".",
    urls: [{text: "Wikipedia", url: ""},
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

// Automatically add area highlights (polygons) and markers for each location
locations.forEach(location => {
    if (location.relationId) {
        const osmUrl = `https://api.openstreetmap.org/api/0.6/relation/${location.relationId}/full`;

        fetch(osmUrl)
            .then(response => response.text())
            .then(xml => {
                const osmData = new DOMParser().parseFromString(xml, 'text/xml');
                const geoJson = osmtogeojson(osmData);  // Convert OSM XML to GeoJSON

                // Add the polygon to the map
                const polygon = L.geoJSON(geoJson, {
                    style: {
                        color: 'red',
                        fillColor: 'red',
                        fillOpacity: 0.1,
                        weight: 2
                    }
                });

                // Compute the centroid (center) of the polygon for the marker
                const bounds = polygon.getBounds();
                const center = bounds.getCenter();  // Lat/lon of the center
                location.lat = center.lat;
                location.lon = center.lng;

                // Add marker at the centroid
                const marker = L.marker([location.lat, location.lon], { icon: smallIcon })
                    .addTo(map);

                // Initial popup with basic info
                marker.bindPopup(`
                    <b>${location.name}</b><br>
                    ${location.countryName} (${location.countryCode})<br>
                    Lat: ${location.lat}, Lon: ${location.lon}<br>
                    <button id="zoom-btn-${location.name.replace(/\s+/g, '-')}">Zoom Here</button> 
                    <button id="zoom-out-btn-${location.name.replace(/\s+/g, '-')}">Zoom Out</button>
                `);

                // Double-click to zoom in
                marker.on('dblclick', function() {
                    map.flyTo([location.lat, location.lon], 10);
                });

                // Update popup content based on zoom level
                marker.on('popupopen', function() {
                    const currentZoom = map.getZoom();
                    const showDetails = currentZoom >= 8;  // Show images/URLs only at zoom 8+
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
                    marker.setPopupContent(popupContent);  // Update the popup

                    // Re-attach button handlers after content update
                    const zoomBtn = document.getElementById(`zoom-btn-${location.name.replace(/\s+/g, '-')}`);
                    const zoomOutBtn = document.getElementById(`zoom-out-btn-${location.name.replace(/\s+/g, '-')}`);
                    if (zoomBtn) {
                        zoomBtn.onclick = function() {
                            map.flyTo([location.lat, location.lon], 10);
                            map.closePopup();
                        };
                    }
                    if (zoomOutBtn) {
                        zoomOutBtn.onclick = function() {
                            map.flyTo([0, 0], 3);
                            map.closePopup();
                        };
                    }
                });

                // Control polygon visibility based on zoom
                const updatePolygonVisibility = () => {
                    const currentZoom = map.getZoom();
                    if (currentZoom >= 8) {
                        if (!map.hasLayer(polygon)) polygon.addTo(map);
                    } else {
                        if (map.hasLayer(polygon)) map.removeLayer(polygon);
                    }
                };

                map.on('zoomend', updatePolygonVisibility);
                updatePolygonVisibility();
            })
            .catch(error => console.log(`Error loading boundary for ${location.name}: ${error}`));
    }
});

console.log('Map loaded with Esri base, ordered overlays, markers, and area highlights!');