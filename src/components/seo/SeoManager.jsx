import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://dynamiccampus.in";
const DEFAULT_IMAGE = `${SITE_URL}/images/school-logo.png`;
const DEFAULT_KEYWORDS =
  "best school in Hajipur, best coaching institute in Hajipur, Dynamic Campus Hajipur, nursery admission in Hajipur, CBSE coaching in Hajipur, BSEB coaching in Hajipur, board preparation in Hajipur, foundation coaching in Hajipur";

const seoConfig = {
  "/": {
    title: "Dynamic Campus Hajipur | Best School & Coaching in Hajipur Bihar",
    description:
      "Dynamic Campus Hajipur is a trusted school and coaching institute for playgroup to Class 12, including CBSE and BSEB board preparation.",
    keywords:
      "best play school in Hajipur, top public school for kids in Hajipur, nursery admission in Hajipur 2026, best primary school in Hajipur Bihar, activity based learning school in Hajipur, Dynamic Public School Hajipur",
    path: "/",
    robots: "index, follow"
  },
  "/about": {
    title: "About Dynamic Campus Hajipur | Mission, Vision & Faculty",
    description:
      "Know Dynamic Campus Hajipur values, leadership and experienced faculty for school and coaching excellence.",
    keywords:
      "Dynamic Campus Hajipur, top school faculty in Hajipur, best coaching teachers in Hajipur, trusted school in Hajipur Bihar",
    path: "/about",
    robots: "index, follow"
  },
  "/academics": {
    title: "Academics | Dynamic Campus Hajipur Programs",
    description:
      "Explore Dynamic Campus Hajipur academics for school and coaching wings with strong board and competitive preparation.",
    keywords:
      "best coaching institute in Hajipur, top CBSE coaching for class 10 in Hajipur, BSEB 12th science coaching in Hajipur, best mathematics and science coaching in Hajipur, class 11 and 12 CBSE coaching classes near me, Dynamic Coaching Centre Hajipur",
    path: "/academics",
    robots: "index, follow"
  },
  "/gallery": {
    title: "Gallery | Dynamic Campus Hajipur Campus Life",
    description:
      "View photos of activities, achievements, classrooms and events at Dynamic Campus Hajipur.",
    keywords:
      "school activities in Hajipur, best school campus in Hajipur, Dynamic Campus Hajipur gallery",
    path: "/gallery",
    robots: "index, follow"
  },
  "/notices": {
    title: "Notices | Dynamic Campus Hajipur Updates",
    description:
      "Read latest admission updates, exam schedules, holiday notices and announcements from Dynamic Campus Hajipur.",
    keywords:
      "Dynamic Campus Hajipur admission notice, school notice Hajipur, coaching exam updates Hajipur",
    path: "/notices",
    robots: "index, follow"
  },
  "/contact": {
    title: "Contact Dynamic Campus Hajipur | Admission Enquiry",
    description:
      "Contact Dynamic Campus Hajipur for school and coaching admissions, fee details, and counselling support.",
    keywords:
      "Dynamic Campus Hajipur fee structure, school admission contact Hajipur, coaching enquiry in Hajipur",
    path: "/contact",
    robots: "index, follow"
  },
  "/toppers": {
    title: "Top Performers | Dynamic Campus Hajipur Results",
    description:
      "Meet Dynamic Campus Hajipur toppers and explore strong board and competitive exam results.",
    keywords:
      "best coaching for Bihar Board 12th Science, top performers in Hajipur, best results coaching in Hajipur",
    path: "/toppers",
    robots: "index, follow"
  },
  "/privacy-policy": {
    title: "Privacy Policy | Dynamic Campus",
    description: "Read how Dynamic Campus collects, uses, and protects your information.",
    path: "/privacy-policy",
    robots: "index, follow"
  },
  "/terms": {
    title: "Terms & Conditions | Dynamic Campus",
    description: "Read terms and conditions for using Dynamic Campus website and services.",
    path: "/terms",
    robots: "index, follow"
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Dynamic Campus",
    description: "Read terms and conditions for using Dynamic Campus website and services.",
    path: "/terms",
    robots: "index, follow"
  },
  "/disclaimer": {
    title: "Disclaimer | Dynamic Campus",
    description: "Review disclaimer information and limitations related to Dynamic Campus content.",
    path: "/disclaimer",
    robots: "index, follow"
  },
  "/grievance": {
    title: "Grievance | Dynamic Campus",
    description: "Submit and track grievance-related communication with Dynamic Campus.",
    path: "/grievance",
    robots: "index, follow"
  },
  "/login": {
    title: "Login | Dynamic Campus",
    description: "Secure login portal for Dynamic Campus students and administrators.",
    keywords: "Dynamic Campus login",
    path: "/login",
    robots: "noindex, nofollow"
  },
  "/LoginPage": {
    title: "Login | Dynamic Campus",
    description: "Secure login portal for Dynamic Campus students and administrators.",
    keywords: "Dynamic Campus login",
    path: "/login",
    robots: "noindex, nofollow"
  },
  "/admin": {
    title: "Admin Dashboard | Dynamic Campus",
    description: "Administrative dashboard for Dynamic Campus operations.",
    keywords: "Dynamic Campus admin",
    path: "/admin",
    robots: "noindex, nofollow"
  },
  "/AdminDashboard": {
    title: "Admin Dashboard | Dynamic Campus",
    description: "Administrative dashboard for Dynamic Campus operations.",
    keywords: "Dynamic Campus admin",
    path: "/admin",
    robots: "noindex, nofollow"
  }
};

const getOrCreateTag = (selector, creator) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = creator();
    document.head.appendChild(tag);
  }
  return tag;
};

const upsertMetaByName = (name, content) => {
  const tag = getOrCreateTag(`meta[name='${name}']`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", name);
    return meta;
  });
  tag.setAttribute("content", content);
};

const upsertMetaByProperty = (property, content) => {
  const tag = getOrCreateTag(`meta[property='${property}']`, () => {
    const meta = document.createElement("meta");
    meta.setAttribute("property", property);
    return meta;
  });
  tag.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  const tag = getOrCreateTag("link[rel='canonical']", () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    return link;
  });
  tag.setAttribute("href", href);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const current = seoConfig[location.pathname] || seoConfig["/"];
    const canonicalUrl = `${SITE_URL}${current.path}`;

    document.title = current.title;
    upsertMetaByName("description", current.description);
    upsertMetaByName("keywords", current.keywords || DEFAULT_KEYWORDS);
    upsertMetaByName("robots", current.robots);
    upsertCanonical(canonicalUrl);

    upsertMetaByProperty("og:title", current.title);
    upsertMetaByProperty("og:description", current.description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:image", DEFAULT_IMAGE);

    upsertMetaByName("twitter:title", current.title);
    upsertMetaByName("twitter:description", current.description);
    upsertMetaByName("twitter:image", DEFAULT_IMAGE);
  }, [location.pathname]);

  return null;
};

export default SeoManager;
