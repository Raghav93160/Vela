import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='relative w-full h-[50px] bg-[#e5e5e5] rounded-[5px] flex items-center'>
      <input 
        type="text" 
        placeholder='Search for products' 
        className="w-full h-full bg-transparent pl-4 pr-12 outline-none border-none placeholder:text-gray-600"
      />

      {/* Search Button */}
      <Button 
        variant="text"
        sx={{
          minWidth: "40px",
          position: "absolute",
          right: "5px",
          color: "#444",
        }}
      >
        <CiSearch size={24} />
      </Button>
    </div>
  );
}

export default Search;
