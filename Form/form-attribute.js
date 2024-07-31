// ============================================= Form Attributes ================================================= //
// ChatGPT Se liya hua Syntax ---> Form Attributes.

// ============================================= action Attribute ================================================ //
// ChatGPT Se liya hua Syntax ---> 1. action Attribute:  attribute us URL ko specify karta hai jahan form data ko submit kiya jayega.

// ============================================  method Attribute ================================================ //
// ChatGPT Se liya hua Syntax ---> 2. method attribute : yeh nirdharit karta hai ki form data ko submit karne ke liye kaunsa HTTP method use kiya jayega. Aam taur par, yeh GET ya POST hota hai.

// GET: Data URL mein query string ke roop mein bheja jata hai. Choti matra mein data aur non-sensitive information ke liye upyukt hai.

// POST: Data request body mein bheja jata hai. Badi matra mein data aur sensitive information ke liye upyukt hai.


// ============================================ enctype Attribute ================================================ //
// ChatGPT Se liya hua Syntax ---> 3. enctype attribute tab use hota hai jab method POST ho. Yeh yeh nirdharit karta hai ki data kaise encode kiya jayega. Kuch common values hain.

// application/x-www-form-urlencoded: Default encoding, form data ko URL encode kiya jata hai.

// multipart/form-data: Tab use hoti hai jab form mein file upload wale inputs hote hain.

// text/plain: Form data bina kisi encoding ke bheja jata hai.


// ============================================ target Attribute ================================================ //
// ChatGPT Se liya hua Syntax ---> 4. target attribute yeh nirdharit karta hai ki submit kiye gaye form ka result kahan display hoga.

// _self: (Default) Current browser tab ya window mein.

// _blank: Ek naye tab ya window mein.

// _parent: Agar koi frame hai to parent frame mein.

// _top: Puri browser window ko cover karne wale frame mein.



// =========================================== novalidate Attribute ============================================== //
// ChatGPT Se liya hua Syntax ---> 5. novalidate attribute set karne par, yeh form ko submit karte samay HTML5 ki built-in validation check ko bypass karta hai.

// ========================================== autocomplete Attribute ============================================= //
// ChatGPT Se liya hua Syntax ---> 6. autocomplete attribute form ke liye auto-fill behavior ko enable ya disable karta hai. Yeh ya to on (default) ya off ho sakta hai.

// ========================================= accept-charset Attribute ============================================ //
// ChatGPT Se liya hua Syntax ---> 7. accept-charset attribute server par submit kiye gaye data ke liye acceptable character encoding set karta hai. Yeh ek ya ek se adhik character sets specify kar sakta hai.



// ============================================== name Attribute ================================================= //
// ChatGPT Se liya hua Syntax ---> 8. name attribute
// 1. Purpose of name Attribute:
// name attribute ka upyog form ki pahchan banane ke liye kiya jata hai. Ye visheshkar tab upyogi hota hai jab JavaScript ya server-side scripting languages me form ko refer karna ho.

// 2. Form Identification:
// Jab aapke paas ek page par ek se adhik forms hote hain, to name attribute ka upyog karke aap vishesh form ko pahchan sakte hain. Udaaharan ke liye, agar aapke paas login aur registration ke liye alag-alag forms hain, to aap unke name attributes ko alag-alag karke unhein pahchan sakte hain.

// 3. Interacting with JavaScript:
// JavaScript me aap document.forms ya document.getElementsByName() ka upyog karke form tak pahuch sakte hain. name attribute ka upyog vishesh form ko refer karne me madad karta hai.

