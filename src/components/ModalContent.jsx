
import {Fragment, useState, useEffect} from 'react'

import {Drawer, Box, Typography, Divider, TextField, CircularProgress, Button, List, ListItem, Skeleton} from '@mui/material'
import { getSuggestions } from './getSuggestions'

export default function ModalContent (props) {

    const [loadingTwilio, setLoadingTwilio]= useState(false)
    const [phone, setPhone] = useState('')
    const [textSent, setTextSent] = useState(false)
    const [image, setImage] = useState(null)

    const [loading, setLoading] = useState(false)

    const [attractions, setAttractions] = useState([''])

    let handleClose = () => {
        props.close()
    }

    const sendTwilioMessage = (e) => {

        e.preventDefault()

        let message = attractions.join('\n')
        
        const accountSid = process.env.REACT_APP_TWILIO_SID;
        const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
        const from = process.env.REACT_APP_FROM_PHONE_NUMBER;
        
        //let imageT = document.getElementById('imageGenerated')
        //console.log(imageT.src)
        const data = new FormData();
        data.append('To', phone);
        data.append('From', from);
        //data.append('Body', 'Here is a copy of your custom ad');
        data.append('Body', `Here is a list of attractions to visit in ${props.choice}\n${message}`);
        //data.append('MediaUrl', 'https://demo.twilio.com/owl.png')
        setLoadingTwilio(true)


        fetch('https://api.twilio.com/2010-04-01/Accounts/' + accountSid + '/Messages.json', {
            method: 'post',
            body: data,
            headers: {
                'Authorization': 'Basic ' + btoa(accountSid + ':' + authToken),
            },
        }).then(response => {
            if (response.ok) {
                setLoadingTwilio(false)
                setTextSent(true)
            } else {
                console.log('Error sending text message: ' + response.status);
            }
        }).catch(error => {
            console.log('Error sending text message: ' + error);
        });
    };

    let generateImage = async () => {
        const apiKey = process.env.REACT_APP_DALLE_API_KEY;

    
        const response = await fetch('https://api.openai.com/v1/images/generations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'image-alpha-001',
            prompt: `painting of ${props.choice}, hyperrealistic`,
            num_images: 1,
            size:'256x256'
          })
        });
      
        const res = await response.json();
        return res.data;

    }
  

    useEffect(() => {

        if (props.open){
            setLoading(true)
            generateImage()
            .then((res) => {

                setImage(res[0].url)
                
                getSuggestions(props.personality, props.choice)
                .then((res) => {
                    setAttractions(res)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err)      
                    setLoading(false)  
                })
           

            })
            .catch((err) => {
                console.log(err)      
                setLoading(false)  
            })
        }
    
    
    }, [props.open])

   
    return (

        <Drawer 
            open={props.open} 
            onClose={handleClose} 
            anchor='right' 
            PaperProps={{
                sx: {
                    background: '#F2EEEE',
                    width: 350,
                    borderRadius: 10, m: 1
                    
                }
            }}
            sx={{color: 'black', borderRadius: 150}}
        >
            <Box sx={{px: 5, pb: 2}}>
                <Typography variant="h6" sx={{color: 'black', mt: 2, textAlign: 'center', fontWeight: 600}}>{props.choice}</Typography>
            </Box>

            <Divider sx={{borderBottom: 'solid 1px black', mx: 2, mb: 2}}/>


            {
                loading ? (
                    <Fragment>

                        <Box sx={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <Skeleton variant="rectangular" width={280} height={280} />
                            <Skeleton variant="text" width={180} height={20} sx={{my: 1}} />
                            <Skeleton variant="rectangular" width={280} height={150} sx={{ borderRadius: 5}}/>
                            
                            <Skeleton variant="text" width={230} height={20} />
                            <Skeleton variant="text" width={200} height={20} />
                            <Skeleton variant="text" width={180} height={20} />
                            <Skeleton variant="rectangular" width={280} height={40} sx={{ borderRadius: 2, my: 1}}/>
                            <Skeleton variant="rectangular" width={100} height={40} />
                            
                        </Box>
                    </Fragment>
                ): (
                    <Fragment>

                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <img
                                src={image}
                                style={{width: '80%', textAlign: 'center', borderRadius: 10}}
                            />
                        </Box>

                        <Typography variant="body1" sx={{color: 'black', mt: 2, textAlign: 'center', fontWeight: 500}}>Your Travel Personality: {props.personality}</Typography>

                        <Box sx={{backgroundColor: 'rgba(0, 68, 15, 1)', color: 'white', m: 2, borderRadius: 10, p: 1}}>
                            <Typography variant="body1" sx={{textAlign: 'center', fontWeight: 600, textTransform: 'uppercase', pt: 1}} >Attractions</Typography>
                        
                            <List sx={{m: 2}}>
                    
                                {
                                    attractions.map((element, i) => (
                                        <ListItem key={i}>
                                            <Typography>{element}</Typography>
                                        </ListItem>
                                        
                                    ))
                                }
                                        
                            </List>
                    
                        </Box>

                        <Box sx={{pb: 5}}>
            
                            <Typography variant="body1" sx={{textAlign: 'center', color: 'rgba(0, 68, 15, 1)', mb: 1}}>
                                Save them on your phone!
                            </Typography>


                            {
                                !textSent ? (
                                    <Box>

                                        <Typography variant="body2" sx={{textAlign: 'center', color: 'rgba(0, 68, 15, 1)'}}>
                                            Please use this telephone format: 1234567890
                                        </Typography>
                            
                                        <form onSubmit={sendTwilioMessage} style={{ color: 'rgba(0, 68, 15, 1)',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                            <TextField 
                                                value={phone}
                                                type='tel' 
                                                sx={{my: 2}}
                                                InputProps={{
                                                    sx: {
                                                        color: 'rgba(0, 68, 15, 1)',
                                                        borderRadius: 3,
                                                        fontSize: '0.8rem'
                                                    }
                                                }}
                                                required
                                                onChange={(e) => setPhone(e.target.value)}
                            
                                            />
                                            <Button disabled={loadingTwilio} sx={{textAlign: 'center', width: 100, backgroundColor: 'rgba(0, 68, 15, 1)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(0, 68, 15, 1)',
                                                    border: 'solid 1px white'
                                                }}} variant="contained" 
                                                type="submit"
                                            >
                                                {
                                                    !loadingTwilio ? (
                                                        'Send'
                                                    ): (
                                                        <CircularProgress size={25} sx={{color: 'white'}}/>
                                                    )
                                                }
                                            </Button>
                                        </form>

                                    </Box>
                                ): (
                                    <Typography variant="body1" sx={{textAlign: 'center', py: 2, color: 'black'}}>
                                        Text message successfully sent!
                                    </Typography>
                                )
                            }
                        </Box>

                </Fragment>
                )
            }
        </Drawer>

   
    )
}