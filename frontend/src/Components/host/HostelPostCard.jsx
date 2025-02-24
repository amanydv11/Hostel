import React, { useState, useEffect } from "react";
import FacilityProvided from "./FacilityProvided";
import { Textarea } from "@headlessui/react";
import { Country, State, City } from "country-state-city";
const HostelPostCard = () => {
  const [formData, setFormData] = useState({
name:'',
address:'',
pincode:'',
state:'',
city: '',
    description: '',
    typeOfProperty: '',
    typeOfRoom: '',
    room: '',
    priceSingleAc: '',
    priceDoubleAc: '',
    priceSingleNonAc: '',
    priceDoubleNonAc: '',
    priceSingleCooler: '',
    priceDoubleCooler: '',
    priceof1bhk: '',
    priceof2bhk: '',
    priceof3bhk: '',
    facilities: [],
    image: null
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleFacilitiesChange = (facilities) => {
    setFormData(prev => ({
      ...prev,
      facilities
    }));
  };

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState("");
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity("");
    }
  }, [selectedState]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const res = await fetch('/api/room/add-room', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            const errorData = await res.text(); 
            throw new Error(errorData || 'Failed to create room');
        }

        const data = await res.json();
        console.log('Room added:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
};


  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-3 max-w-3xl mx-auto">
        <h1 className="text-center text-red-500 text-4xl my-7 font-semibold">
          Enter your property details
        </h1>
        <div className="flex flex-col gap-4">
          <div className=" gap-4 sm:flex-row ">
            <input
              id="name"
              className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
              type="text"
              placeholder="Enter your property name"
            />
            <div className="flex gap-2 ">
              <input
                id="address"
                className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
                type="text"
                placeholder="Enter your property location"
              />
              <div className="flex items-center">
                <span>Pincode:</span>
                <input
                  id="pincode"
                  type="number"
                  className=" mb-2 py-2 w-26 px-1 border rounded border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 justify-between ">
              <div className="flex flex-col">
                <span>Select your country</span>
                <select
                  id="country"
                  className="border h-10 mt-1 rounded border-gray-300"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  value={selectedCountry}
                >
                  <option value="">Select Country</option>
                  {Country.getAllCountries().map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <span>Select your State</span>
                <select
                  id="state"
                  className="border h-10 mt-1 rounded border-gray-300"
                  onChange={(e) => setSelectedState(e.target.value)}
                  value={selectedState}
                  disabled={!states.length}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <span>Select your city</span>
                <select
                  id="city"
                  className="border h-10 mt-1 rounded border-gray-300"
                  onChange={(e) => setSelectedCity(e.target.value)}
                  value={selectedCity}
                  disabled={!cities.length}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className="flex flex-col">
                <p   >Type of property:</p>
                <select
                  className="border h-10 mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      typeOfProperty: e.target.value,
                    });
                  }}
                >
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="hostel"
                  >
                    Hostel
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="flat"
                  >
                    Flat
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="pg"
                  >
                    Paying Guest(PG)
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="room"
                  >
                    Rooms
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="room"
                  >
                    Full House
                  </option>
                </select>
              </div>
              <div className="flex flex-col ">
                <span>Gender allowed:</span>
                <select
                  className="border py-2  mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });
                  }}
                >
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="male"
                  >
                    Male
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="female"
                  >
                    Female
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="other"
                  >
                    Other
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="other"
                  >
                    Everyone
                  </option>
                </select>
              </div>
              <div className="flex flex-col">
                <span>Total number of rooms:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <span>Number of single bed:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Number of double bed:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Type of rooms:</span>
                <select
                  className="border py-2  mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });
                  }}
                >
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="ac"
                  >
                    AC rooms
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="non-ac"
                  >
                    Non-AC (air conditinor)
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="cooler"
                  >
                    Cooler
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-13 justify-between">
              <div className="flex flex-col">
                <span>Price for single bed(AC):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price for double bed(AC):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price for single bed(Non-Ac):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price for double bed(Non-Ac):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price for single bed (cooler):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price for double bed(cooler):</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
            </div>

            <div className="flex gap-19">
              <div className="flex flex-col">
                <span>Number of 1BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Number of 2BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Number of 3BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-19">
              <div className="flex flex-col">
                <span>Price of 1BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price of 2BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>Price of 3BHK:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
            </div>
            <div className="flex gap-19">
              <div className="flex flex-col">
                <span>Number of rooms:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <span>price of rooms:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col ">
                <span>Independent:</span>
                <select
                  className="border py-2  mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });
                  }}
                >
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="male"
                  >
                    Yes
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="male"
                  >
                    No
                  </option>
                </select>
              </div>
            </div>
            <div className="flex gap-19">
              <div className="flex flex-col">
                <span>Price of property:</span>
                <input
                  type="number"
                  className=" mb-2 py-2 px-1 border rounded border-gray-300"
                />
              </div>
              <div className="flex flex-col ">
                <span>Independent:</span>
                <select
                  className="border py-2  mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({ ...formData, gender: e.target.value });
                  }}
                >
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="male"
                  >
                    Yes
                  </option>
                  <option
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    value="male"
                  >
                    No
                  </option>
                </select>
              </div>
            </div>
            <div   >
              <Textarea
                id="description"
                className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
                type="text"
                placeholder="Write something about your property.."
              />
            </div>

            <div   >
              <h1 className="text-2xl mt-5 mb-5 font-semibold">Perks:</h1>
            <FacilityProvided onChange={handleFacilitiesChange} />
            </div>
            

            <div   >
              <h1 className="text-2xl mt-5 mb-5 font-semibold">
                Upload Images:
              </h1>
              <div>

                <div className=" w-full max-w-lg mx-auto">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-3 block w-full p-2 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  
                  <div className="grid grid-cols-3 gap-2">
                    {images.map((img, index) => (
                      <div key={index} className="relative">
                        <img
                          src={img.preview}
                          alt={`upload-preview-${index}`}
                          className="w-42 h-32 object-cover "
                        />

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-full text-white bg-black py-2 px-8 cursor-pointer"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default HostelPostCard;
