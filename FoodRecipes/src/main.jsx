import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './Services/SearchContext.jsx'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <SearchProvider>
        <App />
      </SearchProvider>
    </SkeletonTheme>
  </StrictMode>,
)
