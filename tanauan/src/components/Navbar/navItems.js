// navItems.js
import { getImageUrl } from "../../utils";

const navItems = [
  { 
    text: "The City", 
    hasDropdown: true, 
    dropdownItems: [
      { text: "Barangays", image: getImageUrl("./Navbar/barangay.svg"), description: "Learn about the different barangays." },
      { text: "News and Publication", image: getImageUrl("./Navbar/news.svg"), description: "Stay updated with the latest news." }
    ] 
  },
  { 
    text: "Government", 
    hasDropdown: true, 
    dropdownItems: [
      { text: "Vision / Mission", image: getImageUrl("./Navbar/mission.svg"), description: "Our vision and mission statements." },
      { text: "City Officials", image: getImageUrl("./Navbar/officials.svg"), description: "Meet the city officials." },
      { text: "Departments", image: getImageUrl("./Navbar/department.svg"), description: "Explore various city departments." }
    ] 
  },
  { 
    text: "City Transactions", 
    hasDropdown: true, 
    dropdownItems: [
      { text: "CSWD Services", image: getImageUrl("./Navbar/tanauan.svg"), description: "Services of CSWD"},
      { text: "City Planning", image: getImageUrl("./Navbar/cityPlan.svg"), description: "City planning" },
      { text: "Senior Citizen ID and Benefits", image: getImageUrl("./Navbar/senior.svg"), description: "City planning" },
      { text: "PWD ID and Services", image: getImageUrl("./Navbar/pwd.svg"), description: "City planning" }
    ] 
  },
  { 
    text: "Business", 
    hasDropdown: true, 
    dropdownItems: [
      { text: "Tanauan E-Services", image: getImageUrl("./Navbar/eService.svg"), description: "City planning" },
    ] 
  },
  { 
    text: "Transparency Report", 
    hasDropdown: true, 
    dropdownItems: [
      { text: "Bids and Awards", image: getImageUrl("./Navbar/award.svg"), description: "City planning" },
      { text: "Asessor's", image: getImageUrl("./Navbar/assesors.svg"), description: "City planning" },
      { text: "Full Disclosure Report", image: getImageUrl("./Navbar/report.svg"), description: "City planning" }
    ] 
  },
  { 
    text: "Tourism", 
    hasDropdown: false, 
  },
];

export default navItems;