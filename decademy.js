// Fungsi untuk menyelesaikan topik
function completeTopic(button) {
    const topicItem = button.closest('.topic-item');
    const progressBar = topicItem.querySelector('.progress-bar');
    const circle = progressBar.querySelector('.progress-circle');
  
    // Geser lingkaran ke kanan (selesai)
    circle.style.left = 'calc(100% - 16px)';
    
    // Ganti ikon dan nonaktifkan tombol
    button.innerText = '✅';
    button.disabled = true;
  }
  
  // Fungsi untuk menangani input pertanyaan
  function handleQuestion(event) {
    if (event.key === 'Enter') {
      const question = event.target.value.trim();
      if (question.length > 0) {
        alert(`You asked: "${question}"`);
        event.target.value = '';
      }
    }
  }
  
  // Fungsi ketika kotak kuis diklik
  function handleQuizClick() {
    alert("Opening quiz... (feature under development)");
  }
  