// Retourne une ligne de taille w, avec le caractère c
// Avec un <br/> à la fin
// Exemple : "*******<br/>"

function fullLine(w, c) {
  var s = "";
  for (let i = 0; i < w; i++) {
    s += c;
  }
  s += "<br/>";
  return s;
}

// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple : "*****<br/>
//			  *****<br/>
//			  *****<br/>"
function fullRectangle(w, h, c) {
  var s = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      s += c;
    }
    s += "<br/>";
  }
  return s;
}

// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*<br/>"
function emptyLine(w, c1, c2) {
  var s = "";
  var s = c1;
  for (let i = 0; i < w - 2; i++) {
    s += c2;
  }
  if (w > 1) {
    s += c1;
  }
  s += "<br/>";
  return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****<br/>
//			  *---*<br/>
//			  *****<br/>"
function emptyRectangle(w, h, c1, c2) {
  var s = fullLine(w, c1);
  for (let i = 0; i < h - 2; i++) {
    s += emptyLine(w, c1, c2);
  }
  if (h > 1) {
    s += fullLine(w, c1);
  }
  return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*<br/>
//			  **<br/>
//			  ***<br/>
//			  ****<br/>"
function fullTriangle1(h, c) {
  var s = "";
  for (let i = 1; i < h + 1; i++) {
    s += fullLine(i, c);
  }
  return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*<br/>
//			  --**<br/>
//			  -***<br/>
//			  ****<br/>"
function fullTriangle2(h, c1, c2) {
  var s = "";
  for (let i = 1; i < h; i++) {
    for (let j = 0; j < h - i; j++) {
      s += c2;
    }
    s += fullLine(i, c1);
  }
  s += fullLine(h, c1);
  return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*<br/>
//			  --***<br/>
//			  -*****<br/>
//			  *******<br/>"
function fullTriangle3(h, c1, c2) {
  var s = "";
  var nbMoins = h - 1;
  var nbPlus = 1;
  for (var i = 1; i < h; i++) {
    for (var j = 0; j < nbMoins; j++) {
      s += c2;
    }
    s += fullLine(nbPlus, c1);

    nbMoins--;
    nbPlus += 2;
  }
  s += fullLine(nbPlus, c1);
  return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*<br/>
//			  **<br/>
//			  *-*<br/>
//			  ****<br/>"
function emptyTriangle1(h, c1, c2) {
  var s = "";
  for (var i = 1; i <= h - 1; i++) {
    s += emptyLine(i, c1, c2);
  }
  s += fullLine(h, c1);
  return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*<br/>
//			  --**<br/>
//			  -*-*<br/>
//			  ****<br/>"
function emptyTriangle2(h, c1, c2) {
  var s = "";
  for (let i = 1; i < h; i++) {
    for (let j = 0; j < h - i; j++) {
      s += c2;
    }
    s += emptyLine(i, c1, c2);
  }
  s += fullLine(h, c1);
  return s;
}

// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*<br/>
//			  --*-*<br/>
//			  -*---*<br/>
//			  *******<br/>"
function emptyTriangle3(h, c1, c2) {
  var s = "";
  var nbMoins = h - 1;
  var nbPlus = 1;
  for (var i = 1; i <= h - 1; i++) {
    for (var j = 0; j < nbMoins; j++) {
      s += c2;
    }
    s += emptyLine(nbPlus, c1, c2);

    nbMoins --;
    nbPlus += 2;
  }
  s += fullLine(nbPlus, c1);
  return s;
}

function pacman(h, c1) {
  var s = "";

  return s;
}

function hourglass(h, c1, c2) {
  var s = "";

  return s;
}

function plus(w, c1, c2) {
  let s = "";
  return s;
}

function fois(w, c1, c2) {
  let s = "";
  return s;
}

function snake1(w, c1, c2) {
  let s = "";
  return s;
}

function snake2(w, c1, c2) {
  let s = "";
  return s;
}

function checkerboard(w, c1, c2) {
  let s = "";
  return s;
}

function diagonal1(w, c1, c2) {
  let s = "";
  return s;
}

function diagonal2(w, c1, c2) {
  let s = "";
  return s;
}
