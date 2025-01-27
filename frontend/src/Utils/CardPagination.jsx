/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ 
  // eslint-disable-next-line react/prop-types
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  // Créer la liste des pages à afficher
  const generatePageNumbers = () => {
    // Toujours montrer la première page
    pages.push(1);

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Ajouter des points de suspension si nécessaire après la page 1
    if (start > 2) {
      pages.push('...');
    }

    // Ajouter les pages autour de la page courante
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Ajouter des points de suspension si nécessaire avant la dernière page
    if (end < totalPages - 1) {
      pages.push('...');
    }

    // Toujours montrer la dernière page si elle existe
    if (totalPages > 1) {
      pages.push(totalPages);
    }
  };

  if (totalPages > 1) {
    generatePageNumbers();
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg flex items-center ${
          currentPage === 1 
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          disabled={page === '...'}
          className={`px-3 py-1 rounded-lg ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : page === '...'
              ? 'text-gray-500 cursor-default'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg flex items-center ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;