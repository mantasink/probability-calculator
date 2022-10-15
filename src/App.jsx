import './App.scss';
import { Container, Stack, Typography } from '@mui/material';
import AtLeastOnce from './component/AtLeastOnce/AtLeastOnce';
import AtLeastOnceMultiple
  from './component/AtLeastOnceMultiple/AtLeastOnceMultiple';

function App() {
  return (
    <div className="App">
      <main>
        <Container>
          <Stack spacing={2}>
            <Typography variant="h3" component="h1">
              Probability Calculator
            </Typography>
            <Typography variant="h5">At Least Once (Same Odds)</Typography>
            <AtLeastOnce />
            <Typography variant="h5">At Least Once (Different Odds)</Typography>
            <AtLeastOnceMultiple />
          </Stack>
        </Container>
      </main>
      <footer>
        <Typography>
          Probability Calculator 2022
        </Typography>
      </footer>
    </div>
  );
}

export default App;
