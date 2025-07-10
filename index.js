const express = require('express');
const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const app = express();
app.use(express.json());

app.post('/generate-doc', (req, res) => {
  const data = req.body;

  const content = fs.readFileSync(path.resolve(__dirname, 'sample_rtf_template.docx'), 'binary');
  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

  doc.render(data); 

  const buf = doc.getZip().generate({ type: 'nodebuffer' });
  const base64Doc = buf.toString('base64');
  res.json({ docBase64: base64Doc });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
