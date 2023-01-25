import { Text, View } from "react-native";
import React from "react";
import styles from "../components/customDrawer/styles";

export const Strings = {
  Role: "6067185ff9d2b991014963f9",
  Casting: "Casting",
  PAX: "PAX",
  Login: "Login",
  Sign_Up: "Sign Up",
  Create_Account:"Create Account",
  BG_Cordinator: "BG CORDINATOR",
  Sign_Up_With_Email: "Sign Up With Email",
  By_signing_in_you_agree_to: "By signing in, you agree to",
  Terms_and_Privacy: "Terms & Privacy.",
  Already_a_member: "Already a member?  ",
  Name: "Name",
  Email: "Email",
  Email_Address: "Email Address",
  Password: "Password",
  Confirm_Password: "Confirm Password",
  Why_you_want_access: "Why you want access?",
  Forgot_Password: "Forgot Password?",
  Not_yet_a_member: "Not yet a member?",
  Reset_Password: "Reset Password",
  Send_Email: "Send Email",
  Forgot_Screen_Instruction:
    "Enter your email address below and we will send you a link to reset your password.",
  Request: "Request",
  Phone: "Phone",
  Code: "Enter Code",
  Date: "Date",
  Invited: "Invited",
  Episode: "Episode",
  Day: "Day",
  Coordinator: "Coordinator",
  BG: "BG",
  Share: "Share",
  Save: "Save",
  Remove: "Remove",
  Report: "Report",
  Search: "Search",
  Search_BY_Name: "Search by name",
  Search_coordinator_by_name:'Search coordinator by name',
  Add_BG_Coordinator: "Add BG Coordinator",
  BG_Coordinators: "BG Coordinator's",
  Print: "Print",
  Finalize: "Finalize",
  Send_Again: "SEND AGAIN",
  Enter_your_Code: "Enter your Code",
  Phone_Screen_instruction:
    "Tap request to verify your account through text. An SMS will be sent to verify your account with a 6 digit code you will need to add on the next screen. Standard text message or data rates may apply.",
  Code_Screen_instruction:
    "You should receive a 6 digit code from us within 2 minutes, if you have not received a code with 2 minutes please click send again.",
  Reset_Instructions:
    "Enter the email associated with your account and we`ll send an email with instructions to reset your password.",
  userName: "John Smith",
  userEmail: "Tonystark777@gmail.com",
  phoneNumber: "+1 321 1234567",
  Continues_Scanning: "Continues Scanning",
  One_by_One: "One by One Scanning",
  Enter_QR_Number: "Enter QR Number",
  WRAP: "WRAP",
  SIGN_IN: "SIGN IN",
  MANUALLY: "MANUALLY",
  NDB: "NDB",
  Travelling: "Travelling",
  Time: "Time",
  Distance: "Distance",
  Distance_KM: "Distance in KM:",
  offline: "offline",
  Travel_Time: "Travel Time",
  Rental: "Rental",
  More: "More",
  Rate: "Rate",
  Costume: "Costume",
  Lunch: "Lunch",
  Gender: "Gender",
  Age: "Age",
  Weight: "Weight (lbs)",
  Height: "Height",
  City: "City",
  Update: "Update",
  Recent: "Recent",
  In_Progress_Today: "In Progress",
  Offline: "Offline",
  Trash: "Trash",
  Settings: "Settings",
  Logout: "Logout",
  Send_To_Lunch: "SEND TO LUNCH",
  USER_DATA: "UserData",
  USER_TOKEN: "UserToken",
  cameraPermissions: "Press to Go in device settings to enable permissions.",
  NoDataAvailable: "No data available!",
};

export const swiperData = [
  {
    header: "Find Work",
    content:
      "Use CrewPAX to find work for Film & TV over all large film markets. Your largest database for all things film crew work.",
  },
  {
    header: "Hire for Film",
    content:
      "Always free to post, so that you can find the crew you need ASAP. Its as easy as selecting which department and rate you need a union or non union crew member for.",
  },
  {
    header: "Easily Organized",
    content:
      "With your availability calendar, get requested for work even while you're busy. Add favorites, message applicants and get connected with your film industry near you.",
  },
];

