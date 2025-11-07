import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getDatabase, ref, onValue, update } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// 1. Your Web App's Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3OJWrWOgHeahdRFwCc2PU9Jsx-xb89hg",
    authDomain: "power-quality-monitor.firebaseapp.com",
    databaseURL: "https://power-quality-monitor-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "power-quality-monitor",
    storageBucket: "power-quality-monitor.firebasestorage.app",
    messagingSenderId: "1050820268953",
    appId: "1:1050820268953:web:26742cd56d5a42cfea7908"
};

// 2. Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// --- Check if we are on Laboratory 1 ---
// We check if a key element from Lab 1 exists.
const airconModeSelect1 = document.getElementById('aircon-mode-select1');
if (airconModeSelect1) {

    // 3. Define References to Data Paths (Lab 1)
    const airconRef1 = ref(db, 'Lab1/aircon');
    const lightsRef1 = ref(db, 'Lab1/lights');
    const outletRef1 = ref(db, 'Lab1/outlet');
    const printerRef1 = ref(db, 'Lab1/printer');

    // 4. Get References to the HTML Dropdown Elements (Lab 1)
    const lightsModeSelect1 = document.getElementById('lights-mode-select1');
    const outletModeSelect1 = document.getElementById('outlet-mode-select1');
    const printerModeSelect1 = document.getElementById('printer-mode-select1');

    // 5. Listen for Aircon Data (Lab 1)
    onValue(airconRef1, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) airconModeSelect1.value = data.mode;
            updateStatusBadge('aircon', data.mode);

            if (data.mode === 'off') {
                document.getElementById('aircon-current1').innerText = '0.00';
                document.getElementById('aircon-voltage1').innerText = '0.00';
                document.getElementById('aircon-thdi1').innerText = '0.00';
                document.getElementById('aircon-thdv1').innerText = '0.00';
            } else {
                const current1 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage1 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi1 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv1 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');

                document.getElementById('aircon-current1').innerText = formatSensor(current1);
                document.getElementById('aircon-voltage1').innerText = formatSensor(voltage1);
                document.getElementById('aircon-thdi1').innerText = formatSensor(thdi1);
                document.getElementById('aircon-thdv1').innerText = formatSensor(thdv1);
            }
        } else {
            console.log("No data available for aircon.");
            updateStatusBadge('aircon', null);
        }
    });

    // 6. Listen for Lights Data (Lab 1)
    onValue(lightsRef1, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) lightsModeSelect1.value = data.mode;
            updateStatusBadge('lights', data.mode);
            if (data.mode === 'off') {
                document.getElementById('lights-current1').innerText = '0.00';
                document.getElementById('lights-voltage1').innerText = '0.00';
                document.getElementById('lights-thdi1').innerText = '0.00';
                document.getElementById('lights-thdv1').innerText = '0.00';
            } else {
                const current1 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage1 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi1 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv1 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');

                document.getElementById('lights-current1').innerText = formatSensor(current1);
                document.getElementById('lights-voltage1').innerText = formatSensor(voltage1);
                document.getElementById('lights-thdi1').innerText = formatSensor(thdi1);
                document.getElementById('lights-thdv1').innerText = formatSensor(thdv1);
            }
        } else {
            console.log("No data available for lights.");
        }
    });

    // 7. Listen for Outlet Data (Lab 1)
    onValue(outletRef1, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) outletModeSelect1.value = data.mode;
            updateStatusBadge('outlet', data.mode);
            if (data.mode === 'off') {
                document.getElementById('outlet-current1').innerText = '0.00';
                document.getElementById('outlet-voltage1').innerText = '0.00';
                document.getElementById('outlet-thdi1').innerText = '0.00';
                document.getElementById('outlet-thdv1').innerText = '0.00';
            } else {
                const current1 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage1 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi1 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv1 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');

                document.getElementById('outlet-current1').innerText = formatSensor(current1);
                document.getElementById('outlet-voltage1').innerText = formatSensor(voltage1);
                document.getElementById('outlet-thdi1').innerText = formatSensor(thdi1);
                document.getElementById('outlet-thdv1').innerText = formatSensor(thdv1);
            }
        } else {
            console.log("No data available for outlet.");
        }
    });

    // 8. Listen for Printer Data (Lab 1)
    onValue(printerRef1, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) printerModeSelect1.value = data.mode;
            updateStatusBadge('printer', data.mode);
            if (data.mode === 'off') {
                document.getElementById('printer-current1').innerText = '0.00';
                document.getElementById('printer-voltage1').innerText = '0.00';
                document.getElementById('printer-thdi1').innerText = '0.00';
                document.getElementById('printer-thdv1').innerText = '0.00';
            } else {
                const current1 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage1 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi1 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv1 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');

                document.getElementById('printer-current1').innerText = formatSensor(current1);
                document.getElementById('printer-voltage1').innerText = formatSensor(voltage1);
                document.getElementById('printer-thdi1').innerText = formatSensor(thdi1);
                document.getElementById('printer-thdv1').innerText = formatSensor(thdv1);
            }
        } else {
            console.log("No data available for printer.");
        }
    });

    // Event Listeners (Lab 1)
    airconModeSelect1.addEventListener('change', (e) => {
        update(airconRef1, { mode: e.target.value });
        updateStatusBadge('aircon', e.target.value);
    });
    lightsModeSelect1.addEventListener('change', (e) => {
        update(lightsRef1, { mode: e.target.value });
        updateStatusBadge('lights', e.target.value);
    });
    outletModeSelect1.addEventListener('change', (e) => {
        update(outletRef1, { mode: e.target.value });
        updateStatusBadge('outlet', e.target.value);
    });
    printerModeSelect1.addEventListener('change', (e) => {
        update(printerRef1, { mode: e.target.value });
        updateStatusBadge('printer', e.target.value);
    });

}

