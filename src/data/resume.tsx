import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

function calculateTimeElapsed(startDate: Date) {
  const now = new Date();
  const elapsed = now.getTime() - startDate.getTime();
  
  const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((elapsed % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  
  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}

export const DATA = {
  name: "Amine ",
  initials: "AM",
  url: "https://www.naboulsiamine.com",
  location: "Casablanca, MAR",
  description:
    "Computer Engineer, Building and Sharing My Knowledge",
  summary:
    `I'm Amine, a passionate and innovative computer engineer based in [Casablanca, Morocco](https://www.google.com/maps?sca_esv=bbddf6f6e47022e4&output=search&q=casablanca+map&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjnSuuKZNj-6zieDk_gkn6CyymgG_tEVFNWvBwycIom9K9aY2nzCOFNekow0Bz-8LYl4Lq88gs-XwJ0JdfeMgmHNncZPxCISb_iR778mY8GlkpTrMSg_5Tg7fgRJG5XtSitIFPlye7v0dUaCwr676ck5h_0n&entry=mc&ved=1t:200715&ictx=111). With a strong foundation in full-stack development, I specialize in building scalable and efficient web, mobile, and desktop applications. My expertise spans across
    [Java, SpringBoot, Angular, Next.js, Node.js, C#, WPF, PHP, Laravel, Docker, CI/CD pipelines, DevOps, Azure Cloud, Google Cloud](/#skills) and more.`,
  avatarUrl: "ME.jpeg",
  skills: [
    "Java",
    "SpringBoot",
    "Angular",
    "JavaSwing",
    "Typescript",
    "Next.js",
    "Node.js",
    "Express",
    "C#",
    "WPF",
    "php",
    "Laravel",
    "Lumen",
    "Python",
    "Docker",
    "Kubernetes",
    "CI/CD pipelines",
    "DevOps",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "naboulsiiamine@gmail.com",
    tel: "+212 654711474",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmineNaboulsi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/naboulsi-amine-1a9367249",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:naboulsiiamine@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
     {
    company: "Dashy",
    href: "https://dashypay.com/",
    badges: [],
    location: "Casablanca Technopark",
    title: "Full-time",
    logoUrl: "/dashy.jpg",
    start: "5 months",
    positions: [
      {
        title: "Full-stack Developer",
        period: "Sept. 2025 - Present · 2 months",
        location: "Casablanca-Settat, Morocco",
        skills: ["Devops", "Azure Cloud", "Java", "Spring Boot", "Angular", "Microservices", "Docker", "Kubernetes", "CI/CD pipelines"],
        images: ["/dashypay_cover.jpg"],
        description: "Working on microservices architecture and cloud deployment..."
      },
      {
        title: "Web Development Intern",
        period: "June 2025 - Sept. 2025 · 4 months",
        location: "Casablanca-Settat, Morocco",
        skills: ["Java", "Spring Boot", "Microservices", "Angular"],
        images: ["/blackpinksongs.png"]
      }
    ]
  },
     {
      company: "Mediot",
      href: "https://mediot.tech/",
      badges: [],
      location: "Casablanca Technopark",
      title: "Internship",
      logoUrl: "/mediot_img.jpg",
      start: "3 months",
      positions: [],
      description: "My internship at ABA Technology focused on developing an intelligent classification system for skin cancer images using advanced artificial intelligence techniques. Through training convolutional neural networks (CNN) on an annotated dermatological dataset, I designed a model capable of identifying different types of skin lesions with optimized accuracy using the Adam algorithm and image preprocessing techniques. Additionally, I developed a user interface with Gradio for intuitive model usage and integrated a Discord bot enabling interactive image prediction. My work improved diagnostic accuracy and opens up perspectives for better assistance to healthcare professionals, particularly by exploring other types of skin lesions and integrating interpretability techniques for better understanding of the model's decisions.",
      detailsUrl: "https://github.com/yourusername/mediot-project"
    },
    {
      company: "Capgemini Engineering",
      badges: [],
      href: "https://shopify.com",
      location: "Casanearshore",
      title: "Internship",
      logoUrl: "https://www.capgemini.com/us-en/wp-content/themes/capgemini2020/assets/images/logo.svg",
      start: "2 months",
      description: "During my internship at Capgemini, I worked on developing an intelligent application capable of classifying product images in a supermarket using deep learning. The objective was to design a high-performance model based on convolutional neural networks (CNN) to automatically identify and categorize items placed in shopping carts or on shelves. To achieve this, I collected and preprocessed a large set of product images, optimized model training by adjusting hyperparameters, and integrated computer vision techniques to improve recognition accuracy. The application, deployed on mobile, allows users to scan products in real-time and instantly obtain their classification, providing an effective solution for inventory automation and intelligent stock management in retail.",
    }
  ],
  education: [
    {
      school: "Youcode",
      href: "https://www.youcode.ma/",
      degree: "Full Stack Developer",
      logoUrl: "/youcode.jpeg",
      start: "2024",
      end: "2025",
    },
    {
      school: "Faculté Polydisciplinaire de Taroudant",
      href: "http://www.fpt.ac.ma/",
      degree: "Computer Engineering",
      logoUrl: "/ibnzohr.jpeg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Institut Spécialisé de Technologie Appliquée",
      href: "#",
      degree: "Specialized Technician Diploma",
      logoUrl: "https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Baccalaureate",
      href: "#",
      degree: "Physical Science",
      logoUrl: "",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
     {
      title: "RepasSuivi",
      href: "https://amine-store.vercel.app/",
      dates: "(3 week)",
      active: true,
      description: "RepasSuivi food tracking application that helps users monitor their daily nutrition and dietary habits.",
      technologies: [
        "Lumen",
        "laravel",
        "express.js",
        "NodeJs",
        "Consul",
        "redis",
        "rabbitMQ",
        "Docker",
        "PostgreSQL",
        "microservices",
        "NextJs",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://repas-suivi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/RepasSuivi-backend-microservices-php-javascript.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/repasSuivi.png",
      video:
        "",
    },
    {
      title: "You Learn",
      href: "https://youlearn-seven.vercel.app",
      dates: "(1 week)",
      active: true,
      description:
        "An online course platform designed to offer an interactive and personalized learning experience. The main objective is to facilitate access to knowledge while ensuring efficient management of educational content.",
      technologies: [
        "React Js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Php",
        "Swagger",
      ],
      links: [
        {
          type: "Website",
          href: "https://youlearn-seven.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/youlearn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/youlearn.png",
      video:
        "",
    },
    {
      title: "Animal Adoption",
      href: "#",
      dates: "(2 weeks)",
      active: true,
      description: "An Android application for animal adoption, connecting pets with potential adopters through an intuitive interface.",
      technologies: [
        "Android",
        "Java",
        "Firebase"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/adoptation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/adoptation.png",
      video:
        "",
    },
    {
      title: "Black Pink Songs",
      href: "#",
      dates: "(1 month and 1 week)",
      active: true,
      description: "A music application dedicated to Black Pink songs, featuring streaming capabilities and playlist management.",
      technologies: [
        "Android",
        "Java",
        "Firebase",
        "Php",
        "Mysql",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/adoptation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blackpinksongs.png",
      video:
        "",
    },
    {
      title: "XO",
      href: "#",
      dates: "(2 weeks)",
      active: true,
      description: "A classic Tic-Tac-Toe game application built for Android with real-time multiplayer functionality.",
      technologies: [
        "Android",
        "Java",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/adoptation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/xo.png",
      video:
        "",
    },
    {
      title: "Youtube Converter",
      href: "#",
      dates: "(3 weeks)",
      active: true,
      description: "A web application for converting and downloading YouTube videos in various formats using the MERN stack.",
      technologies: [
        "React Js",
        "MongoDB",
        "Node Js",
        "Express",
        "MERN",
      ],
      links: [
        {
          type: "Website",
          href: "https://jazzy-llama-a2f52f.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/M-Tijani/Youtube_Downloader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/yc.mp4",
    },
    {
      title: "Caffe Platform",
      href: "https://aminenaboulsi.github.io/caffe/",
      dates: "(5 days)",
      active: true,
      description: "A responsive website for a coffee shop, featuring menu display, ordering system, and location information.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://aminenaboulsi.github.io/Bref2/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/caffe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/caffe.png",
      video:
        "",
    },
    {
      title: "SnackApp",
      href: "#",
      dates: "(1 month)",
      active: true,
      description: "A desktop application for managing a snack bar, including inventory management, sales tracking, and customer orders.",
      technologies: [
        "C#",
        "WPF",
        "XAML",
        "Microsoft SQL SERVER",
        "Ado.net",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/SnackApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/snackapp.mp4",
    },
    {
      title: "ToDo List",
      href: "https://minijirabref.netlify.app/",
      dates: "(1 week)",
      active: true,
      description: "A task management application inspired by Jira, with drag-and-drop functionality and project organization.",
      technologies: [
        "React Js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://minijirabref.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/mini-jira",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/minijira.png",
      video:
        "",
    },
    {
      title: "Amine Air",
      href: "https://amine-air.vercel.app/",
      dates: "(2 weeks)",
      active: true,
      description: "An airline booking system with flight search, seat selection, and booking management features.",
      technologies: [
        "NextJs",
        "Tailwind",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://amine-air.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/AmineAir",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/amineair.png",
      video:
        "",
    },
    {
      title: "Amine FC",
      href: "https://aminenaboulsi.github.io/Fc/",
      dates: "(2 weeks)",
      active: true,
      description:
        "An ultimate team management web application, allowing users to create, customize, and manage their tactical formations and player teams through an interactive interface.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://aminenaboulsi.github.io/Fc/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/Fc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/fc.mp4",
    },
    {
      title: "Mail Sender",
      href: "#",
      dates: "(2 weeks)",
      active: true,
      description: "A desktop application for bulk email sending with template support and delivery tracking using SMTP protocol.",
      technologies: [
        "C#",
        "Windows Forms",
        "Bunifu UI",
        "Guna UI",
        "SMTP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/Sender_mails",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mailsender.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "HealthTech MetaVerse",
      dates: "May 24-25-26, 2024",
      location: "Agadir, Faculty of Medicine and Pharmacy of Agadir",
      description:
        "Developed a mobile application which delivers university campus-wide events in real-time to all students.",
      image:
        "/heatchTech2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HealthTech",
      dates: "February 3-4-5, 2023",
      location: "Agadir, Faculty of Medicine and Pharmacy of Agadir",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/heatchTech.jpg",
      mlh: "https://healthtech.uiz.ac.ma/",
      links: [],
    }
  ],
} as const;