"use client";
import { Layout } from "@/components";
import { useEffect, useState } from "react";
import ProfileEditForm from "@/components/forms/profileEditForm";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Head } from "@/sections";
import { Box, Button, Typography } from "@mui/material";
import { authenticateUser } from "@/redux/actions/authAction";
import { useSelector } from "react-redux";
import authMiddleware from "@/middleware";
import { parse } from "cookie";
export default function EditTopicForm({ params }) {
  const router = useRouter();
  const { id } = router.query;
  const formData = useForm();
  const { userInfo } = useSelector((state) => state.authReducer);
  const saveEmployee = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/admin/update-employee-detail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData.getValues("profileEdit") }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to updated");
      }

      console.log("UPDATED EMPLOYEE: ", (await res.json()).data);
    } catch (error) {}
  };

  const getUserDetails = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/admin/get-employee-details`,
        {
          method: "POST",
          headers: { "Content-Type": "application/text" },
          body: JSON.stringify({ id: id }),
        }
      );

      if (!res.ok) {
        throw new Error("User does not exist");
      }
      const resJson = await res.json();
      const { employee } = resJson;
      if (employee) {
        formData.setValue("profileEdit.firstName", employee.firstName);
        formData.setValue("profileEdit.lastName", employee.lastName);
        formData.setValue("profileEdit.email", employee.email);
        formData.setValue("profileEdit.phone", employee.phone);
        formData.setValue("profileEdit.designation", employee.designation);
        formData.setValue("profileEdit.isManager", employee.isManager);
        formData.setValue(
          "profileEdit.teams",
          employee.teams.map((team) => team._id)
        );

        formData.setValue("profileEdit.id", id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails(id);
  }, [id]);

  return (
    <>
      <Head title="Employee Detail | Admin" />
      <Layout isAdmin={true} userInfo={userInfo} />
      <Box className="dashboard-main" id="employee-detail">
        <Typography variant="h1" className="fw-semibold">
          Update Details
        </Typography>
        <Box mt={4} className="tab-container">
          <ProfileEditForm
            saveEmployee={saveEmployee}
            formData={formData}
            id={id}
          />
        </Box>
      </Box>
    </>
  );
}
export const getServerSideProps = authMiddleware(async (context) => {
  const { req } = context;

  const cookies = parse(req.headers.cookie || "");
  const token = cookies["token"] || null;

  return {
    props: {
      token,
    },
  };
});
