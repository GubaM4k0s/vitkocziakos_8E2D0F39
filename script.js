// Projektek tömbje - adatok tárolása
const projects = [
    { id: 1, name: "E-commerce Webshop", rating: 4.5, category: "Web", description: "Online áruház teljes funkcionalitással" },
    { id: 2, name: "Időjárás Alkalmazás", rating: 4.0, category: "App", description: "Valós idejű időjárás előrejelzés" },
    { id: 3, name: "Feladatkezelő", rating: 4.8, category: "Productivity", description: "ToDo lista alkalmazás" },
    { id: 4, name: "Portfólió Oldal", rating: 5.0, category: "Web", description: "Személyes bemutatkozó oldal" },
    { id: 5, name: "Jegyzetelő App", rating: 3.5, category: "App", description: "Gyors jegyzetelés mobil eszközökre" },
    { id: 6, name: "Képszerkesztő", rating: 4.2, category: "Design", description: "Egyszerű képszerkesztő eszköz" }
];

// Számítási előzmények tárolása
let calculationHistory = [];

// ============================================
// FÜGGVÉNY 1: calculate - Paraméteres függvény
// Aritmetikai műveletek, elágazások
// ============================================
function calculate(num1, num2, operation) {
    // Validáció - logikai műveletek
    if (isNaN(num1) || isNaN(num2)) {
        return "Hiba: Érvénytelen számok!";
    }

    let result;
    
    // Elágazások - különböző műveletek
    if (operation === 'add') {
        result = num1 + num2; // Aritmetikai művelet: összeadás
    } else if (operation === 'subtract') {
        result = num1 - num2; // Aritmetikai művelet: kivonás
    } else if (operation === 'multiply') {
        result = num1 * num2; // Aritmetikai művelet: szorzás
    } else if (operation === 'divide') {
        // Logikai művelet: nulla ellenőrzés
        if (num2 === 0) {
            return "Hiba: Nullával nem lehet osztani!";
        }
        result = num1 / num2; // Aritmetikai művelet: osztás
    } else {
        return "Hiba: Ismeretlen művelet!";
    }

    return result;
}

// ============================================
// FÜGGVÉNY 2: findMaxProject - Maximum kiválasztás tétel
// Tömb, ciklus, programozási tétel
// ============================================
function findMaxProject(projectsList) {
    // Logikai művelet: üres tömb ellenőrzés
    if (!projectsList || projectsList.length === 0) {
        return null;
    }

    let maxProject = projectsList[0]; // Első elem feltételezése
    
    // Ciklus: tömb bejárása
    for (let i = 1; i < projectsList.length; i++) {
        // Logikai művelet: összehasonlítás
        if (projectsList[i].rating > maxProject.rating) {
            maxProject = projectsList[i]; // Maximum érték frissítése
        }
    }

    return maxProject;
}

// ============================================
// FÜGGVÉNY 3: filterProjects - Számlálás és szűrés tétel
// Tömb, ciklus, logikai műveletek
// ============================================
function filterProjects(projectsList, minRating) {
    const filtered = []; // Üres tömb az eredményeknek
    
    // Ciklus: tömb bejárása
    for (let i = 0; i < projectsList.length; i++) {
        // Logikai művelet és elágazás: feltétel ellenőrzése
        if (projectsList[i].rating >= minRating) {
            filtered.push(projectsList[i]); // Megfelelő elem hozzáadása
        }
    }

    return filtered; // Szűrt tömb visszaadása
}

// ============================================
// FÜGGVÉNY 4: calculateAverage - Összegzés tétel
// Tömb, ciklus, aritmetikai műveletek
// ============================================
function calculateAverage(numbers) {
    // Logikai művelet: üres tömb ellenőrzés
    if (!numbers || numbers.length === 0) {
        return 0;
    }

    let sum = 0; // Összeg inicializálása
    
    // Ciklus: tömb bejárása és összegzés
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // Aritmetikai művelet: összeadás
    }

    // Aritmetikai művelet: átlag számítása (osztás)
    const average = sum / numbers.length;
    return average;
}

// ============================================
// FÜGGVÉNY 5: validateInput - Validáció
// Logikai műveletek, elágazások
// ============================================
function validateInput(input) {
    // Logikai műveletek: több feltétel ellenőrzése
    if (input === null || input === undefined || input === '') {
        return false;
    }
    
    // Elágazás: típus ellenőrzése
    if (typeof input === 'string' && input.trim() === '') {
        return false;
    }
    
    return true; // Érvényes input
}

// ============================================
// FÜGGVÉNY 6: calculateStatistics - Komplex statisztika
// Több programozási tétel kombinációja
// ============================================
function calculateStatistics(numbers) {
    // Logikai művelet: validáció
    if (!numbers || numbers.length === 0) {
        return null;
    }

    // Összegzés tétel használata
    const avg = calculateAverage(numbers);
    
    // Maximum keresés
    let max = numbers[0];
    let min = numbers[0];
    
    // Ciklus: minimum és maximum keresés
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    // Összeg számítás
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Eredmény objektum összeállítása
    return {
        count: numbers.length,
        sum: sum,
        average: avg,
        max: max,
        min: min
    };
}

// ============================================
// UI FÜGGVÉNYEK - Portfólió oldal
// ============================================
function initializePortfolio() {
    displayProjects(projects);
    updateStatistics(projects);
}

