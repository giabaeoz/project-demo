const addBtn = document.getElementById('addBtn');
const subjectList = document.getElementById('subjectList');
const gpaResult = document.getElementById('gpaResult');

let totalCredits = 0;
let totalScore = 0;

addBtn.addEventListener('click', function() {
  const subjectVal = document.getElementById('subject').value;
  const creditsVal = parseFloat(document.getElementById('credits').value);
  const scoreVal = parseFloat(document.getElementById('score').value);

  // Chặn người dùng nếu nhập thiếu hoặc sai
  if (!subjectVal || isNaN(creditsVal) || isNaN(scoreVal)) {
    alert('Please fill in all fields with valid values!');
    return;
  }

  // Tạo hàng mới và chèn kèm nút Xóa
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${subjectVal}</td>
    <td>${creditsVal}</td>
    <td>${scoreVal}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  
  // Hàm xử lý khi bấm nút Xóa trên chính hàng này
  const deleteBtn = newRow.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    // Trừ điểm và tín chỉ của môn bị xóa khỏi tổng số
    totalCredits -= creditsVal;
    totalScore -= (creditsVal * scoreVal);
    
    // Cập nhật lại màn hình hiển thị GPA
    if (totalCredits > 0) {
      gpaResult.textContent = (totalScore / totalCredits).toFixed(2);
    } else {
      // Nếu xóa hết môn thì trả về 0.00
      gpaResult.textContent = '0.00';
    }
    
    // Gỡ thẻ <tr> này ra khỏi giao diện
    newRow.remove();
  });

  // Móc hàng mới vào bảng
  subjectList.appendChild(newRow);

  // Cộng dồn điểm mới và cập nhật giao diện
  totalCredits += creditsVal;
  totalScore += (creditsVal * scoreVal);
  gpaResult.textContent = (totalScore / totalCredits).toFixed(2);

  // Dọn dẹp form để nhập môn tiếp theo
  document.getElementById('subject').value = '';
  document.getElementById('credits').value = '';
  document.getElementById('score').value = '';
  document.getElementById('subject').focus();
});