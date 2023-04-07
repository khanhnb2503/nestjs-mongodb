### 1. LỌC CÁC PHẦN TỬ KHI DÙNG VỚI find()

### Example: collection_name.find({ field_name: { $nin:[1,2] } });

    + $eq: Lấy giá trị bằng hoặc đã cho.
    + $gt: Lấy giá trị lơn hơn.
    + $lt: Lấy giá nhỏ hơn.
    + $gte: Lấy giá trị lơn hơn or bằng.
    + $lte: Lấy giá trị nhỏ hơn or bằng.
    + $in : Lấy giá trị khớp trong 1 array.
    + $ne : Lấy các giá trị ko bằng với giá trị đã cho.
    + $nin: Không khớp với bất kì giá trị nào có trong 1 array.

### 2. Toán tử điều kiện

    + $and: Kết hợp 2 hoặc nhiều truy vấn khớp với tất cả các điều kiện.
    + $or: Kết hợp 2 hoặc nhiều điều kiện khớp với 1 trong 2 truy vấn.
    + $nor: Kết hợp với 2 or nhiều truy vấn, kết quả trả về không khớp với điều kiện.
    + $not: Trả về dữ liệu không khớp với truy vấn đã cho.
    + $exists: So khớp với tài liệu có trường được chỉ định.
    + $mod: So khớp các tài liệu trong đó giá trị của trường đã cho bẳng với phần còn lại sau khi được chia cho 1 giá trị đã chỉ định.
    + $regex: Khớp với biểu thức chính quy đã cho.
    + $text: Tìm kiếm văn bản trên trường đã được chỉ định.
    + $where: So khớp với biểu thức javascript.
### 3 . Array   
    + $all: So khớp với các array chứa các giá trị đã chỉ định trong điều kiện truy vấn.
    + $size: Kích thước mảng bằng với kích thước truy vấn.

### 4. Paging.
    + limit(): Lấy bao nhiêu record.
    + skip(): Bắt đầu lấy từ record.