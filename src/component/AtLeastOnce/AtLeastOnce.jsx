import { Stack, TextField, Typography } from '@mui/material';
import './AtLeastOnce.scss';
import { useState } from 'react';
import ChanceInput from '../ChanceInput/ChanceInput';

const validateTimesToAttempt = (number) => number > 0 && Number.isInteger(
  number,
);

const round = (number) => number.toFixed(2);

function AtLeastOnce() {
  const [chanceToWin, setChanceToWin] = useState(0.5);
  const [timesToAttempt, setTimesToAttempt] = useState(2.0);

  const chance = 1 - round((1 - chanceToWin) ** timesToAttempt);

  const changeChance = (_chanceId, newValue) => {
    setChanceToWin(newValue);
  };

  return (
    <Stack spacing={1} className="AtLeastOnce">
      <div className="AtLeastOnce-inputs">
        <ChanceInput
          onChange={changeChance}
          id={0}
          value={chanceToWin}
        />
        <TextField
          label="Times to Attempt"
          inputProps={{
            type: 'number',
            step: '1',
            min: '1',
          }}
          onChange={(e) => setTimesToAttempt(Number(e.target.value))}
          defaultValue={timesToAttempt}
          helperText={!validateTimesToAttempt(timesToAttempt) ? '1 <= n'
            : null}
          error={!validateTimesToAttempt(timesToAttempt)}
        />
      </div>
      <Typography variant="h6">{chance}</Typography>
    </Stack>
  );
}

export default AtLeastOnce;
