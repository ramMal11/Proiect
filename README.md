# Proiect - Aplicatie Web crearea anonima de note
Aplicatia va gestiona logarea si inregistrarea a doua tipuri de utilizatori cu drepturi diferite in functie de tipul lui:
- profesor
- student 
Pagina profesorului va contine un dropdown list de unde poate selecta numele proiectului pentru care vrea sa vada informatii
legate de nota si numele studentului care a facut proiectul

Pagina studentului va avea doua taburi in interfata: 
1. informatii despre proiectul lui cu optiuni de adaugare nume proiect, nume echipa, etape partiale de livrabile plus livrabilele, alocare evaluatori
Studentului i se vor afisa informatiile referitoare la nota proiectului
2. informatii despre proiectele unde este evaluator printr-un dropdown list din lista proiectelor.
Pentru fiecare proiect va avea o restrictie de timp pentru modificarea notei 
Evaluatorii vor fi alocati aleatoriu pe fiecare proiect.


Planul de proiect contine:
- modelarea bazei de date (structura si relationarea)
- stabilirea metodelor de post, put si get pentru actiunile celor doua tipuri de utilizatori
- construirea bazei de date
- construirea metodelor
- construirea interfetei

Baza de date va fi compusa din urmatoarele tabele (tabelele mai pot suferi modificari in timpul dezvoltarii):
Student: ID_STUDENT, Nume, Prenume, Telefon
Profesor: ID_PROFESOR, Nume, Prenume
Drepturi: Utilizator, Parola, Drept (P=profesor, S=student), ID_USER/STUDENT
Proiecte: ID_PROIECT, Nume Proiect, ID_STUDENT
Etape Proiect: ID_PROIECT, Etapa, Data limita, Livrabil
Echipe: Nume Echipa, ID_PROIECT
Evaluari: ID_PROIECT, ID_STUDENT/Evaluator, Nota, Data Evaluare
