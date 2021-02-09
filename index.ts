import "./style.css";

const baseApp = `
  <h1>Async JavaScript</h1>
  <button id="resetBtn" class="btn">Reset</button>
  <ol id="list"></ol>
`;

/**
 * Helper: Simulate an async function call
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

/**
 * Helper: Add list item to the DOM
 */
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
  // Write your code below

  /**
   * =================
   * EVENT LOOP PRIMER
   * =================
   */
  // appendItem("Hello");
  // function world() {
  //   appendItem("World");
  // }
  // setTimeout(world, 1000);

  /**
   * ===============
   * CALLBACK (HELL)
   * ===============
   */
  // setTimeout(() => {
  //   appendItem("Eins");
  //   setTimeout(() => {
  //     appendItem("Zwei");
  //     setTimeout(() => {
  //       appendItem("oder");
  //       setTimeout(() => {
  //         appendItem("Drei");
  //       }, 800);
  //     }, 800);
  //   }, 800);
  // }, 800);

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
};

// Run first to setup app
init();
