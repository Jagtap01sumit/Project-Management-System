import React from "react";
import { useRouter } from "next/router";
import { Button, Container, Grid, Stack, Box, Typography } from "@mui/material";
import Link from "next/link";
import { CustomerReview } from "@/components";

const index = () => {
  const router = useRouter();
  return (
    <>
      <header>
        <Container maxWidth="xxl">
          <Grid container justifyContent="center">
            <Grid item xs={12} lg={11}>
              <nav className="navbar ">
                <div>
                  <Link href="/" legacyBehavior>
                    <a className="navbar-barnd  py-2">
                      <img src="/images/logo.png" className="img-fluid" />
                    </a>
                  </Link>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    onClick={() => router.push("/user/auth/")}
                  >
                    Employee
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => router.push("/admin/auth/")}
                  >
                    Admin
                  </Button>
                </Stack>
              </nav>
            </Grid>

            <Container maxWidth="xxl">
              <Grid container justifyContent="center">
                <Grid item xs={12} lg={11}>
                  <Box py={2}>
                    <Grid container spacing={8}>
                      <Grid item xs={12} sm={6} marginTop={12}>
                        <Box>
                          <h4>Customers Review</h4>
                          <CustomerReview />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box className="d-flex justify-content-center">
                          <img
                            src="/images/auth.svg"
                            className="img-fluid placeHolderImage d-none d-sm-block"
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Container>
      </header>
    </>
  );
};

export default index;
