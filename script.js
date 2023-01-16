function printNumber() {
  const number = document.getElementById('number').value;

  if (data.includes(Number(number))) {
    document.getElementById('result').innerText = '🎉 당첨 🎉';
  } else {
    document.getElementById('result').innerText = '...❌';
  }
}

data = [123, 1, 8];
