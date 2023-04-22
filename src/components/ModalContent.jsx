
import {Fragment} from 'react'

import {Drawer, Box, Typography} from '@mui/material'

export default function ModalContent (props) {

    let handleClose = () => {
        props.close()
    }

    return (

        <Drawer 
            open={props.open} 
            onClose={handleClose} 
            anchor='right' 
            PaperProps={{
                sx: {
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(61, 57, 57, 0))'
                }
            }}
            sx={{width: 1500, color: 'white'}}
        >
            <Box sx={{px: 5, pb: 2}}>
                <Typography variant="h6" sx={{color: 'white', mt: 2, textAlign: 'center'}}>{props.choice}</Typography>
            </Box>
        </Drawer>

   
    )
}