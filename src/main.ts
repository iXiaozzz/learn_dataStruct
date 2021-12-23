import "./style.css";
import { LinkedList } from "./example/LinkedList";
import { log } from "./utils";
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
const link = new LinkedList();
const arr = [1, 2, 3];
arr.forEach((item) => link.push(item));
link.removeByIndex(2);
log("link:", link);
