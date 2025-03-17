import { getImageUrl } from "../utils";

export const getBGImage = (page) => {
  switch (page) {
    case 'barangay':
      return getImageUrl('barangay/hero/BarangayBG.svg'); // Barangay-specific background
    case 'home':
      return getImageUrl('hero/HeroBGTS.svg'); // Default home background
    default:
      return getImageUrl('default/DefaultBG.svg'); // Fallback image
  }
};
