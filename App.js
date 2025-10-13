

/* 
 Header
  - Logo
  - Nav Items
  
 Body
  - Search
  - Restaurant Container
  - Restaurant Card

  Footer
  - Links
  - Address 
  - Contact 
  - CopyRight
*/

import Body from "./components/main/Body"
import Footer from "./components/main/Footer"
import Header from "./components/main/Header";


export default function AppLayout() {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}