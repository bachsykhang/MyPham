// Giỏ hàng -----
// Lấy phần tử modal
var modal = document.getElementById("cartModal");

// Lấy phần tử button mở modal (biểu tượng giỏ hàng)
var btn = document.getElementById("cartIcon");

// Lấy phần tử <span> để đóng modal (nút x)
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào button (biểu tượng giỏ hàng), mở modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Khi người dùng nhấn vào <span> (nút x), đóng modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi người dùng nhấn vào bất cứ chỗ nào bên ngoài modal, đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
