import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Eye,
  GraduationCap,
  Image,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Trophy,
  Users,
  X,
} from "lucide-react";

const DashboardTab = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
    <p className="mt-2 text-slate-600">Welcome to Dynamic Campus Admin Panel. Analytics widgets coming soon.</p>
  </div>
);

const admissionSeedData = [
  {
    id: "ADM-1001",
    wing: "school",
    board: "",
    fullName: "Aarav Kumar",
    fathersName: "Ramesh Kumar",
    dob: "2010-08-12",
    gender: "Male",
    phone: "9876543210",
    aadharNo: "4587 3698 1245",
    address: "Chaurasiya Chowk, Hajipur, Vaishali, Bihar",
    classOrCourse: "Class 10",
  },
  {
    id: "ADM-1002",
    wing: "school",
    board: "",
    fullName: "Nandini Singh",
    fathersName: "Vivek Singh",
    dob: "2012-01-04",
    gender: "Female",
    phone: "9123456780",
    aadharNo: "7421 8896 3542",
    address: "Bagmali, Hajipur, Vaishali, Bihar",
    classOrCourse: "Class 8",
  },
  {
    id: "ADM-2001",
    wing: "coaching",
    board: "CBSE",
    fullName: "Ishita Sharma",
    fathersName: "Sanjay Sharma",
    dob: "2008-05-28",
    gender: "Female",
    phone: "9090909090",
    aadharNo: "9981 2457 6635",
    address: "Anand Vihar, Hajipur, Vaishali, Bihar",
    classOrCourse: "JEE Foundation",
  },
  {
    id: "ADM-2002",
    wing: "coaching",
    board: "BSEB",
    fullName: "Rohit Raj",
    fathersName: "Pramod Raj",
    dob: "2007-11-16",
    gender: "Male",
    phone: "9012345678",
    aadharNo: "6621 4432 5548",
    address: "Jadhua, Hajipur, Vaishali, Bihar",
    classOrCourse: "NEET Target",
  },
];

const emptyAdmissionForm = {
  fullName: "",
  fathersName: "",
  dob: "",
  gender: "Male",
  phone: "",
  aadharNo: "",
  address: "",
  classOrCourse: "",
  board: "",
  wing: "school",
};

