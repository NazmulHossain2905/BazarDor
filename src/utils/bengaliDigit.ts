export default function bengaliDigit(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return value.toLocaleString("bn-BD", options);
}
