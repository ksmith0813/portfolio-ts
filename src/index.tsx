import { createRoot } from 'react-dom/client'
import { Router } from 'components/navigation/router'
import 'index.scss'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<Router />)
