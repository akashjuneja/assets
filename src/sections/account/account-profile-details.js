import { useCallback, useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { borderRadius } from '@mui/system';

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Printer',
    lastName: 'Hardware',
    email: 'demo@gmail.com',
    phone: '',
    state: 'los-angeles',
    country: 'USA'
  });


  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
      
    },
    []
  );

  const [data, setData]=useState({
    set_mms_code:"",
    set_category:"",
    set_device_category:"",
    set_device_sub_category:"",
    set_brand:"",
    set_assets_name:"",
    set_make:"",
    set_model:"",
    set_asset_desc:"",
    set_uom:"",
    set_serial_number:"",
    set_QC_Status:"",
    set_QC_Remarks:"",
    set_QC_DoneBy:"",
    set_done_date:"",
    set_PresentLocationOfAsset:"",
    set_IsAssetInStore:""

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    // http://100.65.0.12:13258/api/Asset
    const url ="http://100.65.0.12:13258/api/Asset"
    
    fetch (url,{
      method: 'POST',
      headers:{
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      },
      body:JSON.stringify(data)
      })
      
      .then(response =>{
      console.log("response=", response)
      
      if(response.state ==200){
      alert("success");
      }
      }).catch(e =>{
      console.log("Error=",e);
      })
    
      }
 
 
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        {/* <CardHeader
        
        /> */}
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                
                  label="MMS Code"
                  name="set_mms_code"
                  onChange={handleChange}
                  type="text"
                  required
                
                  placeholder='MMS Code'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
               
                  label="Category"
                  name="set_category"
                  onChange={handleChange}
                  type="text"
                  required
                
                  placeholder='Category'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               {/* <TextField
                  fullWidth
                  label="Item Category"
                  name="item_category"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
                </Grid>
              <Grid
                xs={12}
                md={6}
              > */}
              <TextField
                  fullWidth
                  // helperText="Device Category"
                  label="Device Category"
                  name="set_device_category"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.firstName}
                  placeholder='Device Category'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
              
                  label="Device Sub Category"
                  name="set_device_sub_category"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.firstName}
                  placeholder='Device Sub Category'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                {/* <TextField
                  fullWidth
                  label="Device Category"
                  name="device_category"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              > */}
             {/* <TextField
                  fullWidth
                  label="Device Sub Category"
                  name="device_sub"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={6}
              > */}
              <TextField
                  fullWidth
                  label="Brand"
                  name="set_brand"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.brand}
                  placeholder='Brand Name'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <TextField
                  fullWidth
                  label="Asset Name"
                  name="set_assets_name"
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder='Asset Name'
                  // value={values.assets_name}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <TextField
                  fullWidth
                  label="Make"
                  name="set_make"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.lastName}
                  placeholder='Make'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <TextField
                  fullWidth
                  label="Model"
                  name="set_model"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.lastName}
                  placeholder='Model'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <TextField
                  fullWidth
                  label="Asset Description"
                  name="set_asset_desc"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.lastName}
                  placeholder='Asset Descriptions'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="UOM"
                  name="set_uom"
                  onChange={handleChange}
                  type="text"
                  required
                  // value={values.email}
                  placeholder='UOM'
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Serial Number"
                  name="set_serial_number"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <TextField
                  fullWidth
                  label="QC Status"
                  name="set_QC_Status"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="QC Remarks"
                  name="set_QC_Remarks"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="QC DoneBy"
                  name="set_QC_DoneBy"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="Done Date"
                  name="set_done_date"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="PresentLocationOfAsset"
                  name="set_PresentLocationOfAsset"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
                  fullWidth
                  label="Is Asset In Store"
                  name="set_IsAssetInStore"
                  onChange={handleChange}
                  type="text"
                  // value={values.phone}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              <Grid
                xs={12}
                md={6}
              ></Grid>
             
              <button className='btn' 
        style={{ color: "black",height
        :"30px",borderRadius:"5px",fontSize:"20px",border:"none",fontWeight:"bold",}}>
        Submit

        </button>

             
                <Grid
                xs={12}
                md={6}
              ></Grid>
                {/* <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              > */}
                {/* <TextField
                  fullWidth
                  label="Is Asset In Store"
                  name="set_IsAssetInStore"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField> */}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
       
          {/* <Button variant="contained" className='btn btn-success'>
          Save details
          </Button> */}
          {/* <center>
        <button className='btn btn-success btn' variant="contained"
        style={{ color: "black",height
        :"30px",borderRadius:"5px",fontSize:"20px",border:"none", }}
        >Submit</button>
        </center> */}
        </CardActions>
      </Card>
    </form>
  );
};
