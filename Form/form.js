// =================================================== Form ===================================================== //
// ChatGPT Se liya hua Syntax ---> HTML forms ka use web development mein bahut zaroori hai, kyunki ye users ko server par data bhejne ki suvidha dete hain. Forms se log login kar sakte hain, sign up kar sakte hain, ya feedback de sakte hain.

// ====================================== Basic Structure of an HTML Form ======================================== //
// ChatGPT Se liya hua Syntax ---> 1. Basic Structure of an HTML Form.
// HTML form <form> tag ke saath define hoti hai. Iska basic syntax kuch is tarah hota hai:

// <form action="url" method="method">
// </form>

// action: Ye URL specify karta hai jahan form data bheja jayega jab submit kiya jayega.
// method: HTTP method define karta hai jo use kiya jayega (usually GET ya POST).





// ============================================= Form Validation ================================================= //
// ChatGPT Se liya hua Syntax ---> Form Validation.  

// HTML5 built-in form validation provide karta hai:

// 1. required: Ensure karta hai ki field fill hona chahiye.
// 2. pattern: Regex pattern specify karta hai jo input match karna chahiye.
// 3. min aur max: Minimum aur maximum values define karte hain input types jaise number aur range ke liye.

// <form>
//   <input type="email" id="email" name="email" required>
//   <input type="number" id="age" name="age" min="1" max="100">
//   <button type="submit">Submit</button>
// </form>


// ======================================== Handling Form Submission ============================================ //
// ChatGPT Se liya hua Syntax ---> Handling Form Submission.
// Form submit hone par:

// With GET method: Form data URL ke saath query parameters ke roop mein attach hota hai.
// With POST method: Form data HTTP request ke body mein include hota hai aur URL mein visible nahi hota.

