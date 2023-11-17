import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

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
import QRCode from 'react-qr-code';

export const AccountProfileDetails = () => {
  const router = useRouter();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // as api is not working
      // const response = await fetch(url, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // 'Access-Control-Allow-Origin': '*' // Remove this line
      //   },
      //   body: JSON.stringify(data)
      // });
  
      const response=await sendMockData();
      console.log("response =", response);
  
      if (response.status === 200) {
        const responseData = await response.json(); // assuming the response is JSON
        alert("Success");
        console.log("Data =", responseData);
        router.push("/listAsset")
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error("Error =", error);
      alert("Error: " + error.message);
    }
  }
  
  const sendMockData=async ()=>{
    const data={
    UniqueAssetID: "205",
	MMSCode: "1295",
	Category: "LCD",
	DeviceCategory: "TEST5",
	DeviceSubCategory: "123",
	Brand: "11",
	AssetName: "237",
	Make: "120",
	Model: "TEST1",
	AssetDescription: "TEST2",
	UOM: "TEST21",
	AssetSerialNumber: "TEST22",
	QC_Status: "TEST23",
	QC_Remarks: "TEST24",
	QC_DoneBy: "Prashant",
	QC_DoneDate: "10-10-2023",
	PresentLocationOfAsset: "Canteen Store",
	IsAssetInStore: "1"
    }
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({status:200,json:()=>Promise.resolve(data)})
      },2000)
    })
  }


 
 
  return (
    <form onSubmit={handleSubmit}>
      <div className='d-flex flex-column'>
        <h1>Create Asset</h1>
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
              <div className='d-flex flex-column align-items-center ' >
              <button className='btn btn-primary' 
        style={{ color: "#111927", backgroundColor:"rgb(99, 102, 241)",height
        :"40px", width:"200px", margin:'18px',borderRadius:"3px",fontSize:"20px",border:"none"}}>
        Submit

        </button>
        </div>
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
      </div>
    </form>
  );
};
