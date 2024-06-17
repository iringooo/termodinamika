function calculate() {
    const n = parseFloat(document.getElementById('n').value);
    const R = parseFloat(document.getElementById('R').value);
    const V = parseFloat(document.getElementById('V').value);
    const T = parseFloat(document.getElementById('T').value);
    const P = parseFloat(document.getElementById('P').value);

    let result = '';
    
    if (isNaN(R) || R <= 0) {
        result = 'Please enter a valid value for the gas constant (R).';
    } else if (!isNaN(n) && !isNaN(V) && !isNaN(T)) {
        const calculatedP = (n * R * T) / V;
        result = `Nyomás (P) = ${calculatedP.toFixed(2)} Pa`;
    } else if (!isNaN(n) && !isNaN(P) && !isNaN(T)) {
        const calculatedV = (n * R * T) / P;
        result = `Térfogat (V) = ${calculatedV.toFixed(2)} m^3`;
    } else if (!isNaN(n) && !isNaN(P) && !isNaN(V)) {
        const calculatedT = (P * V) / (n * R);
        result = `Hőmérséklet (T) = ${calculatedT.toFixed(2)} K`;
    } else if (!isNaN(P) && !isNaN(V) && !isNaN(T)) {
        const calculatedN = (P * V) / (R * T);
        result = `Kilomólszám (n) = ${calculatedN.toFixed(2)} kmol`;
    } else {
        result = 'Adj meg 3 értéket, hogy a program kiszámolhassa a negyediket.';
    }

    document.getElementById('result').innerText = result;
}