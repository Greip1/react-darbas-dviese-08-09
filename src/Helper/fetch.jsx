const baseUrl = 'https://glittery-dull-snickerdoodle.glitch.me/v1';

export async function getFetch(endpoint, setFunction) {
  const res = await fetch(`${baseUrl}/${endpoint}/`);
  const dataInJs = await res.json();
  console.table('fetch arr', dataInJs);
  setFunction(dataInJs);
}
