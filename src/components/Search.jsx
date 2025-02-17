import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();

    const searchHandler = () => {
        if (keyword.trim()) {
            navigate('/search?keyword='+keyword);
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                id="search_field"
                value={keyword} // Controlled input
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && searchHandler()} // Search on Enter key
                className="form-control"
                placeholder="Enter Product Name ..."
            />
            <div className="input-group-append">
                <button onClick={searchHandler} id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}