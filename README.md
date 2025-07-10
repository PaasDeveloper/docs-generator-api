# DOCX Generator API (Node.js)

This project provides a simple Node.js API to dynamically generate DOCX documents using the [docxtemplater](https://docxtemplater.com/) library. It is designed to easily integrate with applications such as Oracle VBCS.

---

## Features

- Generate DOCX documents with dynamic data
- Supports both simple placeholders and table data (loops)
- Returns DOCX file in Base64 format for easy downloading
- Easy to extend with new fields without changing the code

---

## How It Works

1. Create a DOCX template with placeholders like:

```
{FIRST_NAME}
{LAST_NAME}
{AGE}
```

2. Send JSON data to the API like:

```json
{
  "FIRST_NAME": "John",
  "LAST_NAME": "Doe",
  "AGE": "30"
}
```

3. The API returns a Base64-encoded DOCX file.

---

## API Endpoint

**POST** `/generate-doc`

### Request Body:

```json
{
  "FIRST_NAME": "John",
  "LAST_NAME": "Doe",
  "AGE": "30"
}
```

### Response:

```json
{
  "docBase64": "BASE64_STRING_OF_DOCX"
}
```

---

## Table Example (Looping Data)

Template placeholders inside a table:

```
{#people}{FIRST_NAME} {LAST_NAME} {AGE}{/people}
```

Sample JSON payload:

```json
{
  "people": [
    { "FIRST_NAME": "John", "LAST_NAME": "Doe", "AGE": "30" },
    { "FIRST_NAME": "Jane", "LAST_NAME": "Smith", "AGE": "25" }
  ]
}
```

---

## Running Locally

```bash
npm install
node index.js
```

---

## Save DOCX From Base64 (Helper Script)

```js
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Paste your Base64 string here:\n', (base64String) => {
  const buffer = Buffer.from(base64String, 'base64');
  fs.writeFileSync('filled_template.docx', buffer);
  console.log('✅ DOCX file saved as filled_template.docx');
  rl.close();
});
```

---

## Project Structure

```
/sample_rtf_template.docx   ← Your DOCX Template
/index.js                   ← Node.js API Code
/saveDocxWithInput.js       ← Script to save DOCX from Base64
/package.json               ← Project Dependencies
/README.md                  ← Documentation
```

---

## License

MIT License — feel free to customize and use.

---

## Author
    
Developed by Mohiddin M.
