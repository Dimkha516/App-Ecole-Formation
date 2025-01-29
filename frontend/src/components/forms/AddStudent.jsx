import React, { createRef } from "react";

export default class AddStudent extends React.Component {
  modalRef = createRef();

  openModal = () => {
    const modal = this.modalRef.current;
    if (modal) {
      modal.showModal();
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.close();
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          modal.close();
        }
      });
    } else {
      console.error("Le modal n'est pas disponible dans le DOM.");
    }
  };

  render() {
    return (
      <dialog ref={this.modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Enregistrer un étudiant
          </h2>
          <form className="max-w-sm mx-auto">
          {/* <form className="space-y-4"> */}
            {/* Matricule */}
            <div className="flex flex-col">
              <label
                htmlFor="matricule"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Matricule
              </label>
              <input
                type="text"
                id="matricule"
                name="matricule"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : 2023001"
              />
            </div>

            {/* Nom */}
            <div className="flex flex-col">
              <label
                htmlFor="nom"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : Dupont"
              />
            </div>

            {/* Prénom */}
            <div className="flex flex-col">
              <label
                htmlFor="prenom"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : Jean"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : jean.dupont@example.com"
              />
            </div>

            {/* Téléphone */}
            <div className="flex flex-col">
              <label
                htmlFor="telephone"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : +221 77 123 45 67"
              />
            </div>

            {/* Date de naissance */}
            <div className="flex flex-col">
              <label
                htmlFor="dateNaiss"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Date de naissance
              </label>
              <input
                type="date"
                id="dateNaiss"
                name="dateNaiss"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Lieu de naissance */}
            <div className="flex flex-col">
              <label
                htmlFor="lieuNaiss"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Lieu de naissance
              </label>
              <input
                type="text"
                id="lieuNaiss"
                name="lieuNaiss"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : Dakar"
              />
            </div>

            {/* Sexe */}
            <div className="flex flex-col">
              <label
                htmlFor="sexe"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Sexe
              </label>
              <select
                id="sexe"
                name="sexe"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              >
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
              </select>
            </div>

            {/* Adresse */}
            <div className="flex flex-col">
              <label
                htmlFor="adresse"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Adresse
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : Médina, Dakar"
              />
            </div>

            {/* Photo */}
            <div className="flex flex-col">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Filière */}
            <div className="flex flex-col">
              <label
                htmlFor="filiere"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Filière
              </label>
              <select
                id="filiere"
                name="filiere"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              >
                <option value="Informatique">Informatique</option>
                <option value="Mathématiques">Mathématiques</option>
                <option value="Physique">Physique</option>
                <option value="Chimie">Chimie</option>
              </select>
            </div>

            {/* Niveau académique */}
            <div className="flex flex-col">
              <label
                htmlFor="niveauAcademic"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Niveau académique
              </label>
              <select
                id="niveauAcademic"
                name="niveauAcademic"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              >
                <option value="Licence 1">Licence 1</option>
                <option value="Licence 2">Licence 2</option>
                <option value="Licence 3">Licence 3</option>
                <option value="Master 1">Master 1</option>
                <option value="Master 2">Master 2</option>
              </select>
            </div>

            {/* Date d'inscription */}
            <div className="flex flex-col">
              <label
                htmlFor="dateInscription"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Date inscription
              </label>
              <input
                type="date"
                id="dateInscription"
                name="dateInscription"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
              />
            </div>

            {/* Tuteur */}
            <div className="flex flex-col">
              <label
                htmlFor="prenomNomTuteur"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Prénom et Nom du Tuteur
              </label>
              <input
                type="text"
                id="prenomNomTuteur"
                name="prenomNomTuteur"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : Marie Diallo"
              />
            </div>

            {/* Téléphone du Tuteur */}
            <div className="flex flex-col">
              <label
                htmlFor="telephoneTuteur"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Téléphone du Tuteur
              </label>
              <input
                type="tel"
                id="telephoneTuteur"
                name="telephoneTuteur"
                className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                placeholder="Ex : +221 77 987 65 43"
              />
            </div>

            {/* Bouton d'enregistrement */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold hover:bg-blue-700"
            >
              Enregistrer
            </button>
          </form>
        </div>
        </div>
      </dialog>
    );
  }
}
