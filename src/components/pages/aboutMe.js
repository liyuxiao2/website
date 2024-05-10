import { IconButton, Typography } from '@mui/material';
import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Stack } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import bookimage1 from '../../Images/1984.jpeg';
import bookimage2 from '../../Images/Yellowface.jpg';
import bookimage3 from '../../Images/babel.jpeg';



const AboutMe = () => {
    return (
        <Stack sx = {{padding: '80px'}} direction="row" spacing={10} justifyContent="center">
            <Stack direction="column" spacing={1}>
                <Typography 
                variant="h5"
                textAlign="center"
                sx={{
                  fontFamily: "body1",
                  color: "black",
                  fontWeight: "700",
                  zIndex: 1,
                }}
                > 
                What I'm listening to
                </Typography>
                <iframe
                    title="Spotify Player"
                    src="https://open.spotify.com/embed/track/5hVghJ4KaYES3BFUATCYn0?"
                    width="100%"
                    height="360"
                    frameBorder="0"
                    allow="encrypted-media"
                ></iframe>
            </Stack>

            <Stack direction="column" spacing={1}>
                <Typography 
                    variant="h5"
                    textAlign="center"
                    sx={{
                    fontFamily: "body1",
                    color: "black",
                    fontWeight: "700",
                    zIndex: 1,
                    }}
                    > 
                    Favorite Books
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent'}}>
                    <ListItem>
                        <ListItemAvatar>
                            <a href = "https://www.goodreads.com/book/show/56196795-1984">
                                <Avatar sx = {{ width: 100, height: 100}}>
                                    <img src = {bookimage1} alt = "no" style ={{width:'100%', height: 'auto'}} />
                                </Avatar>
                            </a>
                        </ListItemAvatar>
                        <ListItemText primary="1984: George Orwell" secondary="Read: March 13, 2023" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <a href = "https://www.goodreads.com/book/show/62047984-yellowface?from_search=true&from_srp=true&qid=6MKhX6o5XS&rank=2">
                                <Avatar sx = {{ width: 100, height: 100}}>
                                    <img src = {bookimage2} alt = "no" style ={{width:'100%', height: 'auto'}} />
                                </Avatar>
                            </a>
                        </ListItemAvatar>
                        <ListItemText primary="Yellow Face: RF Kuang" secondary="Read: December 27, 2023" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <a href = "https://www.goodreads.com/book/show/57945316-babel">
                                <Avatar sx = {{ width: 100, height: 100}}>
                                        <img src = {bookimage3} alt = "no" style ={{width:'100%', height: 'auto'}} />
                                </Avatar>
                            </a>
                        </ListItemAvatar>
                        <ListItemText primary="Babel: RF Kuang" secondary="Currently Reading!" />
                    </ListItem>
                </List>
            </Stack>

            


            
            <Stack direction="column" spacing={1}> 
                    <Typography variant="h5"
                        textAlign="center"
                        sx={{
                        fontFamily: "body1",
                        color: "black",
                        fontWeight: "700",
                        zIndex: 1,
                        }}
                    >
                        Current Work in Progress!
                    </Typography>

                    <a href="https://github.com/liyuxiao2/python-game"> <img src="https://cdn.dribbble.com/users/1035257/screenshots/4835179/media/1d639a0b1458a1b300aea36206e99c8c.gif"  alt="Space invaders" border="0" width={400} height={400}/></a>
            </Stack>
        </Stack>
    );
};

export default AboutMe;


