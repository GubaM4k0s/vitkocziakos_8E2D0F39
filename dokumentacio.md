# Weboldal Dokumentáció

## Téma bemutatása

A weboldal egy **Személyes Portfólió és Interaktív Kalkulátor** alkalmazás, amely bemutatja a modern webfejlesztési technikákat. Az oldal három fő részből áll:
1. Kezdőlap - bemutatkozás és navigáció
2. Portfólió oldal - projektek bemutatása dinamikus tartalommal
3. Kalkulátor oldal - interaktív számológép különböző funkciókkal

## Felhasznált technológiák

- **HTML5**: Az oldal struktúrája és tartalma
- **CSS3**: Reszponzív dizájn, animációk, modern megjelenés
- **JavaScript (ES6+)**: Interaktív funkciók, DOM manipuláció, eseménykezelés

## Az oldal részei és funkciói

### HTML oldalak

1. **index.html** - Kezdőlap
   - Üdvözlő szöveg
   - Navigációs menü
   - Bemutatkozás

2. **portfolio.html** - Portfólió
   - Projektek listája tömbben tárolva
   - Dinamikus tartalom generálás
   - Szűrési funkciók

3. **calculator.html** - Kalkulátor
   - Interaktív számológép
   - Különböző matematikai műveletek
   - Statisztikai funkciók

### CSS (style.css)

- Reszponzív layout
- Modern színsémák
- Hover effektek
- Animációk

### JavaScript függvények (script.js)

1. **calculate(num1, num2, operation)** - Paraméteres függvény
   - Aritmetikai műveletek elvégzése
   - Paraméterek: két szám és a művelet típusa
   - Elágazás a művelet típusa alapján

2. **findMaxProject(projects)** - Maximum kiválasztás tétel
   - Tömb bejárása ciklussal
   - Maximum érték megkeresése
   - Visszaadja a legnagyobb értékelésű projektet

3. **filterProjects(projects, minRating)** - Szűrés és számlálás
   - Logikai műveletek
   - Tömb elemek szűrése feltétel alapján
   - Ciklus használata

4. **calculateAverage(numbers)** - Összegzés tétel
   - Tömb elemeinek összegzése
   - Átlagszámítás (összeg / elemszám)
   - Aritmetikai műveletek

5. **validateInput(input)** - Validáció
   - Logikai műveletek
   - Elágazások
   - Input ellenőrzés

## Programozási elemek alkalmazása

- ✅ **Aritmetikai műveletek**: Összeadás, kivonás, szorzás, osztás a kalkulátorban
- ✅ **Logikai műveletek**: Feltételek ellenőrzése, validáció
- ✅ **Elágazások**: if-else szerkezetek a függvényekben
- ✅ **Tömbök**: Projektek és számok tömbben való tárolása
- ✅ **Ciklusok**: for és forEach ciklusok tömb bejárásra
- ✅ **Függvények**: Több paraméteres és paraméter nélküli függvények

## Programozási tételek

- **Összegzés**: calculateAverage függvényben
- **Maximum kiválasztás**: findMaxProject függvényben
- **Számlálás**: filterProjects függvényben
- **Keresés**: Implicit módon a filter műveletekben

## AI használata

Nem került felhasználásra AI segítség a projekt elkészítéséhez.
