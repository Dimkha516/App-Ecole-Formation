import { X } from "lucide-react";
import PropTypes from "prop-types";

const ShowStudentDetails = ({ isOpen, onClose, selectedStudent }) => {
  if (!isOpen || !selectedStudent) return null;

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
            src={selectedStudent.photo}
            alt={selectedStudent.nom}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedStudent.nom} {selectedStudent.prenom} -{" "}
              {selectedStudent.matricule}
            </h2>
            <p className="text-gray-600">
              {selectedStudent.niveauAcademique} - {selectedStudent.filiere}
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
                <p className="text-gray-700">{selectedStudent.email}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="text-gray-700">{selectedStudent.telephone}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg col-span-2">
                <p className="text-sm text-gray-500">Adresse</p>
                <p className="text-gray-700">{selectedStudent.adresse}</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Informations personnelles
            </h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Date et lieu de naissance</p>
              <p className="text-gray-700">
                {selectedStudent.dateNaiss} à {selectedStudent.lieuNaiss}
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Date inscription</p>
              <p className="text-gray-700">{selectedStudent.dateInscription}</p>
            </div>
          </div>

          {/* Guardian Information */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Informations du tuteur
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Nom du tuteur</p>
                <p className="text-gray-700">
                  {selectedStudent.prenomNomTuteur}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Contact du tuteur</p>
                <p className="text-gray-700">
                  {selectedStudent.telephoneTuteur}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
ShowStudentDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedStudent: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
    adresse: PropTypes.string.isRequired,
    dateNaiss: PropTypes.string.isRequired,
    lieuNaiss: PropTypes.string.isRequired,
    dateInscription: PropTypes.string.isRequired,
    prenomNomTuteur: PropTypes.string.isRequired,
    telephoneTuteur: PropTypes.string.isRequired,
    niveauAcademique: PropTypes.string,
    filiere: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    matricule: PropTypes.string,
  }),
};

export default ShowStudentDetails;
