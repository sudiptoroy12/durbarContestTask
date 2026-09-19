"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function extractBodyContent(htmlString) {
    const bodyStart = htmlString.indexOf("<body>");
    const bodyEnd = htmlString.indexOf("</body>");
    const bodyTagLength = "<body>".length;
    return htmlString.slice(bodyStart + bodyTagLength, bodyEnd);
}
console.log(extractBodyContent(`<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`));
//# sourceMappingURL=task-4.js.map