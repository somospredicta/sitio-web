import { useEffect } from 'react';

// Al entrar con un link a una sección (por ejemplo, predicta.ar/#test), baja hasta esa sección.
// La home se arma después de cargar la página, así que el navegador no encuentra la sección por sí solo.
// Se reajusta unos instantes mientras terminan de cargar imágenes y fuentes, salvo que la persona ya se haya movido.
export default function useScrollToHash() {
  useEffect(() => {
    const irAlHash = (suave) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const destino = document.getElementById(id);
      if (destino) destino.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'start' });
    };

    let movido = false;
    const alMoverse = () => { movido = true; };
    const eventos = ['wheel', 'touchstart', 'keydown', 'mousedown'];
    eventos.forEach((e) => window.addEventListener(e, alMoverse, { passive: true }));

    const reajustar = () => { if (!movido) irAlHash(false); };
    const timers = [0, 200, 500, 1000, 2000].map((t) => setTimeout(reajustar, t));
    window.addEventListener('load', reajustar);

    const alCambiarHash = () => irAlHash(true);
    window.addEventListener('hashchange', alCambiarHash);

    return () => {
      timers.forEach(clearTimeout);
      eventos.forEach((e) => window.removeEventListener(e, alMoverse));
      window.removeEventListener('load', reajustar);
      window.removeEventListener('hashchange', alCambiarHash);
    };
  }, []);
}
