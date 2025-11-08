import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function LoadingScreen() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + 20, 100);
        if (next === 100) clearInterval(timer);
        return next;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const textOnDark = '#ffffff';
  const textOnLight = '#050027';
  const isCoveredAtCenter = progress >= 100;
  const labelColor = isCoveredAtCenter ? textOnDark : textOnLight;
  const labelShadow = isCoveredAtCenter ? '0 0 4px rgba(0,0,0,0.35)' : 'none';

  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-busy={progress < 100}
        sx={{
          position: 'relative',
          width: '100%',
          height: 24,
          backgroundColor: '#f2f2f2',
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: `${progress}%`,
            backgroundColor: '#050027',
            transition: 'width 0.8s ease-in-out',
          }}
        />
        <Typography
          level="body-xs"
          fontWeight="xl"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: labelColor,
            textShadow: labelShadow,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          LOADING… {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
