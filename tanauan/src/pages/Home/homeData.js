import { getImageUrl } from '../../utils';

const homeData = {
  hero: {
    name: "Tanauan City",
    description: "Welcome to Tanauan City, a vibrant and inclusive community committed to growth and progress. Join us in making a better tomorrow.",
    buttonText: "Get Started",
  },
  features: [
    {
      id: 1,
      title: "Stay Informed",
      description: "Discover the latest news and upcoming events in our community. Stay connected and never miss out on important announcements and activities.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/HkVgESK_pjJlN53ad0PLDZ39qxG5cwjMdT10Bkyu2dU.jpg",
      altText: "Icon representing cutting edge technologies and tools"
    },
    {
      id: 2,
      title: "Explore Our Departments",
      description: "Learn about the various departments that serve our community. Find resources, contact information, and services offered by each department to assist you.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/8nejNMLmlN4z-S-cjIsL8k11J-xBL7c4row8RfU8yvU.jpg",
      altText: "Icon representing integrated artificial intelligence"
    },
    {
      id: 3,
      title: "Convenient Online Services",
      description: "Access a range of online services designed to make your life easier. From bill payments to service requests, manage your needs from the comfort of your home.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/cZ-KHFtTv74IsjIEvRvMD2TeVUYD-Bm-Up4lChNNOpU.jpg",
      altText: "Icon representing enterprise level ecommerce support"
    },
    {
      id: 4,
      title: "Welcome to Our Community",
      description: "Whether you're a first-time visitor or a long-time resident, our Visitor's Guide provides essential information to enhance your experience.",
      imageUrl: "https://storage.googleapis.com/a1aa/image/your-image-url.jpg", 
      altText: "Icon representing state-of-the-art data protection"
    }
  ],
  steps: [
    {
      image: getImageUrl("./steps/signUp.svg"),
      imgAlt: "Illustration of a person signing up",
      title: "Click the Sign Up Button",
      description: "Locate the 'Sign Up' button on the Tanauan e-Services homepage.",
    },
    {
      image: getImageUrl("./steps/register.svg"),
      imgAlt: "Illustration of a person filling form",
      title: "Fill Out the Registration Form",
      description: "Enter your correct information, including your name, mobile number, and email address.",
    },
    {
      image: getImageUrl("./steps/verify.svg"),
      imgAlt: "Illustration of a person verifying",
      title: "Verify Your Mobile Number",
      description: "You will receive a verification code via SMS. Enter this code to confirm your mobile number.",
    },
    {
      image: getImageUrl("./steps/profile.svg"),
      imgAlt: "Illustration of a person completing profile",
      title: "Complete Your Profile",
      description: "Fill in any additional required information to complete your profile.",
    },
    {
      image: getImageUrl("./steps/submit.svg"),
      imgAlt: "Illustration of a person submitting form",
      title: "Submit the Form",
      description: "Review your information and click the 'Submit' button.",
    },
    {
      image: getImageUrl("./steps/enjoy.svg"),
      imgAlt: "Illustration of a person doing services",
      title: "Enjoy Tanauan e-Services!",
      description: "You are now registered! Explore the various services available and enjoy the convenience of online transactions.",
    },
  ]
};

export default homeData;
