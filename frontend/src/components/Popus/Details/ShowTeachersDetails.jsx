import { X } from "lucide-react";
import PropTypes from 'prop-types';

const ShowTeachersDetails = ({isOpen, onClose, selectedTeacher}) => {
  if (!isOpen || !selectedTeacher) return null;

  return (
    <dialog
      open
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="w-[500px] bg-white rounded-2xl shadow-xl p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header with student photo and name */}
        <div className="flex items-center gap-4 mb-6 border-b pb-4">
          <img
            src={selectedTeacher.photo}
            alt={selectedTeacher.nom}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedTeacher.nom} {selectedTeacher.prenom} -{" "}
              {selectedTeacher.matricule}
            </h2>
            <p className="text-gray-600">
              {selectedTeacher.specialite} - {selectedTeacher.filiere}
            </p>
          </div>
        </div>

        {/* Information sections */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-700">{selectedTeacher.email}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="text-gray-700">{selectedTeacher.telephone}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Informations personnelles
            </h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Total Heures</p>
              <p className="text-gray-700">
                {selectedTeacher.totalHeures}
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Taux Horaire</p>
              <p className="text-gray-700">{selectedTeacher.tauxHoraire}</p>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
ShowTeachersDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedTeacher: PropTypes.shape({
    photo: PropTypes.string,
    nom: PropTypes.string,
    prenom: PropTypes.string,
    matricule: PropTypes.string,
    specialite: PropTypes.string,
    filiere: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    dateNaiss: PropTypes.string,
    lieuNaiss: PropTypes.string,
    dateInscription: PropTypes.string,
    totalHeures: PropTypes.number,
    tauxHoraire: PropTypes.number,
  })
};

export default ShowTeachersDetails;
