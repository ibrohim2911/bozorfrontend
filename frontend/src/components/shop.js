import React, { useEffect} from "react";
const API_URL = "backend python url";
export default function shop() {
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
}
