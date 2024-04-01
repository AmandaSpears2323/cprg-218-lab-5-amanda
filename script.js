async function fetchcurrenttechnologynews() {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=fb9aec6e19dc442e919b34d83f793701'
      );
      const data = await response.json();
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }

  fetchcurrenttechnologynews().then((results) => console.log(results));