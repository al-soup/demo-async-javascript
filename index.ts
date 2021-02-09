import "./style.css";

const baseApp = `
  <h1>Async JavaScript</h1>
  <button id="resetBtn" class="btn">Reset</button>
  <ol id="list"></ol>
`;

/**
 * Simulate an async function call
 */
const asyncOperation = (ms = 1000) =>
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Add list item to the DOM
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
  // const waitForEach = async () => {
  //   appendItem("One");
  //   await asyncOperation(2000);
  //   appendItem("Two");
  //   await asyncOperation(2000);
  //   appendItem("Three");
  // };
  // waitForEach();

  /**
   * =====================
   * SIDENOTE: ASYNC LOOPS
   * =====================
   */
};

// Run app
init();
