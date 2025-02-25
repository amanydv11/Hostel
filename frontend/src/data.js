
import {
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
  FaWater,
  
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet, FaUtensils } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoBatteryChargingOutline } from "react-icons/io5";
import {
  MdOutlineVilla,
  MdMicrowave,
  MdBalcony,
  MdYard,
  MdPets,
  MdOutlineElectricalServices,
} from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: BiWorld,
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.NyJfR68gseAzqfis1yDhuQHaEH&pid=Api&P=0&h=180",
    label: "Hostel",
    icon: MdOutlineVilla,
    description: "This property is close to the beach!",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.5gP8zLTWSCsy-EepSsU6TgHaFI&pid=Api&P=0&h=180",
    label: "Paying Guest",
    icon: MdOutlineVilla,
    description: "This property has windmills!",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.MCHjOXth3ZSDoO54SO4kUQHaE8&pid=Api&P=0&h=180",
    label: "Flats",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.muTJQ7-ahvlFqvs-E1UTzwHaEi&pid=Api&P=0&h=180",
    label: "Room(s)",
    icon: MdOutlineVilla,
    description: "This property is in the countryside!",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.AlPOGhL46M4ElIITwfrWVwHaE8&pid=Api&P=0&h=180",
    label: "House",
    icon: MdOutlineVilla,
    description: "This property has a beautiful pool!",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: FaHouseUser,
  },
  {
    name: "Room(s)",
    description: "Guests have their own room in a house, plus access to shared places",
    icon: BsFillDoorOpenFill,
  },
  {
    name: "1 BHK",
    description: "Guests have their own room in a house, plus access to shared places",
    icon: BsFillDoorOpenFill,
  },
  {
    name: "2 BHK",
    description: "Guests have their own room in a house, plus access to shared places",
    icon: BsFillDoorOpenFill,
  },
  {
    name: "A Shared Room",
    description: "Guests sleep in a room or common area that may be shared with you or others",
    icon: FaPeopleRoof,
  },
  
];

export const facilities = [
  {
    name: "Bath tub",
    icon: PiBathtubFill,
  },

  {
    name: "Washer",
    icon: BiSolidWasher,
  },
  {
    name: "Dryer",
    icon: BiSolidDryer,
  },
  {
    name: "Hangers",
    icon: PiCoatHangerFill,
  },
  {
    name: "Iron",
    icon: TbIroning3,
  },
  {
    name: "TV",
    icon: PiTelevisionFill,
  },
  {
    name: "Library",
    icon: BsPersonWorkspace,
  },
  {
    name: "Air Conditioning",
    icon: BsSnow,
  },
  {
    name: "Heating",
    icon: GiHeatHaze,
  },
  {
    name: "Security cameras",
    icon: GiCctvCamera,
  },
  {
    name: "Fire extinguisher",
    icon: FaFireExtinguisher,
  },
  {
    name: "First Aid",
    icon: BiSolidFirstAid,
  },
  {
    name: "Wifi",
    icon: BiWifi,
  },
  {
    name: "Cooking set",
    icon: FaKitchenSet,
  },
  {
    name: "Refrigerator",
    icon: BiSolidFridge,
  },
  {
    name: "Microwave",
    icon: MdMicrowave,
  },
  {
    name: "Stove",
    icon: GiToaster,
  },
  {
    name: "Outdoor dining area",
    icon: FaUmbrellaBeach,
  },
  {
    name: "Private patio or Balcony",
    icon: MdBalcony,
  },
  {
    name: "Garden",
    icon: MdYard,
  },
  {
    name: "Free parking",
    icon: AiFillCar,
  },
  {
    name: "Self check-in",
    icon: FaKey,
  },
  {
    name: "Pet allowed",
    icon: MdPets,
  },
  {
    name: "24*7 water supply",
    icon: FaWater,
  },
  {
    name: "24*7 electricity supply",
icon:MdOutlineElectricalServices,
  },
  {
    name: "Power backup",
   icon:IoBatteryChargingOutline,
  },
  {
    name: "First Aid kit",
    icon: BiSolidFirstAid,
  },
  {
    name:"Mess",
    icon: FaUtensils,
  }
  
];
