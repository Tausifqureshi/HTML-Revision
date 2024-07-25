// ================================================= Ifram Tag =================================================== //
//  ChatGPT Se liya hua Syntax --->  <iframe> HTML tag ka use kisi doosre HTML page ko ek web page ke andar embed karne ke liye kiya jata hai. Isse inline frame bhi kaha jata hai, jo ek tarike se doosre web page ko apne page me shamil karne ka tareeqa pradan karta hai, jaise ki videos, maps, ya doosri websites ke content.


// ============================================== Ifram Attribute ================================================ //
//  ChatGPT Se liya hua Syntax ---> Ifram Attribute.

// 1. src: Embedded content ka URL specify karta hai.

// 2. width and height: Iframe ki size define karte hain. Agar yeh attributes nahi diye gaye, to iframe default size lega, jo content ko sahi se display karne ke liye ideal nahi hote.

// 3. frameborder: Yeh attribute iframe ke aas paas border dikhana ya na dikhana specify karta hai. HTML5 me yeh attribute support nahi karta (instead CSS ka use karein).
// <iframe src="https://www.example.com" frameborder="0"></iframe>


// 4.allowfullscreen: Yeh attribute iframe content ko fullscreen mode me dikhane ki anumati deta hai.
// <iframe src="https://www.example.com" allowfullscreen></iframe>



// 5. name: name attribute se, aap kisi link ko specify kar sakte hain ki wo kis iframe me load hoga. Jab aap kisi <a> tag me target attribute use karte hain aur usme iframe ka naam dete hain, to us link ko click karne par URL specified iframe me load hota hai.
  
// <iframe name="myIframe" src="about:blank" width="600" height="400" style="border:1px solid #ddd;"></iframe>
//<!-- Link to load Google Maps in the iframe -->
// <a href="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48663348.97841858!2d74.70087180594601!3d26.88286719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1721889331300!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" target="myIframe">Load Example in Iframe</a>

 


// 6. sandbox: Yeh attribute suraksha ke liye <iframe> ke andar chalne wale content par pratibandh lagata hai. Isme kuch values ka ek set hota hai, jaise allow-scripts, allow-forms, adi, jo <iframe> me kya chal sakta hai usse control karta hai.
//<iframe src="https://www.example.com" sandbox="allow-scripts"></iframe>


// 7. srcdoc: attribute bhi diya gaya hai to usse override kar deta hai. Yeh static HTML content directly embed karne ke liye useful hai.






// ============================================== Ifram Use================================================ //
//  ChatGPT Se liya hua Syntax ---> Video Embedding:
// Jaise YouTube videos ya doosre multimedia content ko embed karne ke liye.

//<iframe width="560" height="315" src="https://www.youtube.com/embed/xyz123" frameborder="0" allowfullscreen></iframe>

//<iframe width="560" height="315" src="https://www.youtube.com/embed/txMuWyhHUPk?si=0eDDyRwneEPDSbgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>