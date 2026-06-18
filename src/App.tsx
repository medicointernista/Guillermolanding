import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import HomePage from './pages/HomePage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';
import {
  AvisoPrivacidadPage,
  TerminosCondicionesPage,
  DescargoPágina,
  CompromisoEticaPage,
} from './pages/LegalPages';
import {
  ViscosuplementacionPage,
  PRPPage,
  CelulasMesenquimalesPage,
  InfiltracionesPage,
} from './pages/ServicesRegenerativo';
import {
  FascitisPlantar,
  EsguincesTobillo,
  FracturasTobillo,
  HalluxValgusPage,
  ArtrosisRodillas,
  ManguitoRotador,
  OrtopediaGeriatrica,
} from './pages/ServicesPieRodillaHombro';
import {
  TendinitisMuneca,
  TunnelCarpPage,
  TendinitisQuervain,
  GanglionesMuneca,
  DedosGatillo,
  FracturasRadioDistal,
  FracturasAntebrazo,
} from './pages/ServicesManoMuneca';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <p className="text-6xl font-extrabold text-[#1a365d] mb-4">404</p>
      <h1 className="text-xl font-bold text-gray-700 mb-2">Página no encontrada</h1>
      <p className="text-gray-500 mb-6 text-sm">La página que buscas no existe o fue movida.</p>
      <a href="/" className="inline-flex items-center gap-2 bg-[#25D366] text-white no-underline px-6 py-3 rounded-full text-sm font-extrabold uppercase transition-all hover:bg-[#1ebe57]">
        Volver al Inicio
      </a>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'es';
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Routes>
      {/* Main pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<SobreMiPage />} />
      <Route path="/contacto" element={<ContactoPage />} />

      {/* Legal pages */}
      <Route path="/aviso-de-privacidad" element={<AvisoPrivacidadPage />} />
      <Route path="/terminos-y-condiciones" element={<TerminosCondicionesPage />} />
      <Route path="/descargo-de-responsabilidad" element={<DescargoPágina />} />
      <Route path="/compromiso-de-etica" element={<CompromisoEticaPage />} />

      {/* Regenerative treatments */}
      <Route path="/viscosuplementacion" element={<ViscosuplementacionPage />} />
      <Route path="/plasma-rico-en-plaquetas" element={<PRPPage />} />
      <Route path="/celulas-mesenguimales" element={<CelulasMesenquimalesPage />} />
      <Route path="/infiltraciones-articulares-o-de-tejidos-blandos-con-antiinflamatorios" element={<InfiltracionesPage />} />

      {/* Foot and ankle */}
      <Route path="/fascitis-plantar" element={<FascitisPlantar />} />
      <Route path="/esguinces-cronicos-de-tobillo" element={<EsguincesTobillo />} />
      <Route path="/fracturas-de-tobillo" element={<FracturasTobillo />} />
      <Route path="/hallux-valgus" element={<HalluxValgusPage />} />

      {/* Knee */}
      <Route path="/artrosis-de-rodillas" element={<ArtrosisRodillas />} />

      {/* Shoulder */}
      <Route path="/sindrome-de-manguito-rotador" element={<ManguitoRotador />} />

      {/* Geriatric */}
      <Route path="/ortopedia-geriatrica" element={<OrtopediaGeriatrica />} />

      {/* Hand and wrist */}
      <Route path="/tendinitis-de-muneca" element={<TendinitisMuneca />} />
      <Route path="/sindrome-de-tunel-del-carpo" element={<TunnelCarpPage />} />
      <Route path="/tendinitis-de-quervain" element={<TendinitisQuervain />} />
      <Route path="/gangliones" element={<GanglionesMuneca />} />
      <Route path="/dedos-en-gatillo-o-resorte" element={<DedosGatillo />} />
      <Route path="/fracturas-de-radio-distal" element={<FracturasRadioDistal />} />
      <Route path="/fracturas-de-antebrazo" element={<FracturasAntebrazo />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
