// SQ Interactive — Project Data Structure
// Used by portfolio, service pages, and project detail pages

const SQ_PROJECTS = [
  // ═══════════════════════════════════════════════════════════════
  // DIGITAL WORLD PROJECTS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "designline-construction",
    title: "DesignLine Construction",
    subtitle: "Website Development",
    world: "digital",
    services: ["website-development"],
    category: "Web Design & Development",
    description: "Complete website redesign and development for a construction company. Modern, responsive design with project showcase and lead capture. Fast-loading, SEO-optimized site that increased inquiry rate by showcasing portfolio effectively.",
    challenge: "DesignLine, a construction firm, needed a professional online presence to showcase their projects, team, and services to potential clients. Their old site wasn't mobile-friendly and didn't effectively present their portfolio.",
    solution: "Built a custom responsive website with project gallery, team showcase, service descriptions, and integrated contact forms. Optimized for SEO to improve search visibility for construction-related keywords in their region.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO", "Google Analytics"],
    image: "images/website/designline 2.png",
    images: ["images/website/designline 2.png", "images/website/designline 2.png"],
    video: null,
    link: "https://designlineconstruction.com/",
    status: "live",
    year: 2024,
    featured: true,
    client: "DesignLine Construction",
    industry: "Construction & Real Estate",
    testimonial: null
  },

  {
    id: "heaven-hotel",
    title: "Heaven Hotel",
    subtitle: "Hospitality Digital Experience",
    world: "digital",
    services: ["website-development", "e-commerce"],
    category: "Web Design & Booking Engine",
    description: "Full digital overhaul for a luxury hotel including website redesign, 360° tour integration, and complete booking engine with payment gateway. Multi-world integration connecting website, 360° tours, and VR experiences into a cohesive guest experience.",
    challenge: "Heaven Hotel, a premium hospitality establishment, needed a modern booking system, immersive property showcase, and integrated 360° virtual tours to increase direct bookings and reduce dependency on OTAs.",
    solution: "Designed and built a complete hospitality website with integrated 360° tours (captured with Insta360 X3), booking engine with integrated payment gateway, room management, and seamless cross-linking to VR experiences.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Booking Engine", "Payment API", "Insta360 360° Video", "Database"],
    image: "images/website/heaven-hotel.png",
    images: ["images/website/heaven-hotel.png"],
    video: null,
    link: "https://www.heavenhotel.com.pk/",
    status: "live",
    year: 2024,
    featured: true,
    client: "Heaven Hotel",
    industry: "Hospitality & Tourism",
    impact: "Increased direct bookings by reducing OTA dependency"
  },

  {
    id: "sq-interactive-website",
    title: "SQ Interactive Website",
    subtitle: "Brand & Portfolio System",
    world: "digital",
    services: ["website-development", "ui-ux-design"],
    category: "Brand Website & Design System",
    description: "Complete redesign and rebuild of SQ Interactive's company website, including brand identity system, portfolio showcase with 18+ projects, four-world capability model, and client acquisition funnel. Incorporates advanced CSS token system and vanilla JavaScript for performance.",
    challenge: "SQ Interactive, a technology partner firm, needed a website that repositioned from 'VR specialist' to 'Digital Technology Partner.' Required showcasing diverse capabilities across four worlds (Digital, AI, Immersive, Lab) while maintaining credibility and establishing thought leadership.",
    solution: "Created a premium dark-themed website with design token system, reusable component architecture, portfolio grid with project filtering, service pages for each world, and integrated contact CTAs. Implemented responsive design (320px–1920px) with accessibility compliance.",
    technologies: ["HTML5", "CSS3", "JavaScript", "CSS Variables (Tokens)", "Responsive Design", "Figma", "Brand Design System"],
    image: "images/ui ux and web/sq interactive 1.png",
    images: ["images/ui ux and web/sq interactive 1.png"],
    video: null,
    link: "https://sqinteractive.com/",
    status: "live",
    year: 2025,
    featured: true,
    client: "SQ Interactive",
    industry: "Technology & Design",
    impact: "Repositioned company narrative and increased client inquiries"
  },

  {
    id: "visa-management-system",
    title: "Visa Management System",
    subtitle: "Enterprise UI/UX & Database",
    world: "digital",
    services: ["ui-ux-design", "custom-software"],
    category: "Enterprise Software",
    description: "User-centered interface redesign for a large-scale visa management database system serving multiple visa categories and processing workflows.",
    challenge: "A major visa consultancy firm struggled with a legacy visa management system that had poor information architecture, confusing workflows, and high error rates. Staff were spending excessive time on data entry and status tracking, causing processing bottlenecks and client delays.",
    solution: "Conducted user research with visa officers and data entry staff. Completely redesigned the interface with streamlined workflows, logical information hierarchy, context-aware forms, and real-time status tracking. Implemented bulk operations, saved templates, and automated data validation.",
    technologies: ["Figma", "UX Research", "User Testing", "Database Design", "Information Architecture", "Accessibility (WCAG AA)"],
    image: "images/ui ux and web/visa system 2.png",
    images: ["images/ui ux and web/visa system 1.png", "images/ui ux and web/visa system 2.png", "images/ui ux and web/visa system 3.png", "images/ui ux and web/visa system 4.png"],
    video: null,
    link: null,
    status: "completed",
    year: 2023,
    featured: false
  },

  {
    id: "netsol-enterprise-ui",
    title: "NetSol Enterprise UI",
    subtitle: "Enterprise Software Design",
    world: "digital",
    services: ["ui-ux-design"],
    category: "Enterprise SaaS",
    description: "User-centric interface design for complex enterprise software modules. Redesigned interfaces across multiple departments to improve usability and reduce support overhead.",
    challenge: "NetSol's enterprise software had complex workflows spread across multiple modules that were difficult for end-users and administrators to navigate. The interface had accumulated features over years, resulting in confusion, errors, and support overhead.",
    solution: "Conducted extensive user research with finance, operations, and IT teams. Redesigned interfaces with improved information architecture, clearer mental models, consolidated controls, and contextual help systems. Created interaction patterns for complex workflows.",
    technologies: ["Figma", "Adobe XD", "User Research", "Usability Testing", "Prototyping", "Design Systems"],
    image: null,
    images: [],
    video: null,
    link: null,
    status: "completed",
    year: 2023,
    featured: false
  },

  // ═══════════════════════════════════════════════════════════════
  // IMMERSIVE WORLD PROJECTS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "luxury-villa-vr",
    title: "Luxury Villa VR Walkthrough",
    subtitle: "Real Estate VR Experience",
    world: "immersive",
    services: ["vr-real-estate"],
    category: "VR Real Estate",
    description: "Full VR real estate experience built from floor plans for an off-plan luxury villa in DHA, Lahore. Meta Quest 3 ready with high-fidelity photorealistic materials, advanced lighting, interactive hotspots for room information, and spatial audio.",
    challenge: "A luxury property developer needed to showcase an off-plan villa to potential international buyers before construction completion. Floor plans alone were insufficient to convey the spatial experience and design quality.",
    solution: "Built complete VR walkthrough from architectural floor plans and design renderings. Used photogrammetry and PBR materials for photorealism. Added interactive hotspots with room specs, cherry tree visualization, and immersive spatial audio.",
    technologies: ["Unity 3D", "Meta Quest 3", "C#", "Photogrammetry", "PBR Materials", "Spatial Audio", "WebGL Export"],
    image: "images/vr and 360/after.png",
    images: ["images/vr and 360/after.png", "images/vr and 360/before.png"],
    video: "https://www.youtube.com/watch?v=2IQI5v6wLCw&t=2s",
    link: null,
    status: "live",
    year: 2024,
    featured: true
  },

  {
    id: "1-kanal-villa-vr",
    title: "1 Kanal Villa VR",
    subtitle: "Mobile-Optimized Property Visualization",
    world: "immersive",
    services: ["vr-real-estate"],
    category: "VR Real Estate",
    description: "Elegant 1 Kanal villa visualization designed for mobile platforms with optimized lighting and interior flow. Interactive walkthrough showcasing luxury residential property.",
    challenge: "Needed to create a mobile-friendly VR experience for a 1 Kanal property that would work across different devices and platforms.",
    solution: "Built optimized VR visualization with mobile-first approach, realistic lighting, and smooth interior navigation.",
    technologies: ["Unity 3D", "Mobile Optimization", "3D Lighting", "WebGL"],
    image: "images/vr and 360/ik house.png",
    images: ["images/vr and 360/ik house.png"],
    video: null,
    link: null,
    status: "live",
    year: 2024,
    featured: false
  },

  {
    id: "matlock-galani-360-tour",
    title: "Matlock Galani 360° Tour",
    subtitle: "Interactive 360° Property Experience",
    world: "immersive",
    services: ["360-tours"],
    category: "360° Video",
    description: "Interactive 360° video tour captured with Insta360 X3 professional camera. Immersive property experience with smooth navigation and interactive hotspots.",
    challenge: "Create an immersive 360° property tour that could be shared across web and social media platforms.",
    solution: "Captured high-quality 360° footage using Insta360 X3, edited for web embedding with interactive navigation and hotspots.",
    technologies: ["Insta360 X3", "360° Video", "Web Embedding"],
    image: "images/vr and 360/matlock.png",
    images: ["images/vr and 360/matlock.png"],
    video: "https://youtu.be/tTfrOWW8lW4?si=AC40hyr6r_kXw3xp",
    link: null,
    status: "live",
    year: 2024,
    featured: false
  },

  {
    id: "neurospace-vr",
    title: "NeuroSpace VR",
    subtitle: "Immersive Therapeutic Environment",
    world: "immersive",
    services: ["interactive-pc-experiences"],
    category: "VR Environment",
    description: "Immersive therapeutic VR environment with spatial audio and interactive elements designed for wellness applications.",
    challenge: "Create a calming, immersive VR space for therapeutic and wellness purposes.",
    solution: "Designed and built a serene VR environment with spatial audio, interactive elements, and therapeutic design principles.",
    technologies: ["Unity 3D", "Oculus SDK", "Spatial Audio", "C#"],
    image: "images/vr and 360/NeuroSpace VR Preview.png",
    images: ["images/vr and 360/NeuroSpace VR Preview.png"],
    video: null,
    link: null,
    status: "completed",
    year: 2024,
    featured: false
  },

  {
    id: "vr-material-swap",
    title: "VR Material Swap Engine",
    subtitle: "Real-time Material System",
    world: "immersive",
    services: ["vr-staging"],
    category: "VR Tool",
    description: "Real-time material and finish swapping system built in Unity for VR design visualization. Allows interior designers and architects to test different wall colors, floor materials, furniture finishes instantly without rebuilding scenes. Works on Meta Quest 3, PC VR, and WebGL.",
    challenge: "Interior designers needed a way to rapidly visualize different material options (wall colors, floor types, furniture finishes) in VR without spending hours rebuilding the entire scene each time.",
    solution: "Built a real-time material swapping system using shader technology and material pre-loading. UI allows instant switching between material variants while maintaining performance. Optimized for both standalone VR and WebGL.",
    technologies: ["Unity 3D", "C#", "Shader Programming", "Real-time Rendering", "Meta Quest SDK", "WebGL Export"],
    image: "images/vr and 360/material swap.png",
    images: ["images/vr and 360/material swap.png"],
    video: "https://www.youtube.com/watch?v=tM35bx3G15U",
    link: null,
    status: "completed",
    year: 2024,
    featured: false,
    client: "Interior Design Studios",
    industry: "Interior Design & Architecture"
  },

  {
    id: "360-tours-suite",
    title: "360° Virtual Tour Suite",
    subtitle: "Interactive Property Tours",
    world: "immersive",
    services: ["360-tours"],
    category: "360° Video",
    description: "Interactive 360° property tours featuring hotspots, floor plans, embedded player controls, and web integration. Used by hospitality, real estate, and commercial clients for immersive property showcases.",
    challenge: "Multiple hospitality, real estate, and commercial clients needed immersive property tours that could be embedded on their websites, social media, and viewed on both desktop and mobile devices.",
    solution: "Created a suite of 360° tours using professional Insta360 X3 camera. Edited and optimized for web with interactive hotspots linking to floor plans, room information, booking links, and contact CTAs. Built responsive web viewers for desktop and mobile.",
    technologies: ["Insta360 X3", "360° Video", "Hotspot Editor", "Web Embedding", "Responsive Design", "HTML5 Video"],
    image: "images/ui ux and web/Screenshot 2025-12-29 214144.png",
    images: ["images/ui ux and web/Screenshot 2025-12-29 214144.png"],
    video: null,
    link: null,
    status: "live",
    year: 2024,
    featured: true
  },

  {
    id: "heaven-hotel-360",
    title: "Heaven Hotel 360° Tour",
    subtitle: "Hospitality Virtual Tour",
    world: "immersive",
    services: ["360-tours"],
    category: "360° Video",
    description: "Interactive 360° virtual tour of Heaven Hotel with hotspots linking to room information, amenities, booking engine, and contact. Captured using Insta360 X3 professional camera. Embedded on hotel website for potential guests to explore rooms and facilities before booking.",
    challenge: "Heaven Hotel needed an immersive way to showcase all rooms and facilities to potential guests, reducing need for physical facility visits and enabling remote booking decisions.",
    solution: "Created professional 360° tours of all major areas with interactive hotspots. Integrated with booking engine and room availability system. Added narration and ambient audio.",
    technologies: ["Insta360 X3", "360° Video", "Hotspot Editing", "Booking Integration", "Web Embedding"],
    image: "images/vr and 360/front1.jpg",
    images: ["images/vr and 360/front1.jpg"],
    video: null,
    link: "https://www.heavenhotel.com.pk/",
    status: "live",
    year: 2024,
    featured: false,
    client: "Heaven Hotel",
    industry: "Hospitality"
  },

  {
    id: "sq-office-360",
    title: "SQ Office 360° Tour",
    subtitle: "Studio Virtual Tour",
    world: "immersive",
    services: ["360-tours"],
    category: "360° Video",
    description: "Interactive 360° tour of SQ Interactive's studio space showcasing the creative environment and team workspace.",
    challenge: "Showcase the studio environment to remote clients and potential team members.",
    solution: "Created an interactive 360° tour with hotspots highlighting different areas and capabilities.",
    technologies: ["Insta360 X3", "360° Video", "Hotspot Editing"],
    image: null,
    images: [],
    video: null,
    link: null,
    status: "live",
    year: 2024,
    featured: false
  },

  {
    id: "furniture-scanning-sofa",
    title: "Furniture Scanning — Sofa",
    subtitle: "3D Photogrammetry",
    world: "immersive",
    services: ["furniture-scanning"],
    category: "3D Scanning",
    description: "High-fidelity 3D scan of a luxury sofa using photogrammetry. Reusable asset for multiple VR projects.",
    challenge: "Create a reusable 3D furniture asset for use across multiple VR projects.",
    solution: "Scanned a luxury sofa using photogrammetry to create a high-fidelity 3D model.",
    technologies: ["Photogrammetry", "3D Scanning", "Asset Optimization"],
    image: "images/vr and 360/sofa.png",
    images: ["images/vr and 360/sofa.png"],
    video: null,
    link: null,
    status: "completed",
    year: 2024,
    featured: false
  },

  {
    id: "furniture-scanning-elephant",
    title: "Furniture Scanning — Elephant Sculpture",
    subtitle: "3D Photogrammetry",
    world: "immersive",
    services: ["furniture-scanning"],
    category: "3D Scanning",
    description: "3D scan of an elephant sculpture for interior design visualization projects.",
    challenge: "Create a reusable 3D asset of a decorative sculpture for VR interior design projects.",
    solution: "Scanned the sculpture using photogrammetry to create a detailed 3D model.",
    technologies: ["Photogrammetry", "3D Scanning", "Asset Optimization"],
    image: "images/vr and 360/elephant scan.png",
    images: ["images/vr and 360/elephant scan.png"],
    video: null,
    link: null,
    status: "completed",
    year: 2024,
    featured: false
  },

  // ═══════════════════════════════════════════════════════════════
  // AI WORLD PROJECTS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "ai-interior-design",
    title: "AI Interior Design System",
    subtitle: "AI-Powered Visualization",
    world: "ai",
    services: ["ai-interior-design"],
    category: "AI Visualization",
    description: "AI-assisted interior design system that generates concept visualizations from floor plans and design briefs. Uses generative AI to produce multiple design options rapidly.",
    challenge: "Interior designers spent hours creating manual renderings for each design concept. Clients wanted to see multiple design options before committing. Time-to-concept was the limiting factor in design iteration.",
    solution: "Built an AI pipeline that accepts floor plans and design preferences, then generates multiple unique design concepts using generative AI. Created a web interface for parameterization and result gallery.",
    technologies: ["AI/ML", "DALL-E API", "MidJourney", "Design Automation", "Python", "Node.js", "Web Interface"],
    image: "images/ai/ai interior design.png",
    images: ["images/ai/ai interior design.png"],
    video: null,
    link: null,
    status: "pilot",
    year: 2024,
    featured: true
  },

  {
    id: "ai-visualization-agent",
    title: "VR-AI Interior Assistant",
    subtitle: "AI Design Agent",
    world: "ai",
    services: ["ai-visualization"],
    category: "AI Agent",
    description: "Intelligent AI agent that assists with interior design decisions within VR environments. Analyzes room layouts, material choices, lighting, and furniture arrangements, then provides design recommendations using AI. Users speak or type design requests in VR, and the agent suggests modifications in real-time.",
    challenge: "Users in VR environments needed intelligent design assistance without breaking immersion. Required context-aware suggestions based on interior design principles.",
    solution: "Developed an AI agent using natural language processing that understands design context and room characteristics. Integrated with VR environment to accept voice commands and provide visual suggestions.",
    technologies: ["AI/ML", "Natural Language Processing", "Design Algorithms", "VR Integration", "Voice Recognition", "Computer Vision"],
    image: "images/ai/ai agent job seeker.png",
    images: ["images/ai/ai agent job seeker.png"],
    video: null,
    link: null,
    status: "pilot",
    year: 2024,
    featured: false,
    client: "Internal R&D",
    industry: "AI & Immersive Technology"
  },

  // ═══════════════════════════════════════════════════════════════
  // LAB WORLD PROJECTS
  // ═══════════════════════════════════════════════════════════════

  {
    id: "vr-adventures-disabled",
    title: "VR Adventures for the Disabled",
    subtitle: "Accessible VR Experience",
    world: "lab",
    services: [],
    category: "Experimental",
    description: "Experimental VR experience designed to be accessible to people with disabilities, featuring adaptive controls and inclusive design.",
    challenge: "Create VR experiences that are accessible to people with various disabilities.",
    solution: "Designed and built VR experiences with adaptive controls, accessibility features, and inclusive design principles.",
    technologies: ["Unity 3D", "Accessibility Design", "Adaptive Controls"],
    image: null,
    images: [],
    video: null,
    link: null,
    status: "experimental",
    year: 2024,
    featured: false
  }
];

