import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './Services/SearchContext.jsx'
import { BrowserRouter } from 'react-router-dom';
import Loading from './Components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <SearchProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </SearchProvider>

  </StrictMode >,
)
