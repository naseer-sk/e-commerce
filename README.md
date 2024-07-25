In this project, let's build a **Nxt Trendz - Cart Features** by applying the concepts we have learned till now.

### Refer to the video below:

<br/>
<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionalities</summary>
<br/>

The app has the following functionalities
When an unauthenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the Login Route using the protected route
When an authenticated user tries to access the Home Route, Products Route or Cart Route, then the page should be navigated to the respective route using the protected route

- When an authenticated user opens the Products Route,

  - An HTTP GET request should be made to **productsApiUrl** with `jwt_token` in the Cookies and query parameters `title_search`, `category`, and `rating` with initial values as **empty strings**
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
    - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-failure-view.png) should be displayed
  - When a non-empty value is provided in the Search Input and the **Enter** button is clicked
    - Make an HTTP GET request to the **productsApiUrl** with `jwt_token` in the Cookies and query parameter `title_search` with value as the text provided in the Search Input
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When a **Category** is clicked
    - Make an HTTP GET request to the URL **productsApiUrl** with `jwt_token` in the Cookies and query parameter `category` with value as the id of the category clicked
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When a **Rating** is clicked
    - Make an HTTP GET request to the URL **productsApiUrl** with `jwt_token` in the Cookies and query parameter `rating` with value as the id of the rating clicked
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When the **Clear Filters** button is clicked
    - All the filters applied should be reset to initial values
    - Make an HTTP GET request to the URL **productsApiUrl** with`jwt_token` in the Cookies and without any filters
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When multiple filters are applied, then the HTTP GET request should be made with all the filters that are applied

  - For example: When the **Electronics** Category is clicked and rating **4 and above** is clicked the **productsApiUrl** will be as follows

  ```js
  const apiUrl = 'https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=2&title_search=&rating=4'
  ```

  - If the HTTP GET request returns empty products list, then [No Products View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-no-products-output.png) should be displayed.
  - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-failure-view.png) should be displayed

  - The `AllProductsSection` component will consist `categoryOptions`. It consists of a list of category option objects with the following properties in each category option object

  |    Key     | Data Type |
  | :--------: | :-------: |
  | categoryId |  String   |
  |    name    |  String   |

  - The `AllProductsSection` component will consist `ratingOption`. It consists of a list of category rating option objects with the following properties in each rating option object

  |   Key    | Data Type |
  | :------: | :-------: |
  | ratingId |  String   |
  | imageUrl |  String   |
- When an unauthenticated user tries to access the **Cart** Route, then the page should be navigated to **Login** Route

  
- When an unauthenticated user, tries to access the Product Item Details Route, then the page should be navigated to Login Route
- When an authenticated user clicks on a product in the Products Route, then the page should be navigated to Product Item Details route
- When an authenticated user opens the Product Item Details Route,
  - An HTTP GET request should be made to **productDetailsApiUrl** with `jwt_token` in the Cookies and product `id` as path parameter
  - **_loader_** should be displayed while fetching the data
  - After the data is fetched successfully, display the product details and similar products received in the response
  - Initially, the quantity of the product should be `1`
  - The quantity of the product should be incremented by one when the plus icon is clicked
  - The quantity of the product should be decremented by one when the minus icon is clicked
  - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png) should be displayed
    - When the **Continue Shopping** button in the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-error-lg-output.png) is clicked, then the page should be navigated to Products Route


- Following are the features 

  - Feature 1

    - When an authenticated user tries to add the same product multiple times
      - The quantity of the product should be updated accordingly, and the count of the cart items in the header should be remained same

  - Feature 2

    - The total amount and number of items in the cart should be displayed in the **Cart** Route

  - Feature 3

    - In each cart item in the cart
      - When the plus icon is clicked, then the quantity of the product should be incremented by one
      - When the minus icon is clicked, then the quantity of the product should be decremented by one
      - When the quantity of the product is one and the minus icon is clicked, then the respective product should be removed from the cart
      - Based on the quantity of the product, the product price and the Cart Summary, i.e the total cost should be updated accordingly

  - Feature 4

    - When an authenticated user clicks on the remove button, cart item should be removed from the cart list

  - Feature 5

    - When an authenticated user clicks on the **Remove All** button, all the cart items should be removed from the cart and [Empty Cart View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-empty-cart-view.png) should be displayed

</details>


<details>

<summary>API Requests & Responses</summary>
<br/>

**productsApiUrl**

#### API: `https://apis.ccbp.in/products`

#### Example: `https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=4&title_search=machine&rating=4`

#### Method: `GET`

#### Description:

Returns a response containing the list of Products

#### Success Response

```json
{
  "products": [
    {
      "title": "Front Load Machine",
      "brand": "Samsung",
      "price": 22490,
      "id": 24,
      "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
      "rating": 4.5,
    },
      ....
  ]
}
```
**productDetailsApiUrl**

#### API: `https://apis.ccbp.in/products/:id`

#### Example: `http://localhost:3000/products/16`

#### Method: `GET`

#### Description:

Returns a response containing the Product details

#### Sample Success Response

```json
{
  "id":16,
  "image_url":"https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
  "title":"Embroidered Net Gown","price":62990,"description":"An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony. It enhances your beauty wearing this vibrant, gorgeous, and beautiful Wedding Gown. Find your dream wedding dress today. It features foldable, one hoop steel, two layers of tulles, and is elastic in the waist part. ",
  "brand":"Manyavar",
  "total_reviews":879,
  "rating":3,
  "availability":"In Stock",
  "similar_products":[
    {
      "id":1,
      "image_url":"https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
      "title":"Wide Bowknot Hat",
      "style":"Wide Bowknot Hat for Women and Girls (Multicolor)",
      "price":288,
      "description":"This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
      "brand":"MAJIK",
      "total_reviews":245,
      "rating":3.6,
      "availability":"In Stock"
    },
      ...
  ]
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Product Not Found"
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-component-structure-breakdown.png" alt="component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Cart/index.js`
- `src/components/Cart/index.css`
- `src/components/CartItem/index.js`
- `src/components/CartItem/index.css`
- `src/components/CartSummary/index.js`
- `src/components/CartSummary/index.css`
- `src/components/AllProductsSection/index.js`
- `src/components/AllProductsSection/index.css`
- `src/components/FiltersGroup/index.js`
- `src/components/FiltersGroup/index.css`
- `src/components/ProductCard/index.js`
- `src/components/ProductCard/index.css`
- `src/components/ProductItemDetails/index.js`
- `src/components/ProductItemDetails/index.css`
- `src/components/SimilarProductItem/index.js`
- `src/components/SimilarProductItem/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- The `line-height` CSS property sets the height of a line box. It's commonly used to set the distance between lines of text

  ```
  line-height: 1.5;
  ```

    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/line-height-img.png" alt="line height" style="width:90%; max-width: 600px;"/>

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

**The following instructions are required for the tests to pass**

- `Home` Route should consist of `/` in the URL path
- `Login` Route should consist of `/login` in the URL path
- `Products` Route should consist of `/products` in the URL path
- `Cart` Route should consist of `/cart` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`
- `BsPlusSquare`, `BsDashSquare` icons from `react-icons` should be used for **plus** and **minus** buttons in cart item
- The Cart Item should consist of two HTML button elements with data-testid attribute values as **plus** and **minus** respectively
- `AiFillCloseCircle` icon from react-icons should be used for **remove** button in cartItem
- The Cart Item should consist of an HTML button element with data-testid attribute values as **remove**
- The product image in **Cart Item** Route should have the alt as `title` of the product

- Prime User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

- Non-Prime User credentials

  ```text
   username: raja
   password: raja@2021
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>


</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
