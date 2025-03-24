import { Home, FileText, Bell, MapPin, User, Settings, HelpCircle, LogOut } from 'lucide-react';

const sidebarData = [
  {
    sectionTitle: "",  // Dashboard at the top with no section title
    items: [
      { title: 'Dashboard', icon: Home, path: '/dashboard' },
      { title: 'City Overview', icon: MapPin, path: '/dashboard/home' },
      { title: 'City Officials', icon: User, path: '/dashboard/city-officials' },
      { title: 'Barangay', icon: MapPin, path: '/dashboard/barangay'}, //this will still be changed
      {
        title: 'Transparency Report',
        icon: FileText,
        submenu: [
          { title: 'Financial Reports', path: '/dashboard/reports' },
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
      { title: 'Help Center', icon: HelpCircle, path: '/dashboard/help-center' },
    ],
  },
];

export default sidebarData;
