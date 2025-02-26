
import { getImageUrl } from "../../utils";

const stepsData = [
  {
    image: getImageUrl("./steps/signUp.svg"),
    imgAlt: "Illustration of a person signing up",
    title:"Click the Sign Up Button",
    description:"Locate the 'Sign Up' button on the Tanauan e-Services homepage.",

  },

  {
    image: getImageUrl("./steps/register.svg"),
    imgAlt: "Illustration of a person filling form",
    title:"Fill Out the Registration Form",
    description:"Enter your correct information, including your name, mobile number, and email address.",

  },

  {
    image: getImageUrl("./steps/verify.svg"),
    imgAlt: "Illustration of a person verifying",
    title:"Verify Your Mobile Number",
    description:"You will receive a verification code via SMS. Enter this code to confirm your mobile number.",

  },

  {
    image: getImageUrl("./steps/profile.svg"),
    imgAlt: "Illustration of a person completing profile",
    title:"Complete Your Profile",
    description:"Fill in any additional required information to complete your profile.",

  },

  {
    image: getImageUrl("./steps/submit.svg"),
    imgAlt: "Illustration of a person submitting form",
    title:"Submit the Form",
    description:"Review your information and click the 'Submit' button.",

  },

  {
    image: getImageUrl("./steps/enjoy.svg"),
    imgAlt: "Illustration of a person doing services",
    title:"Enjoy Tanauan e-Services!",
    description:"You are now registered! Explore the various services available and enjoy the convenience of online transactions.",

  },
];

export default stepsData;