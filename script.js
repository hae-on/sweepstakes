function printName() {
  const number = document.getElementById('name').value;

  if (data.includes(Number(number))) {
    console.log('똑같');
  } else {
    console.log('안똑같');
  }
}

data = [123, 1, 8];
