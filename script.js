const byteSize = (str) => {
  const encoder = new TextEncoder();
  const byteArray = encoder.encode(str);
  return byteArray.length; 
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
