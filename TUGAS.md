# E-COMMERCE APP

- Designlah app sederhana menggunakan react component

Buatlah:

- Buatlah Navbar Component dimana terdapat menu: Home, Product, Cart
- Halaman Home menampilkan deskripsi App kalian (router: '/')
- Halaman product menampilkan semua product yang ada (router: '/products')
- Halaman Cart memunculkan product yang di "beli" dan memunculkan total dari product yang ada di dalam cart! (router: '/cart')

Requirement:

- Implementasikan React Router

- Pada component product terdapat tombol "beli" dimana tombol beli ini hanya muncul ketika stock lebih besar dari 0

- Tampilkan price dengan format IDR (**HINT: keyword bisa dicari dengan "number to currency format in js"**) 

- Gunakanlah salah satu UI Framework untuk melakukan styling pada e-commerce app


# DOKUMENTASI SERVER
- URL:
    - http_method: GET
    - `http://movie-app-g2.herokuapp.com/products`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "product": "...",
        "desc": "...",
        "image": "...",
        "stock": "...",
        "price": "..."
      }
    ```