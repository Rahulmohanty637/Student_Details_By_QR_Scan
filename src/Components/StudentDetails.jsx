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

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const StudentDetails = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [loding, setLoding] = useState(false);
  console.log(id);
  //function for fetch student data from id
  useEffect(() => {
    try {
      setLoding(true);
      axios
        .get(`https://d31os5ub6ca4xs.cloudfront.net/api/v1/student/${id}`, {
          withCredentials: true,
        })
        .then((response) => {
          setLoding(false);
          setStudentData(response.data.data);
          console.log(response.data.data);
        });
    } catch (error) {
      setLoding(false);
      console.error("Error fetching studen result:", error);
      throw error;
    }
  }, []);
  
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
              className="h-24 w-24 rounded-full border border-gray-300"
              src={studentData?studentData?.profilepic:""}
              alt="Profile"
            />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900">
              {studentData?.name}
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-2">
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                Regd. No: {studentData?.redg_No}
              </span>
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                MPR ID: {studentData?.MPR_Id}
              </span>
              <span className="p-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                ABN: {studentData?.marks?.batchABN}
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
                  studentData?.absent ? "text-red-600" : "text-green-600"
                } mr-2`}
              />
              <p className="text-gray-700 text-sm flex">Attendance:&nbsp;</p>
              <p
                className={`text-sm ${
                  studentData?.absent
                    ? "text-red-600 bg-red-200 rounded-xl px-2"
                    : "text-green-600 bg-green-200 rounded-xl px-2"
                }`}
              >
                {studentData?.absent ? "Absent" : "Present"}
              </p>
            </div>
            <div className="flex items-center">
              <FaChartLine className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Grade: {studentData?.Grade}
              </p>
            </div>
            <div className="flex items-center">
              <FaAward className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Result: {studentData?.marks.Result}
              </p>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">Mobile: 06370844964</p>
            </div>
            <div className="flex items-center">
              <FaEnvelopeOpenText className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Email: {studentData?.email}
              </p>
            </div>
            <div className="flex items-center">
              <FaHome className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700 text-sm">
                Address: {studentData?.address}
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
            {studentData?.marks?.Nos.map((mark, index) => (
              <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-gray-700">
                  NOS{index + 1}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark?.MarksObtained} / {mark.passMark}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark?.Practical}
                </td>
                <td className="px-4 py-2 border-b text-gray-700">
                  {mark?.Theory}
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
              {studentData?.marks?.totalVivaMark}
            </p>
            <p className="text-sm flex text-start">
              <FaBook className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Theory Marks:-</span>{" "}
              {studentData?.marks?.totalTheorymark}
            </p>
            <p className="text-sm flex text-start">
              <FaFlask className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">
                Total Practical Marks:-
              </span>{" "}
              {studentData?.marks?.totalPracticalMark}
            </p>
            <p className="text-sm flex text-start">
              <FaCalculator className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Marks Obtained:-</span>{" "}
              {studentData?.marks?.total}
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
              {studentData?.marks?.sectorName}
            </p>
            <p className="text-sm flex text-start">
              <FaBookOpen className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Course:-</span>{" "}
              {studentData?.marks?.courseName}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Exam Date:-</span>{" "}
              {studentData?.marks?.examDate}
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
              {studentData?.marks.TrainingPartner}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarCheck className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Start Date:-</span>{" "}
              {formatDate(studentData?.traininstartdate)}
            </p>
            <p className="text-sm flex text-start">
              <FaCalendarTimes className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">End Date:-</span>{" "}
              {formatDate(studentData?.trainingenddate)}
            </p>
            <p className="text-sm flex text-start">
              <FaRegClock className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Days:-</span>{" "}
              {studentData?.totaldays}
            </p>
            <p className="text-sm flex text-start">
              <FaHourglassHalf className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Total Hours:-</span>{" "}
              {studentData?.totalhours}
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
              {studentData?.fathername}
            </p>
            <p className="text-sm flex text-start">
              <FaFemale className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Mother's Name:-</span>{" "}
              {studentData?.mothername}
            </p>
            <p className="text-sm flex text-start">
              <FaTransgenderAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Gender:-</span>{" "}
              {studentData?.gender}
            </p>
            <p className="text-sm flex text-start">
              <FaBirthdayCake className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">DOB:-</span>{" "}
              {formatDate(studentData?.dob)}
            </p>
            <p className="text-sm flex text-start">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">Address:-</span>{" "}
              {studentData?.city}, {studentData?.state}, {studentData?.pincode}
            </p>
            <p className="text-sm flex text-start">
              <FaGraduationCap className="w-4 h-4 text-gray-600 mr-2" />
              <span className="font-semibold">
                General Qualification:-
              </span>{" "}
              {studentData?.generalqualification}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
