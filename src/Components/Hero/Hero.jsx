import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { NewsCard } from './NewsCard';

export const Hero = () => {
  const [error, setError] = useState(false);
  const [newsArr, setNewsArr] = useState([]);
  const [refresh, setRefresh] = useState(false);

  async function getNews() {
    const apiKey = '';
    const apiUrl = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;

    //fetches data from url
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });

      //before accessing data, it checks if response is ok or not.
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Check if 'articles' exist in the response data
      if (data.articles && Array.isArray(data.articles)) {
        const newNewsArr = data.articles.slice(0, Math.min(20, Math.max(5, data.articles.length))).map((news, index) => (
          <NewsCard
            key={index}
            author={news.author}
            title={news.title}
            description={news.description}
            urlToNews={news.url}
            image={news.urlToImage}
            date={news.publishedAt}
            content={news.content}
          />
        ));
        setNewsArr(newNewsArr);
      } else {
        throw new Error('No articles found in response data');
      }
    } catch (error) {
      //sets error to true so that the 'Error fetching data. Try again later!!' gets displayed.
      setError(true);
      console.error('Error fetching data:', error);
    }
  }

  //is used the check when the 'Get news Headlines' button is clicked again so that new news data gets fetched.
  function handleRefresh() {
    setRefresh(!refresh);
  }

  //re-renders the page whenver the value of 'refresh' changes.
  useEffect(() => {
    if (refresh) {
      getNews();
    }
  }, [refresh]);

  //renders the list of all the news cards with the data that was fetched from the API.
  return (
    <section className='get-news'>
      {error && <h1>Error fetching Data. Try again later!!</h1>}
      <button className='get-news-btn' onClick={handleRefresh}>Get News Headlines!</button>
      <div className='news-container'>
        {newsArr}
      </div>
    </section>
  );
};
