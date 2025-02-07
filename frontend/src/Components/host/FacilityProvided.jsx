import React, { useState } from "react";
import { MdAcUnit, MdCleaningServices, MdFireExtinguisher, MdKitchen, MdLocalLaundryService, MdLocalParking, MdPower, MdSecurity,MdSecurityUpdate,MdSmokeFree,MdTv,MdWaterDrop, MdWifi } from "react-icons/md";
import { LuCctv } from "react-icons/lu";
import { PiFirstAidKitBold } from "react-icons/pi";
const facilitiesWithIcons = {
  "24*7 Safety": <MdSecurity />,
  "24*7 water supply": <MdWaterDrop />,
  "CCTV": <LuCctv />,
  "Free Wifi": <MdWifi />,
  "First Aid Kit": <PiFirstAidKitBold />,
  "Daily cleaning": <MdCleaningServices />,
  "Free washer- in building": <MdLocalLaundryService />,
  "Power Backup": <MdPower />,
  "Geyser": <MdSmokeFree />,
  "Parking": <MdLocalParking />,
  "T.V": <MdTv />,
  "Mess": <MdKitchen />,
  "AC": <MdAcUnit />,
  "Kitchen": <MdKitchen />,
  "Smoke alarm": <MdSmokeFree />,
  "Fire extinguisher": <MdFireExtinguisher />,
  "Short term stay provided (7days/15days)": <MdSecurityUpdate />,
  "Furniture":'',
  "Dishes":'',
  "Electric Kettle":"",
  "Freezer":'',
};

const FacilityProvided = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div>
      <div className="flex">
      
        <div className="flex-1">
          <h1 className="text-2xl mt-2 mb-2 font-semibold">Facilities Provided by you:</h1>
          <div className="space-y-2">
            {Object.keys(facilitiesWithIcons).map((option, index) => (
              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="flex items-center space-x-2">
                  {facilitiesWithIcons[option]}
                  <span>{option}</span>
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityProvided;
