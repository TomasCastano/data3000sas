/**
 * Utilidades centrales de la empresa.
 * Fecha de fundación: septiembre de 1998.
 */

export const FOUNDING_YEAR = 1998;
/** Mes de fundación (0-indexed, como Date.getMonth()): 8 = septiembre */
export const FOUNDING_MONTH = 8;
/** Día de fundación (se asume día 1 al no tener día exacto) */
export const FOUNDING_DAY = 1;

/**
 * Calcula los años completos transcurridos desde septiembre de 1998
 * hasta la fecha de referencia (por defecto, hoy).
 * Tiene en cuenta si aún no se ha cumplido el aniversario en el año actual.
 */
export function getYearsOfExperience(referenceDate: Date = new Date()): number {
  let years = referenceDate.getFullYear() - FOUNDING_YEAR;
  const monthDiff = referenceDate.getMonth() - FOUNDING_MONTH;

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && referenceDate.getDate() < FOUNDING_DAY)
  ) {
    years--;
  }

  return years;
}

/** Año actual (para copyright, etc.) */
export function getCurrentYear(referenceDate: Date = new Date()): number {
  return referenceDate.getFullYear();
}

const NUMEROS_ES: Record<number, string> = {
  0: "cero",
  1: "una",
  2: "dos",
  3: "tres",
  4: "cuatro",
  5: "cinco",
  6: "seis",
  7: "siete",
  8: "ocho",
  9: "nueve",
  10: "diez",
};

/** Convierte un número pequeño a su palabra en español (fallback al número si > 10) */
export function numberToSpanishWord(n: number): string {
  return NUMEROS_ES[n] ?? String(n);
}

/**
 * Décadas completas de experiencia (ej. 28 años -> 2).
 * Útil para textos como "Más de dos décadas".
 */
export function getDecadesOfExperience(referenceDate: Date = new Date()): number {
  return Math.floor(getYearsOfExperience(referenceDate) / 10);
}

/**
 * Palabra en español para las décadas de experiencia ("dos", "tres", "cuatro"...).
 * 28 años -> "dos", 30 años -> "tres", 40 años -> "cuatro".
 */
export function getDecadesWord(referenceDate: Date = new Date()): string {
  return numberToSpanishWord(getDecadesOfExperience(referenceDate));
}

/* ------------------------------------------------------------------ */
/* Datos canónicos de contacto y SEO (única fuente de verdad)          */
/* ------------------------------------------------------------------ */

export const SITE_URL = "https://data3000.co";

export const CONTACT = {
  whatsapp1Display: "+57 320 695 3978",
  whatsapp1Link: "https://wa.me/573206953978?text=Hola!%20Quiero%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios",
  whatsapp2Display: "+57 320 695 3977",
  whatsapp2Link: "https://wa.me/573206953977?text=Hola!%20Quiero%20solicitar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios",
  phoneDisplay: "(606) 891 85 76",
  phoneHref: "tel:+576068918576",
  addressStreet: "Cra 32 Nº 103A-03, Barrio La Enea",
  addressLocality: "Manizales",
  addressRegion: "Caldas",
  addressCountry: "CO",
  email: "data3000sas@gmail.com",
} as const;

export const SERVICE_AREA_CITIES = [
  "Bogotá",
  "Medellín",
  "Cali",
  "Barranquilla",
  "Pereira",
  "Armenia",
  "Bucaramanga",
  "Cartagena",
] as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "¿Qué es la gestión documental y por qué la necesita mi empresa en Colombia?",
    answer:
      "La gestión documental es el conjunto de procesos para organizar, clasificar, digitalizar, custodiar y consultar los archivos físicos y digitales de una empresa. En Data 3000 S.A.S, con sede en Manizales y servicio en toda Colombia, ayudamos a las empresas a cumplir la normativa de archivo, reducir costos de almacenamiento y encontrar cualquier documento en segundos.",
  },
  {
    question: "¿Qué servicios ofrece Data 3000 S.A.S como empresa de archivo en Colombia?",
    answer:
      "Ofrecemos diagnóstico documental, organización de archivos, digitalización de documentos, almacenamiento y custodia de archivos físicos y digitales, además de implementación de Alfresco para la gestión documental electrónica. Atendemos empresas en Manizales, el Eje Cafetero y toda Colombia.",
  },
  {
    question: "¿Cómo funciona la digitalización de documentos con Data 3000 S.A.S?",
    answer:
      "Recogemos, preparamos, escaneamos con estándares de calidad, indexamos con metadatos y entregamos los archivos digitales organizados para consulta rápida, con opción de custodia física posterior. Más de 28 años de experiencia respaldan nuestros procesos de digitalización en Colombia.",
  },
  {
    question: "¿Ofrecen almacenamiento y custodia de archivos a nivel nacional?",
    answer:
      "Sí. Custodiamos archivos físicos en instalaciones seguras con control de acceso, inventario y tiempos de respuesta para consulta y desarchivo. Nuestra sede está en Manizales, Caldas, y prestamos servicio de almacenamiento y custodia a empresas en toda Colombia.",
  },
  {
    question: "¿Trabajan con empresas fuera de Manizales?",
    answer:
      "Sí. Nuestra sede está en Manizales, Caldas, pero atendemos empresas en Bogotá, Medellín, Cali, Barranquilla, Pereira, Armenia y el resto de Colombia con logística de recolección, digitalización y consulta remota.",
  },
  {
    question: "¿Cómo empiezo un proyecto de organización de archivos con Data 3000 S.A.S?",
    answer:
      "Escríbenos por WhatsApp al +57 320 695 3978 o +57 320 695 3977, o llámanos al (606) 891 85 76. Hacemos un diagnóstico de tu archivo, te proponemos un plan de organización, digitalización o custodia y ejecutamos con cronograma y garantías de seguridad.",
  },
];
