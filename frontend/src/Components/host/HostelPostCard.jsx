import React, { useState } from 'react'
import { categories, types, facilities } from '../../data'
import { IoIosImages } from "react-icons/io";
import { BiTrash } from "react-icons/bi";
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import '../../Components/HostelPostCard.css'

const HostelPostCard = () => {
  const [category, setCategory] = useState(null);
  const [type, setType] = useState(null);
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });
  const [guestCount, setGuestCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [photos, setPhotos] = useState([]);
  const[amenities, setAmenities] = useState([]);
  const[formDescription, setFormDescription] = useState({
    title: "",
    description: "",
    highlights: "",
    highlightDesc:"",
    price: 0,
  });
  const creatorId = useSelector((state) => state.user._id);
  const navigate = useNavigate();
  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };
  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };
  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
    if (!result.destination) return;

    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
  };
  const handlePost = async (e) => {
    e.preventDefault();

    try {
      
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAddress);
      listingForm.append("aptSuite", formLocation.aptSuite);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("guestCount", guestCount);
      listingForm.append("bedroomCount", bedroomCount);
      listingForm.append("bedCount", bedCount);
      listingForm.append("bathroomCount", bathroomCount);
      listingForm.append("amenities", amenities);
      listingForm.append("title", formDescription.title);
      listingForm.append("description", formDescription.description);
      listingForm.append("highlight", formDescription.highlight);
      listingForm.append("highlightDesc", formDescription.highlightDesc);
      listingForm.append("price", formDescription.price);

     
      photos.forEach((photo) => {
        listingForm.append("listingPhotos", photo);
      });

     
      const response = await fetch("/api/properties/add-room", {
        method: "POST",
        body: listingForm,
      });

      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log("Publish Listing failed", err.message);
    }
  };
  const styles = {
    pinkred: '#F8395A',
    blue: '#24355A',
    lightgrey: 'lightgrey',
    grey: 'grey',
    darkgrey: 'darkgrey'
  };

  return (
    <div className=''>
      <div style={{padding: '40px 60px 120px'}} >
        <h1 className='text-3xl font-semibold text-gray-500 font-stretch-semi-condensed'>Register Your Place:</h1>
        <form onSubmit={handlePost}>
          <div className="">
            <h2 className='pl-[10px] pt-[10px] border-lg mt-[20px] text-2xl font-semibold text-red-400 ' > Tell us about your place:</h2>
            <hr style={{margin: '15px 0 25px'}} className='border-gray-300 border-2'/>
            <h3 className=' font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]'>Which of these categories best describes your place?</h3>
            <div className="flex flex-wrap gap-[20px] p-[20px] justify-center items-center">
              {categories?.map((item, index) => (
                <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '110px',
                  height: '90px',
                  border: '1px solid grey',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: '0.2s ease',
                  hover: {
                    border: '2px solid pinkred',
                    backgroundColor: 'lightgrey'
                  }
                
                }}  
                  className={`  ${
                    category === item.label ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => setCategory(item.label)}
                >
                  <div className="text-[30px] text-black"><item.icon size={30}/></div>
                  <p className='text-black font-semibold'>{item.label}</p>
                </div>
              ))}
            </div>

            <h3 className=' font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]' >What type of place will guests have?</h3>
            <div className="flex flex-col gap-[20px]">
              {types?.map((item, index) => (
                <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  maxWidth: '600px',
                  padding: '15px 30px',
                  border: '1px solid grey',
                  borderRadius: '10px',
                  cursor: 'pointer',
          transition: '0.3s ease',
          hover: {
            border: '2px solid pinkred',
            backgroundColor: 'lightgrey'
          }
                }}
                
                  className={` ${type === item.name ? "selected" : ""}`}
                  key={index}
                  onClick={() => setType(item.name)}
                >
                  <div className="max-w-[400px]">
                    <h4 className='mb-[5px]'>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="text-[30px] text-black"><item.icon size={30}/></div>
                </div>
              ))}
            </div>

            <h3 className=' font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]' >Where's your place located?</h3>
            <div className="flex flex-col gap-[20px]">
              <div >
                <p style={{fontWeight: '700', margin: '20px 0 10px'}} >Street Address</p>
                <input
                  style={{
                    border: '1px solid grey',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}

                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  value={formLocation.streetAddress}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>

            <div className="grid gap-[40px] grid-cols-2 max-w-[700px]">
              <div>
                <p style={{fontWeight: '700', margin: '20px 0 10px'}}>Apartment, Suite, etc. (if applicable):</p>
                <input
                  style={{
                    border: '1px solid grey',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    '&:focus': {  
                      outline: 'none'
                    }
                  }}
                  type="text"
                  placeholder="Apt, Suite, etc. (if applicable)"
                  name="aptSuite"
                  value={formLocation.aptSuite}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
              <div>
                <p style={{fontWeight: '700', margin: '20px 0 10px'}}>City</p >
                <input
                  style={{
                    border: '1px solid grey',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formLocation.city}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>

            <div className="grid gap-[40px] grid-cols-2 max-w-[700px]">
              <div>
                <p style={{fontWeight: '700', margin: '20px 0 10px'}}>Province</p>
                <input
                  style={{
                    border: '1px solid grey',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
                  type="text"
                  placeholder="Province"
                  name="province"
                  value={formLocation.province}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
                <div>
                <p style={{fontWeight: '700', margin: '20px 0 10px'}}>Country</p>
                <input
                  style={{
                    border: '1px solid grey',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formLocation.country}
                  onChange={handleChangeLocation}
                  required
                />
              </div>
            </div>

            <h3 className=' font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]' >Share some basics about your place</h3>
            <div className="flex gap-[40px] flex-wrap">
              <div className="flex items-center gap-[40px] p-[15px] border border-gray-400 rounded-md">
                <p style={{fontWeight: '600'}}>Guests</p>
                <div className="flex items-center gap-[9px] text-[20px]">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => {
                      guestCount > 1 && setGuestCount(guestCount - 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                  <p>{guestCount}</p>
                  <MdOutlineAddCircleOutline
                    onClick={() => {
                      setGuestCount(guestCount + 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-[40px] p-[15px] border border-gray-400 rounded-md">
                <p style={{fontWeight: '600'}}>Bedrooms</p>
                <div className="flex items-center gap-[9px] text-[20px]">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => {
                      bedroomCount > 1 && setBedroomCount(bedroomCount - 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                  <p >{bedroomCount}</p>
                  <MdOutlineAddCircleOutline
                    onClick={() => {
                      setBedroomCount(bedroomCount + 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-[40px] p-[15px] border border-gray-400 rounded-md">
                <p style={{fontWeight: '600'}}>Beds</p>
                <div className="flex items-center gap-[9px] text-[20px]">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => {
                      bedCount > 1 && setBedCount(bedCount - 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover":{ color: styles.pinkred  },
                    }}
                  />
                  <p>{bedCount}</p>
                  <MdOutlineAddCircleOutline
                    onClick={() => {
                      setBedCount(bedCount + 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-[40px] p-[15px] border border-gray-400 rounded-md">
                <p style={{fontWeight: '600'}}>Bathrooms</p>
                <div className="flex items-center gap-[9px] text-[20px]">
                  <MdOutlineRemoveCircleOutline
                    onClick={() => {
                      bathroomCount > 1 && setBathroomCount(bathroomCount - 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                  <p>{bathroomCount}</p>
                  <MdOutlineAddCircleOutline
                    onClick={() => {
                      setBathroomCount(bathroomCount + 1);
                    }}
                    sx={{
                      fontSize: "25px",
                      cursor: "pointer",
                      "&:hover": { color: styles.pinkred },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[40px] pl-[30px] pr-[40px] rounded-lg">
            <h2 className='pl-[10px] pt-[10px] border-lg mt-[20px] text-2xl font-semibold text-red-400 '> Make your place stand out:</h2>
            <hr style={{margin: '15px 0 25px'}} className='border-gray-300 border-2'/>

            <h3 className='font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]'>Tell guests what your place has to offer</h3>
            <div className="flex flex-wrap gap-[20px]">
              {facilities?.map((item, index) => (
                <div
                style={{
                  transition: '0.2s ease',
                }}
                  className={`flex flex-col justify-center items-center w-[200px] h-[90px] border border-gray-400 rounded-lg cursor-pointer  ${
                    amenities.includes(item.name) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleSelectAmenities(item.name)}
                >
                  <div className="facility_icon"><item.icon size={30}/></div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>

            <h3 className='font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]'>Add some photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div
                    className="flex flex-wrap gap-[15px]"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" style={{padding: '40px 100px',
                          borderRadius: '10px',
                        }}>
                          <div style={{fontSize: '60px',
                            cursor:'pointer'
                          }}>
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={index.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  style={{
                                    position: 'relative',
                                    width: '250px',
                                    height: '150px',
                                    cursor: 'move',
  
                                  }}
                        
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <img
                                  style={{
                                    width: '250px',
                                    height: '200px',
                                  }}
                                    src={URL.createObjectURL(photo)}
                                    alt="place"
                                  />
                                  <button
                                    style={{
                                      position:'absolute',
                                      right: '0',
                                      top: '0',
                                      padding: '3px',
                                      border: 'none',
                                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                      fontSize: '20px',
                                      cursor: 'pointer',
                                      '&:hover': {
                                        color: 'pinkred',
                                      }
                                    
                                    }}
                                    type="button"
                                    onClick={() => handleRemovePhoto(index)}
                                  >
                                    <BiTrash />
                                  </button>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="w-[250px] h-[150px]">
                          <div  style={{fontSize: '60px'}}>
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            <h3 className='font-semibold text-gray-500 mt-[20px] mb-[20px] ml-[10px]'>What make your place attractive and exciting?</h3>
            <div className="">
              <p style={{fontWeight: '700', margin: '20px 0 10px'}} >Title</p>
              <input
                style={{
                  border: '1px solid grey',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                type="text"
                placeholder="Title"
                name="title"
                value={formDescription.title}
                onChange={handleChangeDescription}
                required
              />
              <p style={{fontWeight: '700', margin: '20px 0 10px'}} >Description</p>
              <textarea
                style={{
                  border: '1px solid grey',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                type="text"
                placeholder="Description"
                name="description"
                value={formDescription.description}
                onChange={handleChangeDescription}
                required
              />
              <p style={{fontWeight: '700', margin: '20px 0 10px'}} >Highlight</p>
              <input
                style={{
                  border: '1px solid grey',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  '&:focus': {
                    outline: 'none' 
                  }
                }}
                type="text"
                placeholder="Highlight"
                name="highlight"
                value={formDescription.highlight}
                onChange={handleChangeDescription}
                required  
              />
              <p style={{fontWeight: '700', margin: '20px 0 10px'}} >Highlight details</p>
              <textarea
                style={{
                  border: '1px solid grey',
                  padding: '15px 30px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%',
                  '&:focus': {
                    outline: 'none'
                  }
                }}
                type="text"
                placeholder="Highlight details"
                name="highlightDesc"
                value={formDescription.highlightDesc}
                onChange={handleChangeDescription}
                required
              />
              <p className='text-2xl font-semibold mb-5 mt-2 text-gray-500'>Now, set your price:</p>
              <span className='text-gray-500 text-2xl mr-2 font-bold'>₹</span>
              <input
                type="number"
                placeholder="100"
                name="price"
                value={formDescription.price}
                onChange={handleChangeDescription}
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <button className="m-5 border-2 border-gray-300 rounded-md p-2 bg-red-400 text-white cursor-pointer hover:shadow-lg hover:shadow-gray-400" type="submit">
            CREATE YOUR LISTING
          </button>
        </form>
      </div> 
    </div>
  )
}

export default HostelPostCard
