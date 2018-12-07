import React, { Component } from 'react';
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import LeDrawer from "./leftDrawer";
class LeftDrawer extends Component {
    constructor(props){
        super(props);
        this.state={
            drawerOpen: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = (value) =>{
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <React.Fragment>
                <IconButton
                    aria-label = "Menu"
                    color = "inherit"
                    onClick = {()=>this.toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <LeDrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=>this.toggleDrawer(value)}
                    onOpen = {(value) => this.toggleDrawer(value)}
                />
            </React.Fragment>
        );
    }
}

export default LeftDrawer;
