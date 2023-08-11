import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/Users/AddUser";
import ListUsers from "./pages/ListUsers";
import EditUser from "./components/Users/EditUser";
import AddContent from "./components/Contents/AddContent";
import GetContents from "./components/Contents/GetContents";
import GetContentsAdmin from "./components/Contents/GetContentsAdmin";
import Auth from "./pages/Auth";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import "tailwindcss/tailwind.css"
import ReportContent from "./components/Contents/ReportContent";
import Admin from "./pages/Admin";
import Notifications from "./components/Users/Notifications";
import MessageContent from "./components/Contents/MessageContent";
import DetailNotification from "./components/Users/DetailNotification";


const App = () => {
  return (
    <Router>
      <div className="container" >
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list-users" element={<ListUsers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/upload" element={<AddContent />} />
          <Route path="/content" element={<GetContents />} />
          <Route path="/content-admin" element={<GetContentsAdmin />} />
          <Route path='/report/:id' element={<ReportContent />} />
          <Route path='/messages' element={<MessageContent />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/detail-notification/:id" element={<DetailNotification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
