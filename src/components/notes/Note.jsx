import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';

const Note = ({ note }) => {
    return (
        <Card>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    )
}

export default Note;