// ================================================ Picture Tag ================================================== //
//  ChatGPT Se liya hua Syntax ---> TML me <picture> tag ka use kiya jata hai taaki alag-alag screen size aur device orientation ke liye alag-alag images dikhayi ja sake. Yeh tag responsive images banane me madad karta hai, jisse page load time better hota hai aur user experience bhi improve hota hai.

// ============================================= Picture Attribute =============================================== //
//  ChatGPT Se liya hua Syntax ---> Components Aur Unke Karya:
// 1. <picture> Tag: Yeh wrapper hota hai jisme <source> aur <img> tags hote hain.

// 2. <source> Tag: Iska use specific properties set karne ke liye hota hai jaise media aur srcset.
// media: Yeh media query specify karta hai, jaise (max-width: 600px), jo batata hai ki jab screen ki width 600px se kam ho, tab yeh source image use kiya jaye.
// srcset: Isme image ka URL diya jata hai jo use karna hai.

// 3. </source><img> Tag: Yeh fallback ke roop me kaam karta hai. Agar browser <picture> aur <source> tags ko nahi samajh pata ya media queries match nahi hoti, to <img> tag ki image dikhayi jati hai. Isme alt attribute hona chahiye jo image ka description deta hai.

// ============================================= Picture Tag Fayde =============================================== //
//  ChatGPT Se liya hua Syntax ---> <picture> Tag Ke Fayde:
// 1. Responsive Design: Yeh tag ensure karta hai ki suitable image file use ho, jisse alag-alag screen sizes aur devices par website ki performance better hoti hai.

// 2. Load Time Improve: Sirf required image load hoti hai, jisse page ka load time kam hota hai.

// 3. Enhanced Experience: Yeh tag developers ko user experience improve karne me madad karta hai, especially high-density displays par, kyunki yeh alag-alag resolutions ki images provide kar sakta hai.
