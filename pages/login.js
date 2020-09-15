import styles from '../styles/Login.module.css'
import Fade from 'react-reveal/Fade';
import {Button,TextField,Typography,Avatar} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useState, useEffect} from 'react';
import {auth,firestore} from '../firebase/firebase.utils';
import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';


function Login() {
    const [userlist, setUserlist] = useState([]);
    const [user, setUser] = useState();
    const [profile, setProfile] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const handleSubmit = event => {
      event.preventDefault();
      console.log(email, password);
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    async function getUsers() {
      var document=[];
      var userdata=[];
      const snapshot = await firestore.collection("users")
      .get();
      snapshot.forEach((doc) => {
        document.push(doc.data());
      });
      userdata = Object.entries(document[0]).map(e => e[1]);
      setUserlist(userdata)
    }

    useEffect(()=>{
        getUsers();
    },[]);

    const handleUser = (event,value) => {
      event.preventDefault();
      setUser(value);
      setEmail(value?.email);
      setProfile(value?.image);
    }
    

    return (
      <div className={styles.container}>
        <Fade bottom>
        <Avatar src={profile} style={{width:100,height:100,margin:30}}/>
        <form className={styles.login} onSubmit={handleSubmit}>
            <Autocomplete
              id="email"
              options={userlist.sort((a, b) => -b.name.localeCompare(a.name))}
              fullWidth
              getOptionLabel={(option) => option.name}
              groupBy={(option) => option.year}
              autoSelect
              getOptionSelected={(option) => option}
              onChange={handleUser}
              renderInput={(params) => <TextField {...params} label="User" variant="outlined" />}
            />
            <TextField id="password" label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={event => setPassword(event.target.value)}/>
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth style={{marginTop:'12px'}} >Login</Button>
            <Button variant="outlined" color="primary" size="large" onClick={handleClickOpen} fullWidth style={{marginTop:'12px'}} >Forgot Password</Button>
        </form>
        </Fade>
        {
          !user?
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Forgot Password ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please Select User First
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      :
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Forgot Password ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"The password reset link will be sent to " + user?.email }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
      }
      </div>
    )
}

export default Login
  