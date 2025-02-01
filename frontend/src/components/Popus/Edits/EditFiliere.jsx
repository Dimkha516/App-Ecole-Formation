import { useState } from "react";
import PropTypes from "prop-types";

const EditFiliere = ({ isEditOpen, onEditClose, filiereToEdit }) => {
  const [levels, setLevels] = useState(["CAP", "BT", "BTS", "Licence"]);
  const [newLevel, setNewLevel] = useState("");

  if (!isEditOpen || !filiereToEdit) return null;

  const addLevel = () => {
    if (newLevel.trim() !== "" && !levels.includes(newLevel)) {
      setLevels([...levels, newLevel]);
      setNewLevel("");
    }
  };

  return (
    <>
      <dialog>
        <div className="modal-box">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="titreFiliere"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Titre de la Filière
              </label>
              <input
                type="text"
                id="titreFiliere"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // defaultValue={filiereToEdit.titre}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="domaine"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
              >
                Spécialité
              </label>
              <select
                id="domaine"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                defaultValue=""
              >
                <option value="" disabled>
                  Sélectionner la spécialité
                </option>
                <option value="Gestion">Gestion</option>
                <option value="Informatique">Informatique</option>
                <option value="Administration">Administration</option>
                <option value="Industrie">Industrie</option>
                <option value="BTP">BTP</option>
              </select>
            </div>

            <h3 className="mb-4 font-semibold text-gray-900">
              Niveaux académiques
            </h3>
            <ul className="space-y-2">
              {levels.map((level, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`level-${index}`}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={`level-${index}`}
                    className="text-sm text-gray-900"
                  >
                    {level}
                  </label>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                value={newLevel}
                onChange={(e) => setNewLevel(e.target.value)}
                placeholder="Ajouter un niveau"
                className="border border-gray-300 rounded-lg p-2 text-sm w-full"
              />
              <button
                type="button"
                onClick={addLevel}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
              >
                Ajouter
              </button>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="submit"
                className="bg-blue-700 text-white px-5 py-2.5 rounded-lg"
              >
                Valider
              </button>
              <div className="mt-4 flex justify-end">
                <button onClick={onEditClose} className="btn btn-error">
                  Fermer
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

EditFiliere.propTypes = {
  isEditOpen: PropTypes.bool.isRequired,
  onEditClose: PropTypes.func.isRequired,
  filiereToEdit: PropTypes.shape({
    titre: PropTypes.string.isRequired,
  }),
};

export default EditFiliere;
