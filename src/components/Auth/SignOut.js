import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useNavigate } from "react-router-dom";


function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const LogOutModal = ({openIt,closeIt}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(true);
    };

    const navigate = useNavigate();

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
            <Dialog
                open={openIt}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                    LOGOUT
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Sure You Want to Logout ?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={()=>{navigate("/")}}>
                        YES
                    </Button>
                    <Button onClick={closeIt}>NO</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LogOutModal;
