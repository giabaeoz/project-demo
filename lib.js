// 1. Tìm các phần tử trên HTML
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 2. Bắt sự kiện click vào nút Add
addBtn.addEventListener("click", function() {
    const text = taskInput.value.trim();

    if (text !== "") {
        // --- BẮT ĐẦU THAO TÁC DOM ---
        
        // 3a. Tạo một thẻ <li> mới
        const li = document.createElement("li");
        li.textContent = text; // Gắn nội dung công việc vào

        // 3b. Tạo nút Xóa cho thẻ <li> đó
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.className = "delete-btn";
        
        // Bắt sự kiện click để xóa thẻ <li> (Ứng dụng xóa phần tử DOM)
        deleteBtn.addEventListener("click", function() {
            li.remove(); 
        });

        // 3c. Gắn nút Xóa vào bên trong thẻ <li>
        li.appendChild(deleteBtn);

        // 3d. Gắn thẻ <li> hoàn chỉnh vào danh sách <ul>
        taskList.appendChild(li);

        // --- KẾT THÚC THAO TÁC DOM ---

        // Xóa trắng ô nhập liệu sau khi thêm
        taskInput.value = "";
    } else {
        alert("Vui lòng nhập công việc!");
    }
});
