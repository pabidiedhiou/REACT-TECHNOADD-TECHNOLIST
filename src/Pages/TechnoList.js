import TechnoItems from "../Composants/TechnoItems";

export default function TechnoList(props) {
  const { technos, SupprimerTechno } = props;
  return (
    <div className="techno-list">
      <div>
        {technos.map((techno) => (
          <TechnoItems
            techno={techno}
            key={techno.idTechno}
            SupprimerTechno={SupprimerTechno}
          />
        ))}
      </div>
    </div>
  );
}
