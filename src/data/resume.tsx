import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amine ",
  initials: "DV",
  url: "https://dillion.io",
  location: "Agadir, MAR",
  description:
    "Computer Engineer,Building and Sharing My Knowledge",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEY55PrKlPY1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706394101212?e=1743638400&v=beta&t=5X2hFZXwunj8yx_30lc0qg3CF9tc3HIXXxZJvP8T8Pg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "C#",
    "WPF",
    "php",
    "Laravel",
    "Lumen",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "JavaSwing",
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
        url: "#",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mediot",
      href: "https://mediot.tech/",
      badges: [],
      location: "Remote",
      title: "Stage ",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHBDG4j9Ggf-Q/company-logo_200_200/company-logo_200_200/0/1630548813412/mediot_technology_logo?e=1746057600&v=beta&t=UhYffx0nIeZqy2mYFBUqtSo5nJN81BrhN99mWykUeLE",
      start: "3 mois",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Capgemini",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Stage",
      logoUrl: "https://www.capgemini.com/us-en/wp-content/themes/capgemini2020/assets/images/logo.svg",
      start: "2 mois",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    }
  ],
  education: [
    {
      school: "Youcode",
      href: "https://www.youcode.ma/",
      degree: "Full Stack developer",
      logoUrl: "/youcode.jpeg",
      start: "2024",
      end: "en cours",
    },
    {
      school: "Faculté Polydisciplinaire de Taroudant",
      href: "http://www.fpt.ac.ma/",
      degree: "Génie informatique",
      logoUrl: "/ibnzohr.jpeg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Institut specialise de technologie appliquée",
      href: "#",
      degree: "Diplome technicien spécialisé",
      logoUrl: "https://www.ofppt.ma/themes/custom/ofppt/assets/images/logo.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Baccalaureate",
      href: "#",
      degree: "Science physique",
      logoUrl: "",
      start: undefined,
      end: "2019",
    },
  ],
  projects: [
    {
      title: "You Learn",
      href: "https://youlearn-seven.vercel.app",
      dates: "(1 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
      title: "Adoptation Animal",
      href: "#",
      dates: "(2 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
      title: "SnackApp",
      href: "#",
      dates: "(1 month)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "C#",
        "WFP",
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
      title: "NeoBank",
      href: "https://neo-bank-r9so.vercel.app/",
      dates: "(1 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React Js",
        "Redux",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Php",
        "Swagger",
      ],
      links: [
        {
          type: "Website",
          href: "https://neo-bank-r9so.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/NeoBank",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/neobank.png",
      video:
        "",
    },
    {
      title: "Amine Store",
      href: "https://amine-store.vercel.app/",
      dates: "(1 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "React Js",
        "Redux",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Php",
      ],
      links: [
        {
          type: "Website",
          href: "https://amine-store.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AmineNaboulsi/AmineStore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/aminestore.png",
      video:
        "",
    },
    {
      title: "ToDo List",
      href: "https://minijirabref.netlify.app/",
      dates: "(1 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
      title: "Amine Fc",
      href: "https://aminenaboulsi.github.io/Fc/",
      dates: "(2 semaine)",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
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
   
  ],
  hackathons: [
    {
      title: "HealthTech MetaVerse",
      dates: "24-25-26 May 2024",
      location: "Agadir, Faculté de Médecine et de Pharmacie d'Agadir",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/heatchTech2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HealthTech",
      dates: "03-04-05 Février 2023",
      location: "Agadir, Faculté de Médecine et de Pharmacie d'Agadir",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/heatchTech.jpg",
      mlh: "https://healthtech.uiz.ac.ma/",
      links: [],
    }
  ],
} as const;
