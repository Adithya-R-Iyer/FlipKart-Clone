import React from "react";
import { useState } from "react";
import {Box, Typography, Menu, MenuItem, styled } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin: 10px;
    left: 60%;
    top: -69%;
`

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`


export default function Profile({ account, setAccount }) {
  
    const [open, setOpen] = useState(false);

    const handleClick = (event)=> {
        setOpen(true);   //event.cuurentTarget
    }

    const handleClose = ()=> {
        setOpen(false);
    }

    const logoutUser = ()=> {
        setAccount('');
    }

    return (
    <>
        <Box onClick={handleClick}>
            <Typography style={{ marginTop: 2, cursor: 'pointer'}}>{account}</Typography>
        </Box>
        <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
            <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon>
            <Logout>Logout</Logout>
          </MenuItem>
           </Component>
    </>
  );
}
