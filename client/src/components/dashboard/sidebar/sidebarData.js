import { Home, FileText, Bell, MapPin, User, Settings, HelpCircle, LogOut } from 'lucide-react';

const sidebarData = [
  {
    sectionTitle: "",  // Dashboard at the top with no section title
    items: [
      { title: 'Dashboard', icon: Home, path: '/dashboard' },
    ],
  },
  {
    sectionTitle: "General",
    items: [
      { title: 'City Overview', icon: MapPin, path: '/dashboard/city-overview' },
      { title: 'City Officials', icon: User, path: '/dashboard//city-officials' },
    ],
  },
  {
    sectionTitle: "Other Tools",
    items: [
      {
        title: 'Transparency Report',
        icon: FileText,
        submenu: [
          { title: 'Financial Reports', path: '/dashboard/financial-reports' },
          { title: 'Audit Results', path: '/dashboard/audit-results' },
        ],
      },
      { title: 'Tourism', icon: FileText, path: '/dashboard/tourism' },
    ],
  },
  {
    sectionTitle: "Support",
    items: [
      { title: 'Settings', icon: Settings, path: '/dashboard/settings' },
      { title: 'Help Center', icon: HelpCircle, path: '/dashboard//help-center' },
    ],
  },
];

export default sidebarData;