export const summaryData = [
  {
    day_title: "Thursday",
    thumb_image: require("../assets/images/summary1_img.png"),
    date: "S3, E6",
    day: "14/9",
    coordinator: "22",
    bg: "99",
  },
  {
    day_title: "Wednesday",
    thumb_image: require("../assets/images/summary2_img.png"),
    date: "S4, E7",
    day: "17/5",
    coordinator: "32",
    bg: "107",
  },
  {
    day_title: "Friday",
    thumb_image: require("../assets/images/summary3_img.png"),
    date: "F3, G6",
    day: "22/10",
    coordinator: "12",
    bg: "79",
  },
  {
    day_title: "Monday",
    thumb_image: require("../assets/images/summary4_img.png"),
    date: "J7, L9",
    day: "7/4",
    coordinator: "45",
    bg: "67",
  },
];

export const todayShows = [
  { showInfo: "Spider-Man 3 / 18 Aug 2021" },
  { showInfo: "Iron Man 3 / 18 Aug 2021" },
  { showInfo: "Strange Things 3 / 18 Aug 2021" },
];
export const recentShows = [
  { showInfo: "Spider-Man  / 18 Aug 2021" },
  { showInfo: "Iron Man  / 18 Aug 2021" },
  { showInfo: "Strange Things  / 18 Aug 2021" },
];

export const sectionData = [
  {
    isOpen: true,
    title: "Atmos A",
    data: [
      {
        name: "Henry Bailey",
        status: "Out",
        img: require("../assets/images/performer_img.png"),
      },
      {
        name: "Kellie Cook ",
        status: "On lunch",
        img: require("../assets/images/performer1_img.png"),
      },
      {
        name: "Shawn Cortez",
        status: "On lunch",
        img: require("../assets/images/performer_img.png"),
      },
      {
        name: "Josh Walton",
        status: "On lunch",
        img: require("../assets/images/performer1_img.png"),
      },
    ],
  },
  {
    isOpen: false,
    title: "Atmos B",
    data: [
      {
        name: "Smith",
        status: "Out",
        img: require("../assets/images/performer1_img.png"),
      },
      {
        name: "Dwane Bravo",
        status: "Out",
        img: require("../assets/images/performer_img.png"),
      },
      {
        name: "Walton",
        status: "Out",
        img: require("../assets/images/performer1_img.png"),
      },
    ],
  },
  {
    isOpen: false,
    title: "Atmos C",
    data: [
      {
        name: "DJ",
        status: "Out",
        img: require("../assets/images/performer_img.png"),
      },
      {
        name: "Steve",
        status: "Out",
        img: require("../assets/images/performer1_img.png"),
      },
    ],
  },
  {
    isOpen: false,
    title: "Atmos D",
    data: [
      {
        name: "Chris",
        status: "On Lunch",
        img: require("../assets/images/performer1_img.png"),
      },
    ],
  },
];
export const profileGenderTypes=[
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Other',
      value: 'other',
    },]
export const profileHeightFeet=[
  {
    label: '0 Feet',
    value: '0',
  },
  {
    label: '1 Feet',
    value: '1',
  },
  {
    label: '2 Feet',
    value: '2',
  },  {
    label: '3 Feet',
    value: '3',
  },
  {
    label: '4 Feet',
    value: '4',
  },
  {
    label: '5 Feet',
    value: '5',
  },  {
    label: '6 Feet',
    value: '6',
  },
  {
    label: '7 Feet',
    value: '7',
  },
  {
    label: '8 Feet',
    value: '8',
  },
  {
    label: '9 Feet',
    value: '9',
  },

]
export const profileHeightInches=[
  {
    label: '0 inches',
    value: '0',
  },
  {
    label: '1 inches',
    value: '1',
  },
  {
    label: '2 inches',
    value: '2',
  },  {
    label: '3 inches',
    value: '3',
  },
  {
    label: '4 inches',
    value: '4',
  },
  {
    label: '5 inches',
    value: '5',
  },  {
    label: '6 inches',
    value: '6',
  },
  {
    label: '7 inches',
    value: '7',
  },
  {
    label: '8 inches',
    value: '8',
  },
  {
    label: '9 inches',
    value: '9',
  },
  {
    label: '10 inches',
    value: '10',
  },
  {
    label: '11 inches',
    value: '11',
  },
  {
    label: '12 inches',
    value: '12',
  },
]
export default { Strings, swiperData, summaryData, todayShows, sectionData };
