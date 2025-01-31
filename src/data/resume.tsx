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
    "I'm Amine, a passionate and innovative computer engineer based in [Agadir, Morocco](https://www.google.com/maps?sca_esv=bbddf6f6e47022e4&output=search&q=agadir+map&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjnSuuKZNj-6zieDk_gkn6CyymgG_tEVFNWvBwycIom9K9aY2nzCOFNekow0Bz-8LYl4Lq88gs-XwJ0JdfeMgmHNncZPxCISb_iR778mY8GlkpTrMSg_5Tg7fgRJG5XtSitIFPlye7v0dUaCwr676ck5h_0n&entry=mc&ved=1t:200715&ictx=111). With a strong foundation in full-stack development, I specialize in building scalable and efficient web and mobile and desktop applications. My expertise spans across [React, Next.js, Node.js, C#, WPF, PHP, Laravel, Docker, Java ](/#skills) and more.",
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
        "Mon stage chez ABA Technology s'est concentré sur le développement d'un système intelligent de classification des images de cancer de la peau en utilisant des techniques avancées d'intelligence artificielle. À travers l'entraînement de réseaux de neurones convolutifs (CNN) sur un ensemble de données dermatologiques annotées, j'ai pu concevoir un modèle capable d'identifier différents types de lésions cutanées avec une précision optimisée grâce à l'algorithme Adam et des techniques de prétraitement d'images. En complément, j'ai développé une interface utilisateur avec Gradio pour une utilisation intuitive du modèle et intégré un bot sur Discord permettant une prédiction interactive des images. Mon travail a permis d'améliorer la précision diagnostique et ouvre des perspectives d'évolution vers une meilleure assistance aux professionnels de santé, notamment en explorant d'autres types de lésions cutanées et en intégrant des techniques d'interprétabilité pour une meilleure compréhension des décisions du modèle.",
    },
    {
      company: "Capgemini Engineering",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Stage",
      logoUrl: "https://www.capgemini.com/us-en/wp-content/themes/capgemini2020/assets/images/logo.svg",
      start: "2 mois",
      description:
        "Lors de mon stage chez Capgemini, j'ai travaillé sur le développement d'une application intelligente capable de classifier les images de produits dans une grande surface en utilisant le deep learning. L'objectif était de concevoir un modèle performant basé sur des réseaux de neurones convolutifs (CNN) afin d'identifier et de catégoriser automatiquement les articles placés dans les chariots ou sur les étagères. Pour cela, j'ai collecté et prétraité un large ensemble d'images de produits, optimisé l'entraînement du modèle en ajustant ses hyperparamètres et intégré des techniques de vision par ordinateur pour améliorer la précision de la reconnaissance. L'application, déployée sur mobile, permet aux utilisateurs de scanner des produits en temps réel et d'obtenir instantanément leur classification, offrant ainsi une solution efficace pour l'automatisation des inventaires et la gestion intelligente des stocks en grande distribution.",
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
        "Une plateforme de cours en ligne conçue pour offrir une expérience d’apprentissage interactive et personnalisée. L’objectif principal est de faciliter l’accès au savoir tout en garantissant une gestion efficace des contenus éducatifs.",
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
      description:"",
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
      dates: "(1 month et une semaine)",
      active: true,
      description:"",
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
      dates: "(2 semaine )",
      active: true,
      description:"",
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
      dates: "(3 semaine )",
      active: true,
      description:"",
      technologies: [
        "React Js",
        "MongoDB",
        "Node Js",
        "Express",
        "MERNE",
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
      href: "https://aminenaboulsi.github.io/Bref2/",
      dates: "(5 jour)",
      active: true,
      description:"",
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
      description:"",
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
      description:"",
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
      description:"",
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
      description:"",
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
      dates: "(2 semaine)",
      active: true,
      description:"",
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
      title: "Amine Fc",
      href: "https://aminenaboulsi.github.io/Fc/",
      dates: "(2 semaine)",
      active: true,
      description:
        "Une application web de gestion d'équipe Ultimate, permettant aux utilisateurs de créer, personnaliser et gérer leurs formations tactiques et équipes de joueurs via une interface interactive.",
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
      dates: "(2 semaine)",
      active: true,
      description:"",
      technologies: [
        "C#",
        "Windows Forms",
        "Bufinu ui",
        "Guna ui",
        "SMTP -p",
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
