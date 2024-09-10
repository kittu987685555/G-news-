import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Gnew = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us"); // Default to United States
  const [language, setLanguage] = useState("en"); // Default to English
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:3540/news", {
        params: {
          search,
          category,
          page,
          max: 10, // Assuming 10 results per page
          country,
          lang: language, // Language filter
        },
      });
      console.log(response);
      setNews(response.data.articles);
      setTotalPages(Math.ceil(response.data.totalArticles / 10));
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [search, category, country, language, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page on new search
    fetchNews();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1); // Reset to first page on category change
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setPage(1); // Reset to first page on country change
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setPage(1); // Reset to first page on language change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container mt-4">
      <h1>News App</h1>

      <form className="d-flex mb-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Category Dropdown */}
      <div className="mb-3">
        <select
          className="form-select"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      {/* Country and Language Dropdowns */}
      <div className="row mb-3">
        <div className="col-md-6">
          <select
            className="form-select"
            value={country}
            onChange={handleCountryChange}
          >
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="in">India</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="pk">Pakistan</option>
            <option value="pe">Peru</option>
            <option value="ph">Philippines</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russian Federation</option>
            <option value="sg">Singapore</option>
            <option value="es">Spain</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </div>

        <div className="col-md-6">
          <select
            className="form-select"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="uk">Ukrainian</option>
          </select>
        </div>
      </div>

      {/* News Articles in Cards */}
      <div className="row">
        {news.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={article.image}
                className="card-img-top"
                alt={article.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">
                  {article.description ? article.description.slice(0, 100) + "..." : "No description available."}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gnew;
