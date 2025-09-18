import mongoose from "mongoose";

const userFormSchema = new mongoose.Schema(
  {
    personalDetails: {
      fullName: { type: String, required: true },
      email: { type: String, required: true, unique: true }, // ✅ unique email inside personalDetails
      phoneNumber: { type: String },
      password: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String },
      location: { type: String }
    },
    educationalDetails: {
      currentEducationLevel: { type: String, required: true },
      currentStream: { type: String },
      previousAcademicPerformance: { type: String },
      favoriteSubjects: [{ type: String }],
      languagesKnown: [{ type: String }]
    },
    interestDomainDetails: {
      careerInterests: [{ type: String }],
      skillsHobbies: [{ type: String }],
      learningStylePreference: { type: String },
      futureGoal: { type: String },
      domainSelection: [{ type: String }],
      interestAndGoalsText: { type: String }
    }
  },
  { timestamps: true }
);

const UserForm = mongoose.model("UserForm", userFormSchema, "studentData");
export default UserForm;
