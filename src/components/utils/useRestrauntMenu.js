import { useEffect, useState } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json"


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setResInfo(MOCK_DATA.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
