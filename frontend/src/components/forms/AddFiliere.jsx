import React, { createRef } from "react";

export default class AddFiliere extends React.Component {
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
      <>
        <dialog ref={this.modalRef} id="my_modal_1" className="modal">
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
                  placeholder="Titre Filière"
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
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="CAP"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                <label htmlFor="CAP" className="text-sm text-gray-900">
                  CAP
                </label>
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="BT"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                <label htmlFor="BTS" className="text-sm text-gray-900">
                  BT
                </label>
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="BTS"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                <label htmlFor="BTS" className="text-sm text-gray-900">
                  BTS
                </label>
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Licences"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                <label htmlFor="Licences" className="text-sm text-gray-900">
                  Licences
                </label>
                </li>
                <li className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="Master"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                <label htmlFor="Master" className="text-sm text-gray-900">
                  Master
                </label>
                </li>
              </ul>

              {/* <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Ajouter un niveau"
                  className="border border-gray-300 rounded-lg p-2 text-sm w-full"
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                  Ajouter
                </button>
              </div> */}

              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-5 py-2.5 rounded-lg"
                >
                  Valider
                </button>
                <div>
                  <button className="btn">Fermer</button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </>
      // <dialog ref={this.modalRef} id="my_modal_1" className="modal">
      //   <div className="modal-box">
      //     {/* <h3 className="font-bold text-lg">Ajouter Filière</h3> */}
      //     <div>
      //       <form className="max-w-sm mx-auto">
      //         {/*  */}
      //         <div className="mb-5">
      //           <label
      //             htmlFor="titreFiliere"
      //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
      //           >
      //             Titre de la Filière
      //           </label>
      //           <input
      //             type="titreFiliere"
      //             id="titreFiliere"
      //             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      //             placeholder="Titre Filière"
      //             required
      //           />
      //         </div>
      //         {/*  */}

      //         <div className="mb-5">
      //           <div className="max-w-sm mx-auto">
      //             <label
      //               htmlFor="domaine"
      //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"
      //             >
      //               Spécialité
      //             </label>
      //             <select
      //               id="domaine"
      //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      //               defaultValue=""
      //             >
      //               <option value="" disabled>
      //                 Sélectionner La spécialité de la filière
      //               </option>
      //               <option value="US">Gestion</option>
      //               <option value="CA">Informatique</option>
      //               <option value="FR">Administration</option>
      //               <option value="FR">Industrie</option>
      //               <option value="FR">BTP</option>
      //             </select>
      //           </div>
      //         </div>
      //         {/*  */}

      //         <h3 className="mb-4 font-semibold text-gray-900 dark:text-dark">
      //           Niveaux académiques
      //         </h3>
      //         <div className="flex items-center justify-between">
      //         <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      //           <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      //             <div className="flex items-center ps-3">
      //               <input
      //                 id="vue-checkbox"
      //                 type="checkbox"
      //                 value=""
      //                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      //               />
      //               <label
      //                 htmlFor="vue-checkbox"
      //                 className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      //               >
      //                 CAP
      //               </label>
      //             </div>
      //           </li>
      //           <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      //             <div className="flex items-center ps-3">
      //               <input
      //                 id="react-checkbox"
      //                 type="checkbox"
      //                 value=""
      //                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      //               />
      //               <label
      //                 htmlFor="react-checkbox"
      //                 className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      //               >
      //                 BT
      //               </label>
      //             </div>
      //           </li>
      //           <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      //             <div className="flex items-center ps-3">
      //               <input
      //                 id="angular-checkbox"
      //                 type="checkbox"
      //                 value=""
      //                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      //               />
      //               <label
      //                 htmlFor="angular-checkbox"
      //                 className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      //               >
      //                 BTS
      //               </label>
      //             </div>
      //           </li>
      //           <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      //             <div className="flex items-center ps-3">
      //               <input
      //                 id="laravel-checkbox"
      //                 type="checkbox"
      //                 value=""
      //                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      //               />
      //               <label
      //                 htmlFor="laravel-checkbox"
      //                 className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      //               >
      //                 Licences
      //               </label>
      //             </div>
      //           </li>
      //         </ul>
      //         </div>
      //         <br/>

      //         {/*  */}
      //         <button
      //           type="submit"
      //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      //         >
      //           Valider
      //         </button>
      //       </form>
      //       <div className="flex items-start mb-5">
      //         <label
      //           htmlFor="terms"
      //           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      //         >
      //           <br />

      //           {/* <Link
      //             to="/existingUsersWithoutAccount"
      //             className="text-blue-600 hover:underline dark:text-blue-500"
      //           >
      //             Compte pour utilisateur exitant
      //           </Link> */}
      //         </label>
      //       </div>
      //     </div>
      //     <div className="modal-action">
      //       <form method="dialog">
      //         <button className="btn">Close</button>
      //       </form>
      //     </div>
      //   </div>
      // </dialog>
    );
  }
}
