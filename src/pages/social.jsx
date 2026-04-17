import { useEffect } from "react";
import "../styles/social.css";

export default function Social() {
  useEffect(() => {
    // Instagram
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // TikTok
    // if (window.tiktokEmbedLoad) {
    //   window.tiktokEmbedLoad();
    // }
  }, []);

  return (
    <section className="social-page">
      <div className="container">
        <h1>Pruebas de redes sociales</h1>
        <p>
          Pgina de pruebas para mostrar publicaciones reales de Instagram y TikTok.
        </p>
        {/* INSTAGRAM EMBED */}
        <div className="social-embed">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DN2eKdpWABb/?igsh=dXl2dmczZnVzdjcz"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        {/* TIKTOK IFRAME */}
        <div className="social-embed">
          <iframe src="https://www.tiktok.com/embed/v2/7565575383643393302"
            width="325"
            height="580"
            allowFullScreen
            style={{
              border: "none",
              borderRadius: "12px",
            }}
            title="TikTok video"
          ></iframe>

          {/* <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@guillermocriminologo/video/7565575383643393302"
            data-video-id="YYYYYYYYY"
            style={{ maxWidth: "605px", minWidth: "325px" }}
          ></blockquote> */}
        </div>
      </div>
    </section>
  );
}