// --- Check if we are on Laboratory 2 ---
// We check if a key element from Lab 2 exists.
const airconModeSelect2 = document.getElementById('aircon-mode-select2');
if (airconModeSelect2) {

    // 3. Define References to Data Paths (Lab 2)
    const airconRef2 = ref(db, 'Lab2/aircon');
    const lightsRef2 = ref(db, 'Lab2/lights');
    const outletRef2 = ref(db, 'Lab2/outlet');
    const printerRef2 = ref(db, 'Lab2/printer');

    // 4. Get References to the HTML Dropdown Elements (Lab 2)
    const lightsModeSelect2 = document.getElementById('lights-mode-select2');
    const outletModeSelect2 = document.getElementById('outlet-mode-select2');
    const printerModeSelect2 = document.getElementById('printer-mode-select2');

    // 5. Listen for Aircon Data (Lab 2)
    onValue(airconRef2, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) airconModeSelect2.value = data.mode;
            updateStatusBadge('aircon', data.mode);
            if (data.mode === 'off') {
                document.getElementById('aircon-current2').innerText = '0.00';
                document.getElementById('aircon-voltage2').innerText = '0.00';
                document.getElementById('aircon-thdi2').innerText = '0.00';
                document.getElementById('aircon-thdv2').innerText = '0.00';
            } else {
                const current2 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage2 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi2 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv2 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');
                document.getElementById('aircon-current2').innerText = formatSensor(current2);
                document.getElementById('aircon-voltage2').innerText = formatSensor(voltage2);
                document.getElementById('aircon-thdi2').innerText = formatSensor(thdi2);
                document.getElementById('aircon-thdv2').innerText = formatSensor(thdv2);
            }
        } else {
            console.log("No data available for aircon (Lab 2).");
            updateStatusBadge('aircon', null);
        }
    });

    // 6. Listen for Lights Data (Lab 2)
    onValue(lightsRef2, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) lightsModeSelect2.value = data.mode;
            updateStatusBadge('lights', data.mode);
            if (data.mode === 'off') {
                document.getElementById('lights-current2').innerText = '0.00';
                document.getElementById('lights-voltage2').innerText = '0.00';
                document.getElementById('lights-thdi2').innerText = '0.00';
                document.getElementById('lights-thdv2').innerText = '0.00';
            } else {
                const current2 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage2 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi2 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv2 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');
                document.getElementById('lights-current2').innerText = formatSensor(current2);
                document.getElementById('lights-voltage2').innerText = formatSensor(voltage2);
                document.getElementById('lights-thdi2').innerText = formatSensor(thdi2);
                document.getElementById('lights-thdv2').innerText = formatSensor(thdv2);
            }
        } else {
            console.log("No data available for lights (Lab 2).");
        }
    });

    // 7. Listen for Outlet Data (Lab 2)
    onValue(outletRef2, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) outletModeSelect2.value = data.mode;
            updateStatusBadge('outlet', data.mode);
            if (data.mode === 'off') {
                document.getElementById('outlet-current2').innerText = '0.00';
                document.getElementById('outlet-voltage2').innerText = '0.00';
                document.getElementById('outlet-thdi2').innerText = '0.00';
                document.getElementById('outlet-thdv2').innerText = '0.00';
            } else {
                const current2 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage2 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi2 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv2 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');
                document.getElementById('outlet-current2').innerText = formatSensor(current2);
                document.getElementById('outlet-voltage2').innerText = formatSensor(voltage2);
                document.getElementById('outlet-thdi2').innerText = formatSensor(thdi2);
                document.getElementById('outlet-thdv2').innerText = formatSensor(thdv2);
            }
        } else {
            console.log("No data available for outlet (Lab 2).");
        }
    });

    // 8. Listen for Printer Data (Lab 2)
    onValue(printerRef2, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            if (data.mode) printerModeSelect2.value = data.mode;
            updateStatusBadge('printer', data.mode);
            if (data.mode === 'off') {
                document.getElementById('printer-current2').innerText = '0.00';
                document.getElementById('printer-voltage2').innerText = '0.00';
                document.getElementById('printer-thdi2').innerText = '0.00';
                document.getElementById('printer-thdv2').innerText = '0.00';
            } else {
                const current2 = getField(data, 'current', 'Current', 'i', 'I');
                const voltage2 = getField(data, 'voltage', 'Voltage', 'v', 'V');
                const thdi2 = getField(data, 'THDi', 'thdi', 'THD_i', 'thd_i');
                const thdv2 = getField(data, 'THDv', 'thdv', 'THD_v', 'thd_v');
                document.getElementById('printer-current2').innerText = formatSensor(current2);
                document.getElementById('printer-voltage2').innerText = formatSensor(voltage2);
                document.getElementById('printer-thdi2').innerText = formatSensor(thdi2);
                document.getElementById('printer-thdv2').innerText = formatSensor(thdv2);
            }
        } else {
            console.log("No data available for printer (Lab 2).");
        }
    });

    // Event Listeners (Lab 2)
    airconModeSelect2.addEventListener('change', (e) => {
        update(airconRef2, { mode: e.target.value });
        updateStatusBadge('aircon', e.target.value);
    });
    lightsModeSelect2.addEventListener('change', (e) => {
        update(lightsRef2, { mode: e.target.value });
        updateStatusBadge('lights', e.target.value);
    });
    outletModeSelect2.addEventListener('change', (e) => {
        update(outletRef2, { mode: e.target.value });
        updateStatusBadge('outlet', e.target.value);
    });
    printerModeSelect2.addEventListener('change', (e) => {
        update(printerRef2, { mode: e.target.value });
        updateStatusBadge('printer', e.target.value);
    });
}

