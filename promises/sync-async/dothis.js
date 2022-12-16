function oneTwoThree() {
  console.log("First!");
  setTimeout(() => {
    console.log("Second!");
  }, 0);
  console.log("Third!");
}

oneTwoThree();
// First!
// Third!
// Second!
