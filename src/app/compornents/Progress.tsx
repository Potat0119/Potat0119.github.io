import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Box from '@mui/joy/Box';

const ProgressBar = ({ value }: {value: number}) => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
      }}
    >
      <LinearProgress className='SkillLinearProgress'
        determinate
        variant="outlined"
        color="neutral"
        size="sm"
        thickness={32}
        value={value}
        sx={{
          '--LinearProgress-radius': '0px',
          '--LinearProgress-progressThickness': '24px',
          boxShadow: 'sm',
          borderColor: 'neutral.500',
        }}
      >
      </LinearProgress>
    </Box>
  );
}

export default ProgressBar;
