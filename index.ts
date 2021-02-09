import "./style.css";

const baseApp = `
  <h1>Async JavaScript</h1>
  <button id="resetBtn" class="btn">Reset</button>
  <ol id="list"></ol>
`;

/**
 * Sleep for x milliseconds
 */
const sleep = (ms = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Add list item to the DOM
 */
const appendItem = (text = "☎️  🔙️") => {
  const node = document.createElement("LI");
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
  document.getElementById("list").appendChild(node);
};

/**
 * Simulate an async function call
 */
const asyncOperation = async (text?: string, ms?: number) => {
  await sleep(ms);
  appendItem(text);
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
  //   asyncOperation("Two"); // vs await asyncOperation("Two");
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