function displayProjects(projectsList) {
    const container = document.getElementById('projectContainer');

    // Védőfeltétel: ha nincs konténer az oldalon, nem folytatjuk
    if (!container) {
        console.warn('A projectContainer elem nem található a DOM-ban.');
        return;
    }
    
    // Logikai művelet: üres tömb kezelése
    if (!projectsList || projectsList.length === 0) {
        container.innerHTML = '<p class="empty-message">Nincsenek megjeleníthető projektek</p>';
        return;
    }

    container.innerHTML = ''; // Tartalom törlése
    
    // Ciklus: projektek megjelenítése
    projectsList.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="rating">⭐ ${project.rating.toFixed(1)}</div>
            <span class="category">${project.category}</span>
        `;
        container.appendChild(card);
    });
}

function updateStatistics(projectsList) {
    // Tömb létrehozása az értékelésekből
    const ratings = [];
    for (let i = 0; i < projectsList.length; i++) {
        ratings.push(projectsList[i].rating);
    }

    // Statisztikák számítása
    const stats = calculateStatistics(ratings);

    // Logikai művelet: ellenőrzés
    const totalEl = document.getElementById('totalProjects');
    const avgEl = document.getElementById('avgRating');
    const maxEl = document.getElementById('maxRating');

    // Ha bármelyik elem hiányzik, nem próbáljuk meg frissíteni
    if (!totalEl || !avgEl || !maxEl) {
        console.warn('Hiányzó statisztika elem(ek) a DOM-ban.');
        return;
    }

    if (stats) {
        totalEl.textContent = stats.count;
        avgEl.textContent = stats.average.toFixed(2);
        maxEl.textContent = stats.max.toFixed(1);
    } else {
        totalEl.textContent = '0';
        avgEl.textContent = '-';
        maxEl.textContent = '-';
    }
}

function applyFilter() {
    const minRating = parseFloat(document.getElementById('minRating').value);
    
    // Validáció
    if (!validateInput(minRating) || isNaN(minRating)) {
        alert('Kérem adjon meg egy érvényes értékelést!');
        return;
    }

    // Szűrés függvény használata
    const filtered = filterProjects(projects, minRating);
    displayProjects(filtered);
    updateStatistics(filtered);
}

function showAllProjects() {
    displayProjects(projects);
    updateStatistics(projects);
}

function showBestProject() {
    // Maximum kiválasztás tétel használata
    const bestProject = findMaxProject(projects);
    
    if (bestProject) {
        displayProjects([bestProject]); // Egy elemű tömb
        updateStatistics([bestProject]);
    }
}

// ============================================
// UI FÜGGVÉNYEK - Kalkulátor oldal
// ============================================
function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Calculate függvény használata (paraméteres)
    const result = calculate(num1, num2, operation);

    // Eredmény megjelenítése
    const display = document.getElementById('display');
    display.value = result;

    // Logikai művelet: csak szám eredménynél mentjük
    if (typeof result === 'number') {
        // Művelet szöveges leírása
        let operationSymbol;
        if (operation === 'add') operationSymbol = '+';
        else if (operation === 'subtract') operationSymbol = '-';
        else if (operation === 'multiply') operationSymbol = '×';
        else if (operation === 'divide') operationSymbol = '÷';

        const historyEntry = `${num1} ${operationSymbol} ${num2} = ${result}`;
        calculationHistory.push(historyEntry);
        updateHistory();
    }
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    
    // Logikai művelet: üres előzmények kezelése
    if (calculationHistory.length === 0) {
        historyDiv.innerHTML = '<p class="empty-message">Még nincs művelet elvégezve</p>';
        return;
    }

    historyDiv.innerHTML = '';
    
    // Ciklus: előzmények megjelenítése (fordított sorrendben)
    for (let i = calculationHistory.length - 1; i >= 0; i--) {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.textContent = calculationHistory[i];
        historyDiv.appendChild(item);
    }
}

function calculateStats() {
    const input = document.getElementById('numberList').value;
    
    // Validáció
    if (!validateInput(input)) {
        alert('Kérem adjon meg számokat!');
        return;
    }

    // String feldolgozása: tömb létrehozása
    const numberStrings = input.split(',');
    const numbers = [];
    
    // Ciklus: számok konvertálása
    for (let i = 0; i < numberStrings.length; i++) {
        const num = parseFloat(numberStrings[i].trim());
        // Logikai művelet: érvényes szám ellenőrzés
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }

    // Logikai művelet: van-e érvényes szám
    if (numbers.length === 0) {
        alert('Nem található érvényes szám a bemenetben!');
        return;
    }

    // Statisztikák számítása
    const stats = calculateStatistics(numbers);
    
    // Eredmények megjelenítése
    const resultsDiv = document.getElementById('statsResults');
    resultsDiv.innerHTML = `
        <div class="result-item"><strong>Elemek száma:</strong> ${stats.count}</div>
        <div class="result-item"><strong>Összeg:</strong> ${stats.sum.toFixed(2)}</div>
        <div class="result-item"><strong>Átlag:</strong> ${stats.average.toFixed(2)}</div>
        <div class="result-item"><strong>Maximum:</strong> ${stats.max}</div>
        <div class="result-item"><strong>Minimum:</strong> ${stats.min}</div>
    `;
}

function clearStats() {
    document.getElementById('numberList').value = '';
    document.getElementById('statsResults').innerHTML = '';
}

// Konzol üzenet a betöltésről
console.log('Script betöltve. Projektek száma:', projects.length);