const AddAdmissionModal = ({ isOpen, onClose, onSave, formData, setFormData, isEditing }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
        >
          <motion.form
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900">{isEditing ? "Edit Admission" : "Add New Admission"}</h3>
            <p className="mt-1 text-sm text-slate-500">Fill complete admission profile details for student records.</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(event) => setFormData((prev) => ({ ...prev, fullName: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Father&apos;s Name</label>
                <input
                  type="text"
                  required
                  value={formData.fathersName}
                  onChange={(event) => setFormData((prev) => ({ ...prev, fathersName: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter father name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Date of Birth</label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(event) => setFormData((prev) => ({ ...prev, dob: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(event) => setFormData((prev) => ({ ...prev, gender: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="10-digit phone number"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Aadhar Number</label>
                <input
                  type="text"
                  required
                  value={formData.aadharNo}
                  onChange={(event) => setFormData((prev) => ({ ...prev, aadharNo: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="XXXX XXXX XXXX"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-semibold text-slate-700">Address</label>
                <textarea
                  rows={2}
                  required
                  value={formData.address}
                  onChange={(event) => setFormData((prev) => ({ ...prev, address: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Full address"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Wing</label>
                <select
                  value={formData.wing}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      wing: event.target.value,
                      board: event.target.value === "coaching" ? prev.board || "CBSE" : "",
                    }))
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="school">Public School</option>
                  <option value="coaching">Coaching Centre</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Class / Course</label>
                <input
                  type="text"
                  required
                  value={formData.classOrCourse}
                  onChange={(event) => setFormData((prev) => ({ ...prev, classOrCourse: event.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Class 10 / JEE / NEET"
                />
              </div>

              {formData.wing === "coaching" && (
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Board</label>
                  <select
                    value={formData.board}
                    onChange={(event) => setFormData((prev) => ({ ...prev, board: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="CBSE">CBSE Board</option>
                    <option value="BSEB">BSEB Board</option>
                  </select>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Save Admission
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProfileModal = ({ student, onClose, onEdit }) => (
  <AnimatePresence>
    {student && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-xl"
        >
          <div className="border-b border-white/20 bg-slate-900/40 px-6 py-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">Admission Profile Card</p>
            <h3 className="mt-1 text-2xl font-bold">{student.fullName}</h3>
            <p className="mt-1 text-sm text-slate-200">ID: {student.id}</p>
          </div>

          <div className="grid gap-5 bg-white/95 p-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Personal Info</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold text-slate-900">Full Name:</span> {student.fullName}</p>
                <p><span className="font-semibold text-slate-900">Father&apos;s Name:</span> {student.fathersName}</p>
                <p><span className="font-semibold text-slate-900">DOB:</span> {student.dob}</p>
                <p><span className="font-semibold text-slate-900">Gender:</span> {student.gender}</p>
                <p><span className="font-semibold text-slate-900">Aadhar:</span> {student.aadharNo}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact Info</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold text-slate-900">Phone:</span> {student.phone}</p>
                <p><span className="font-semibold text-slate-900">Address:</span> {student.address}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Academic Info</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p><span className="font-semibold text-slate-900">Wing:</span> {student.wing === "school" ? "Public School" : "Coaching Centre"}</p>
                <p><span className="font-semibold text-slate-900">Class/Course:</span> {student.classOrCourse}</p>
                <p><span className="font-semibold text-slate-900">Board:</span> {student.board || "—"}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-white/20 bg-slate-900/40 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-300/70 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => onEdit(student)}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Edit Details
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const StudentsTab = () => {
  const [students, setStudents] = useState(admissionSeedData);
  const [mainTab, setMainTab] = useState("school");
  const [coachingBoardTab, setCoachingBoardTab] = useState("CBSE");
  const [searchText, setSearchText] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentForm, setStudentForm] = useState(emptyAdmissionForm);

  const filteredStudents = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return students.filter((student) => {
      const wingMatch = mainTab === "school" ? student.wing === "school" : student.wing === "coaching";
      const boardMatch = mainTab === "coaching" ? student.board === coachingBoardTab : true;
      const queryMatch =
        !query ||
        student.fullName.toLowerCase().includes(query) ||
        student.fathersName.toLowerCase().includes(query) ||
        student.id.toLowerCase().includes(query) ||
        student.phone.includes(query);

      return wingMatch && boardMatch && queryMatch;
    });
  }, [coachingBoardTab, mainTab, searchText, students]);

  const handleOpenAddModal = () => {
    setEditingStudentId(null);
    setStudentForm({
      ...emptyAdmissionForm,
      wing: mainTab,
      board: mainTab === "coaching" ? coachingBoardTab : "",
    });
    setIsAddModalOpen(true);
  };

  const handleOpenProfile = (student) => {
    setSelectedStudent(student);
  };

  const handleEditFromProfile = (student) => {
    setSelectedStudent(null);
    setEditingStudentId(student.id);
    setStudentForm({
      fullName: student.fullName,
      fathersName: student.fathersName,
      dob: student.dob,
      gender: student.gender,
      phone: student.phone,
      aadharNo: student.aadharNo,
      address: student.address,
      classOrCourse: student.classOrCourse,
      board: student.board,
      wing: student.wing,
    });
    setIsAddModalOpen(true);
  };

  const handleSaveAdmission = () => {
    if (!studentForm.fullName || !studentForm.fathersName || !studentForm.phone || !studentForm.classOrCourse) {
      return;
    }

    const payload = {
      ...studentForm,
      board: studentForm.wing === "coaching" ? studentForm.board || "CBSE" : "",
    };

    if (editingStudentId) {
      setStudents((prev) => prev.map((student) => (student.id === editingStudentId ? { ...student, ...payload } : student)));
    } else {
      setStudents((prev) => [
        {
          id: `ADM-${Date.now().toString().slice(-6)}`,
          ...payload,
        },
        ...prev,
      ]);
    }

    setIsAddModalOpen(false);
    setEditingStudentId(null);
    setStudentForm(emptyAdmissionForm);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="rounded-full bg-slate-100 p-1">
          <div className="grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMainTab("school")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mainTab === "school" ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              🏫 Public School
            </button>
            <button
              type="button"
              onClick={() => setMainTab("coaching")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                mainTab === "coaching" ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              🎓 Coaching Centre
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {mainTab === "coaching" && (
            <motion.div
              key="coaching-board-tabs"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 inline-flex rounded-full bg-blue-50 p-1"
            >
              {[
                { id: "CBSE", label: "CBSE Board" },
                { id: "BSEB", label: "BSEB Board" },
              ].map((board) => (
                <button
                  key={board.id}
                  type="button"
                  onClick={() => setCoachingBoardTab(board.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    coachingBoardTab === board.id
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-800"
                  }`}
                >
                  {board.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by name, father, ID or phone"
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={16} /> Add New Admission
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100/80 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Roll/ID</th>
                <th className="px-4 py-3">Student Name</th>
                <th className="px-4 py-3">Father&apos;s Name</th>
                <th className="px-4 py-3">Class/Course</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="border-t border-slate-100 text-slate-700 hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">{student.id}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{student.fullName}</td>
                    <td className="px-4 py-3">{student.fathersName}</td>
                    <td className="px-4 py-3">{student.classOrCourse}</td>
                    <td className="px-4 py-3">{student.phone}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => handleOpenProfile(student)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Eye size={14} /> View Profile
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                    No admission records found for this selection.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddAdmissionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveAdmission}
        formData={studentForm}
        setFormData={setStudentForm}
        isEditing={Boolean(editingStudentId)}
      />

      <ProfileModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
        onEdit={handleEditFromProfile}
      />
    </div>
  );
};

const TeachersTab = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Manage Teachers</h2>
    <p className="mt-2 text-slate-600">Teachers Management Coming Soon...</p>
  </div>
);

const NoticesTab = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Notice Board</h2>
    <p className="mt-2 text-slate-600">Notice Management Coming Soon...</p>
  </div>
);

const GalleryTab = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Photo Gallery</h2>
    <p className="mt-2 text-slate-600">Gallery Management Coming Soon...</p>
  </div>
);

const ToppersTab = () => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Toppers & Results</h2>
    <p className="mt-2 text-slate-600">Topper & Result Management Coming Soon...</p>
  </div>
);

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "students", label: "Manage Students", icon: Users },
  { id: "teachers", label: "Manage Teachers", icon: GraduationCap },
  { id: "notices", label: "Notice Board", icon: Bell },
  { id: "gallery", label: "Photo Gallery", icon: Image },
  { id: "toppers", label: "Toppers & Results", icon: Trophy },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeLabel = useMemo(
    () => navItems.find((item) => item.id === activeTab)?.label ?? "Dashboard",
    [activeTab]
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "students":
        return <StudentsTab />;
      case "teachers":
        return <TeachersTab />;
      case "notices":
        return <NoticesTab />;
      case "gallery":
        return <GalleryTab />;
      case "toppers":
        return <ToppersTab />;
      case "dashboard":
      default:
        return <DashboardTab />;
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed left-0 top-0 z-50 hidden h-screen w-72 border-r border-slate-800 bg-slate-900 text-slate-300 md:block">
        <div className="flex h-20 items-center border-b border-slate-800 px-6">
          <h1 className="text-xl font-bold tracking-wide text-blue-400">Dynamic Admin</h1>
        </div>

        <nav className="mt-4 space-y-1 px-3">
          {navItems.map((item) => {
            const ItemIcon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabChange(item.id)}
                className={`flex w-full items-center gap-3 rounded-r-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                  isActive
                    ? "border-l-4 border-blue-500 bg-slate-800 text-white"
                    : "border-l-4 border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                <ItemIcon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm md:hidden">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-bold text-blue-500">Dynamic Admin</h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close sidebar overlay"
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/55"
          />

          <aside className="relative h-full w-72 border-r border-slate-800 bg-slate-900 text-slate-300 shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-slate-800 px-4">
              <h2 className="text-lg font-bold text-blue-400">Dynamic Admin</h2>
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close sidebar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-4 space-y-1 px-3">
              {navItems.map((item) => {
                const ItemIcon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTabChange(item.id)}
                    className={`flex w-full items-center gap-3 rounded-r-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      isActive
                        ? "border-l-4 border-blue-500 bg-slate-800 text-white"
                        : "border-l-4 border-transparent text-slate-300 hover:bg-slate-800/70 hover:text-white"
                    }`}
                  >
                    <ItemIcon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      <div className="md:pl-72">
        <header className="hidden h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm md:flex">
          <div>
            <p className="text-sm font-medium text-slate-500">Welcome, Admin</p>
            <h2 className="text-xl font-bold text-slate-900">{activeLabel}</h2>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <LogOut size={17} /> Logout
          </button>
        </header>

        <main className="pt-20 md:pt-0">
          <div className="min-h-[calc(100vh-5rem)] bg-slate-50 p-4 md:p-8">{renderTabContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
