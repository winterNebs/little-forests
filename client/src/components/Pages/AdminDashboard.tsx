import * as React from 'react';
import ProfileContainerLeft from '../ProfileContainerLeft';
import { Container, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div className="AdminDashboard">
            <ProfileContainerLeft />
            <Container className="EditingFeatures" 
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginLeft:9 }}
            >
                <Box
                    sx={{
                        width:300, height:250, 
                        backgroundColor:'primary.dark', 
                        borderRadius:5,
                        margin:5, marginTop:1,
                        padding:3,
                        display:'flex', flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'flex-end'
                    }}
                >
                    <Typography variant='body1' sx={{ color:'white', padding:2 }}>To edit or add plant categories and plant pages.</Typography>
                    <Button component={Link} to='/edit-plants' variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4 }}>Edit Plants</Button> 
                </Box>
                
                <Box
                    sx={{
                        width:300, height:250, 
                        backgroundColor:'primary.dark', 
                        borderRadius:5,
                        margin:5, marginTop:1,
                        padding:3,
                        display:'flex', flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'flex-end'
                    }}
                >
                    <Typography variant='body1' sx={{ color:'white', padding:2 }}>To edit or add forest types and site conditions.</Typography>
                    <Button component={Link} to='/edit-forests' variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4 }}>Edit Forests</Button> 
                </Box>
                
            </Container>
            
        </div>
    
    );
  }

  export default AdminDashboard;


