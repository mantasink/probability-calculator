import './App.scss';
import { Container, Stack, Typography } from '@mui/material';
import AtLeastOnce from './component/AtLeastOnce';

function App() {
  return (
    <div className="App">
      <main>
        <Container>
          <Stack spacing={2}>
            <Typography variant="h3" component="h1">
              Probability Calculator
            </Typography>
            <Typography variant="h5">At Least Once</Typography>
            <AtLeastOnce />
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
