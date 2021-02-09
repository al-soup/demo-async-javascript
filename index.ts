// Import stylesheets
import "./style.css";

/**
 * =================
 * EVENT LOOP PRIMER
 * =================
 */





/**
 * ===============
 * CALLBACK (HELL)
 * ===============
 */

/**
 * =================
 * EVENT LOOP PRIMER
 * =================
 */

/**
 * ========
 * PROMISES
 * ========
 */

/**
 * =============
 * ASYNC / AWAIT
 * =============
 */

/**
 * =====================
 * SIDENOTE: ASYNC LOOPS
 * =====================
 */

const somethingAsync = (ms = 2000) =>
  new Promise(resolve =>
    setTimeout(() => {
      console.log("hey");
      resolve;
    }, ms)
  );

somethingAsync(5555);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Async JavaScript 📞🔙</h1>`;
