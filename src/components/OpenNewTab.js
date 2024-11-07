import { IconButton } from '@mui/material';
import OpenInNew from '@mui/icons-material/OpenInNew';

const OpenNewTab = () => {
    return (
        <IconButton aria-label="Open in new tab" component="a" color="primary" size="small">
            <OpenInNew />
        </IconButton>
    )
}

export default OpenNewTab;