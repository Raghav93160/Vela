import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSideBar = ({ selectedCategories, onCategoryChange, onClearAll }) => {
  const [open, setOpen] = useState({
    category: true,
    price: true,
    rating: true,
    brand: true,
  });

  const categories = [
    { id: "MakeUp", label: "MakeUp", count: 245 },
    { id: "Skin", label: "Skin", count: 189 },
    { id: "Hair", label: "Hair", count: 156 },
    { id: "Fragnance", label: "Fragnance", count: 98 },
    { id: "Tools", label: "Tools", count: 76 },
    { id: "Men", label: "Men", count: 134 },
    { id: "BathBody", label: "Bath & Body", count: 112 }
  ];

  const brands = [
    { id: "Loreal", label: "L'Oréal", count: 45 },
    { id: "Maybelline", label: "Maybelline", count: 38 },
    { id: "Mac", label: "MAC", count: 29 },
    { id: "Nyx", label: "NYX", count: 52 },
    { id: "EsteeLauder", label: "Estée Lauder", count: 23 }
  ];

  // Toggle dropdown
  const toggle = (name) => {
    setOpen({ ...open, [name]: !open[name] });
  };

  // Select All Category
  const handleSelectAll = () => {
    const allSelected = Object.values(selectedCategories).every(Boolean);
    const newState = {};
    categories.forEach((c) => (newState[c.id] = !allSelected));
    onCategoryChange(newState);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      
      {/* Header */}
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="text-lg font-bold">Filter Products</h2>
        <button onClick={onClearAll} className="text-sm text-purple-600 hover:underline">
          Clear All
        </button>
      </div>

      {/* CATEGORY SECTION */}
      <div className="border-b">
        <button
          onClick={() => toggle("category")}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        >
          <h3 className="font-semibold text-gray-900">Shop By Category</h3>
          {open.category ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.category && (
          <div className="px-4 pb-4">
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={Object.values(selectedCategories).every(Boolean)}
                  indeterminate={
                    Object.values(selectedCategories).some(Boolean) &&
                    !Object.values(selectedCategories).every(Boolean)
                  }
                  onChange={handleSelectAll}
                />
              }
              label="Select All"
            />

            <FormGroup className="max-h-60 overflow-y-auto pr-2">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={selectedCategories[cat.id] || false}
                        onChange={() =>
                          onCategoryChange({
                            ...selectedCategories,
                            [cat.id]: !selectedCategories[cat.id],
                          })
                        }
                      />
                    }
                    label={cat.label}
                  />
                  <span className="text-sm text-gray-500">({cat.count})</span>
                </div>
              ))}
            </FormGroup>
          </div>
        )}
      </div>

      {/* PRICE SECTION */}
      <div className="border-b">
        <button
          onClick={() => toggle("price")}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        >
          <h3 className="font-semibold text-gray-900">Filter By Price</h3>
          {open.price ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.price && (
          <div className="px-4 pb-4 space-y-4">
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 px-3 py-2 border rounded-lg text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <input type="range" min="0" max="50000" className="w-full" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹0</span>
              <span>₹50,000</span>
            </div>
          </div>
        )}
      </div>

      {/* RATING SECTION */}
      <div className="border-b">
        <button
          onClick={() => toggle("rating")}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        >
          <h3 className="font-semibold text-gray-900">Filter By Rating</h3>
          {open.rating ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.rating && (
          <div className="px-4 pb-4">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                      <span>& above</span>
                    </div>
                  }
                />
                <span className="text-sm text-gray-500">
                  ({stars === 5 ? 128 : stars === 4 ? 89 : stars === 3 ? 45 : stars === 2 ? 23 : 12})
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* BRAND SECTION */}
      <div className="border-b">
        <button
          onClick={() => toggle("brand")}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
        >
          <h3 className="font-semibold">Filter By Brand</h3>
          {open.brand ? <ChevronUp /> : <ChevronDown />}
        </button>

        {open.brand && (
          <div className="px-4 pb-4 max-h-40 overflow-y-auto pr-2">
            {brands.map((b) => (
              <div key={b.id} className="flex items-center justify-between py-1 px-2 hover:bg-gray-50 rounded">
                <FormControlLabel control={<Checkbox size="small" />} label={b.label} />
                <span className="text-sm text-gray-500">({b.count})</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply button */}
      <div className="p-4">
        <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
