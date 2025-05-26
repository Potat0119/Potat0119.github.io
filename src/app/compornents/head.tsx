export default function Head() {

    const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "REO YOSHIOKA",
    "url": "https://www.pot4t0.com",
    "sameAs": [
    "https://twitter.com/Pot4t0_0w0",
    ],
    "jobTitle": "Web Developer, Texture Developer"
    };


    return (
    <>
        <title>pot4t0.com - ポートフォリオ</title>
        <meta name="description" content="REO YOSHIOKA'S Portfolio Site" />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    </>
    );
}