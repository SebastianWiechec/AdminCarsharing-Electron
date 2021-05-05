/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import api, { API_TYPES } from "../../actions/api";
import { DataGrid } from "@material-ui/data-grid";
import Container from "@material-ui/core/Container";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

export default function CarAvailable(props) {
  const columns = [
    { field: "manuf", headerName: "Manufacturer",  flex: 0.3 },
    { field: "model", headerName: "Model",  flex: 0.3},
    { field: "color1", headerName: "Color",  flex: 0.3},
    { field: "yofProd1", headerName: "Year of Prod.",  flex: 0.3 },
    { field: "priceDay1", headerName: "Price per day",  flex: 0.3},
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));

  const classes = useStyles();
  const [carList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.request(API_TYPES.CAR).fetchAll();
      console.log(request.data);

      const updatedJson = request.data.map(
        ({
          idCar: id,
          manufacturer: manuf,
          model,
          color: color1,
          yofProd: yofProd1,
          kilometers: kilometers1,
          priceDay: priceDay1,
          isAvailable: isAvailable1,
          insurance: insurance1,
          segment: segment1,
          regNumbers: regNumbers1,
          filePath: filePath1,
          techRev: techRev1,
        }) => ({
          id,
          manuf,
          model,
          color1,
          yofProd1,
          kilometers1,
          priceDay1,
          isAvailable1,
          insurance1,
          segment1,
          regNumbers1,
          filePath1,
          techRev1,
        })
      );

      setData(updatedJson.filter((x) => x.isAvailable1 == 1));
    };

    fetchData();
  }, []);
  return (
    <div>
      <GridContainer>
        {" "}
        <Container maxWidth="lg">
          <div style={{ height: 600, marginTop: 80 }}>
            <DataGrid
              rows={carList}
              columns={columns}
              pageSize={10}
              id="idCar"
              hideFooterPagination
            />
          </div>
        </Container>
      </GridContainer>
    </div>
  );
}
