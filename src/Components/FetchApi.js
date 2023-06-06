import React, { useEffect, useState } from "react";
import Newsfeed from "./Newsfeed";

const FetchApi = (props) => {
  const apiKey = "791657c2fa104527bb568055842e7e6a";
  const [news, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}`
      );
      const jsonData = await response.json();
      setData(jsonData.articles);
      // console.log(jsonData)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [apiKey]);

  return (
    <div className="container mb-3">
      <div className="container">
        <div className="row">
          {news?.map((article) => {
            return (
              <div className="col-md-4 my-2" key={article.url}>
                <Newsfeed
                  title={article.title ? article.title : ""}
                  author={article.author ? article.author : "Prashant"}
                  disc={
                    article.description ? article.description.slice(0, 95) : ""
                  }
                  iurl={article.urlToImage}
                  nurl={article.url}
                  time={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FetchApi;
