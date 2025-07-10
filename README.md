# DOCX Generator API for VBCS

This Node.js API generates DOCX files by replacing placeholders.

## API Endpoint:
`POST /generate-doc`

### Request Payload:
```json
{
  "FIRST_NAME": "John",
  "LAST_NAME": "Doe",
  "AGE": "30"
}
