/* eslint-disable no-unused-vars */
import {
  FaAward,
  FaBirthdayCake,
  FaBook,
  FaBookOpen,
  FaBuilding,
  FaCalculator,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarTimes,
  FaChartLine,
  FaCheckSquare,
  FaComment,
  FaEnvelopeOpenText,
  FaFemale,
  FaFlask,
  FaGraduationCap,
  FaHome,
  FaHourglassHalf,
  FaIndustry,
  FaMale,
  FaMapMarkerAlt,
  FaPhone,
  FaRegClock,
  FaTransgenderAlt,
} from "react-icons/fa";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function App() {
  const { studentId } = useParams();
  const [studentDatas, setStudentData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.200.180.172:8000/api/v1/student/${studentId}`
        );
        console.log(response.data.data);
        setStudentData(response.data.data.marks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const studentData = {
    Grade: "B+",
    MPR_Id: "84",
    SNA_Id: "1",
    absent: false,
    address: "jatani",
    category: "general",
    cenid: "centerid",
    city: "KHORDA",
    course: "Paper Recycling Operator cum Technician",
    createdAt: "2024-08-08T09:29:23.667Z",
    district: "khordha",
    dob: "2024-07-28T18:30:00.000Z",
    email: "justajit33@gmail.com",
    fathername: "Rakesh ra bapa",
    gender: "female",
    generalqualification: "10th",
    markUploadStatus: true,
    marks: {
      AssesmentAgencyName: "NewTech Assessment Agency",
      Grade: "B+",
      Nos: [
        {
          MarksObtained: 76,
          Practical: 20,
          Theory: 43,
          Total: 76,
          name: "Prepare for paper recycling operation based on Client requirement",
          passMark: 100,
          _id: "66b52f07631c6b7e7d1a9531",
        },
        {
          MarksObtained: 76,
          Practical: 20,
          Theory: 43,
          Total: 76,
          name: "Perform paper recycling operation",
          passMark: 100,
          _id: "66b52f07631c6b7e7d1a9532",
        },
        {
          MarksObtained: 76,
          Practical: 20,
          Theory: 43,
          Total: 76,
          name: "Inspect finished products quality, quantity, and package as per client requirement",
          passMark: 100,
          _id: "66b52f07631c6b7e7d1a9533",
        },
        {
          MarksObtained: 76,
          Practical: 20,
          Theory: 43,
          Total: 76,
          name: "Practice organizational health, safety and security",
          passMark: 100,
          _id: "66b52f07631c6b7e7d1a9534",
        },
        {
          MarksObtained: 76,
          Practical: 20,
          Theory: 43,
          Total: 76,
          name: "Employability Skills",
          passMark: 100,
          _id: "66b52f07631c6b7e7d1a9535",
        },
      ],
      Result: "Pass",
      TrainingPartner: "DDUGKY",
    },
    batchABN: "ODTP22CUTM/Q667524",
    batchId: "66b48d53425ae3b00dc7f613",
    centerCode: "centerid",
    courseName: "Paper Recycling Operator cum Technician",
    examDate: null,
    examId: "66b5239ce3c6c2f4392a158a",
    sectorName: "Environmental Science",
    studentAttendance: false,
    studentDOB: "2024-07-28T18:30:00.000Z",
    studentId: "66b48ff3425ae3b00dc7f64a",
    studentName: "Rakesh mulla",
    studentRedgNo: "220720100204",
    total: 380,
    totalPracticalMark: 100,
    totalTheorymark: 215,
    totalVivaMark: 65,
    mobile: "06370844964",
    mothername: "Rakesh ra Mummy",
    name: "Rakesh mulla",
    nationality: "indian",
    pincode: "752050",
    redg_No: "7346949297982",
    religion: "hindu",
    sector_name: "Environmental Science",
    state: "Odisha",
    totaldays: 27,
    totalhours: 648,
    trainingHours: 648,
    trainingPartner: "66b47aaff49917987ae8bc70",
    trainingenddate: "2024-08-26T18:30:00.000Z",
    traininstartdate: "2024-07-31T18:30:00.000Z",
    uid: "uid",
    updatedAt: "2024-08-08T20:48:07.429Z",
    __v: 0,
    _id: "66b48ff3425ae3b00dc7f64a",
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="">
      <div className="max-w-lg mx-auto bg-white rounded-xl p-4 space-y-6 border-2">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <img
              className="h-24 w-2h-24 rounded-full border border-gray-300"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">Rakesh Mulla</div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                Regd. No: {studentData.studentRedgNo}
              </span>
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                MPR ID: {studentData.MPR_Id}23562297327
              </span>
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                ABN: {studentData.batchABN}
              </span>
              {/* <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                {studentData.course}
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg text-start font-semibold text-gray-800 mb-4">
            Student Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FaCheckSquare
                className={`w-5 h-5 ${
                  studentData.absent ? "text-red-600" : "text-green-600"
                } mr-2`}
              />
              <p className="text-gray-700 text-sm flex">Attendance:&nbsp;</p>
              <p
                className={`text-sm ${
                  studentData.absent
                    ? "text-red-600 bg-red-200 rounded-xl px-2"
                    : "text-green-600 bg-green-200 rounded-xl px-2"
                }`}
              >
                {studentData.absent ? "Absent" : "Present"}
              </p>
            </div>
            <div className="flex items-center">
              <FaChartLine className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Grade: {studentData.Grade}
              </p>
            </div>
            <div className="flex items-center">
              <FaAward className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Result: {studentData.marks.Result}
              </p>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">Mobile: 06370844964</p>
            </div>
            <div className="flex items-center">
              <FaEnvelopeOpenText className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Email: {studentData.email}
              </p>
            </div>
            <div className="flex items-center">
              <FaHome className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Address: {studentData.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <h2 className="text-lg text-start p-2 font-semibold">Exam Results</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-2 border-b text-gray-800 font-medium">
                NOS
              </th>
              <th className="px-4 py-2 border-b text-gray-800 font-medium">
                MO
              </th>
              <th className="px-4 py-2 border-b text-gray-800 font-medium">
                P
              </th>
              <th className="px-4 py-2 border-b text-gray-800 font-medium">
                T
              </th>
            </tr>
          </thead>
          <tbody>
            {studentData.marks.Nos.map((mark, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-gray-700">
                  NOS{index + 1}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark.MarksObtained} / {mark.passMark}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark.Practical}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark.Theory}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <div className="flex flex-col items-start px-2 bg-gray-50 rounded-xl">
          <h2 className="text-lg text-start mt-2 mb-3 font-semibold">
            Performance Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <p className="text-sm flex text-start">
              <FaComment className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Viva Marks:-</span>
              {""}
              {studentData.totalVivaMark}
            </p>
            <p className="text-sm flex text-start">
              <FaBook className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Theory Marks:-</span>{" "}
              {studentData.totalTheorymark}
            </p>
            <p className="text-sm flex text-start">
              <FaFlask className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">
                Total Practical Marks:-
              </span>{" "}
              {studentData.totalPracticalMark}
            </p>
            <p className="text-sm flex text-start">
              <FaCalculator className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Marks Obtained:-</span>{" "}
              {studentData.total}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <div className="flex flex-col items-start px-2 bg-gray-50 rounded-xl">
          <h2 className="text-lg text-start mt-2 mb-3 font-semibold">
            Exam Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <p className="text-sm flex text-start">
              <FaIndustry className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Sector:-</span>
              {""}
              {studentData.sectorName}
            </p>
            <p className="text-sm flex text-start">
              <FaBookOpen className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Course:-</span>{" "}
              {studentData.courseName}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Exam Date:-</span>{" "}
              {studentData.examDate}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <div className="flex flex-col items-start px-2 bg-gray-50 rounded-xl">
          <h2 className="text-lg text-start mt-2 mb-3 font-semibold">
            Training Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <p className="text-sm flex text-start">
              <FaBuilding className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Institue:-</span>
              {""}
              {studentData.marks.TrainingPartner}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarCheck className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Start Date:-</span>{" "}
              {formatDate(studentData.traininstartdate)}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarTimes className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">End Date:-</span>{" "}
              {formatDate(studentData.trainingenddate)}
            </p>
            <p className="text-sm flex text-start">
              <FaRegClock className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Days:-</span>{" "}
              {studentData.totaldays}
            </p>
            <p className="text-sm flex text-start">
              <FaHourglassHalf className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Hours:-</span>{" "}
              {studentData.totalhours}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 bg-white rounded-xl border-2 p-1 space-y-6">
        <div className="flex flex-col items-start px-2 bg-gray-50 rounded-xl">
          <h2 className="text-lg text-start mt-2 mb-3 font-semibold">
            Additional Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <p className="text-sm flex text-start">
              <FaMale className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Father's Name:-</span>
              {""}
              {studentData.fathername}
            </p>
            <p className="text-sm flex text-start">
              <FaFemale className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Mother's Name:-</span>{" "}
              {studentData.mothername}
            </p>
            <p className="text-sm flex text-start">
              <FaTransgenderAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Gender:-</span>{" "}
              {studentData.gender}
            </p>
            <p className="text-sm flex text-start">
              <FaBirthdayCake className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">DOB:-</span> {studentData.dob}
            </p>
            <p className="text-sm flex text-start">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Address:-</span>{" "}
              {studentData.city}, {studentData.state}, {studentData.pincode}
            </p>
            <p className="text-sm flex text-start">
              <FaGraduationCap className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">
                General Qualification:-
              </span>{" "}
              {studentData.generalqualification}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