// --- Helper Functions (Shared) ---

// Helper to update badge DOM
function updateStatusBadge(breakerId, mode) {
    // This function had a bug, it was trying to find an element like 'aircon-status'
    // which doesn't exist on your HTML.
    // The existing code for updating dropdowns and values is sufficient.
    // I've commented out the part that was looking for a non-existent element.

    // const statusEl = document.getElementById(`${breakerId}-status`);
    // if (!statusEl) return;
    // const text = mode ? mode.charAt(0).toUpperCase() + mode.slice(1) : 'Unknown';
    // statusEl.textContent = text;
    // statusEl.className = `status-badge ${mode || ''}`;
}

// Helper: return database representation formatted to 2 decimal places
function formatSensor(value) {
    if (value === null || value === undefined) return '--';

    // If it's a string that represents a number, parse and format.
    if (typeof value === 'string') {
        const num = Number(value);
        if (!Number.isNaN(num)) return num.toFixed(2);
        return value; // non-numeric string -> leave as-is
    }

    if (typeof value === 'number') {
        return value.toFixed(2);
    }

    // fallback
    const num = Number(value);
    if (!Number.isNaN(num)) return num.toFixed(2);
    return String(value);
}

// small helper to try multiple possible key names from snapshot
function getField(data, ...keys) {
    for (const k of keys) {
        if (data && (data[k] !== undefined) && (data[k] !== null)) return data[k];
    }
    return undefined;
}