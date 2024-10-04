export function getPercentLocaleString(percent: number) {
  return percent.toLocaleString('pt-BR', {
    style: 'percent',
  });
}
