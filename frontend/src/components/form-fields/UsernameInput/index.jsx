import { TextField } from "@mui/material";

import PropTypes from "prop-types";

const UsernameInput = ({ username, setUsername }) => {
    UsernameInput.propTypes = {
        username: PropTypes.string.isRequired,
        setUsername: PropTypes.func.isRequired,
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <TextField
            autoFocus
            required
            margin="dense"
            fullWidth
            id="username"
            name="username"
            type="username"
            label="Nom d'utilisateur"
            value={username}
            onChange={handleChange}
        />
    );
};

export default UsernameInput;
