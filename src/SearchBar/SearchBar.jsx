
import { useState } from "react";
import toast from "react-hot-toast";


const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.trim()) {
            toast.error("enter term");
            return;
        }
        onSubmit(query);
        setQuery("");
    }

    return (
        <header className="container" style={{ margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <input value={query} type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" >Search</button>
            </form>
        </header>

    )
}

export default SearchBar;