import * as React from 'react';
import AccountHeader from '../components/common/AccountHeader';
import { Grid, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

function EditPlants() {
    return (
        <div className="EditPlants"> 
            <AccountHeader />
            <Grid
                container
                style = {{ marginTop: '10vh', marginBottom: '20vh' }}
                justifyContent ="center"
                alignItems = "stretch"
                direction = "row"
            >
                <Grid item xs={12}>
                    <h2>Edit Plants</h2>
                </Grid>

                <Card sx={{ maxWidth: 300, backgroundColor: '#e1e1e1', borderRadius:5, padding:3, margin:2 }}>
                    <CardMedia
                        component="img"
                        alt="Placeholder Image"/*prop later?*/
                        height="250"
                        src="./Pages/images/image-placeholder.png"/*prop later?*/
                        sx={{ border:1, borderColor:"white", borderRadius:3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Plant Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
                        <Button component={Link} to='/edit-list' sx={{ marginBottom:2 }} variant="outlined" size="small">Edit Plants In This Category</Button>
                        <Button component={Link} to='/edit-page' variant="outlined" size="small">Edit Category</Button>
                        
                    </CardActions>

                </Card>

                <Card sx={{ maxWidth: 300, backgroundColor: '#e1e1e1', borderRadius:5, padding:3, margin:2 }}>
                    <CardMedia
                        component="img"
                        alt="Placeholder Image"/*prop later?*/
                        height="250"
                        src="./Pages/images/image-placeholder.png"/*prop later?*/
                        sx={{ border:1, borderColor:"white", borderRadius:3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Plant Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
                        <Button component={Link} to='/edit-list' sx={{ marginBottom:2 }} variant="outlined" size="small">Edit Plants In This Category</Button>
                        <Button component={Link} to='/edit-page' variant="outlined" size="small">Edit Category</Button>
                        
                    </CardActions>

                </Card>

                <Card sx={{ maxWidth: 300, backgroundColor: '#e1e1e1', borderRadius:5, padding:3, margin:2 }}>
                    <CardMedia
                        component="img"
                        alt="Placeholder Image"/*prop later?*/
                        height="250"
                        src="./Pages/images/image-placeholder.png"/*prop later?*/
                        sx={{ border:1, borderColor:"white", borderRadius:3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Plant Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
                        <Button component={Link} to='/edit-list' sx={{ marginBottom:2 }} variant="outlined" size="small">Edit Plants In This Category</Button>
                        <Button component={Link} to='/edit-page' variant="outlined" size="small">Edit Category</Button>
                        
                    </CardActions>

                </Card>

                <Card sx={{ maxWidth: 300, backgroundColor: '#e1e1e1', borderRadius:5, padding:3, margin:2 }}>
                    <CardMedia
                        component="img"
                        alt="Placeholder Image"/*prop later?*/
                        height="250"
                        src="./Pages/images/image-placeholder.png"/*prop later?*/
                        sx={{ border:1, borderColor:"white", borderRadius:3 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Plant Category
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Description
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display:"flex", flexDirection:"column", alignContent:"center" }}>
                        <Button component={Link} to='/edit-list' sx={{ marginBottom:2 }} variant="outlined" size="small">Edit Plants In This Category</Button>
                        <Button component={Link} to='/edit-page' variant="outlined" size="small">Edit Category</Button>
                        
                    </CardActions>

                </Card>

             
            </Grid>
        </div>
    
    );
  }

  export default EditPlants;
