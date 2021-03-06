 import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import ProfileCard from "./ProfileCard"
import { fetchSingleUser } from "../../store/singleUser";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar"
import {withStyles} from "@mui/styles";
import CustomCircularProgress from "../../shared/components/CustomCircularProgress";
import QuizPopup from "../../components/QuizPopup";
import NotFound from "../../components/NotFound";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import Image from "../assets/images/facebook1.png"


const breakpoints = {
  xl: 1920,
  lg:  1280,
  md: 960,
  sm:  600,
  xs: 0
}

const Header = (props, {children}) => {
  const {
    firstName,
    lastName,
    jobTitle,
    industry,
    profilePic,
    intakeScore
  } = props

  // images
  const defaultImage = "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png"
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true)


  // // fetch single user
  // useEffect(() => {
  //   if (loading) {
  //     return (
  //     <div>
  //       <CustomCircularProgress />
  //     </div>
  //     )
  //   }
  //   // retrieve single user from thunk
  //   dispatch(fetchSingleUser());

  // }, [firstName,
  //   lastName,
  //   jobTitle,
  //   industry,
  //   profilePic,
  //   intakeScore,]);


  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }
    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <Box className="profile-root">
      <Box
        className="profile-background-container">

        <Card
        id="profile-header-card"
      /* spacing shorthand margin and padding props {property}{sides} */

      >
      <Grid container spacing={3} alignItems="center" position="relative">
        <Grid item padding="24px 0">
          <Avatar
            className="profile-avatar"
            src={profilePic}
            alt={defaultImage}
            sx= {{width: 200, height: 200, }}
          />
          </Grid>
          <Grid item padding="24px" sx={{ml: "24px"}}>
            <Box height="100%" mt={0.5} lineHeight={1} alignItems="center">
              <Typography className="profile-header-text" variant="h5" fontWeight="medium" >
                {firstName} {lastName}
              </Typography>
              <Typography variant="button" color="text" fontWeight="light"  textTransform="capitalize" backgroundColor="transparent">
                {jobTitle + " / " + industry}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ m: "auto"}} position="absolute" bottom={0} right={0}  >
          <AppBar position="static" sx={{background: "transparent", boxShadow: "none", flexBasis: "auto"}}>
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue} sx={{justifyContent: "center"}}>
                <Tab
                  className="github"
                  fontSize="small"
                  sx={{ mt: -0.25 }}
                  // link= "https:github.com/carlysandler"
                  icon={
                    <GitHubIcon />
                  }
                />
                <Tab
                  className="linkedin"
                  fontSize="small"
                  sx={{ mt: -0.25 }}
                  // link="https://www.linkedin.com/in/carlysandler/"
                  icon={
                    <LinkedInIcon />
                  }
                />
                <Tab
                  className="instagram"
                  fontSize="small"
                  sx={{ mt: -0.25 }}
                  icon={
                   <InstagramIcon />
                  }
                />
                <Tab
                  className="twitter"
                  fontSize="small"
                  sx={{ mt: -0.25 }}
                  icon={
                   <TwitterIcon />
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </Card>
    </Box>
  </Box>
  );
}
Header.defaultProps = {
  children: ""
}


Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  intakeScore: PropTypes.number.isRequired,
  industry: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  children: PropTypes.node

};

export default (Header);
