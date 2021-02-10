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
  asyncOperation("Hello");
  appendItem("World");

  /**
   * ========
   * PROMISES
   * ========
   */
  let myPromise = new Promise<void>((resolve, reject) => {
    try {
      // throw new Error("🔥️🔥️🔥️")
      sleep(2000).then(() => {
        appendItem("As promised");
        resolve();
      });
    } catch (err) {
      reject(err);
    }
  });

  myPromise.then(
    () => appendItem("After Promise"),
    (error) => appendItem(error)
  );

  // OR catch at the end

  // myPromise
  // .then(() => appendItem("After Promise"))
  // .catch((error) => appendItem(error));


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
  
  // myPromise
  //   .then(async () => {
  //     appendItem("After Promise");
  //     await sleep(3000);
  //   })
  //   .then(() => appendItem("After Promise of Promise"))
  //   .catch(error => appendItem(error));
  
};

// Run app
init();
