const girl = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();
  // Produce a TypeError
  // null.myFunction();
  // Produce a SyntaxError
  // eval('Hello World');
  // Produce a URIError
  // decodeURIComponent('%');

  if (!girl.name) {
    // throw 'Girl has no name';
    throw new SyntaxError('Girl has no name');
  }
} catch(error) {
  console.log(error);
  // To get the error message only
  console.log(error.message);
  // To get the error type only
  console.log(error.name);
} finally {
  console.log('Finally runs regardless of result');
}