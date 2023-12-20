import { useEffect, useState } from "react";
import { getJilid1 } from "../services/jilid1.services";
import ReactPaginate from "react-paginate";
const Jilid1 = () => {
  const [dataJilid1, setDataJilid1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = dataJilid1.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  useEffect(() => {
    getJilid1((data) => {
      setDataJilid1(data);
    });
  }, []);

  const currentItems = dataJilid1.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-slate-100 py-3 px-5">
            <p className="mb-3 text-right">{item.arab}</p>
            <p>{item.id}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg bg-gray-200 ${
            currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg bg-gray-200 ml-2 ${
            currentPage === totalPages
              ? "cursor-not-allowed"
              : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};
export default Jilid1;
