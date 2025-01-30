import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const AccountDelete = () => {
    const [value, setValue] =useState("");
    const navigate = useNavigate()
    const [error, setError] =useState(false);
    const [helperText, setHelperText] =useState('false');
  const handleChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === 'safety || host || terms || other') {
      setError(false);
navigate()
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  return (
    <div className='max-w-4xl justify-center items-center flex flex-col mx-auto p-4'>
        <p className="text-3xl font-semibold mb-2">What prompted you to deactivate ?</p>
      <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard" >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div className="flex  p-5 flex-col gap-1">
        <FormControlLabel value="safety" control={<Radio />} label="I have safety or privacy concern"
         />
         <Divider/>
        <FormControlLabel value="host" control={<Radio />} label="I can't host anymore " />
        <Divider/>
        <FormControlLabel value="terms" control={<Radio />} label="I can't comply with MyHostel Terms of Service / Community commitment."
         />
          <Divider/>
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
      <Link className='flex justify-end'>
      <button type='submit' className='border cursor-pointer py-2 px-8 bg-blue-300 border-gray-400 rounded-lg text-xl'>Continue</button>
      </Link>
      
    </FormControl>
      </form>
    </div>
  )
}

export default AccountDelete
