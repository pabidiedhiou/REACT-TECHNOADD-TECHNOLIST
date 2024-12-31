import { useState } from "react";
export default function TechnoAdd(props) {
  const [techno, setTechno] = useState({
    nomtechno: "",
    categorietechno: "",
    descriptiontechno: "",
  });
  const { soumettre } = props;
  //--------------------------------------------------
  function soumettreFormulaire(e) {
    e.preventDefault();
    soumettre(techno);
    setTechno({
      nomtechno: "",
      categorietechno: "",
      descriptiontechno: "",
      //Permmet de remettre les valeurs à vide dès qu'on appuie sur le boutton Add techno
    });
  }
  function changement(e) {
    const { name, value } = e.target;
    setTechno({ ...techno, [name]: value });
  }
  return (
    <div className="techno-add">
      <h1>Add a Techno</h1>

      <div>
        <form onSubmit={(e) => soumettreFormulaire(e)}>
          <label htmlFor="nomtechno">Nom: </label>
          <br />
          <input
            type="text"
            name="nomtechno"
            id="nomtechno"
            value={techno.nomtechno}
            onChange={(e) => changement(e)}
          />
          <br />
          <label htmlFor="categorietechno">Catégorie: </label>
          <br />
          <select
            name="categorietechno"
            id="categorietechno"
            value={techno.categorietechno}
            onChange={(e) => changement(e)}
          >
            <option value=""> Selectionner une catégorie</option>
            <option value="front">Front</option>
            <option value="back">Back</option>
            <option value="fullstack">Full stack</option>
            <option value="">Autre</option>
          </select>
          <br />
          <label htmlFor="descriptiontechno">Description: </label>
          <br />
          <textarea
            name="descriptiontechno"
            id="descriptiontechno"
            cols="30"
            rows="10"
            value={techno.descriptiontechno}
            onChange={(e) => changement(e)}
          ></textarea>
          <br />

          <input type="submit" value="Add Techno" className="btn" />
        </form>
      </div>
    </div>
  );
}
