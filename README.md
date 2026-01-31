# Mini-GT-Store

<img width="1919" height="1128" alt="Screenshot 2026-01-31 113852" src="https://github.com/user-attachments/assets/777f31a7-f822-4019-835c-cab2ea4ec60b" />

index.html
→ Trang chủ, hiển thị danh sách xe, tìm kiếm và lọc theo hãng

product.html
→ Trang chi tiết xe (ảnh lớn, thông tin, thêm vào giỏ hàng)

cart.html
→ Trang giỏ hàng (xem sản phẩm, tăng/giảm số lượng, thanh toán)

taikhoan.html
→ Trang đăng nhập & đăng ký tài khoản

data.js
→ Chứa toàn bộ dữ liệu sản phẩm (id, tên xe, hãng, giá, ảnh…)

main.js
→ Xử lý hiển thị sản phẩm, giỏ hàng, tìm kiếm, lọc xe

auth.js
→ Xử lý đăng nhập, đăng ký, đăng xuất và trạng thái người dùng

style.css
→ Giao diện website

&& Cách website hoạt động
 Hiển thị sản phẩm

Dữ liệu xe được lấy từ data.js

main.js render danh sách xe ra trang chủ

Có thể lọc theo hãng xe và tìm kiếm theo tên

&& Xem chi tiết sản phẩm

Click vào ảnh xe ở trang chủ

Chuyển sang product.html?id=...

Website lấy id để hiển thị đúng thông tin xe

&& Giỏ hàng

Khi thêm xe, dữ liệu được lưu vào localStorage

Giỏ hàng hiển thị:

Ảnh xe

Tên xe

Số lượng (tăng / giảm)

Tổng tiền

Có thể xóa giỏ hoặc thanh toán (mô phỏng)

&& Đăng ký & đăng nhập

Tài khoản được lưu trong localStorage

Khi đăng nhập thành công:

Chỉ hiển thị Đăng xuất

Khi đăng xuất:

Có hộp xác nhận

Quay về trang tài khoản

&& Lưu trữ dữ liệu

Website không dùng server, toàn bộ dữ liệu được lưu bằng:

localStorage

Phù hợp cho demo, học tập và đồ án

&& Demo website
👉Link Web Trường:
https://bdi.edu.vn/
👉Link Fanpage Trường:
https://www.facebook.com/bdi.edu.vn
👉Link Youtube:
https://youtu.be/z1fVgwQ6qsM
👉 GitHub Pages:
https://lehongthai120724-droid.github.io/Mini-GT-Store/

👨‍💻 Nhóm thực hiện

Lê Hồng Thái – Nhóm trưởng

Trương Yến Linh – Thành viên
