document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const filterCategory = document.getElementById("filter-category");
    const itemList = document.getElementById("item-list");
    const items = itemList.getElementsByTagName("li");
  
    function filterItems() {
      const searchQuery = searchBox.value.toLowerCase();
      const selectedCategory = filterCategory.value;
  
      Array.from(items).forEach((item) => {
        const itemText = item.textContent.toLowerCase();
        const itemCategory = item.getAttribute("data-category");
  
        const matchesSearch = itemText.includes(searchQuery);
        const matchesCategory =
          selectedCategory === "all" || itemCategory === selectedCategory;
  
        if (matchesSearch && matchesCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }
  
    searchBox.addEventListener("input", filterItems);
    filterCategory.addEventListener("change", filterItems);
  
    filterItems(); // 初次加载时调用
  });
  