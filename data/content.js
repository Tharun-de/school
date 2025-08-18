export const siteContent = {
  site: {
    name: "Little Otters",
    tagline: "Your Child's Happy Place and Your Trusted Support System",
    description: "A child enrichment & physical development center supporting working parents with a safe, fun, and engaging environment where children learn, grow, and play.",
    logo: "/logo-1.png",
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
      title: "Welcome to Little Otters",
      subtitle: "Your Child's Happy Place and Your Trusted Support System",
      description: "We support modern parents while nurturing children through joyful, enriching experiences in a safe, expert‑led environment.",
      buttonText: "Explore Our Programs",
      buttonLink: "/programs",
      backgroundImage: "/homepage.jpeg"
    },
    features: [
      {
        title: "Parent‑Centric Spaces",
        description: "Comfortable lounges and plug‑and‑play work zones so you can work or relax nearby.",
        icon: "👪"
      },
      {
        title: "Holistic Development",
        description: "Screen‑free activities supporting physical, cognitive, emotional, and social growth.",
        icon: "🌱"
      },
      {
        title: "Expert Care & Safety",
        description: "Qualified educators and structured programs for a joyful, secure experience.",
        icon: "🛡️"
      }
    ]
  },

  about: {
    title: "About Little Otters",
    mission: "To support working parents while nurturing children in a joyful, safe, and enriching community where families thrive together.",
    vision: "A vibrant, lively space that balances learning, fun, and community — where parents feel supported and children flourish.",
    content: "Little Otters is a parent‑centric environment with spaces for you to work, relax, and connect, while your child engages in enriching, structured, and playful learning experiences.",
    philosophy: {
      title: "Our Philosophy",
      image: "/aboutus.jpeg",
      paragraphs: [
        "We champion screen‑free, active environments that nurture physical, cognitive, emotional, and social growth.",
        "Our curriculum blends Montessori, Steiner Waldorf, John Dewey, Play‑Way, and Multiple Intelligence approaches to meet each child where they are.",
        "Parents are part of the journey — with supportive lounges, work zones, and a welcoming community to ease the pressures of modern parenting.",
        "Through movement, music, language, arts, and play, children build confidence, coordination, creativity, and connection."
      ]
    },
    founders: {
      title: "The Vision Behind Little Otters",
      founders: [
        {
          name: "Dr. Soujanya Sukhavasi",
          title: "Minimally Invasive & Robotic Surgeon, Infertility Specialist, Professor",
          summary: "Envisioned a lively, supportive space where parents and children bond and understand developmental milestones in a fun, stress‑free environment. Believes supportive peer groups and community can ease postpartum stress and modern parenting challenges."
        },
        {
          name: "Dr. Nikhil",
          title: "Paediatric Surgeon",
          summary: "Brings deep understanding of child development and family wellness to shape programs that are safe, enriching, and developmentally aligned."
        }
      ]
    },
    stats: [
      { number: "3", label: "Hyderabad Locations" },
      { number: "55+", label: "Art Forms in Workshops" },
      { number: "6mo–3y", label: "Parent & Child Classes" },
      { number: "IB/IGCSE", label: "Homework Support" }
    ],
    image: "/aboutusherosecond.jpeg"
  },

  programs: {
    title: "Our Programs & Experiences",
    subtitle: "Fun, learning, and growth for every child — with support for parents",
    programs: [
      {
        name: "Parent & Child Classes",
        description: "Bonding sessions fostering emotional connections and understanding developmental milestones.",
        grades: "6mo–3y",
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=2070&q=80",
        features: ["Bonding & Milestones", "Peer Parent Groups", "Play‑Based Activities"]
      },
      {
        name: "Parent‑Toddler Program",
        description: "Structured 2‑hour sessions for toddlers to play, learn, and interact in a nurturing environment.",
        grades: "Toddlers",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070&q=80",
        features: ["2‑Hour Sessions", "Safe & Structured", "Parent Nearby"]
      },
      {
        name: "Preschool & Daycare",
        description: "Safe, enriching space blending learning with play for social, emotional, and academic growth.",
        grades: "Ages 2–6",
        image: "https://images.unsplash.com/photo-1585432959449-b1c5c91a6b57?auto=format&fit=crop&w=2070&q=80",
        features: ["Play‑Based Learning", "Caring Educators", "Holistic Growth"]
      },
      {
        name: "After‑School Programs",
        description: "Homework assistance for IB and Cambridge students plus enrichment like dance, arts & sports.",
        grades: "K–12",
        image: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?auto=format&fit=crop&w=2070&q=80",
        features: ["IB & IGCSE Support", "Arts & Sports", "Homework Help"]
      },
      {
        name: "Weekend Activities",
        description: "Zumba, dance classes, and art workshops for creative and physical play.",
        grades: "All Ages",
        image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=2070&q=80",
        features: ["Zumba", "Dance", "Art Workshops"]
      },
      {
        name: "Workshops & Events",
        description: "Explore creativity through 55 traditional art forms including Madhubani and Patachitra.",
        grades: "All Ages",
        image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=2070&q=80",
        features: ["55+ Art Forms", "Cultural Exposure", "Hands‑On Learning"]
      },
      {
        name: "Holiday Camps",
        description: "Themed, educational, and fun camps that keep kids engaged and learning.",
        grades: "Seasonal",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2070&q=80",
        features: ["Themed Camps", "Skill‑Building", "Fun & Friends"]
      },
      {
        name: "Birthday Parties & Social Gatherings",
        description: "Themed birthdays, kitty parties, and playdates in a vibrant, safe venue.",
        grades: "All Ages",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2070&q=80",
        features: ["Themed Parties", "Event Planning", "Memorable Experiences"]
      },
      {
        name: "Foreign Language Classes (Spanish & French)",
        description: "Start language learning with fun, interactive Spanish and French sessions.",
        grades: "Spanish & French",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2070&q=80",
        features: ["Interactive Sessions", "Cultural Awareness", "Early Exposure"]
      },
      {
        name: "Specialized Programs (ADHD & Autism)",
        description: "Physical development programs focusing on motor coordination, sensory integration, and social skills.",
        grades: "Individualized",
        image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?auto=format&fit=crop&w=2070&q=80",
        features: ["Motor Coordination", "Sensory Integration", "Social Skills"]
      },
      {
        name: "Phonetics & Handwriting",
        description: "Build language foundations and fine motor skills for future academic success.",
        grades: "Early Learners",
        image: "https://images.unsplash.com/photo-1604908554027-8f3f5c5f3cfe?auto=format&fit=crop&w=2070&q=80",
        features: ["Phonics", "Fine Motor Skills", "Writing Readiness"]
      },
      {
        name: "Instrumental Music Classes",
        description: "Explore instruments and develop creativity and cognitive skills through music.",
        grades: "All Ages",
        image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=2070&q=80",
        features: ["Instrument Discovery", "Creative Expression", "Structured Learning"]
      },
      {
        name: "The Little Gym",
        description: "Structured gymnastics and movement classes integrating physical, cognitive, and social development.",
        grades: "Ages 3+",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=2070&q=80",
        features: ["Gymnastics", "Confidence Building", "Safe & Supportive"]
      }
    ]
  },

  location: {
    title: "Visit Our Centers",
    subtitle: "Now in three prime Hyderabad locations",
    address: {
      street: "Hyderabad (Kokapet • Jubilee Hills • Gachibowli)",
      city: "Hyderabad",
      state: "Telangana",
      zip: "500081",
      phone: "+91 8008830360",
      email: "info@example.com"
    },
    hours: {
      office: "Monday - Friday: 8:00 AM - 4:00 PM",
      campus: "Monday - Friday: 7:00 AM - 6:00 PM"
    },
    directions: "We are easily accessible across Hyderabad with branches in Kokapet, Jubilee Hills, and Gachibowli. Visitor parking is available at each center.",
    mapEmbed: "https://maps.google.com/maps?q=HITEC%20City%2C%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },

  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    info: {
      phone: "+91 8008830360",
      email: "info@example.com",
      address: "Hyderabad – Kokapet | Jubilee Hills | Gachibowli"
    },
    // If provided, the contact page will render this Google Forms embed instead of the built-in form.
    // Paste the exact "src" URL from Google Forms → Send → <> Embed.
    googleFormEmbedUrl: "https://docs.google.com/forms/d/1jpafcp203U2JuzDpqehJr4Q-lugbOdN3-fukyF4InbE/viewform?embedded=true",
    departments: [
      { name: "Admissions", email: "admissions@westfieldacademy.edu", phone: "+91 8008830360" },
      { name: "Academic Affairs", email: "academics@westfieldacademy.edu", phone: "+91 8008830360" },
      { name: "Student Services", email: "students@westfieldacademy.edu", phone: "+91 8008830360" }
    ]
  },

  marketingModal: {
    enabled: true,
    // Set to an image URL or a PDF URL when ready
    src: "/popup.jpeg",
    title: "Little Otters",
    // "pdf" or "image"; autodetected by file extension if omitted
    type: "image",
    // "always" to show on every page load; "session" once per tab; "day" once per day
    showOncePer: "always",
    // Storage key used to track dismissal; change to force showing again
    dismissKey: "marketing-modal-v1"
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Little Otters. All rights reserved.`,
    quickLinks: [
      { name: "Admissions", href: "/contact" },
      { name: "Academic Calendar", href: "#" },
      { name: "Student Portal", href: "#" },
      { name: "Faculty Directory", href: "#" }
    ],
    social: {
      instagram: "https://instagram.com/",
      x: "https://x.com/"
    }
  }
};