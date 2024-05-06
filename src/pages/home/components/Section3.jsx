import { Stack } from '@mui/joy';
import Link from "../../../components/layout/LinkComponentWithLine";

const Section3 = () => {
    return (
        <Stack component="section">
            <Link to="/clothes" children="Explorar" className="box" />
        </Stack>
    );
}

export default Section3;