### **1. Tải và cài đặt Git**

1. **Truy cập trang tải Git**: Mở trình duyệt và vào [https://git-scm.com/](https://git-scm.com/).
2. **Tải xuống Git**:
   - Chọn phiên bản dành cho **Windows**.
   - Nhấn nút **Download** để tải file cài đặt.
3. **Cài đặt Git**:
   - Chạy file cài đặt vừa tải về (`Git-x.x.x-64-bit.exe`).
   - Trong quá trình cài đặt:
     - **Chọn Components**: Giữ nguyên các tùy chọn mặc định và nhấn **Next**.
     - **Editor mặc định**: Chọn Notepad++ (nếu có cài) hoặc giữ mặc định là Vim.
     - **Adjust PATH environment**: Chọn **"Git from the command line and also from 3rd-party software"**.
     - **Chọn HTTPS backend**: Giữ mặc định.
     - **Configure line ending conversions**: Chọn tùy chọn **"Checkout Windows-style, commit Unix-style line endings"**.
   - Hoàn tất cài đặt và nhấn **Finish**.

---

### **2. Tạo tài khoản GitHub**

1. **Truy cập GitHub**: Vào [https://github.com/](https://github.com/).
2. **Đăng ký tài khoản**:
   - Nhấn nút **Sign Up**.
   - Nhập thông tin: Email, mật khẩu, username.
   - Xác minh email theo hướng dẫn của GitHub.

---

### **3. Kết nối Git với GitHub**

1. **Mở Git Bash**:
   - Tìm **Git Bash** trong menu Start và mở nó.
2. **Cấu hình Git lần đầu**:
   - Thiết lập tên người dùng:
     ```bash
     git config --global user.name "Tên của bạn"
     ```
   - Thiết lập email (sử dụng email đã đăng ký GitHub):
     ```bash
     git config --global user.email "email@example.com"
     ```
3. **Kiểm tra cấu hình**:
   ```bash
   git config --list
   ```
