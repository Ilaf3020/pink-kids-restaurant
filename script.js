function openForm(food) {
    document.getElementById("orderForm").style.display = "block";
    document.getElementById("foodName").value = food;
  }
  
  function closeForm() {
    document.getElementById("orderForm").style.display = "none";
  }
   