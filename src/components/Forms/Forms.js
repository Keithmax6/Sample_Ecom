import React from 'react'
import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';
import styled from '@emotion/styled';


const Forms = ({label,onChange,value,style,onClick,id,placeholder}) => {
    return (
        <React.Fragment>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '29ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id={id} label={label} variant="outlined" placeholder={placeholder} />
            </Box>
        </React.Fragment>
    )
}


export default Forms