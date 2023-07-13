"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; //Wertzuweisung
// console.log (firstName); // Ausgabe 

// let familyName;
// familyName = "Mütze";
// console.log(familyName);


/************Deklaration + Wertzuweisung II **********/

// let firstName, familyName ;

// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachhnamen eingeben:");

// console.log (firstName + " " + familyName);

// JS ist eine untypisierte Sprache ! 

// let test;
// test = "Maxine";
// // test = 2;
// // test = false;

// console.log ("Datentype"+ typeof test);
// console.log ("Inhalt:" + test);

// const firstName = "Max" ;  // Vabriable
// firstName = "Maxine";
// console.log (firstName); // Ausgabe

/* ++++++++++ 04 Beispiele - Berechnung******/

// Deklartion
let ageJohn, ageMark;
const birthYearJohn = 2000;
const bithYearMark = 1990;

let date = new Date();
let year = date.getFullYear(); 
ageJohn = 2023 - birthYearJohn;
ageMark = 2023 - bithYearMark;


console.log("ageJohne: " + ageJohn);
console.log("ageMark: " + ageMark);


// let date = new Date();
// let year = date.getFullYear(); 
// console.log(date);
// console.log(year);




