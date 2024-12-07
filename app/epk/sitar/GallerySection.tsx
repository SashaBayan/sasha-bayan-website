import { MdFileDownload } from "react-icons/md";

const images = [
  {
    src: "/sasha-instruments.jpg",
    alt: "Sasha with instruments",
    filename: "sasha-instruments.jpg",
  },
  {
    src: "/sasha-sitar.jpg",
    alt: "Sasha with sitar",
    filename: "sasha-sitar.jpg",
  },
  {
    src: "/hero-image.jpg",
    alt: "Hero image of Sasha",
    filename: "hero-image.jpg",
  },
];

export function GallerySection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10">
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-semibold">Photos</h2>
        <a
          href="/api/download-all-sitar-epk-photos"
          className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"
        >
          <MdFileDownload className="text-2xl" />
          <span className="text-sm">Download All</span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {images.map((image) => (
          <a
            href={image.src}
            download={image.filename}
            key={image.src}
            className="group relative block h-40 w-40 overflow-hidden rounded border border-solid border-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
              <MdFileDownload className="text-3xl text-white" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
