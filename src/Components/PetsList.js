import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar"
import Selector from "./Selector";

function PetsList() {
  const [petsList, setPetsList] = useState(pets);
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const handleAdopt = (id) => {
    const alert = window.confirm(`Are you sure you want to adopt the pet?`);
    if (alert)
      setPetsList(petsList.filter(pet => pet.id !== id))
  }

  const filtering = petsList.filter((itemName) => {
    const lookName = itemName.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    const lookType = itemName.type.includes(type)
    return (lookName && lookType);
});

  const petList = filtering.map((pet) => <PetItem pet={pet} key={pet.id} handleclick={handleAdopt}/>);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
            <div>{SearchBar(setQuery)}</div>
              <br />
              Type:
             {Selector(setType)}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
