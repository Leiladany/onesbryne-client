import { Stack } from '@mui/joy';
import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../../components/layout/ButtonComponent';

const Section3 = () => {
  return (
    <Stack component="section">
      <ButtonComponent component={Link} to="/clothes" children="Explorar" />
    </Stack>
  );
};

export default Section3;
