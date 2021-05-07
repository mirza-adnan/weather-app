async function getData (location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;
  const initialResponse = await fetch(url, {mode: "cors"});
  const response = await initialResponse.json();
  return response;
}

export default getData;