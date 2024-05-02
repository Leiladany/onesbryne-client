import { Stack } from '@mui/joy';
import LinkComponent from "../../../components/layout/link/Link";

const Section3 = () => {
    return (
        <Stack component="section">
            <LinkComponent to="/clothes" children="Explorar" className="box" />
        </Stack>
    );
}

export default Section3;