import React, { useState } from "react";
import { Select } from "@mui/material";
import FacilityProvided from "./FacilityProvided";
import { Textarea } from "@headlessui/react";

const HostelPostCard = () => {
  const [formData, setFormData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleSubmit=()=>{
    e,preventDefault()
  }
  const handleChange = (event) => {
    const value = event.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
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
      <form onSubmit={handleSubmit} className="p-3 max-w-3xl mx-auto min-h-screen items-center flex flex-col">
        <h1 className="text-center text-red-500 text-4xl my-7 font-semibold">
          Enter your property details
        </h1>
        <div className="flex flex-col gap-4">
          <div className="lex flex-col gap-4 sm:flex-row justify-between">
            <input
              id="name"
              className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
              type="text"
              placeholder="Enter your property name"
            />
            <input
              id="address"
              className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
              type="text"
              placeholder="Enter your property location"
            />
            <div className="flex justify-between ">
              <div className="flex flex-col">
                <span>Select your State</span>
              </div>
              <div className="flex flex-col">
                <span>Select your city</span>
              </div>
              <div className="flex flex-col">
                <span>Pincode:</span>
                <input type="number" className=" mb-2 py-2 px-1 border rounded border-gray-300" />
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className="flex flex-col">
                <p className="">Type of property:</p>
                <select
                  className="border py-2 mt-1 rounded border-gray-300"
                  onChange={(e) => {
                    setFormData({ ...formData, category: e.target.value });
                  }}
                >
                  <option className="" value="hostel">
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
<div className="">
<Textarea
              id="description"
              className="w-full mb-2 py-2 px-1 border rounded border-gray-300"
              type="text"
              placeholder="Write something about your property.."
            />
</div>
            <FacilityProvided />

            <div className="">
              <h1 className="text-2xl mt-5 mb-5 font-semibold">
                Upload Images:
              </h1>
              <div className="">
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
                  {images.length > 0 && (
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                      Upload
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <button type="submit" className="rounded-full text-white bg-black py-2 px-8 cursor-pointer" >Add</button>
      </form>
    </>
  );
};

export default HostelPostCard;
