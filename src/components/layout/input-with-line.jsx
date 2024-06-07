import { Box, Divider, Input, Stack } from '@mui/joy';

export const InputWithLine = ({
  type,
  value,
  setValue,
  placeholder,
  required,
  onIconClick = null,
  iconSrc = null,
}) => {
  console.log(value)
  return (
    <>
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
      <Divider sx={{ backgroundColor: 'neutral.700' }} />
    </>
  );
};
