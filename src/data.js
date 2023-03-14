//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/rekreasi.png";
import Project2 from "./assets/img/projects/shotflow.png";
import NoImage from "./assets/img/no-image-lg.png";

import Project3 from "./assets/img/projects/harianjogja.png";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
// import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg8 from "./assets/img/skills/php.png";
import SkillImg9 from "./assets/img/skills/laravel.png";
import SkillImg10 from "./assets/img/skills/mysql.png";
import SkillImg11 from "./assets/img/skills/postgre.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: "mailto:usamahhafidz99@gmail.com",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/hafidzabrarr/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/abrar-byte",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "https://www.freelancer.com/u/usamahhafidz99",
  },
  {
    img: UpworkBrandIcon,
    href: "https://www.upwork.com/freelancers/~01bb4591bfc627d0e3",
  },
  // {
  //   img: FiverBrandIcon,
  //   href: '',
  // },
  // {
  //   img: BehanceBrandIcon,
  //   href: '',
  // },
  // {
  //   img: DribbbleBrandIcon,
  //   href: '',
  // },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Rekreasi",
    category: "web development",
    desc: "Travel app ",
    link: "https://www.rekreasi.com/",
    tech: "Next Js, Tailwind Css, Firebase, Redux, Axios, Firebase, React-hook-form, google-map-react,react-slick, react-select, headless UI,react-toastify",
  },
  {
    id: "2",
    image: Project2,
    name: "Shotflow",
    category: "web development",
    desc: "Property video booking app",
    link: "https://shotflow-development.web.app/",
    tech: "React Js, Tailwind Css, Firebase, Redux, Axios, Firebase, google-map-react,headless UI,twilio",

  },
  // {
  //   id: "3",
  //   image: Project3,
  //   name: "Bahan Dasar",
  //   category: "landing page",
  //   desc: "Landing page for online store",
  //   link: "https://www.bahandasar.com/",
  //   tech:"Next Js, Tailwind Css, Headless UI"
  // },
  {
    id: "4",
    image: NoImage,
    name: "Dashboards for Indonesian Human Resource Development Centers",
    category:"web development",
    desc: "Information system dashboard for Indonesian Human Resource Development Centers",
    link: "private",
    tech: "React Js, Tailwind Css, Redux-toolkit, Axios, Firebase,headless UI",

  },
  {
    id: "5",
    image: NoImage,
    name: "Call Pro",
    category:"web development",
    desc: "Home Property",
    link: "private",
    tech: "React Js, Ant Design, Redux, Axios, react-google-map",
  },
  {
    id: "6",
    image: NoImage,
    name: "Simo hospital information system",
    category:"web development",
    desc: "Information System for Hospital",
    link: "private",
    tech: "React Js, Bootstrap, React-Bootstrap, Axios, Formik, Yup, react-flatpickr, dayjs",
  },
  {
    id: "7",
    image: Project3,
    name: "Harian Jogja",
    category:"web development",
    desc: "News Portal",
    link: "https://harianjogja.com/",
    tech: "Next Js, Tailwind Css, Axios, Firebase, Headless UI, Formik, Yup, moment js, react-date-range",
  },
  {
    id: "8",
    image: NoImage,
    name: "Clean Book",
    category:"web development",
    desc: "Dashboard for Invoice Management",
    link: "private",
    tech: "React Js, Tailwind Css, Axios,Headless UI, Formik, Yup, moment js, jspdf",
  },
  {
    id: "9",
    image: NoImage,
    name: "POS the lawou group",
    category:"web development",
    desc: "Dashboard for Lawu Group Management",
    link: "private",
    tech: "React Js, Tailwind Css, Axios,Headless UI, Formik, Yup, moment js, react-date-range",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  // {
  //   name: "Landing Page",
  // },
  // {
  //   name: "Personal Project",
  // },
  {
    name: "Web Development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
];

// services
export const services = [
  // {
  //   icon: <FiLayout />,
  //   name: 'Web Design',
  //   description:
  //     ' I make good and responsive designs, both with bootsrap, tailwind, antdesign, and other css frameworks',
  // },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description: "I build, create, and maintain website.",
  },
  // {
  //   icon: <FiPenTool />,
  //   name: 'Landing Page',
  //   description:
  //     'I make a single page website',
  // },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at usamahhafidz99@gmail.com",
    href: "mailto:usamahhafidz99@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Surakarta, Central Java, Indonesia",
    description: "Serving clients worldwide",
    href: "https://goo.gl/maps/6QtTq8fM4odfibda9",
  },
];
