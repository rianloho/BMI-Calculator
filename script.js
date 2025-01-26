function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Mengubah tinggi dari cm ke meter

    if (isNaN(weight) || isNaN(height)) {
        alert("Masukkan angka yang valid untuk berat dan tinggi badan.");
        return;
    }

    var bmi = weight / (height * height);
    var result = document.getElementById('result');

    if (bmi < 18.5) {
        result.innerHTML = 'BMI Anda adalah ' + bmi.toFixed(2) + ' (Kekurangan berat badan)';
        suggestWeightGain(weight, height, 18.5, result);
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML = 'BMI Anda adalah ' + bmi.toFixed(2) + ' (Berat badan normal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML = 'BMI Anda adalah ' + bmi.toFixed(2) + ' (Kelebihan berat badan)';
        suggestWeightLoss(weight, height, 24.9, result);
    } else {
        result.innerHTML = 'BMI Anda adalah ' + bmi.toFixed(2) + ' (Obesitas)';
        suggestWeightLoss(weight, height, 24.9, result);
    }
}

function suggestWeightLoss(currentWeight, height, targetBMI, resultElement) {
    var targetWeight = targetBMI * (height * height);
    var weightToLose = currentWeight - targetWeight;
    resultElement.innerHTML += '<br>Anda perlu menurunkan ' + weightToLose.toFixed(2) + ' kg untuk mencapai BMI normal.';
    resultElement.innerHTML += '<br>Berikut beberapa tips:';
    resultElement.innerHTML += '<ul>';
    resultElement.innerHTML += '<li>Ikuti pola makan seimbang dengan lebih banyak buah, sayuran, dan biji-bijian utuh.</li>';
    resultElement.innerHTML += '<li>Rutin beraktivitas fisik, seperti berjalan, jogging, atau berenang.</li>';
    resultElement.innerHTML += '<li>Hindari camilan tinggi kalori dan minuman manis.</li>';
    resultElement.innerHTML += '<li>Konsultasikan dengan penyedia layanan kesehatan untuk saran yang lebih spesifik.</li>';
    resultElement.innerHTML += '</ul>';
}

function suggestWeightGain(currentWeight, height, targetBMI, resultElement) {
    var targetWeight = targetBMI * (height * height);
    var weightToGain = targetWeight - currentWeight;
    resultElement.innerHTML += '<br>Anda perlu menambah ' + weightToGain.toFixed(2) + ' kg untuk mencapai BMI normal.';
    resultElement.innerHTML += '<br>Berikut beberapa tips:';
    resultElement.innerHTML += '<ul>';
    resultElement.innerHTML += '<li>Konsumsi makanan bernutrisi tinggi yang kaya protein dan lemak sehat.</li>';
    resultElement.innerHTML += '<li>Makan lebih sering dan sertakan camilan sehat.</li>';
    resultElement.innerHTML += '<li>Incorporasi latihan kekuatan untuk membangun massa otot.</li>';
    resultElement.innerHTML += '<li>Konsultasikan dengan penyedia layanan kesehatan untuk saran yang lebih spesifik.</li>';
    resultElement.innerHTML += '</ul>';
}
