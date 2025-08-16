export const siteContent = {
  site: {
    name: "Gabbles International School",
    tagline: "Excellence in Education, Building Tomorrow's Leaders",
    description: "A premier educational institution committed to academic excellence and character development.",
    logo: "/logo.svg",
  },
  
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Location", href: "/location" },
    { name: "Contact Us", href: "/contact" },
  ],

  home: {
    hero: {
      title: "Welcome to Gabbles International School",
      subtitle: "Excellence in Education, Building Tomorrow's Leaders",
      description: "Join our community of learners and discover your potential in a nurturing academic environment.",
      buttonText: "Learn More About Us",
      buttonLink: "/about",
      backgroundImage: "/homepage.jpeg"
    },
    features: [
      {
        title: "Academic Excellence",
        description: "Rigorous curriculum designed to challenge and inspire students at every level.",
        icon: "🎓"
      },
      {
        title: "Experienced Faculty",
        description: "Dedicated teachers committed to nurturing each student's unique potential.",
        icon: "👨‍🏫"
      },
      {
        title: "Modern Facilities",
        description: "State-of-the-art classrooms, laboratories, and learning spaces.",
        icon: "🏫"
      }
    ]
  },

  about: {
    title: "About Gabbles International School",
    mission: "We exist to help every child discover who they are and how far they can go. Through joyful, challenging learning and a caring community, we nurture curiosity, character and confidence that last a lifetime.",
    vision: "A warm, inclusive school where every learner is seen, heard and stretched — blending strong academics with creativity, empathy and global citizenship.",
    content: "At Gabbles International School, we define ourselves by our strengths. We believe the uniqueness each child brings to learning is essential to the life of the classroom. We don’t slow a child’s progress with narrow expectations or one‑size‑fits‑all benchmarks. Instead, we invite students to set bold goals, reflect on their growth and develop the habits of independent, joyful learners.",
    philosophy: {
      title: "Our Philosophy",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      paragraphs: [
        "Children learn best when they compare, explore and make meaning together. We design experiences that ask learners to question, reason and create — building deep understanding rather than short‑term recall.",
        "We teach respect in every direction: for self, for others and for our shared world. Our classrooms practice kindness and collaboration, and our curriculum includes media literacy, ethics and service.",
        "As responsible global citizens, our community values sustainability and stewardship. From everyday choices on campus to long‑term projects, we encourage students to care for people and the planet.",
        "Most of all, we believe school should feel like possibility. When children feel safe, seen and inspired, they discover the confidence to try, to persist and to flourish."
      ]
    },
    stats: [
      { number: "2,500+", label: "Students" },
      { number: "150+", label: "Faculty Members" },
      { number: "95%", label: "College Acceptance Rate" },
      { number: "40+", label: "Countries Represented" }
    ],
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },

  programs: {
    title: "Our Academic Programs",
    subtitle: "Discover the perfect pathway for your educational journey",
    programs: [
      {
        name: "Elementary Program",
        description: "Building strong foundations in literacy, numeracy, and social skills through engaging, hands-on learning experiences.",
        grades: "K-5",
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Small Class Sizes", "Individualized Learning", "Creative Arts Integration"]
      },
      {
        name: "Middle School Program",
        description: "Nurturing critical thinking and independence while providing comprehensive support during these crucial developmental years.",
        grades: "6-8",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
        features: ["STEM Focus", "Leadership Development", "Extracurricular Activities"]
      },
      {
        name: "High School Program",
        description: "Preparing students for college and career success through rigorous academics and comprehensive college counseling.",
        grades: "9-12",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["AP Courses", "College Counseling", "Internship Programs"]
      },
      {
        name: "International Baccalaureate",
        description: "A globally recognized program that develops internationally minded students with critical thinking skills.",
        grades: "11-12",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Global Perspective", "Extended Essay", "Community Service"]
      },
      {
        name: "Arts & Music Program",
        description: "Comprehensive arts education fostering creativity, expression, and cultural appreciation across all grade levels.",
        grades: "K-12",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Visual Arts", "Music Performance", "Digital Media"]
      },
      {
        name: "Athletics Program",
        description: "Competitive sports programs that build teamwork, discipline, and school spirit while promoting physical fitness.",
        grades: "6-12",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["15+ Sports", "State Championships", "Fitness Center"]
      }
    ]
  },

  location: {
    title: "Visit Our Campus",
    subtitle: "Located in the heart of the community",
    address: {
      street: "HITEC City",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500081",
      phone: "(555) 123-4567",
      email: "info@westfieldacademy.edu"
    },
    hours: {
      office: "Monday - Friday: 8:00 AM - 4:00 PM",
      campus: "Monday - Friday: 7:00 AM - 6:00 PM"
    },
    directions: "Our campus is easily accessible from HITEC City and surrounding areas. Visitor parking is available in the main lot.",
    mapEmbed: "https://maps.google.com/maps?q=HITEC%20City%2C%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },

  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    info: {
      phone: "(555) 123-4567",
      email: "info@westfieldacademy.edu",
      address: "1234 Academic Drive, Springfield, CA 90210"
    },
    // If provided, the contact page will render this Google Forms embed instead of the built-in form.
    // Paste the exact "src" URL from Google Forms → Send → <> Embed.
    googleFormEmbedUrl: "https://docs.google.com/forms/d/1jpafcp203U2JuzDpqehJr4Q-lugbOdN3-fukyF4InbE/viewform?embedded=true",
    departments: [
      { name: "Admissions", email: "admissions@westfieldacademy.edu", phone: "(555) 123-4568" },
      { name: "Academic Affairs", email: "academics@westfieldacademy.edu", phone: "(555) 123-4569" },
      { name: "Student Services", email: "students@westfieldacademy.edu", phone: "(555) 123-4570" }
    ]
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Gabbles International School. All rights reserved.`,
    quickLinks: [
      { name: "Admissions", href: "/contact" },
      { name: "Academic Calendar", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Faculty Directory", href: "#" }
    ]
  }
};