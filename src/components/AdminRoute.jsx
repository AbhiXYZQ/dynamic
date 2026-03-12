import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../lib/firebase";

// List of admin emails (replace with your admin email)
const ADMIN_EMAILS = [
  "dynamichjp@gmail.com"
];

export default function AdminRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (!user || !ADMIN_EMAILS.includes(user.email)) return <Navigate to="/login" />;

  return children;
}
