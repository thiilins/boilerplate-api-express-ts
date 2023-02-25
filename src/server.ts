import { normalizePort } from './helpers/normalizePort.js'

import app from './app.js'

const PORT: any = normalizePort(process.env.PORT || '3000')

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
