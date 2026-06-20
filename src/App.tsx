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
import { NotFoundPage, ServerErrorPage } from './pages/ErrorPages';

function NotFound() {
  return <NotFoundPage />;
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

      {/* Error pages */}
      <Route path="/500" element={<ServerErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
