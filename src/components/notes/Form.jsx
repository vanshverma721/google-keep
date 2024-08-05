import React from 'react'
import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    padding: 10px 15px;
`

const Form = () => {
    return (
        <Container>
            <TextField
                placeholder="Title"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                style={{ marginBottom: 10 }}
            />
            <TextField
                placeholder="Take a note..."
                multiline
                maxRows={Infinity}
                variant="standard"
                InputProps={{ disableUnderline: true }}
            />
        </Container>
    )
}

export default Form