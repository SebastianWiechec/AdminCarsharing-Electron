/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile(props) {
  const classes = useStyles();

  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.id;
    setUser({
      ...user,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const userOld = await api.request(API_TYPES.USER).fetchById("/" + props.match.params.id);
      setUser(userOld.data);
    };

    fetchData();
  }, []);

  async function SendData() {

    user.idUser = props.match.params.id
    console.log(user);
    await api.request(API_TYPES.USER).update(user.idUser, user).then(res => {
      setUser(res.data);
    });

  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="userName"
                    formControlProps={{
                      fullWidth: true,

                    }}
                    labelProps={{
                      shrink: (user.userName) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.userName,
                      

                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.email) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.email
                    }}

                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Phone number"
                    id="phoneNumber"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.phoneNumber) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.phoneNumber,
                      type: "number"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="firstName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.firstName) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.firstName
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="lastName"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.lastName) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.lastName
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.city) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.city
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.country) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.country,

                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postalCode"
                    formControlProps={{
                      fullWidth: true
                    }}
                    labelProps={{
                      shrink: (user.postalCode) ? true : false,
                    }}
                    inputProps={{
                      onChange: handleChange,
                      value: user.postalCode
                    }}
                  />
                </GridItem>
              </GridContainer>

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={SendData} >Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens??? bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
