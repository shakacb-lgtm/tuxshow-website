import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { client } from '../tina/__generated__/client'

const renderApp = async () => {
  try {
    // Fetch the data for the home page 
    const res = await client.queries.pages({ relativePath: 'home.md' });
    
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App query={res.query} variables={res.variables} data={res.data} />
      </StrictMode>,
    )
  } catch (error) {
    console.error('Error fetching Tina data. Check if content/pages/home.md exists.', error);
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}

renderApp();
