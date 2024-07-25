
// ================================================= video Tag =================================================== //
// ChatGPT Se liya hua Syntax ---> HTML me <video> tag ka upayog web pages par video content embed karne ke liye kiya jata hai. Yeh tag HTML5 me introduce kiya gaya tha aur yeh ek self-contained, semantic element hai jo browser ko batata hai ki is jagah par video content hona chahiye. <video> tag ke sath kai attributes aur child elements use kiye ja sakte hain jo video ke presentation aur functionality ko control karte hain.


// =========================================== video Tag Attribute =============================================== //
// ChatGPT Se liya hua Syntax ---> 
// 1. src: Video file ka URL define karta hai. Yeh attribute optional hai agar <source> tag ka upayog kiya jaye.
// <video src="path-to-video.mp4"></video>


// 2. controls: Is attribute se user ko video play/pause karne, volume control karne, aur seek karne ke controls milte hain.
// <video src="path-to-video.mp4" controls></video>


// 3. autoplay: Is attribute se video page load hote hi automatically play hota hai. Yeh user experience par depend karta hai, isliye cautiously use karna chahiye.
// <video src="path-to-video.mp4" autoplay></video>


// 4. loop: Video khatam hone par usse automatically firse play karne ke liye is attribute ka upayog hota hai.
// <video src="path-to-video.mp4" loop></video>


// 5. muted: Video ko mute karne ke liye use hota hai, khas kar jab autoplay attribute use kiya jaye.
// <video src="path-to-video.mp4" muted></video>


// 6. poster: Video ke load hone se pehle ek placeholder image display karta hai.
//  <video src="path-to-video.mp4" poster="path-to-poster.jpg"></video>


// 7. width aur height: Video player ke dimensions set karte hain.
// <video src="path-to-video.mp4" width="600" height="400"></video>



// 8. <source> Element
// <source> tag ke sath multiple video file formats specify kiye ja sakte hain, jisse browser jo format support karta hai uske base par best match select karta hai.
// <video controls>
// <source src="movie.mp4" type="video/mp4">
// <source src="movie.ogg" type="video/ogg">
// Your browser does not support the video tag.
// </video>


