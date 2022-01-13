// GLOBALS - NO WINDOW !!!!

// in node we don't have any window object because there is no browser...

// no matter how complex is your app, the globals are available...

//  __dirname  => path to current dir
console.log('__dirname' , __dirname)

//  __filename =>  function to use modules (commonJS)
console.log('__filename' , __filename)


//  module => info about the current module (file)
console.log('module' ,module)

//  process => info about env where the program is being executed (when you deploy your server it is setting on a different env so base on that env you should make a different decision)













