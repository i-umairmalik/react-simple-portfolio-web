import React from "react"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const RightDrawer = (props) =>{
    return(
        <SwipeableDrawer
            anchor= "left"
            open  = {props.open}
            onClose = {()=> props.onClose(false)}
            onOpen ={()=> props.onOpen(true)}
        >
            <List component="nav">
                <ListItem button onClick={()=>console.log("Event")}>
                    Event Starts In 
                </ListItem>
                <ListItem button onClick={()=>console.log("Venue Info")}>
                   Venue Info
                </ListItem>
                <ListItem button onClick={()=>console.log("HighLight")}>
                    HighLights
                </ListItem>
                <ListItem button onClick={()=>console.log("Pricing")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>console.log("Location")}>
                    Location
                </ListItem>
            </List>
        </SwipeableDrawer>
    )
}

export default RightDrawer;