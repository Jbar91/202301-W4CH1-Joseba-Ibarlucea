import { useState } from "react";
import { GentlemanStructure } from "../../models/gentleman-structure";

export function Gentleman(props: GentlemanStructure) {
  useState();

  return (
    <main className="main">
      <ul className="gentlemen">
        {Object.entries(props).map((item) => {
          let person = item[1];
          return (
            <li className="gentleman">
              <div className="gentleman__avatar-container">
                <img
                  className="gentleman__avatar"
                  src={person.picture}
                  alt={person.alternativeText}
                />
                <span className="gentleman__initial">F</span>
              </div>
              <div className="gentleman__data-container">
                <h2 className="gentleman__name">{person.name}</h2>
                <ul className="gentleman__data-list">
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Profession:</span>
                    {person.profession}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Status:</span>{" "}
                    {person.status}
                  </li>
                  <li className="gentleman__data">
                    <span className="gentleman__data-label">Twitter:</span>
                    {person.twitter}
                  </li>
                </ul>
              </div>
              <i className="icon gentleman__icon fas fa-check"></i>
              <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
