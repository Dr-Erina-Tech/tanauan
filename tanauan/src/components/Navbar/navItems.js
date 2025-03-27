import { getImageUrl } from "../../utils";

const navItems = [
  { 
    text: "The City", 
    hasDropdown: true, 
    dropdownItems: [
      { 
        text: "Barangay", 
        image: getImageUrl("./Navbar/barangay.svg"), 
        description: "Learn about the different barangays.",
        link: "/barangay" 
      },
      { 
        text: "News and Publication", 
        image: getImageUrl("./Navbar/news.svg"), 
        description: "Stay updated with the latest news.",
        link: "/news" 
      }
    ] 
  },
  { 
    text: "Government", 
    hasDropdown: true, 
    dropdownItems: [
      { 
        text: "Vision / Mission", 
        image: getImageUrl("./Navbar/mission.svg"), 
        description: "Our vision and mission statements.",
        link: "/vision" 
      },
      { 
        text: "City Officials", 
        image: getImageUrl("./Navbar/officials.svg"), 
        description: "Meet the city officials.",
        link: "/cityOfficials" // Add the link for this item
      },
      { 
        text: "Departments", 
        image: getImageUrl("./Navbar/department.svg"), 
        description: "Explore various city departments.",
        link: "/departments" // Add the link for this item
      }
    ] 
  },
  { 
    text: "City Transactions", 
    hasDropdown: true, 
    dropdownItems: [
      { 
        text: "CSWD Services", 
        image: getImageUrl("./Navbar/tanauan.svg"), 
        description: "Services of CSWD",
        link: "/cswd-services" // Add the link for this item
      },
      { 
        text: "City Planning", 
        image: getImageUrl("./Navbar/cityPlan.svg"), 
        description: "City planning",
        link: "/city-planning" // Add the link for this item
      },
      { 
        text: "Senior Citizen ID and Benefits", 
        image: getImageUrl("./Navbar/senior.svg"), 
        description: "Senior Citizen ID and Benefits",
        link: "/senior-citizen-id" // Add the link for this item
      },
      { 
        text: "PWD ID and Services", 
        image: getImageUrl("./Navbar/pwd.svg"), 
        description: "PWD ID and Services",
        link: "/pwd-services" // Add the link for this item
      }
    ] 
  },
  { 
    text: "Business", 
    hasDropdown: true, 
    dropdownItems: [
      { 
        text: "Tanauan E-Services", 
        image: getImageUrl("./Navbar/eService.svg"), 
        description: "Tanauan E-Services",
        link: "/e-services" // Add the link for this item
      }
    ] 
  },
  { 
    text: "Transparency Report", 
    hasDropdown: true, 
    dropdownItems: [
      { 
        text: "Bids and Awards", 
        image: getImageUrl("./Navbar/award.svg"), 
        description: "Bids and Awards",
        link: "/bids-and-awards" // Add the link for this item
      },
      { 
        text: "Assessor's", 
        image: getImageUrl("./Navbar/assesors.svg"), 
        description: "Assessor's Office",
        link: "/assessors" // Add the link for this item
      },
      { 
        text: "Full Disclosure Report", 
        image: getImageUrl("./Navbar/report.svg"), 
        description: "Full Disclosure Report",
        link: "/full-disclosure-report" // Add the link for this item
      }
    ] 
  },
  { 
    text: "Tourism", 
    hasDropdown: false, 
    link: "/tourism" // Add the link for this item as it doesn't have a dropdown
  },
];

export default navItems;
