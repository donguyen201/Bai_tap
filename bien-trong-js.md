# 1. Biến trong JavaScript

## 1. Khái niệm về biến
Biến (variable) là nơi **lưu trữ giá trị** để sử dụng trong chương trình.

```js
let name = "Nguyên";
let age = 35;

2. Cú pháp khai báo biến
Có 3 từ khóa để khai báo biến:
| Từ khóa | Phạm vi        | Có thể gán lại? | Ghi chú                         |
| ------- | -------------- | --------------- | ------------------------------- |
| `var`   | function-scope | ✅               | Cũ, hạn chế dùng                |
| `let`   | block-scope    | ✅               | Nên dùng cho biến thay đổi      |
| `const` | block-scope    | ❌               | Dùng cho giá trị không thay đổi |
var a = 1;
let b = 2;
const PI = 3.14;

3. Các kiểu dữ liệu cơ bản
String (chuỗi): "Hello"

Number (số): 10, 3.14

Boolean (đúng/sai): true, false
let name = "Nguyên";
let age = 35;
let isOnline = true;

4. Phân biệt toán tử với chuỗi và số
let a = 5 + 3;          // 8
let b = "5" + 3;        // "53"
let c = "Hello " + "JS"; // "Hello JS"

5. Toán tử toán học
| Toán tử | Ý nghĩa     | Ví dụ    |
| ------- | ----------- | -------- |
| `+`     | Cộng        | `a + b`  |
| `-`     | Trừ         | `a - b`  |
| `*`     | Nhân        | `a * b`  |
| `/`     | Chia        | `a / b`  |
| `%`     | Chia lấy dư | `10 % 3` |
| `++`    | Tăng 1      | `a++`    |
| `--`    | Giảm 1      | `a--`    |

6. Toán tử gán
| Toán tử | Ý nghĩa      | Ví dụ    |
| ------- | ------------ | -------- |
| `=`     | Gán giá trị  | `a = 5`  |
| `+=`    | Cộng rồi gán | `a += 2` |
| `-=`    | Trừ rồi gán  | `a -= 1` |
| `*=`    | Nhân rồi gán | `a *= 3` |
| `/=`    | Chia rồi gán | `a /= 2` |

7. Toán tử so sánh
| Toán tử | Ý nghĩa                | Kết quả               |
| ------- | ---------------------- | --------------------- |
| `>`     | Lớn hơn                | `5 > 3`               |
| `<`     | Nhỏ hơn                | `3 < 2`               |
| `>=`    | Lớn hơn hoặc bằng      | `5 >= 5`              |
| `<=`    | Nhỏ hơn hoặc bằng      | `3 <= 4`              |
| `==`    | So sánh bằng (lỏng)    | `"5" == 5`            |
| `!=`    | So sánh khác (lỏng)    | `"5" != 5`            |
| `===`   | So sánh bằng tuyệt đối | `"5" === 5` → `false` |
| `!==`   | So sánh khác tuyệt đối | `"5" !== 5` → `true`  |


---

### ✅ **Bước 3: Lưu file**

Đảm bảo bạn đã lưu file `bien-trong-js.md`.

---

### ✅ **Bước 4: Add, commit, push lên GitHub**

Chạy lần lượt các lệnh sau trong terminal:

```bash
git add bien-trong-js.md
git commit -m "Tổng hợp kiến thức về biến trong JavaScript"
git push origin master

