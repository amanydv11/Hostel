import React,{useState} from 'react'
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountDelete = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("");
    const [otherInput, setOtherInput] = useState(""); 
    const [error, setError] = useState(""); 
  
    
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      setError(""); 
    };
  
    
    const handleOtherInputChange = (event) => {
      setOtherInput(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!selectedOption) {
        setError("Please select an option.");
        return;
      }
      if (selectedOption === "other" && !otherInput.trim()) {
        setError("Please enter your reason.");
        return;
      }
      navigate("/account-delete/confirm", { state: { selectedOption, otherInput } });
    };
  
    return (
        <div className='max-w-4xl h-screen justify-center items-center flex flex-col mx-auto p-4'>
        <p className="text-3xl font-semibold mb-2">What prompted you to deactivate ?</p>
        <form onSubmit={handleSubmit}>
          <div className="flex text-lg  p-5 flex-col gap-1 space-y-10">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="option"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
                className="h-5 w-5"
              />
              <span>I have safety or privacy concern</span>
            </label>
  
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="option"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
                className="h-5 w-5"
              />
              <span>I can't host anymore</span>
            </label>
  
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="option"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
                className="h-5 w-5"
              />
              <span>I can't comply with MyHostel Terms of Service / Community commitment.</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="option"
                value="other"
                checked={selectedOption === "other"}
                onChange={handleOptionChange}
                className="h-5 w-5"
              />
              <span>Other</span>
            </label>
            {selectedOption === "other" && (
              <input
                type="text"
                placeholder="write your reason..."
                value={otherInput}
                onChange={handleOtherInputChange}
                className="border p-2 rounded w-full"
              />
            )}
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className='flex justify-end'>
      <button type='submit' className='border text-white cursor-pointer py-2 px-8 bg-pink-600 border-gray-500 rounded-lg text-xl'>Continue</button>
      </div>
        </form>
      </div>
    );
}

export default AccountDelete
