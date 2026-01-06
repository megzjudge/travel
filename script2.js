// script.js
// MapLibre GL JS + style switching (Liberty <-> Liberty Topo) based on zoom.
//
// Assumptions for your local files:
// - styles/osm-liberty.json
// - styles/osm-liberty-topo.json
//
// Flip logic:
// - Switch to TOPO at zoom >= 7
// - Switch back to LIBERTY at zoom <= 6 (hysteresis)
//
// Sources:
// https://github.com/maputnik/osm-liberty/blob/gh-pages/style.json
// https://github.com/nst-guide/osm-liberty-topo/blob/gh-pages/style.json

const LIBERTY_STYLE_URL = "./styles/osm-liberty.json";
const TOPO_STYLE_URL = "./styles/osm-liberty-topo.json";

const TOPO_ON_ZOOM = 7;
const TOPO_OFF_ZOOM = 6;

function isMobileView() {
  return window.matchMedia("(max-width: 900px)").matches;
}

function getDefaultView() {
  // MapLibre uses [lng, lat]
  if (isMobileView()) return { center: [20, 0], zoom: 1 }; // mobile
  return { center: [15, 25], zoom: 3 };                    // desktop
}

let DEFAULT_VIEW = getDefaultView();

// Pins (MapLibre expects [lng, lat])
const locations = [
  { name: "Sydney", countryName: "Australia", countryCode: "AU", lat: -33.8688, lon: 151.2093 },
  { name: "Melbourne", countryName: "Australia", countryCode: "AU", lat: -37.8136, lon: 144.9631 },

  { name: "Tokyo", countryName: "Japan", countryCode: "JP", lat: 35.6762, lon: 139.6503 },
  { name: "Osaka", countryName: "Japan", countryCode: "JP", lat: 34.6937, lon: 135.5023 },

  { name: "Paris", countryName: "France", countryCode: "FR", lat: 48.8566, lon: 2.3522 },
  { name: "Lyon", countryName: "France", countryCode: "FR", lat: 45.7640, lon: 4.8357 }
];

// Map view levels for dropdown (MapLibre uses [lng, lat])
// NOTE: These are only map navigation targets; they do not filter pins.
const MAP_LEVELS = [
  {
    id: "AU",
    label: "Australia",
    center: [133.7751, -25.2744],
    zoom: 4,
    children: [
      {
        id: "AU-QLD",
        label: "Queensland",
        center: [142.7028, -20.9176],
        zoom: 6,
        children: [
          { id: "AU-QLD-BNE", label: "Brisbane", center: [153.0251, -27.4698], zoom: 11 }
        ]
      },
      {
        id: "AU-NSW",
        label: "New South Wales",
        center: [146.9211, -31.2532],
        zoom: 6,
        children: [
          { id: "AU-NSW-SYD", label: "Sydney", center: [151.2093, -33.8688], zoom: 11 }
        ]
      }
    ]
  },
  {
    id: "FR",
    label: "France",
    center: [2.2137, 46.2276],
    zoom: 5,
    children: [
      {
        id: "FR-IDF",
        label: "Île-de-France",
        center: [2.55, 48.85],
        zoom: 8,
        children: [
          { id: "FR-IDF-PAR", label: "Paris", center: [2.3522, 48.8566], zoom: 12 }
        ]
      }
    ]
  },
  {
    id: "JP",
    label: "Japan",
    center: [138.2529, 36.2048],
    zoom: 5,
    children: [
      {
        id: "JP-KNT",
        label: "Kantō",
        center: [139.6, 35.8],
        zoom: 8,
        children: [
          { id: "JP-KNT-TYO", label: "Tokyo", center: [139.6503, 35.6762], zoom: 12 }
        ]
      }
    ]
  }
];

// ---- MapLibre init ----
let currentStyle = "liberty";
let isSwitchingStyle = false;

// You must have `maplibregl` available globally from including MapLibre GL JS.
const map = new maplibregl.Map({
  container: "map",
  style: LIBERTY_STYLE_URL,
  center: DEFAULT_VIEW.center, // [lng, lat]
  zoom: DEFAULT_VIEW.zoom
});

// Optional: add MapLibre nav controls (+/-)
map.addControl(new maplibregl.NavigationControl(), "top-left");

// Track markers so we can re-add them after style switches
let markerInstances = [];

function clearMarkers() {
  markerInstances.forEach((m) => m.remove());
  markerInstances = [];
}

function buildExternalLinks(lat, lon) {
  const enc = encodeURIComponent;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${enc(`${lat},${lon}`)}`;
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${enc(`${lat},${lon}`)}`;
  return { googleMapsUrl, streetViewUrl };
}