// ═══════════════════════════════════════════════════════════════
// SERVICE DEFINITIONS
// ═══════════════════════════════════════════════════════════════

const SQ_SERVICES = {
  // DIGITAL SERVICES
  "website-development": {
    id: "website-development",
    world: "digital",
    title: "Website Design & Development",
    slug: "website-development",
    description: "Beautiful, fast, and conversion-focused websites that represent your business and attract the right customers.",
    shortDescription: "Custom responsive websites built for performance and conversion.",
    icon: "globe",
    color: "#D4AF37"
  },
  "e-commerce": {
    id: "e-commerce",
    world: "digital",
    title: "E-Commerce & Shopify",
    slug: "e-commerce",
    description: "Beautiful online stores that convert visitors into customers and streamline your entire sales process.",
    shortDescription: "Shopify stores and e-commerce solutions that drive sales.",
    icon: "shopping-cart",
    color: "#D4AF37"
  },
  "custom-software": {
    id: "custom-software",
    world: "digital",
    title: "Custom Software & Systems",
    slug: "custom-software",
    description: "Purpose-built software and business systems that streamline operations and adapt as your business grows.",
    shortDescription: "Enterprise software and business systems tailored to your needs.",
    icon: "code",
    color: "#D4AF37"
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    world: "digital",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centered interface design that makes complex systems intuitive and delightful to use.",
    shortDescription: "Interfaces designed around user needs and behavior.",
    icon: "layout",
    color: "#D4AF37"
  },
  "seo-growth": {
    id: "seo-growth",
    world: "digital",
    title: "SEO & Digital Growth",
    slug: "seo-growth",
    description: "Strategic SEO that improves your visibility, drives qualified traffic, and helps you outrank competitors.",
    shortDescription: "SEO and digital marketing that drives qualified traffic.",
    icon: "trending-up",
    color: "#D4AF37"
  },
  "automation": {
    id: "automation",
    world: "digital",
    title: "Automation & Integration",
    slug: "automation",
    description: "Automated workflows that eliminate repetitive work, reduce errors, and free your team to focus on what matters.",
    shortDescription: "Workflow automation and system integration.",
    icon: "zap",
    color: "#D4AF37"
  },
  "hosting-support": {
    id: "hosting-support",
    world: "digital",
    title: "Hosting & Technical Support",
    slug: "hosting-support",
    description: "Reliable hosting, security, performance optimization, and 24/7 technical support for your digital infrastructure.",
    shortDescription: "Hosting, security, and ongoing technical support.",
    icon: "server",
    color: "#D4AF37"
  },

  // IMMERSIVE SERVICES
  "vr-real-estate": {
    id: "vr-real-estate",
    world: "immersive",
    title: "VR Real Estate",
    slug: "vr-real-estate",
    description: "High-fidelity VR builds for headsets and exhibitions — perfect for sales centers & expos.",
    shortDescription: "VR experiences for real estate and property marketing.",
    icon: "home",
    color: "#FF9500"
  },
  "360-tours": {
    id: "360-tours",
    world: "immersive",
    title: "360° Tours",
    slug: "360-tours",
    description: "Panoramic tours with hotspots, narration, and embedded lead-capture tools.",
    shortDescription: "Interactive 360° property tours and virtual walkthroughs.",
    icon: "camera",
    color: "#FF9500"
  },
  "interactive-walkthroughs": {
    id: "interactive-walkthroughs",
    world: "immersive",
    title: "Interactive Walkthroughs",
    slug: "interactive-walkthroughs",
    description: "WebGL walkthroughs optimized for mobile and desktop that feel native.",
    shortDescription: "Web-based interactive property experiences.",
    icon: "move",
    color: "#FF9500"
  },
  "vr-staging": {
    id: "vr-staging",
    world: "immersive",
    title: "VR Staging",
    slug: "vr-staging",
    description: "Transform empty spaces into fully furnished virtual showrooms in days.",
    shortDescription: "Virtual staging and interior visualization.",
    icon: "layers",
    color: "#FF9500"
  },
  "interactive-pc-experiences": {
    id: "interactive-pc-experiences",
    world: "immersive",
    title: "Interactive PC Experiences",
    slug: "interactive-pc-experiences",
    description: "High-performance interactive experiences for PC and exhibition displays.",
    shortDescription: "Desktop and exhibition interactive experiences.",
    icon: "monitor",
    color: "#FF9500"
  },
  "furniture-scanning": {
    id: "furniture-scanning",
    world: "immersive",
    title: "Furniture Scanning",
    slug: "furniture-scanning",
    description: "3D scanned furniture for reuse in multiple VR projects — reduces cost & time.",
    shortDescription: "3D photogrammetry and asset creation.",
    icon: "box",
    color: "#FF9500"
  },

  // AI SERVICES
  "ai-interior-design": {
    id: "ai-interior-design",
    world: "ai",
    title: "AI Interior Design",
    slug: "ai-interior-design",
    description: "Rapid concept visualizations using AI-assisted interior design pipelines.",
    shortDescription: "AI-powered interior design and visualization.",
    icon: "sparkles",
    color: "#00D9FF"
  },
  "ai-visualization": {
    id: "ai-visualization",
    world: "ai",
    title: "AI Visualization",
    slug: "ai-visualization",
    description: "AI-powered design visualization and concept generation.",
    shortDescription: "AI-assisted design visualization and concept generation.",
    icon: "image",
    color: "#00D9FF"
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SQ_PROJECTS, SQ_SERVICES };
}
