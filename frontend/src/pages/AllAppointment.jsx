import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { images } from '../assets/images';
import { Link } from 'react-router-dom';
import BubbleMovement from '@/components/Bubble';
import Loading from '@/components/Loading';

const AllAppointment = () => {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchEmail, setSearchEmail] = useState(''); // State to manage search query
  const [sortOrder, setSortOrder] = useState('asc'); // State to manage sort order ('asc' or 'desc')

  useEffect(() => {
    axios
      .get('http://localhost:3000/appointments/admin/all-appointments')
      .then((response) => {
        setAppointmentsData(response.data.data);
        setFilteredAppointments(response.data.data); // Initialize the filtered list
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  // Handle the search input change and filter the data
  const handleSearchChange = (event) => {
    const emailQuery = event.target.value.toLowerCase();
    setSearchEmail(emailQuery);
    const filtered = appointmentsData.filter((appointment) =>
      appointment.email.toLowerCase().includes(emailQuery)
    );
    setFilteredAppointments(filtered); // Update filtered data
  };

  // Function to toggle the sort order and sort appointments by date
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

    const sortedAppointments = [...filteredAppointments].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (newSortOrder === 'asc') {
        return dateA - dateB; // Ascending order
      } else {
        return dateB - dateA; // Descending order
      }
    });

    setFilteredAppointments(sortedAppointments);
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10 mb-40">
          <Loading />
        </div>
      ) : (
        <div className="mb-[400px]">
          <BubbleMovement />
          <div className="flex justify-between items-center mb-5 mx-5">
            <p className="font-medium text-3xl">ALL APPOINTMENTS</p>
            {/* Email Search Bar */}
            <input
              type="text"
              placeholder="Search by email"
              value={searchEmail}
              onChange={handleSearchChange}
              className="border rounded-lg p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Sort Button */}
            <button
              onClick={toggleSortOrder}
              className="ml-4 p-2 bg-blue-500 text-white rounded-md"
            >
              Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Info
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appointment, index) => (
                    <tr key={appointment._id} className="odd:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex justify-center">
                          <Link to={`/appointment/${appointment._id}`}>
                            <img className="w-6" src={images.info} alt="Info Icon" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AllAppointment;
