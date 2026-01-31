// ===============================
// CHUYỂN FORM
// ===============================
function chuyenForm(id) {
    document.querySelectorAll('.auth-form')
        .forEach(f => f.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ===============================
// ĐĂNG KÝ
// ===============================
function xuLyDangKy() {
    const user = document.getElementById('regUser').value.trim();
    const pass = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;

    if (!user || !pass) {
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }

    if (pass !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    let dsNguoiDung = JSON.parse(localStorage.getItem('users')) || [];

    if (dsNguoiDung.find(u => u.username === user)) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    dsNguoiDung.push({ username: user, password: pass });
    localStorage.setItem('users', JSON.stringify(dsNguoiDung));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    chuyenForm('loginForm');
}

// ===============================
// ĐĂNG NHẬP
// ===============================
function xuLyDangNhap() {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;

    let dsNguoiDung = JSON.parse(localStorage.getItem('users')) || [];

    const taiKhoan = dsNguoiDung.find(
        u => u.username === user && u.password === pass
    );

    if (taiKhoan) {
        localStorage.setItem("loggedInUser", user);
        alert("Chào mừng " + user + "!");
        window.location.href = "index.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}

// ===============================
// CẬP NHẬT MENU
// ===============================
function capNhatMenu() {
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    const user = localStorage.getItem("loggedInUser");
        // đã đăng nhập
    if (user) {
        if (loginLink) loginLink.style.display = "none";
        if (logoutLink) logoutLink.style.display = "inline";
        // chưa đăng nhập
    } else {
        if (loginLink) loginLink.style.display = "inline";
        if (logoutLink) logoutLink.style.display = "none";
    }
}

// ===============================
// ĐĂNG XUẤT
// ===============================
function logout() {
    const ok = confirm("Bạn có chắc chắn muốn đăng xuất không?");
    if (!ok) return false;

    localStorage.removeItem("loggedInUser");
    window.location.href = "taikhoan.html";
    return false;
}

// ===============================
document.addEventListener("DOMContentLoaded", capNhatMenu);
