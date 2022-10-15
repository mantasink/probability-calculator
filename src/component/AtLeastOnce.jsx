import { TextField, Typography } from '@mui/material';
import './AtLeastOnce.scss';
import { useState } from 'react';

const validateChanceToWin = (number) => number > 0 && number < 1;
const validateTimesToAttempt = (number) => number > 0 && Number.isInteger(number);

const round = (number) => number.toFixed(2);

function AtLeastOnce() {
  const [chanceToWin, setChanceToWin] = useState(0.5);
  const [timesToAttempt, setTimesToAttempt] = useState(2.0);

  const chance = 1 - round((1 - chanceToWin) ** timesToAttempt);

  return (
    <div className="AtLeastOnce">
      <div className="AtLeastOnce-inputs">
        <TextField
          label="Chance to Win"
          inputProps={{
            type: 'number',
            step: '0.01',
            max: '0.999',
          }}
          onChange={(e) => setChanceToWin(Number(e.target.value))}
          defaultValue={chanceToWin}
          helperText={!validateChanceToWin(chanceToWin) ? '0 < n < 1' : null}
          error={!validateChanceToWin(chanceToWin)}
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
          helperText={!validateTimesToAttempt(timesToAttempt) ? '1 <= n' : null}
          error={!validateTimesToAttempt(timesToAttempt)}
        />
        <Typography variant="h6">{chance}</Typography>
      </div>
    </div>
  );
}

export default AtLeastOnce;
