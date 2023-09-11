import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

 // Da kreirame funkcionalna komponenta kade vo nekoi html elementi
  // kje gi stavite vasite 3 hobia
  // a potoa da kreirame druga komponenta vo koja kje go stavite
  // vaseto omileno hoby

  // Da kreirame i treta komponenta kade kje imame nekoj tekst
  // koj kje bide eve slika od moeto omileno hoby
  // da ima slika od hobito
  // da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  // i normalno slikata da ni bide vo razmer i toj css da bide
  // importiran od nekoj nadvoresen css file
  // koga kje pomineme so mouse-ot vrz slikata da ispecatime vo
  // konzola nekoj tekst (hello there!!!)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
