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
