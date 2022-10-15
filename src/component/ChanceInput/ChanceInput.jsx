import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const validateChanceToWin = (number) => number > 0 && number < 1;

function ChanceInput({ id, value, onChange }) {
  return (
    <TextField
      label="Chance"
      inputProps={{
        type: 'number',
        step: '0.01',
        max: '0.999',
      }}
      onChange={(e) => onChange(id, Number(e.target.value))}
      defaultValue={value}
      helperText={!validateChanceToWin(value) ? '0 < n < 1' : null}
      error={!validateChanceToWin(value)}
    />
  );
}

ChanceInput.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChanceInput;
