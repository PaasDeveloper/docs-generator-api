const fs = require('fs');
const base64String = '';
const buffer = Buffer.from(base64String, 'base64');
fs.writeFileSync('filled_template.docx', buffer);

console.log('DOCX file saved as filled_template.docx');
