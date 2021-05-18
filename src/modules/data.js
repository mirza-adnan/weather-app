async function getData (location) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric`;
    const initialResponse = await fetch(url, {mode: "cors"});
    const response = await initialResponse.json();
    return response;
  } catch(error) {
    alert("Unable to find specified city");
  }
  
}

export default getData;