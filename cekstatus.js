document.getElementById('devina_form_lacak').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman melakukan reload saat tombol submit diklik

    // Ambil nilai input dari user dan hilangkan spasi berlebih
    const inputResi = document.getElementById('devina_input_resi').value.trim();
    
    
    // Ambil elemen untuk kartu hasil dan pesan error
    const kartuStatus = document.getElementById('devina_hasil_status');
    const pesanError = document.getElementById('devina_pesan_error');
    const tampilResi = document.getElementById('devina_tampil_resi');
    

    // Data yang hanya bisa dimasukan (perlu pengembangan)
    const dataResiValid = ["D&D-2026001", "D&D-2026002", "D&D-2026003", "D&D-2026004", "D&D-2026005","D&D-2026006", "D&D-2026007", "D&D-2026008", "D&D-2026009", "D&D-2026010"];

    // Cek apakah input yang dimasukkan user ada di dalam data valid
    if (dataResiValid.includes(inputResi)) {
        // Jika VALID: Sembunyikan pesan error, tampilkan kartu status, dan ubah teks resinya
        pesanError.style.display = 'none';
        kartuStatus.style.display = 'block';
        tampilResi.textContent = inputResi;
        
    } else {
        // Jika TIDAK VALID / TIDAK ADA: Tampilkan pesan error, sembunyikan kartu status
        pesanError.style.display = 'block';
        kartuStatus.style.display = 'none';
    }
});