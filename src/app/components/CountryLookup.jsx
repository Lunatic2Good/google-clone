"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
    const [country, setCountry] = useState("");
    useEffect(() => {
        const getCountry = async () => {
            try {
              const response = await fetch(
                `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
              );
              const data = await response.json();
              const country = data.country;
              if(!country) return;
              setCountry(country);
            } catch (error) {
              console.error("Error fetching country:", error);
            }
          };
          getCountry();
    }, [])


    return (
        <div>{country ? country : "Loading..."}</div>
    )
}