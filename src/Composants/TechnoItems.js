export default function TechnoItems(props) {
  const { techno, SupprimerTechno } = props;
  return (
    <div key={techno.idTechno} className="conteneur">
      <h2>{techno.nomtechno}</h2>
      <h3>Catégorie: </h3>
      <p>{techno.categorietechno}</p>
      <h3>Description: </h3>
      <p>{techno.descriptiontechno}</p>
      <div className="conteneur-bouton">
        <button
          className="button-delete"
          onClick={() => SupprimerTechno(techno.idTechno)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
