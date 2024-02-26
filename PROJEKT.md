TODO:
1. Logowanie (autentykacja)
2. Baza danych:
 - tabele:
  - użytkownicy - edytorzy:
   - pola: ID, login, hasło, Imię, nazwisko, (ADMIN?), e-mail
  - uczestnicy:
   - pola: ID, Imię, nazwisko, sekcja, grupa, (FK) edycja olimpiady (rok/sezon)
  - wyniki:
   - pola: ID, ID użytkownika, ID konkurencji, wynik
  konkurencje:
   - pola: ID, rodzaj danych (UOM - unit of measure), czy aktywna


2.1. Firebase'owa baza danych:
   - tabela1 - struktura pod konkurencje (przegląd uczestników):
     - edycja olimpiady (ID)
      - Sekcje (ID)
       - uczestnicy (ID)
         - konkurencje 
   - tabela2 - struktura pod edycje olimpiady
     - edycja olimpiady
       - nazwa
       - ID
   - tabela3 - struktura pod sekcje:
     - sekcja


3. Działanie:
 - sesja (zapamiętywanie hasła na urządzeniu (cookiesy?))
 - wszyscy mogą przeglądać sobie dane, ale modyfikować mogą jedynie osoby zalogowane (a więc uprawnione do edycji)
 - pierwszy ekran pokazuje olimpiady przeszłe + aktywną
 - drugi ekran - lista sekcji (FINAŁ jako ostatni etap) ?+ overview całego klubu (lista wszystkich sekcji - takie podsumowanie)
    ?- jeżeli użytkownik jest zalogowany -> pokazuje się przycisk "Dodaj uczestnika"
 - trzeci ekran:
    - lista kategorii
 - czwarty ekran:
    - jeżeli użytkownik niezalogowany -> ogląd wyników (tabelka)
    - zalogowany użytkownik -> lista konkurencji ORAZ (obok/poniżej) przycisk "Dodaj uczestnika" z uzupełnioną sekcją
    - po kliknięciu na konkurencję -> lista dzieciaków i ich wyników + przycisk ROZPOCZNIJ/KONTYNUUJ KONKURENCJĘ (KONTYNUUJ tylko jeżeli już jakieś dzieci mają wyniki, a niektóre nie)
 - dodawanie użytkownika:
    - dane - Imię, nazwisko, sekcja, kategoria (kl. 0-1, 2-3, 4-5, 6-7, 8?)
 - z każdego ekranu, jest możliwość cofnięcia się do poprzedniego
 - panel ADMINa, który może edytować konkurencje/kategorie/sekcje


PYTANIA:
- czy co edycję powinni uczestnicy być dodawani totalnie od zera? Czy może się posłużyć jakimś autouzupełnianiem (np. prompt), albo czymś?
- jak powinno być zrobione wybieranie osób które dostają się do kolejnego etapu - może na czwartym ekranie przycisk ZAKOŃCZ ZMAGANIA? I wtedy pokazują się wszyscy uczestnicy, podzieleni na kategorie (kilka osobnych tabelek), posortowani wynikami, i automatycznie zaznaczy się TOP3 każdej kategorii, które można edytować. I na dole przycisk ZATWIERDŹ (+ pytanie o potwierdzenie) + ewentualny przycisk do dodatkowego edytowania osób które przeszły (choroby, bo ktoś nie może itp.)
- czy myśleć o tym, że konkurencje mogą się zmienić? (imo tak)


- sprawdzanie obecności w finale - przycisk LISTA OBECNOŚCI całościowy + w poszczególnych kategoriach
- edycja tylko w trakcie trwania danej sekcji/finału (ew. alert na maila, czy coś)
- dla konkurencji thebestof (rzut, skok itp) jeden czy dwa wyniki (prompty)
- co w przypadku remisu w finale? - porównywarka konkretnych uczestników?
