// services/firmsApi.js
// NASA FIRMS API integration (starter version)
// Author: Team COS | Susil Bhandari, CCM

import axios from "axios";

// Example FIRMS endpoint (MODIS, last 24h, global)
// You can adjust dataset, time window, or region as needed
const FIRMS_API_URL =
  "https://firms.modaps.eosdis.nasa.gov/api/area/csv/MODIS_C6_24h/your_api_key_here/lat,lon,buffer_km";

// 🔥 Fetch fire risk data from NASA FIRMS
export async function getFireRisk(lat, lon, bufferKm = 10) {
  try {
    // Replace with your actual FIRMS API key and endpoint
    const url = FIRMS_API_URL.replace("lat", lat)
      .replace("lon", lon)
      .replace("buffer_km", bufferKm);

    const response = await axios.get(url);

    // Example: parse CSV or JSON depending on FIRMS output
    // Here we mock a simplified JSON for demonstration
    const fireData = {
      projectLocation: { lat, lon },
      bufferKm,
      fireDetections: response.data.length || 0,
      riskLevel:
        response.data.length > 5
          ? "HIGH"
          : response.data.length > 0
          ? "MEDIUM"
          : "LOW",
      timestamp: new Date().toISOString(),
    };

    return fireData;
  } catch (error) {
    console.error("Error fetching FIRMS data:", error.message);

    // Mock fallback (useful for demos/offline)
    return {
      projectLocation: { lat, lon },
      bufferKm,
      fireDetections: 2,
      riskLevel: "MEDIUM",
      timestamp: new Date().toISOString(),
      note: "Mock data used due to API error",
    };
  }
}
