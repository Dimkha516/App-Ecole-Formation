import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CardDisplay = ({ title, attributes, link, icon: Icon }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition relative">
      {/* Icône */}
      <div className="absolute top-4 right-4 text-gray-400">
        <Icon className="w-10 h-10" />
      </div>

      {/* Titre */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>

      {/* Liste d'attributs */}
      <ul className="space-y-2 mb-4">
        {attributes.map((attr, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-semibold">{attr.label}:</span> {attr.value}
          </li>
        ))}
      </ul>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
          onClick={() => navigate(link)}
        >
          Voir plus
        </button>
      </div>
      {/* Lien footer */}
      {/* <div className="flex justify-end">
        <a
          href={link}
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
        >
          Voir plus
        </a>
      </div> */}
    </div>
  );
};

export default CardDisplay;
