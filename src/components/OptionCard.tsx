import { Card, CardHeader,CardContent, Typography, CardActions, Button, Modal, Box } from '@mui/material';
import { useState } from 'react';


// interface Option{
//     name: string,
//     guid: string;
//     // price: number,
//     description: string
// }

const styles = {
    borderRadius: '15px',
    width: '250px',
    '&:hover': { // Đổi giá trị để có sự thay đổi rõ ràng
      border: "2px solid #84C7E7",
    },
    '&:focus': {
      border: "2px solid #84C7E7",
    },
  };
  

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid gray',
    boxShadow: 24,
    p: 4,

    // borderRadius: '10px'
};


function OptionCard({option, handleClick}:any): JSX.Element {

    const [open, setOpen] = useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return (
        <Card tabIndex={0} sx={styles} onClick ={handleClick} >
            {/* <CardActionArea > */}
            <CardHeader
            title={option.name}
            />
            <CardContent>
            <Typography variant="body2" >
                {option.summary}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Xem chi tiết</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {option.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {option.description}
                    </Typography>
                    </Box>
                </Modal>
            </CardActions>
            {/* </CardActionArea> */}
        </Card>
    )
}

export default OptionCard