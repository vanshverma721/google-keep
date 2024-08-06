import { React, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';

import Archive from './Archive';
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext)

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container style={{ marginTop: 16 }}>
                    {
                        archiveNotes.map(note => (
                            <Grid item>
                                <Archive note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box >
    )
}

export default Archives;