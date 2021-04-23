import '../styles/global.css'

export default function App({Component, pageProps}){
    return <Component {...pageProps}/>
}
// file này sẽ làm globalCSS của trang chính(là index.js) 
// được affect lên tất cả các page khác
// component App như kiểu là component chung sẽ ảnh hưởng đến tất cả các trang


