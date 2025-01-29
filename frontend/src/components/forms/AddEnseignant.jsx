import React, { createRef } from "react";

export default class AddEnseignant extends React.Component {
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
              Ajouter Enseignant
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
                  Spécialité
                </label>
                <select
                  id="filiere"
                  name="filiere"
                  className="border rounded-lg p-2 w-full focus:ring focus:ring-blue-300"
                >
                  <option value="Informatique">Réseaux</option>
                  <option value="Mathématiques">Dev web</option>
                  <option value="Physique">Anglais</option>
                  <option value="Chimie">Comptabilité financière</option>
                </select>
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
