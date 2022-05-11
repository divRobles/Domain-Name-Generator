/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let result = [];
  const funcion = (pronoun, adj, noun) => {
    for (let a = 0; a < pronoun.length; a++) {
      for (let e = 0; e < adj.length; e++) {
        for (let i = 0; i < noun.length; i++) {
          result.push(`${pronoun[a]}${adj[e]}${noun[i]}.com`);
        }
      }
    }
  };

  funcion(pronoun, adj, noun);
  console.log(result);
};
