import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Facebook,
  Instagram,
  ListChecks,
  Mail,
  MapPin,
  MapPinned,
  MessageSquare,
  Phone,
  Timer,
  User,
  Users,
  Youtube,
} from "lucide-react";

const googleMapsLink =
  "https://www.google.com/maps/place/Dynamic+Coaching+Centre/@25.6889321,85.2268559,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed5c2d3b4dc341:0x1d8aa75e8c262822!8m2!3d25.6889321!4d85.2294308!16s%2Fg%2F11f_q60bnn?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D";
const googleMapsEmbed = "https://www.google.com/maps?q=25.6889321,85.2294308&z=17&output=embed";
const enquiryWhatsApp = "919630020827";
const enquiryEmail = "dynamichjp@gmail.com";
const enquiryApiUrl = `https://formsubmit.co/ajax/${enquiryEmail}`;

const contactCards = [
  {
    title: "Address",
    value: "Dynamic Coaching Centre / Dynamic Public School, Chaurasiya Chowk, Hajipur, Vaishali, Bihar",
    icon: MapPin,
  },
  {
    title: "Phone (School)",
    value: "+91 96300 20827",
    icon: Phone,
  },
  {
    title: "Phone (Coaching)",
    value: "+91 96300 20827",
    icon: Phone,
  },
  {
    title: "Email",
    value: enquiryEmail,
    icon: Mail,
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
];

const supportHighlights = [
  { title: "Admission Counselling", detail: "Mon-Sat | 9:00 AM - 6:00 PM", icon: Timer },
  { title: "Quick Verification", detail: "Documents + batch planning support", icon: BadgeCheck },
];

const isValidExternalLink = (url) => typeof url === "string" && url.startsWith("http");

const ContactPage = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phoneNumber: "",
    courseClass: "",
    message: "",
  });
  const [showActions, setShowActions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.studentName || !formData.parentName || !formData.phoneNumber || !formData.courseClass) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus({ type: "", message: "" });

      const response = await fetch(enquiryApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Admission Enquiry - Dynamic Campus",
          studentName: formData.studentName,
          parentName: formData.parentName,
          phoneNumber: formData.phoneNumber,
          courseClass: formData.courseClass,
          message: formData.message || "Not provided",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry right now.");
      }

      setShowActions(true);
      setSubmitStatus({ type: "success", message: "Enquiry sent successfully to our admission team." });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Submission failed. Please try again or use WhatsApp/Email below." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const enquiryText = encodeURIComponent(
    `Hello Dynamic Campus,\nStudent: ${formData.studentName}\nParent: ${formData.parentName}\nPhone: ${formData.phoneNumber}\nProgram: ${formData.courseClass}\nQuery: ${formData.message || "Not provided"}`
  );
  const whatsappUrl = `https://wa.me/${enquiryWhatsApp}?text=${enquiryText}`;
  const mailtoUrl = `mailto:${enquiryEmail}?subject=New%20Admission%20Enquiry&body=${enquiryText}`;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-16 text-white shadow-xl shadow-slate-900/25 sm:px-10"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-200 md:text-base">
          We&apos;d love to hear from you. Reach out for admissions, queries, or just to say hello.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <div key={card.title} className="interactive-card rounded-2xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-900/5">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{card.title}</p>
                  {card.title === "Address" ? (
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex text-sm leading-relaxed text-slate-600 transition hover:text-blue-700"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{card.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-slate-200 bg-slate-100/70 p-4">
            <div className="mb-3 flex items-center gap-2 px-1">
              <MapPinned className="h-5 w-5 text-slate-600" />
              <p className="text-sm font-semibold text-slate-700">Google Maps Location</p>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-300 bg-slate-50">
              <iframe
                title="Dynamic Coaching Centre Location"
                src={googleMapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full"
              />
            </div>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="interactive-button mt-3 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
          className="relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white/90 p-6 shadow-xl shadow-blue-900/10 backdrop-blur md:p-7"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />

          <div className="mb-4 flex items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Admission Enquiry</h2>
              <p className="mt-1 text-sm text-slate-600">Fill out this form and our team will contact you shortly.</p>
            </div>
            <span className="hidden rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:inline-flex">
              Response within 24 hrs
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              School Admissions
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Coaching Enquiry
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="studentName" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Student Name
                </label>
                <div className="group flex items-center rounded-xl border border-slate-200 bg-white px-3 transition hover:border-slate-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <User className="h-4 w-4 text-slate-400 transition group-focus-within:text-blue-600" />
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="Enter student name"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-transparent px-3 py-3 text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="parentName" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Parent Name
                </label>
                <div className="group flex items-center rounded-xl border border-slate-200 bg-white px-3 transition hover:border-slate-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <Users className="h-4 w-4 text-slate-400 transition group-focus-within:text-blue-600" />
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    placeholder="Enter parent name"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-transparent px-3 py-3 text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="phoneNumber" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>
                <div className="group flex items-center rounded-xl border border-slate-200 bg-white px-3 transition hover:border-slate-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <Phone className="h-4 w-4 text-slate-400 transition group-focus-within:text-blue-600" />
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-transparent px-3 py-3 text-sm text-slate-800 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="courseClass" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Select Course/Class
                </label>
                <div className="group flex items-center rounded-xl border border-slate-200 bg-white px-3 transition hover:border-slate-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                  <ListChecks className="h-4 w-4 text-slate-400 transition group-focus-within:text-blue-600" />
                  <select
                    id="courseClass"
                    name="courseClass"
                    className="w-full rounded-xl bg-transparent px-3 py-3 text-sm text-slate-800 outline-none"
                    value={formData.courseClass}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Choose class/program
                    </option>
                    <option value="playgroup-kg">Playgroup - KG</option>
                    <option value="class-1-6">Class 1 - 6</option>
                    <option value="class-7-10">Class 7 - 10 (Foundation)</option>
                    <option value="class-11-12">Class 11 - 12 (Boards + Entrance)</option>
                    <option value="dropper-batch">Droppers Batch (Board Improvement)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                Message
              </label>
              <div className="group flex items-start rounded-xl border border-slate-200 bg-white px-3 transition hover:border-slate-300 focus-within:border-transparent focus-within:ring-2 focus-within:ring-blue-500">
                <MessageSquare className="mt-3 h-4 w-4 text-slate-400 transition group-focus-within:text-blue-600" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your query..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-transparent px-3 py-3 text-sm text-slate-800 outline-none"
                />
              </div>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-4 py-2.5 text-xs font-medium text-blue-700">
              Our counsellor will call you to discuss admission guidance and batch options.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-95"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>

            {submitStatus.message && (
              <div
                className={`rounded-xl border px-4 py-2.5 text-xs font-medium ${
                  submitStatus.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-rose-200 bg-rose-50 text-rose-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {showActions && (
              <div className="space-y-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-800">Enquiry captured successfully. Continue on:</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-button inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={mailtoUrl}
                    className="interactive-button inline-flex items-center rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
                  >
                    Email
                  </a>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 grid gap-5 lg:grid-cols-2"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/8">
          <h3 className="text-2xl font-bold text-slate-900">Connect With Us</h3>
          <p className="mt-2 text-sm text-slate-600">
            Follow our latest updates, results, and admission notices on social platforms.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              isValidExternalLink(item.href) ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-button inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              ) : (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
              )
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50/50 p-6 shadow-lg shadow-blue-900/8">
          <h3 className="text-2xl font-bold text-slate-900">Support & Timings</h3>
          <p className="mt-2 text-sm text-slate-600">
            Dedicated assistance for admissions, class selection, and onboarding.
          </p>

          <div className="mt-5 space-y-3">
            {supportHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
