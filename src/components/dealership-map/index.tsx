"use client";
import React, { useState, useEffect } from "react";
import { ConfigProvider, Select } from "antd";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import type { Icon } from 'leaflet';


// Remove the direct Leaflet import and dynamic import
// Instead, initialize Leaflet in useEffect
let defaultIcon: Icon;

// Dynamic imports for Map components
const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), {
  ssr: false
});

const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), {
  ssr: false
});

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false
});

// Sample dealership data
const dealerships = [
  {
    id: 1,
    name: "Royal Enfield London",
    address: "49-51 Goodge St, London",
    lat: 51.5207,
    lng: -0.1357,
    region: "Europe",
    country: "United Kingdom",
    phone: "+44 20 7636 7652",
    type: "Exclusive Dealership",
  },
  {
    id: 2,
    name: "Royal Enfield Delhi",
    address: "M-72, Greater Kailash Part 1, New Delhi",
    lat: 28.5513,
    lng: 77.2373,
    region: "Asia",
    country: "India",
    phone: "+91 11 4919 6000",
    type: "Flagship Store",
  },
  {
    id: 3,
    name: "Royal Enfield Milwaukee",
    address: "226 N Water St, Milwaukee, WI",
    lat: 43.0321,
    lng: -87.9093,
    region: "North America",
    country: "USA",
    phone: "+1 414-502-7317",
    type: "Service Center",
  },
  {
    id: 4,
    name: "Royal Enfield Sydney",
    address: "562 Parramatta Rd, Petersham NSW",
    lat: -33.8888,
    lng: 151.1571,
    region: "Oceania",
    country: "Australia",
    phone: "+61 2 9569 8000",
    type: "Exclusive Dealership",
  },
  {
    id: 5,
    name: "Royal Enfield Bangkok",
    address: "999/1 Rama I Rd, Pathum Wan",
    lat: 13.7463,
    lng: 100.5340,
    region: "Asia",
    country: "Thailand",
    phone: "+66 2 100 9000",
    type: "Flagship Store",
  }
];

// Extract unique values for filters
const regions = ["All Regions", ...new Set(dealerships.map(d => d.region))];
const countries = ["All Countries", ...new Set(dealerships.map(d => d.country))];
const dealershipTypes = ["All Types", ...new Set(dealerships.map(d => d.type))];

const DealershipMap = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedType, setSelectedType] = useState("All Types");
  const [filteredDealerships, setFilteredDealerships] = useState(dealerships);
  const [mapCenter, setMapCenter] = useState<[number, number]>([20, 0]);
  const [zoom, setZoom] = useState(2);
  const [isMounted, setIsMounted] = useState(false);

    // Initialize Leaflet icon in useEffect
    useEffect(() => {
      // Import Leaflet on the client side only
      if (typeof window !== "undefined") {
        import('leaflet').then((L) => {
          defaultIcon = L.icon({
            iconUrl: "/leaflet/marker-icon.png",
            iconRetinaUrl: "/leaflet/marker-icon-2x.png",
            shadowUrl: "/leaflet/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
          });
  
          L.Marker.prototype.options.icon = defaultIcon;
        });
      }
    }, []);

  // Filter dealerships based on selected filters
  useEffect(() => {
    let filtered = dealerships;

    if (selectedRegion !== "All Regions") {
      filtered = filtered.filter(d => d.region === selectedRegion);
    }

    if (selectedCountry !== "All Countries") {
      filtered = filtered.filter(d => d.country === selectedCountry);
    }

    if (selectedType !== "All Types") {
      filtered = filtered.filter(d => d.type === selectedType);
    }

    setFilteredDealerships(filtered);

    // Update map center and zoom based on filters
    if (filtered.length === 1) {
      setMapCenter([filtered[0].lat, filtered[0].lng]);
      setZoom(12);
    } else if (filtered.length > 0) {
      const bounds = filtered.reduce(
        (acc, dealer) => {
          acc.minLat = Math.min(acc.minLat, dealer.lat);
          acc.maxLat = Math.max(acc.maxLat, dealer.lat);
          acc.minLng = Math.min(acc.minLng, dealer.lng);
          acc.maxLng = Math.max(acc.maxLng, dealer.lng);
          return acc;
        },
        {
          minLat: 90,
          maxLat: -90,
          minLng: 180,
          maxLng: -180,
        }
      );

      setMapCenter([
        (bounds.minLat + bounds.maxLat) / 2,
        (bounds.minLng + bounds.maxLng) / 2,
      ]);
      setZoom(3);
    } else {
      setMapCenter([20, 0]);
      setZoom(2);
    }
  }, [selectedRegion, selectedCountry, selectedType]);

  // Client-side rendering check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedRegion("All Regions");
    setSelectedCountry("All Countries");
    setSelectedType("All Types");
    setMapCenter([20, 0]);
    setZoom(2);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-0">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Global Partnership Locations Map
      </h1>

      <div className="mb-8">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#D32F2F",
              borderRadius: 8,
            },
          }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Select
              value={selectedRegion}
              onChange={setSelectedRegion}
              className="min-w-[180px]"
            >
              {regions.map((region) => (
                <Select.Option key={region} value={region}>
                  {region}
                </Select.Option>
              ))}
            </Select>

            <Select
              value={selectedCountry}
              onChange={setSelectedCountry}
              className="min-w-[180px]"
            >
              {countries.map((country) => (
                <Select.Option key={country} value={country}>
                  {country}
                </Select.Option>
              ))}
            </Select>

            <Select
              value={selectedType}
              onChange={setSelectedType}
              className="min-w-[180px]"
            >
              {dealershipTypes.map((type) => (
                <Select.Option key={type} value={type}>
                  {type}
                </Select.Option>
              ))}
            </Select>

            <Button 
              onClick={handleResetFilters}
              variant="destructive"
              className="pointer"
            >
              Reset Filters
            </Button>
          </div>
        </ConfigProvider>
      </div>

      <div className="text-center mb-4">
        <p className="font-medium">
          Showing {filteredDealerships.length} locations
        </p>
      </div>

      <div className="h-[300px] w-full border-2 border-black">
        <Map
          center={mapCenter}
          zoom={zoom}
          className="h-full w-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredDealerships.map((dealer) => (
            <Marker key={dealer.id} position={[dealer.lat, dealer.lng]}>
              <Popup>
                <div className="min-w-[200px] p-2">
                  <h3 className="text-lg font-semibold mb-2">{dealer.name}</h3>
                  <p className="mb-1">
                    <strong>Type:</strong> {dealer.type}
                  </p>
                  <p className="mb-1">
                    <strong>Address:</strong> {dealer.address}
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> {dealer.phone}
                  </p>
                  <Button 
                    variant="destructive"
                    className="w-full"
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${dealer.lat},${dealer.lng}`)}
                  >
                    Get Directions
                  </Button>
                </div>
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default DealershipMap;