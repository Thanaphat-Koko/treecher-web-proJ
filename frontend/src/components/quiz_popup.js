import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, createTheme, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CancelIcon from '@mui/icons-material/Cancel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Quiz_popup(props) {

  const theme = createTheme()

  return (
    <Box>
      <Dialog 
        open={props.Open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleclose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{display:"flex"}}>
          {"บันทึกการรดน้ำต้นไม้ครั้งที่ 1"}
          <IconButton  aria-label="CancelIcon" size="small"  color="error"  onClick={props.handleclose} sx={{  
                paddingleft: theme.spacing(3), marginBottom: theme.spacing(3), marginLeft: { xs: theme.spacing(5) ,md: theme.spacing(8) }, 
                 borderRadius: 3 }}>
            <CancelIcon /> 
          </IconButton>
        </DialogTitle>
        <DialogContent>
          
        <Box component='div'
         sx={{ textAlign : 'center'}}>
            <DialogContentText id="alert-dialog-slide-description">
            วันนี้นักเรียนรดน้ำต้นไม้แล้วหรือยังคะ
            </DialogContentText>
        </Box>
        <Box component='div'
         sx={{ textAlign : 'center'}}>
            <Box component='img' 
              src="https://www.img.in.th/images/83b7c243c2ca76e853ca96df4c2e3514.png" 
              alt="quiztree.png" 
              sx ={{ width: { xs: 150 , md: 225} , height: { xs: 150, md: 225 }}}
              />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button startIcon = {<CheckCircleOutlineIcon/>} variant="contained" color="success" onClick={props.clickcheckpoint}>ยืนยัน</Button>
          <Button startIcon = {<DoNotDisturbAltIcon/>} variant="contained" color="error" onClick={props.handleclose}>ยกเลิก</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Quiz_popup