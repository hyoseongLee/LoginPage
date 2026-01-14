import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


async function enableMocking() {
  if (import.meta.env.MODE !== 'development') return
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

enableMocking().then(() => {

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
})