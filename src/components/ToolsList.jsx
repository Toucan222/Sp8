import React, { useState, useMemo } from "react";
import tools from "../tools";
import CategoryTabs from "./CategoryTabs";
import CoolCard from "../tools/CoolCard";

function ToolsList() {
  const allCategories = useMemo(() => {
    const categoriesSet = new Set(tools.map((t) => t.category));
    return ["All", ...Array.from(categoriesSet)];
  }, []);

  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = useMemo(() => {
    let filtered = currentCategory === "All" 
      ? tools 
      : tools.filter((tool) => tool.category === currentCategory);
    
    if (searchQuery) {
      filtered = filtered.filter((tool) =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [currentCategory, searchQuery]);

  return (
    <div className="tools-container">
      <CategoryTabs
        categories={allCategories}
        currentCategory={currentCategory}
        onCategoryChange={setCurrentCategory}
      />

      <div className="tools-grid">
        {filteredTools.map((tool) => (
          <CoolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            onAction={() => {}} // Add your action handler
          />
        ))}
      </div>
    </div>
  );
}

export default ToolsList;
