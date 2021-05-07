const url = "https://api.openweathermap.org/data/2.5/weather?q=canada&appid=34fbec596ce6ee0a4ef569154cebd76e&units=metric";
fetch(url, {mode: "cors"})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
  });

