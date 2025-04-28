import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from "./Home/Home.jsx";
import Note from "./Note/Note.jsx";
import Past from "./PastPaper/Past.jsx";
import Aboutus from "./AboutUS/About.jsx";
import Syllabus from "./Syllabus/Syllabus.jsx";
import Syllabuslist from './Syllabus/Syllabuslist.jsx';
import Notelist from './Note/Notelist.jsx';
import NotePdf from './Note/NotePdf.jsx';
import Pastlist from "./PastPaper/Pastlist.jsx"
import PastPdf from './PastPaper/PastPdf.jsx';
import SyllabusPdf from './Syllabus/SyllabusPdf.jsx';
import Serach from './Components/Serach.jsx';
import Error from './Components/Error.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Note" element={<Note />} />
        <Route path="pastpapers" element={<Past />} />
        <Route path="pastpapers/:course" element={<Pastlist/>} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="syllabus/:course" element={<Syllabuslist />} />
        <Route path="Note/:course" element={<Notelist />} />
        <Route path="Note/:course/:subj" element={<NotePdf />} />
        <Route path="pastpapers/:course/:subj" element={<PastPdf />} />
        <Route path="Syllabus/:course/:subj" element={<SyllabusPdf/>} />
        <Route path='search/:data' element={<Serach/>} />
        <Route path='maintenance' element={<Error/>} />
      </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
