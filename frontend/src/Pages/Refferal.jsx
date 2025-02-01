import { Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Refferal = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center md:text-left">
        Referral Bonus
      </h1>
      <Divider />
      <div className="flex flex-col md:flex-row gap-6 mx-auto max-w-5xl">
        
        <div className="w-full md:w-1/2">
         
          <h2 className="text-2xl font-semibold mt-4">Common Questions</h2>
          <p className="text-lg text-gray-500 mt-2">
            Check out these answers to common questions and review other program information in the{' '}
            <Link to="/help" className="underline text-black">
              Help Center.
            </Link>
          </p>
        </div>
        <div className="w-full  md:w-1/2">
          <div className="mt-6">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography component="span">Is the referral program still open?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Yes</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography component="span">
                  I've referred a friend but haven't received staying credit
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Please contact us</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refferal;
