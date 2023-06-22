import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HangmanContextProvider } from './MechanicsContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HangmanContextProvider>
    <App />
  </HangmanContextProvider>
  ,
)
