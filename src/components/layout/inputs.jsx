import { Box, Divider, Input, Option, Select, Stack } from '@mui/joy';

export const Inputs = ({
  type,
  value,
  setValue,
  placeholder,
  required,
  onIconClick = null,
  iconSrc = null,
  options = [],
}) => {
  return (
    <>
      {type === 'dropdown' ? (
        <Select
          variant="plain"
          type={type}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          required={required}
          placeholder="Selecione uma opção..."
        >
          {options.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      ) : (
        <Stack sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <Input
            variant="plain"
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            required={required}
          />
          {iconSrc && (
            <Box
              onClick={onIconClick}
              sx={{
                cursor: 'pointer',
                position: 'absolute',
                right: 0,
              }}
            >
              {iconSrc}
            </Box>
          )}
        </Stack>
      )}
      <Divider sx={{ backgroundColor: 'neutral.700' }} />
    </>
  );
};
