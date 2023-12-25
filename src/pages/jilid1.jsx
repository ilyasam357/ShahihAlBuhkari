import { useEffect, useState } from "react";
import { getJilid1 } from "../services/jilid1.services";
import ReactPaginate from "react-paginate";
import Loading from "../components/elements/LoadingEl";
import BtnNextPrev from "../components/elements/buttons/BtnNextPrev";
import CardDark from "../components/fragments/TemplateDarkMode";
const Jilid1 = () => {
  const [dataJilid1, setDataJilid1] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = dataJilid1.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getJilid1((data) => {
      setDataJilid1(data);
      setIsLoading(false);
    });
  }, []);

  const currentItems = dataJilid1.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CardDark>
            <div className="flex flex-col gap-3">
              {currentItems.map((item) => (
                <div
                  key={item.number}
                  className="bg-slate-100 dark:bg-slate-900 dark:text-white py-3 px-5"
                >
                  <p>Hadist Ke{item.number}</p>
                  <p className="mb-3 text-right">{item.arab}</p>
                  <p>{item.id}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 pb-5">
              <BtnNextPrev
                ketikaKlik={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                customClass={` ${
                  currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-300"
                }`}
              >
                Previous
              </BtnNextPrev>

              <BtnNextPrev
                ketikaKlik={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                customClass={` ${
                  currentPage === totalPages
                    ? "cursor-not-allowed"
                    : "hover:bg-gray-300"
                }`}
              >
                Next
              </BtnNextPrev>
            </div>
          </CardDark>
        </>
      )}
    </>
  );
};
export default Jilid1;
