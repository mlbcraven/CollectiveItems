export async function SearchChars(char: string) {
  const url = `https://superhero-search.p.rapidapi.com/api/?hero=${char}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d20799cb1msh6dc588250caa9a5p1cf106jsn27f63a79fdf2",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = response;
    return result.json();
  } catch (error) {
    console.error(error);
  }
}

export async function Villains() {
  const url = "https://superhero-search.p.rapidapi.com/api/villains";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d20799cb1msh6dc588250caa9a5p1cf106jsn27f63a79fdf2",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = response;
    return result.json();
  } catch (error) {
    console.error(error);
  }
}

export async function Heroes() {
  const url = "https://superhero-search.p.rapidapi.com/api/heroes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8d20799cb1msh6dc588250caa9a5p1cf106jsn27f63a79fdf2",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = response;
    return result.json();
  } catch (error) {
    console.error(error);
  }
}
