import { Divider, MenuItem, Select } from '@mui/joy';

export const SelectWithLine = ({
  type,
  value,
  setValue,
  required,
  options,
}) => {
  return (
    <>
      <Select
        variant="plain"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        placeholder="Select..."
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <Divider sx={{ backgroundColor: 'neutral.700' }} />
    </>
  );
};
