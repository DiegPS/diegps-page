import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ShieldCheck } from "lucide-react";
import "../product.css";

export default function AirStreamPage(){return <main className="product-shell stream">
  <nav className="product-nav"><Link href="/"><ArrowLeft/> Diego / Portfolio</Link><div className="product-nav-links"><Link href="/airstream/privacy"><ShieldCheck/> Privacidad</Link><span>AirStream Studio / 02</span></div></nav>
  <section className="product-hero"><div className="product-hero-copy"><Image className="product-logo" src="/assets/airstream-icon.png" width={512} height={512} alt="AirStream Studio"/><p className="product-kicker">Creator companion for Windows</p><h1>AirStream<br/>Studio</h1><p className="product-lead">Un panel de producción para reunir chats, escuchar mensajes, crear subtítulos locales y llevarlo todo a OBS.</p><span className="store-button disabled"><Download/> Próximamente en Microsoft Store</span></div><div className="product-hero-visual"><span className="vertical-label">LIVE CHAT / UNIFIED VIEW</span><Image src="/assets/airstream-connections.png" width={1000} height={734} alt="Chat unificado en AirStream Studio" priority/></div></section>
  <section className="product-facts"><div><strong>2</strong><span>chats en una vista</span></div><div><strong>TTS</strong><span>voces locales</span></div><div><strong>OBS</strong><span>overlay y websocket</span></div><div><strong>$0</strong><span>sin plan pro</span></div></section>
  <section className="product-story"><header><p className="mono">CAPACIDADES / 01—03</p><h2>Menos ventanas. Más transmisión.</h2></header>
    <article className="feature-row"><div className="feature-copy"><p className="mono">01 / ESCUCHAR</p><h3>El chat toma voz sin salir del equipo.</h3><p>Configura voz, idioma, calidad y velocidad. Los modelos de TTS se descargan cuando decides utilizarlos y trabajan de forma local.</p></div><div className="feature-image"><Image src="/assets/airstream-tts.png" width={1000} height={734} alt="Configuración TTS de AirStream Studio"/></div></article>
    <article className="feature-row"><div className="feature-copy"><p className="mono">02 / SUBTITULAR</p><h3>Tu micrófono se convierte en texto.</h3><p>Reconocimiento, traducción y reducción de ruido para generar subtítulos en tiempo real sin enviar el audio a Internet.</p></div><div className="feature-image"><Image src="/assets/airstream-subtitles.png" width={1000} height={734} alt="Subtítulos locales de AirStream Studio"/></div></article>
    <article className="feature-row"><div className="feature-copy"><p className="mono">03 / INTEGRAR</p><h3>Una fuente local lista para OBS.</h3><p>Servidor de superposición para navegador e integración WebSocket para incorporar estado, escenas y producción sin servicios intermedios.</p></div><div className="feature-image"><Image src="/assets/airstream-obs.png" width={1000} height={734} alt="Integración OBS de AirStream Studio"/></div></article>
  </section>
  <section className="product-cta"><h2>Tu chat.<br/>Tu equipo.</h2><Link href="/airstream/privacy">Leer política de privacidad →</Link></section>
</main>}
