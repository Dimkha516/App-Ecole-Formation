import React, { createRef } from "react";
import { Link } from "react-router-dom";

export default class AddUser extends React.Component {
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
          {/* <h3 className="font-bold text-lg">Ajout Utilisateur</h3> */}
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email utilisateur
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>

              <div className="mb-5">
                <div className="max-w-sm mx-auto">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Rôle utilisateur
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionner rôle utilisateur
                    </option>
                    <option value="US">Respo. Pédagogique</option>
                    <option value="CA">Caissier</option>
                    <option value="FR">Surveillant</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Envoyer demande validation inscription
              </button>
            </form>
            <div className="flex items-start mb-5">
              {/* <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div> */}
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <br />

                <Link
                  to="/existingUsersWithoutAccount"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Compte pour utilisateur exitant
                </Link>
              </label>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }
}
