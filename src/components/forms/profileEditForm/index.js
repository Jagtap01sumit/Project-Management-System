import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getTeams } from "@/redux/actions/admin/teamAction";

const ProfileEditForm = ({ id, formData, saveEmployee }) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
    watch,
  } = formData;

  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.teamReducer);
  const [defaultChecked, setDefaultChecked] = useState(false);

  useEffect(() => {
    setDefaultChecked(getValues("profileEdit.isManager"));
  }, [watch("profileEdit")]);

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const handleTeamChange = (selectedTeams) => {
    setValue("profileEdit.teams", selectedTeams);
  };

  return (
    <>
      {/* <Typography variant="h1" className="fw-semibold">
        Employee Details
      </Typography>
      <Box mt={4}>
        <Box p={2} className="empDetail">
          <Grid container></Grid> */}
      <Typography variant="h1" className="fw-semibold">
        Employee Details
      </Typography>
      <Box mt={4} className="empDetail">
        <Grid container>
          <Grid item xs={12} sm={10} className="d-flex align-items-center">
            <Box px={2} mt={2}>
              <Box>
                <Typography variant="h3" className="fw-medium">
                  Personal Information*
                </Typography>
              </Box>
              <Box mt={2} className="d-flex align-items-center justify-center">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      variant="outlined"
                      // // label="First Name"
                      name="firstName"
                      fullWidth
                      {...register("profileEdit.firstName")}
                    />
                    {errors && errors.firstName && errors.firstName.message ? (
                      <Typography className="text-danger">
                        {errors.firstName.message}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      variant="outlined"
                      // // label="Last Name"
                      name="lastName"
                      fullWidth
                      {...register("profileEdit.lastName")}
                    />
                    {errors && errors.lastName && errors.lastName.message ? (
                      <Typography className="text-danger">
                        {errors.lastName.message}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="email"
                      variant="outlined"
                      // // label="Email"
                      name="email"
                      fullWidth
                      {...register("profileEdit.email")}
                    />
                    {errors && errors.email && errors.email.message ? (
                      <Typography className="text-danger">
                        {errors.email.message}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="tel"
                      variant="outlined"
                      // label="Contact Number"
                      name="phone"
                      fullWidth
                      {...register("profileEdit.phone")}
                    />
                    {errors && errors.phone && errors.phone.message ? (
                      <Typography className="text-danger">
                        {errors.phone.message}
                      </Typography>
                    ) : null}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      variant="outlined"
                      fullWidth
                      // label="Dersignation"
                      name="designation"
                      {...register("profileEdit.designation")}
                    />
                    {errors &&
                    errors.designation &&
                    errors.designation.message ? (
                      <Typography className="text-danger">
                        {errors.designation.message}
                      </Typography>
                    ) : null}
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {teams &&
                      teams !== null &&
                      teams !== undefined &&
                      teams !== "" &&
                      teams.length > 0 && (
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-// label">
                            Select Teams
                          </InputLabel>
                          <Select
                            multiple
                            fullWidth
                            value={watch("profileEdit.teams") || []}
                            onChange={(e) => handleTeamChange(e.target.value)}
                            // label="Select Teams"
                          >
                            {teams.map((team) => (
                              <MenuItem key={team._id} value={team._id}>
                                {team.teamName}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          {...register("profileEdit.isManager")}
                          defaultChecked={defaultChecked}
                        />
                      }
                      label="Make this employee manager?"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className="btn--dark"
                      type="button"
                      onClick={handleSubmit(saveEmployee)}
                      sx={{
                        width: "15rem",
                        "@media only screen and (max-width: 600px)": {
                          width: "100%",
                        },
                      }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileEditForm;
