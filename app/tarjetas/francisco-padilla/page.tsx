"use client";

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FiShare2, FiTrash2 } from "react-icons/fi";
import { BsQrCode } from "react-icons/bs";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FiDownload } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function ArqFranciscoPadilla() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");

    const navPrevDisplay = nav ? nav.style.display : undefined;
    const footerPrevDisplay = footer ? footer.style.display : undefined;
    const mainPrevPadding = main ? main.style.paddingTop : undefined;

    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";
    if (main) main.style.paddingTop = "0";

    return () => {
      if (nav) nav.style.display = navPrevDisplay ?? "";
      if (footer) footer.style.display = footerPrevDisplay ?? "";
      if (main) main.style.paddingTop = mainPrevPadding ?? "";
    };
  }, []);

  const tieneFoto = false;

  const [qrOpen, setQrOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);
  const shareUrl = "https://nuvowin.com/tarjetas/julia-sanabria";
  const qrData = encodeURIComponent(shareUrl);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${qrData}`;

  const downloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Arq. Francisco Padilla",
      "ORG:NUVOWIN",
      "TITLE:Soporte Técnico Comercial",
      "TEL;TYPE=WORK,VOICE:+573183439252",
      "EMAIL;TYPE=WORK:contacto@nuvowin.com",
      "URL:https://nuvowin.com/tarjetas/arq-francisco-padilla",
      "ADR;TYPE=WORK:;;CR 38 #110 - 63 OF 1;Barranquilla;;Colombia",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "arq-francisco-padilla.vcf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    setDownloadMsg("Descarga iniciada");
    setTimeout(() => setDownloadMsg(null), 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 py-12">
      <div className="w-full max-w-sm px-4">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow px-3 py-1 flex items-center gap-3 z-20">
            <button
              onClick={() => setQrOpen(true)}
              className="flex items-center gap-2  px-3 py-2 rounded-md text-xs text-gray-700 hover:bg-blue-50 transition"
            >
              <BsQrCode size={20} />
            </button>
            <button
              onClick={() => setShareOpen(true)}
              className="flex items-center gap-2  px-3 py-2 rounded-md text-xs text-gray-700 hover:bg-blue-50 transition"
            >
              <FiShare2 size={20} />
            </button>
            <button
              onClick={downloadVCard}
              className="flex items-center gap-2  px-3 py-2 rounded-md text-xs text-gray-700 hover:bg-red-50 transition"
            >
              <FiDownload size={20} />
            </button>
          </div>

          {downloadMsg && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 z-30">
              <div className="bg-black text-white text-sm px-3 py-1 rounded">
                {downloadMsg}
              </div>
            </div>
          )}

          <div className="relative h-36">
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-r from-blue-600 to-blue-400" />
            <div className="absolute left-1/2 -bottom-14 -translate-x-1/2 w-[140px] h-[140px] rounded-full -z-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-400 via-blue-300 to-transparent opacity-60 filter blur-2xl" />
            </div>

            <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[110px] h-[110px] rounded-full border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center overflow-hidden z-10">
              <Image src="/francisco.jpeg" alt="Francisco" width={120} height={120}/>
            </div>
          </div>

          <div className="pt-16 pb-6 px-6 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Arq. Francisco Padilla
            </h2>
            <p className="text-sm text-gray-500 mb-4">Soporte Técnico Comercial</p>

            <div className="space-y-3 text-left">
              <a
                href="https://wa.me/573183439252"
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border hover:bg-green-50 transition"
              >
                <FaWhatsapp className="text-gray-700 text-xl" />
                <span className="text-sm text-gray-700">+57 318 343 9252</span>
              </a>

              <a
                href="mailto:gerencia@nuvowin.com"
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border hover:bg-blue-50 transition"
              >
                <FaEnvelope className="text-gray-700 text-xl" />
                <span className="text-sm text-gray-700">
                  contacto@nuvowin.com
                </span>
              </a>

              <a
                href="https://www.nuvowin.com"
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border hover:bg-blue-50 transition"
              >
                <FaGlobe className="text-gray-700 text-xl" />
                <span className="text-sm text-gray-700">www.nuvowin.com</span>
              </a>

              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border">
                <FaMapMarkerAlt className="text-gray-700 text-xl" />
                <span className="text-sm text-gray-700">
                  CR 38 #110 - 63 OF 1, Barranquilla
                </span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/ingeglass/?hl=es-la"
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center text-gray-700 shadow-sm"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/p/Ingeglass-Templados-SAS-100086467363113/?locale=es_LA"
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center text-gray-700 shadow-sm"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white border flex items-center justify-center text-gray-700 shadow-sm"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <QRModal open={qrOpen} onClose={() => setQrOpen(false)} qrUrl={qrUrl} />
      <ShareModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        shareUrl={shareUrl}
      />
    </main>
  );
}

function QRModal({
  open,
  onClose,
  qrUrl,
}: {
  open: boolean;
  onClose: () => void;
  qrUrl: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 w-[320px] flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4">
          QR - Tarjeta Arq. Francisco Padilla
        </h3>
        <img
          src={qrUrl}
          alt="QR Arq. Francisco Padilla"
          className="w-64 h-64 object-contain mb-4"
        />
        <div className="flex gap-3">
          <a
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
            href={qrUrl}
            download="vitalio-salgado-qr.png"
          >
            Descargar
          </a>
          <button className="px-4 py-2 rounded border" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

function ShareModal({
  open,
  onClose,
  shareUrl,
}: {
  open: boolean;
  onClose: () => void;
  shareUrl: string;
}) {
  if (!open) return null;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(
    shareUrl
  )}`;
  const [msg, setMsg] = useState<string | null>(null);
  const showMsg = (m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(null), 2200);
  };

  const onNativeShare = async () => {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: "Tarjeta Arq. Francisco Padilla",
          text: "Mira la tarjeta de contacto",
          url: shareUrl,
        });
        onClose();
      } catch (e) {
        // ignore
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        showMsg("Enlace copiado");
      } catch (e) {
        showMsg("No se pudo copiar");
      }
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      showMsg("Enlace copiado");
    } catch (e) {
      showMsg("No se pudo copiar");
    }
  };

  const onWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      "Mira esta tarjeta: " + shareUrl
    )}`;
    window.open(url, "_blank");
  };

  const onMail = (provider: "gmail" | "outlook") => {
    const subject = encodeURIComponent("Tarjeta de contacto - Arq. Francisco Padilla");
    const body = encodeURIComponent(`Te comparto esta tarjeta: ${shareUrl}`);
    if (provider === "gmail") {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`,
        "_blank"
      );
    } else {
      window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
    }
  };

  const onSocial = (network: "facebook" | "twitter" | "linkedin") => {
    const u = encodeURIComponent(shareUrl);
    if (network === "facebook")
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${u}`,
        "_blank"
      );
    if (network === "twitter")
      window.open(`https://twitter.com/intent/tweet?url=${u}`, "_blank");
    if (network === "linkedin")
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${u}`,
        "_blank"
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-4 w-[420px] max-w-[95%]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Compartir</h3>
          <button onClick={onClose} className="text-gray-600">
            <IoClose size={20}/>
          </button>
        </div>

        <div className="mt-3 flex items-center gap-3 bg-gray-50 p-3 rounded">
          <div className="flex-1 text-sm text-gray-800 truncate">
            {shareUrl}
          </div>
          <button
            onClick={() => window.open(shareUrl, "_blank")}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            Abrir
          </button>
          <button
            onClick={onCopy}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            Copiar
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <button
            onClick={onWhatsApp}
            className="flex flex-col items-center gap-1 p-2  rounded border"
          >
            <FaWhatsapp className="text-gray-700 text-2xl" />
            <span className="text-xs">WhatsApp</span>
          </button>
          <button
            onClick={() => onMail("outlook")}
            className="flex flex-col items-center gap-1 p-2  rounded border"
          >
            <FaEnvelope className="text-gray-700 text-2xl" />
            <span className="text-xs">Email</span>
          </button>
          <button
            onClick={() => onMail("gmail")}
            className="flex flex-col items-center gap-1 p-2  rounded border"
          >
            <SiGmail className="text-gray-700 text-2xl" />
            <span className="text-xs">Gmail</span>
          </button>

          <button
            onClick={() => onSocial("facebook")}
            className="flex flex-col items-center gap-1 p-2  rounded border"
          >
            <FaFacebook className="text-gray-700 text-2xl" />
            <span className="text-xs">Facebook</span>
          </button>
          <button
            onClick={() => onSocial("twitter")}
            className="flex flex-col items-center gap-1 p-2  rounded border"
          >
            <BsTwitterX className="text-gray-700 text-2xl" />
            <span className="text-xs">Twitter</span>
          </button>
          <button
            onClick={() => onSocial("linkedin")}
            className="flex flex-col items-center gap-1 p-2 rounded border"
          >
            <FaLinkedin className="text-gray-700 text-2xl" />
            <span className="text-xs">LinkedIn</span>
          </button>
        </div>

        <div className="mt-4">
          <button
            onClick={onNativeShare}
            className="w-full bg-slate-800 text-white px-4 py-2 rounded"
          >
            Usar compartir del dispositivo
          </button>
        </div>
        {msg && (
          <div className="mt-3 flex justify-center">
            <div className="bg-black text-white text-sm px-3 py-1 rounded">
              {msg}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
