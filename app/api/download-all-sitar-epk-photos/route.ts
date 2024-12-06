import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import AdmZip from "adm-zip";

export async function GET(req: NextRequest) {
  const images = [
    {
      path: path.join(process.cwd(), "public/sasha-instruments.jpg"),
      name: "sasha-instruments.jpg",
    },
    {
      path: path.join(process.cwd(), "public/sasha-sitar.jpg"),
      name: "sasha-sitar.jpg",
    },
    {
      path: path.join(process.cwd(), "public/hero-image.jpg"),
      name: "hero-image.jpg",
    },
  ];

  const zip = new AdmZip();

  for (const image of images) {
    const fileContent = fs.readFileSync(image.path);
    zip.addFile(image.name, fileContent);
  }

  const zipBuffer = zip.toBuffer();

  const headers = new Headers();
  headers.append("Content-Type", "application/zip");
  headers.append(
    "Content-Disposition",
    'attachment; filename="SashaBayanPhotos.zip"',
  );

  return new NextResponse(zipBuffer, { headers });
}
