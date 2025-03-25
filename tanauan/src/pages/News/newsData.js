import { getImageUrl } from '../../utils';

const newsData = {
  hero: {
    name: "Latest News in Tanauan City",
    description: "Stay informed with the most recent updates and stories from around Tanauan City. From community events to city projects, never miss out on the latest happenings.",
    buttonText: "Read More News",
  },
  listOverview: [
    {
      title: "City Hosts Annual Festival",
      description: "The annual festival celebrates Tanauan’s culture with performances, food, and local crafts.",
      imageUrl: getImageUrl("./news/festival.svg"),
      videoUrl: "https://www.example.com/video/festival" // Add your video URL here
    },
    {
      title: "Infrastructure Development Plan",
      description: "A major infrastructure overhaul will modernize roads, buildings, and public spaces across the city.",
      imageUrl: getImageUrl("./news/infrastructure.svg"),
      videoUrl: "https://www.example.com/video/infrastructure" // Add your video URL here
    },
    {
      title: "Community Clean-up Drive",
      description: "Residents unite for a city-wide clean-up drive, enhancing local parks and public areas.",
      imageUrl: getImageUrl("./news/cleanup.svg"),
      videoUrl: "https://www.example.com/video/cleanup" // Add your video URL here
    },
    {
      title: "Scholarship Program Launched",
      description: "A new scholarship initiative aims to provide financial support to deserving students in Tanauan.",
      imageUrl: getImageUrl("./news/scholarship.svg"),
      videoUrl: "https://www.example.com/video/scholarship" // Add your video URL here
    },
  ],
  newsCard: [
    {
      title: "Scholarship Program Launched",
      description: "A new scholarship initiative aims to provide financial support to deserving students in Tanauan.",
      imageUrl: getImageUrl("./news/scholarship.svg"),
      videoUrl: "https://youtu.be/WegqhgGdTYA"
    },
    {
      title: "City Hosts Annual Festival",
      description: "The annual festival celebrates Tanauan’s culture with performances, food, and local crafts.",
      imageUrl: getImageUrl("./news/festival.svg"),
      videoUrl: "https://youtu.be/eWAdpUyzCkI?si=ZnOvCXKAdxsulUwl" // Example YouTube link
    },
    {
      title: "Community Clean-up Drive",
      description: "Residents unite for a city-wide clean-up drive, enhancing local parks and public areas.",
      imageUrl: getImageUrl("./news/cleanup.svg"),
      videoUrl: "https://youtu.be/JSFG-IE8n_c?si=NUxef0znnXQzbxaG"
    }
  ],
};

export default newsData;
