export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="🔍 Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full font-semibold p-3 border border-[#4F959D] rounded-xl shadow-sm focus:border-[#205781] focus:ring-2 focus:ring-[#4F959D] focus:outline-none text-[#205781] placeholder:text-[#A0AEC0] transition duration-300 mt-4"
/>
    );
  }
  