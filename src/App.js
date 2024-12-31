import { useState, useEffect } from "react"; //Permet de creer un getteur et un setteur
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./Pages/Home";
import Menu from "./Composants/Menu";
import TechnoAdd from "./Pages/TechnoAdd";
import TechnoList from "./Pages/TechnoList";
import "./CSS/app.css";
import UserLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [recuper_donnees, setRecuper_donnees] = useState([]);
  function soumissionFormulaire(techno) {
    setRecuper_donnees([...recuper_donnees, { ...techno, idTechno: uuidv4() }]);
  }
  function SupprimerTechno(id) {
    setRecuper_donnees(
      recuper_donnees.filter((techno) => techno.idTechno !== id)
    );
  }
  //Enregisrement des technos dans un stockage local
  useEffect(() => {
    setRecuper_donnees(technoStocke);
  }, []);
  const cle_stockage = "technos";
  const [technoStocke, setTechnoStocke] = UserLocalStorage(cle_stockage, []);
  useEffect(() => {
    setTechnoStocke(recuper_donnees);
  }, [recuper_donnees]);

  /** Fin de l'enregistrement */
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd soumettre={soumissionFormulaire} />}
        />
        <Route
          path="/list"
          element={
            <TechnoList
              technos={recuper_donnees}
              SupprimerTechno={SupprimerTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
