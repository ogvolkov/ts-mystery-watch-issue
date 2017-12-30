var fs = require('fs');

for (var i = 0; i < 300; i++) {
  fs.writeFile(`../src/module${i}.ts`, `import * as $ from 'jquery'; export default function who() { return ${i}; }`);
};