function addMarkers(points) {
  points.forEach((p) => {
    const el = document.createElement("div");
    el.style.width = "12px";
    el.style.height = "12px";
    el.style.borderRadius = "999px";
    el.style.background = "white";
    el.style.border = "2px solid rgba(0,0,0,0.35)";
    el.style.boxShadow = "0 6px 14px rgba(0,0,0,0.35)";

    const { googleMapsUrl, streetViewUrl } = buildExternalLinks(p.lat, p.lon);

    const popupHtml = `
      <div style="min-width: 220px;">
        <div style="margin-bottom: 8px;">
          <strong>${escapeHtml(p.name)}</strong><br>
          ${escapeHtml(p.countryName)} (${escapeHtml(p.countryCode)})<br>
          <small>${p.lat.toFixed(5)}, ${p.lon.toFixed(5)}</small>
        </div>

        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <a
            href="${googleMapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration:none; border:1px solid rgba(255,255,255,0.18); padding:6px 10px; border-radius:10px; display:inline-block;"
          >Open in Google Maps</a>

          <a
            href="${streetViewUrl}"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration:none; border:1px solid rgba(255,255,255,0.18); padding:6px 10px; border-radius:10px; display:inline-block;"
          >Street View</a>
        </div>
      </div>
    `;

    const popup = new maplibregl.Popup({ offset: 18 }).setHTML(popupHtml);

    const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
      .setLngLat([p.lon, p.lat]) // [lng, lat]
      .setPopup(popup)
      .addTo(map);

    markerInstances.push(marker);
  });
}

function resetView() {
  DEFAULT_VIEW = getDefaultView();
  map.easeTo({ center: DEFAULT_VIEW.center, zoom: DEFAULT_VIEW.zoom, duration: 500 });
}

function indexLevels(nodes, acc = new Map()) {
  for (const n of nodes) {
    acc.set(n.id, n);
    if (n.children) indexLevels(n.children, acc);
  }
  return acc;
}

const MAP_LEVEL_INDEX = indexLevels(MAP_LEVELS);

function addOptionsRecursive(parentEl, node, depth) {
  const opt = document.createElement("option");
  opt.value = node.id;
  opt.textContent = `${"— ".repeat(depth)}${node.label}`;
  parentEl.appendChild(opt);

  if (node.children) {
    node.children.forEach((child) => addOptionsRecursive(parentEl, child, depth + 1));
  }
}

function buildMapLevelDropdown() {
  const select = document.getElementById("countrySelect");

  // Keep the first option ("ALL"), remove everything else
  while (select.options.length > 1) select.remove(1);

  MAP_LEVELS.forEach((country) => {
    const group = document.createElement("optgroup");
    group.label = country.label;

    addOptionsRecursive(group, country, 0);
    select.appendChild(group);
  });

  select.addEventListener("change", () => {
    const value = select.value;

    if (value === "ALL") {
      resetView();
      return;
    }

    const node = MAP_LEVEL_INDEX.get(value);
    if (!node) return;

    // Jump to target view
    if (node.bounds) {
      // MapLibre fitBounds expects [[west,south],[east,north]]
      map.fitBounds(node.bounds, { padding: 20, duration: 500 });
      return;
    }

    if (node.center && typeof node.zoom === "number") {
      map.easeTo({ center: node.center, zoom: node.zoom, duration: 500 });
    }
  });
}

// --- Style switching (Liberty <-> Topo) based on zoom ---
function shouldUseTopo() {
  const z = map.getZoom();
  if (currentStyle === "liberty") return z >= TOPO_ON_ZOOM;
  return z > TOPO_OFF_ZOOM;
}

function switchStyleIfNeeded() {
  if (isSwitchingStyle) return;

  const wantTopo = shouldUseTopo();
  const target = wantTopo ? "topo" : "liberty";
  if (target === currentStyle) return;

  isSwitchingStyle = true;

  const view = {
    center: map.getCenter(),
    zoom: map.getZoom(),
    bearing: map.getBearing(),
    pitch: map.getPitch()
  };

  currentStyle = target;
  map.setStyle(wantTopo ? TOPO_STYLE_URL : LIBERTY_STYLE_URL);

  map.once("style.load", () => {
    // Re-apply view exactly as it was
    map.jumpTo(view);

    // Re-add markers after style reload
    clearMarkers();
    addMarkers(locations);

    isSwitchingStyle = false;
  });
}

// Only evaluate after map is ready
map.on("load", () => {
  buildMapLevelDropdown();

  // Initial pins
  addMarkers(locations);

  // Apply correct style for the initial zoom
  switchStyleIfNeeded();

  // Switch style as the user zooms (zoomend avoids constant switching mid-zoom)
  map.on("zoomend", switchStyleIfNeeded);
});

// --- Reset button ---
document.getElementById("resetBtn").addEventListener("click", () => {
  const select = document.getElementById("countrySelect");
  select.value = "ALL";
  resetView();
  switchStyleIfNeeded();
});

// --- Responsive default sync on resize (only if dropdown is on "ALL") ---
function syncDefaultOnResize() {
  const select = document.getElementById("countrySelect");
  if (!select || select.value !== "ALL") return;

  DEFAULT_VIEW = getDefaultView();
  map.easeTo({ center: DEFAULT_VIEW.center, zoom: DEFAULT_VIEW.zoom, duration: 300 });

  // Re-evaluate style after the resize-driven move
  // (do it after the camera settles to reduce thrash)
  window.clearTimeout(syncDefaultOnResize._t);
  syncDefaultOnResize._t = window.setTimeout(() => {
    switchStyleIfNeeded();
  }, 350);
}
syncDefaultOnResize._t = null;

window.addEventListener("resize", syncDefaultOnResize);

// --- Safety: escape popup HTML ---
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
