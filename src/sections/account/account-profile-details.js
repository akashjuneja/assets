import { useState } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import QRCode from "react-qr-code";
import CircularProgress from "@mui/material/CircularProgress";

export const AccountProfileDetails = () => {
  const [isLoading, setLoading] = useState(false);

  const [isQRVisible, setQRVisible] = useState(false);
  const [assetId, setAssetId] = useState("");
  const [qrTitle, setQRTitle] = useState("");
  const [errorData, setErrorData] = useState(false);
  const [data, setData] = useState({
    set_mms_code: "",
    set_category: "",
    set_device_category: "",
    set_device_sub_category: "",
    set_brand: "",
    set_assets_name: "",
    set_make: "",
    set_model: "",
    set_asset_desc: "",
    set_uom: "",
    set_serial_number: "",
    set_QC_Status: "",
    set_QC_Remarks: "",
    set_QC_DoneBy: "",
    set_done_date: "",
    set_PresentLocationOfAsset: "",
    set_IsAssetInStore: "",
  });
  const handleSubmit = async (e) => {
    const url = "http://100.65.0.12:13258/api/Asset";
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // const response = await sendMockData();

      if (response.status === 200) {
        const responseData = await response.json();
        console.log("Data =", responseData);

        if (responseData?.UniqueAssetID) {
          const concatenatedString = `MMS CODE:${responseData?.MMSCode},CATEGORY:${responseData?.Category},QC STATUS:${responseData?.QC_Status},QC DONE BY:${responseData?.QC_DoneBy}`;
          setQRTitle(concatenatedString);
          setAssetId(responseData?.UniqueAssetID);
          setQRVisible(true);
        } else {
          setErrorData(true);
          setQRVisible(true);
          toast.error("Some Error Occured with Unique Asset Id");
        }
      } else {
        toast.error(`Failed to Submit ,Please try Again`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error =", error);
      toast.error(`Error: ${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendMockData = async () => {
    const data = {
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
      IsAssetInStore: "1",
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 200, json: () => Promise.resolve(data) });
      }, 2000);
    });
  };

  const downloadQRCode = () => {
    const qrCodeContainer = document.getElementById("qrCodeContainer");

    if (qrCodeContainer) {
      htmlToImage
        .toPng(qrCodeContainer)
        .then((dataUrl) => {
          // Trigger download
          download(dataUrl, "qr-code.png");
        })
        .catch((error) => {
          console.error("Error generating QR code image", error);
        });
    }
  };

  const handleFieldChange = (fieldName) => (e) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };
  const returnToBack = () => {
    setQRVisible(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column">
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <CircularProgress color="inherit" />
              <h6>Loading</h6>
            </div>
          </div>
        ) : isQRVisible ? (
          <div
            id="qrCodeContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Generated QR</h1>
            <QRCode value={assetId} title={qrTitle} size={300} />
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <Button
                onClick={returnToBack}
                variant="contained"
                style={{
                  height: "40px",
                  width: "200px",
                  margin: "18px",
                }}
              >
                Back
              </Button>
              <Button
                onClick={downloadQRCode}
                variant="contained"
                style={{
                  height: "40px",
                  width: "200px",
                  margin: "18px",
                }}
              >
                Download QR Code{" "}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Create Asset</h1>
            <Card>
              <CardContent sx={{ pt: 0 }}>
                <Box sx={{ m: -1.5 }}>
                  <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="MMS Code"
                        name="set_mms_code"
                        onChange={handleFieldChange("set_mms_code")}
                        type="text"
                        required
                        placeholder="MMS Code"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Category"
                        name="set_category"
                        onChange={handleFieldChange("set_category")}
                        type="text"
                        required
                        placeholder="Category"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Device Category"
                        name="set_device_category"
                        onChange={handleFieldChange("set_device_category")}
                        type="text"
                        required
                        placeholder="Device Category"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Device Sub Category"
                        name="set_device_sub_category"
                        onChange={handleFieldChange("set_device_sub_category")}
                        type="text"
                        required
                        placeholder="Device Sub Category"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Brand"
                        name="set_brand"
                        onChange={handleFieldChange("set_brand")}
                        type="text"
                        required
                        placeholder="Brand Name"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Asset Name"
                        name="set_assets_name"
                        onChange={handleFieldChange("set_assets_name")}
                        type="text"
                        required
                        placeholder="Asset Name"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Make"
                        name="set_make"
                        onChange={handleFieldChange("set_make")}
                        type="text"
                        required
                        placeholder="Make"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Model"
                        name="set_model"
                        onChange={handleFieldChange("set_model")}
                        type="text"
                        required
                        // value={values.lastName}
                        placeholder="Model"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Asset Description"
                        name="set_asset_desc"
                        onChange={handleFieldChange("set_asset_desc")}
                        type="text"
                        required
                        placeholder="Asset Descriptions"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="UOM"
                        name="set_uom"
                        onChange={handleFieldChange("set_uom")}
                        type="text"
                        required
                        placeholder="UOM"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Serial Number"
                        name="set_serial_number"
                        onChange={handleFieldChange("set_serial_number")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="QC Status"
                        name="set_QC_Status"
                        onChange={handleFieldChange("set_QC_Status")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="QC Remarks"
                        name="set_QC_Remarks"
                        onChange={handleFieldChange("set_QC_Remarks")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="QC DoneBy"
                        name="set_QC_DoneBy"
                        onChange={handleFieldChange("set_QC_DoneBy")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Done Date"
                        name="set_done_date"
                        onChange={handleFieldChange("set_done_date")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="PresentLocationOfAsset"
                        name="set_PresentLocationOfAsset"
                        onChange={handleFieldChange("set_PresentLocationOfAsset")}
                        type="text"
                      />
                    </Grid>
                    <Grid xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Is Asset In Store"
                        name="set_IsAssetInStore"
                        onChange={handleFieldChange("set_IsAssetInStore")}
                        type="text"
                      />
                    </Grid>
                    <div className="d-flex flex-column align-items-center ">
                      <Button
                        variant="contained"
                        type="submit"
                        style={{
                          height: "40px",
                          width: "200px",
                          margin: "18px",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </Grid>
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: "flex-end" }}></CardActions>
            </Card>
          </div>
        )}
      </div>
    </form>
  );
};
