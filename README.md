## Project này làm theo [tutorial của nextjs](https://nextjs.org/learn/basics/create-nextjs-app)
## Run
  npm run dev

### NOTE tìm hiểu
- Function hook module k dc viết arrow function
- Server của nextjs có tính năng Fast Refresh: Reload lại component của react
    + Code và sẽ tự động browser cập nhật lại.
- Routing 
    + Một file được thêm vào folder 'pages' thì hiểu là một route
    + index.js mặc định là route đầu
    + Có thể tạo thêm folder lồng trong folder page, nó vẫn tự động hiểu.
    + Component tên là Link có href để chuyển các pages mà không cần browser không cần load lại (khác với tag  `<a>`)  mặc định nếu href="/" thì sẽ route tới index.js
         + Mỗi trang trong  nextjs load độc lập, nên nếu một page bị lỗi, các page khác vẫn hoạt động. 
         + Component 'Link' cho phép browser load trước page đó dưới background, lúc click vào thì nó gần như bật lên ngay lập tức (cơ chế prefetching)
         + Nhưng nếu muốn thêm className cho Link thì không được, phải bỏ vào thẻ `<a>` ở trong `<Link>`
    +{' '} Thêm kí tự khoảng trắng.
- public
    + các Asset như image, đặt trong folder public, "/" là đường dẫn tự động nếu muốn thêm một image, tương tự như folder page
    + <Image /> phải có width và height (hoặc layout="fill"), src mặc định phải là"/image" (từ bất kì đâu)tự động dẫn vào thư mục image trong folder public
- component <Head> dùng để thay modify head của page
- library styled-jsx hỗ trợ viết CSS như một react component
    + Lưu ý để sử dụng CSS module, phải đặt tên file có đuôi là .module.css
    + điểm hay là className của css module sẽ tự genarate ra khác nhau nên không thể bị trùng tên className
- Globall CSS chỉ được thêm vào trong file pages/_app.js, sẽ affect lên tất cả các site
- module className - đọc document ở đây:  [classNames in Nextjs](https://github.com/JedWatson/classnames)
- thư viện PostCSS 
- nextjs hỗ trợ import file Sass qua thư viện npm i sass
- Cơ chế pre-rendering của nextjs: một app react truyền thống (không có nextjs) sẽ bắt buộc phải bật JS để load page(nếu tắt JS thì không hiển thị luôn)
    + thay vì đợi JS load xong, client mới thấy nội dung page, thì cơ chế này sẽ load hết html trước, sau đó JS load sau sẽ làm cho page đó
    tương tác được => client sẽ nhìn thấy content của trang trước(kể cả CSS), rồi sau đó tương tác sau
    + Có hai hình thức của Pre-rendering:
		    >>>Static Generation: pre-render html ở thời điểm build app, sau đó sử dụng lại ở mỗi request (recommend cái này hơn)
            >>>Server-side Rendering: Ở mỗi request gửi lên thì generate lại html
    + Có thể cài hình thức nào cho page riêng nhau cũng được, đối với page cần upadate data liên tục thì dùng hình thức 2.
    + Nếu page cần external data (api, read db,...) mà vẫn sử dụng static genaration thì phải tạo một fucntion là getStaticProps 
     , func này sẽ bào cho nextjs biết"Có phụ thuộc một số data, hãy đảm bảo load tao khi build app".
- Thư viện npm gray-matter giúp parse dữ liệu trong markdownfile (file viết theo kiểu Yaml)
- Khi dùng Serverside-Rendering thì tạo một func là getServerSideProps 
- Có thể sử dụng ClientSide-Rendering cũng được(tức là server vẫn load html trước => gửi client, sau đó code JS(ex: ajax) trên client sẽ fetch data ngoài sau), tuỳ theo tình huống(ví dụ trang admin page)
    + Và một nhóm nextjs đã tạo một react hook cho việc fetch data là SWR(fetching ở client-side)
    , document của nó ở đây: [swr.vercel.app](https://swr.vercel.app/)
- Dynamic Routes:
    + Để tạo dynamic route trong next thì. Tạo file [id].js (bắt buộc phải có ngoặc vuông).
    + Trong file [id].js phải chứa: >Một react component render cái page này.
				    >getStaticPaths trả về chuỗi giá trị paths cho cái id.
				    >getStaticProps fetch dữ liệu cần thiết cho từng page đó theo id.
- Để render nội dung MarkDown file thì dùng thư viện npm remark 
- Để format date dùng thư viện npm date-fns
