const produtc = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  
  const filters = document.querySelectorAll('.filter');
  filters.forEach((filter) => {
    filter.addEventListener('click', activeFilter);
  });
  
  // All different kinds of data from API
  let mensClothes;
  let jewellery;
  let womensClothing;
  let electronics;
  let products;
  
  function activeFilter(event) {
    filters.forEach((filter) => {
      if(event.target == filter){
        filter.classList.add('active');
      } else {
        filter.classList.remove('active');
      }
    })
  }
  
  fetchProductsData('https://fakestoreapi.com/products');
  async function fetchProductsData(url) {
    try {
      const res = await fetch(url);
      console.log(res);
      products = await res.json();
      console.log(products);
  
      // mens products
      mensClothes = products.filter((item) => item.category == `men's clothing`);
  
      // jewellery products
      jewellery = products.filter((item) => item.category == `jewelery`);
      
      // womens products
      womensClothing = products.filter((item) => item.category == `women's clothing`);
  
      // electronics products
      electronics = products.filter((item) => item.category == `electronics`);
    } catch (error) {
      console.log(error);
    }
  }
  
  console.log(products);