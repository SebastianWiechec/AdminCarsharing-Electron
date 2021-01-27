/* eslint-disable no-unused-vars */
import React from "react";
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
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';



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


export default function SpendingNew() {
    
  const classes = useStyles();
 
  const [state, setState] = React.useState({
    cost: ''});
const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add spending</h4>
              <p className={classes.cardCategoryWhite}> Fill required fields</p>
            </CardHeader>
            <CardBody>
              <GridContainer> 

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Select Your Car"
                    id="idCar"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                
                <GridItem>
                    <FormControl required className={classes.formControl}>
                        <InputLabel htmlFor="cost type - required">Cost type</InputLabel>
                        <Select
                        native
                        value={state.cost}
                        onChange={handleChange}
                        name="cost"
                        inputProps={{
                            id: 'cost',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={1}>Tankowanie</option>
                        <option value={2}>Wymiana opon</option>
                        <option value={3}>Wymiana oleju</option>
                        <option value={4}>Ubezpieczenie</option>
                        <option value={5}>Przegląd</option>
                        <option value={6}>Inne</option>

                        </Select>
                        
                    </FormControl>
                    
                </GridItem>

               
              </GridContainer>
              
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Info</Button>
            </CardFooter>
          </Card>
        </GridItem>
     
      </GridContainer>
    </div>
  );
}
