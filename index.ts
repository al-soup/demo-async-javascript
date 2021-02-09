import "./style.css";

const baseApp = `
  <h1>Async JavaScript</h1>
  <button id="resetBtn" class="btn">Reset</button>
  <ol id="list"></ol>
`;

/**
 * Helper Functions
 */
const asyncOperation = (ms = 2000, msg = "☎️  🔙️") => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(msg);
      appendItem(msg);
      resolve;
    }, ms)
  );
};

const appendItem = (text: string) => {
  const node = document.createElement("LI");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  document.getElementById("list").appendChild(node);
};

const init = () => {
  const appDiv: HTMLElement = document.getElementById("app");
  appDiv.innerHTML = baseApp;
  document.getElementById("resetBtn").addEventListener("click", init);

  // Call your functions here
  asyncOperation();
};

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

init();
