import { Button, Stack, Typography } from '@mui/material';
import './AtLeastOnceMultiple.scss';
import { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChanceInput from '../ChanceInput/ChanceInput';

const round = (number) => number.toFixed(2);
let nextId = 0;

const calculateResult = (chances) => round(
  1 - chances.map(
    (c) => 1 - c.value,
  ).reduce(
    (v1, v2) => v1 * v2,
  ),
);

function AtLeastOnceMultiple() {
  const [chances, setChances] = useState([{ id: nextId, value: 0.5 }]);
  const result = calculateResult(chances);

  const addChance = () => {
    setChances(
      [
        ...chances,
        { id: nextId += 1, value: chances[chances.length - 1].value },
      ],
    );
  };

  const changeChance = (chanceId, newValue) => {
    setChances(
      chances.map((chance) => {
        if (chance.id === chanceId) {
          return { ...chance, value: newValue };
        }
        return chance;
      }),
    );
  };

  const chanceInputList = chances.map((chance) => (
    <ChanceInput
      onChange={changeChance}
      id={chance.id}
      value={chance.value}
      key={chance.id}
    />
  ));

  return (
    <Stack spacing={1} className="AtLeastOnceMultiple">
      <div className="AtLeastOnceMultiple-inputs">
        {chanceInputList}
        <Button variant="outlined" onClick={addChance}>
          <AddBoxIcon />
        </Button>
      </div>
      <Typography variant="h6">{result}</Typography>
    </Stack>
  );
}

export default AtLeastOnceMultiple;
