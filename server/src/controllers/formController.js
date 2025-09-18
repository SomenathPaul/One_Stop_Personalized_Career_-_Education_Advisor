// src/controllers/formController.js

import UserForm from "../models/UserForm.js";

// @desc Save student form data
// @route POST /api/form/submit
// @access Public
export const submitForm = async (req, res) => {
  try {
    const {
      personalDetails,
      educationalDetails,
      interestDomainDetails,
    } = req.body;

    // Create new student document
    const newStudent = new UserForm({
      personalDetails,
      educationalDetails,
      interestDomainDetails,
    });

    // Save to MongoDB
    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Form data saved successfully!",
      data: newStudent,
    });
  } catch (error) {
    console.error("Error saving student data:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists. Please use another email.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error. Could not save form data.",
    });
  }
};
