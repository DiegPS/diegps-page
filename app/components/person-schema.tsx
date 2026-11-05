export function PersonSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Diego Pahua Silvan",
    alternateName: "DiegPS",
    jobTitle: "Desarrollador de software",
    sameAs: ["https://github.com/DiegPS"],
    knowsAbout: [
      "Desarrollo de aplicaciones de escritorio",
      "Desarrollo web",
      "Flutter",
      "Java",
      "Go",
      "TypeScript",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
