import PropTypes from 'prop-types';

const ShowFilierDetails = ({ isOpen, onClose, selectedFiliere }) => {
  if (!isOpen || !selectedFiliere) return null;

  return (
    <dialog open className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box w-96 p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {selectedFiliere.titre}
        </h2>
        <p className="text-gray-600">Domaine: {selectedFiliere.domaine}</p>
        <p className="text-gray-600">Niveaux académiques: {selectedFiliere.niveauAcademique}</p>
        <p className="text-gray-600">Nombre inscrits: {selectedFiliere.nombreInscrits}</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="btn btn-error">
            Fermer
          </button>
        </div>
      </div>
    </dialog>
  );
};
ShowFilierDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedFiliere: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    domaine: PropTypes.string.isRequired,
    niveauAcademique: PropTypes.string.isRequired,
    nombreInscrits: PropTypes.number.isRequired,
  })
  // .isRequired,
};

export default ShowFilierDetails;
