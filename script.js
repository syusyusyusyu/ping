// document.addEventListener("DOMContentLoaded", function () {
//     const pingButton = document.getElementById("pingButton");
//     const ipAddressInput = document.getElementById("ipAddress");
//     const resultDiv = document.getElementById("result");

//     pingButton.addEventListener("click", function () {
//         const ipAddress = ipAddressInput.value.trim();
//         if (ipAddress) {
//             fetch("exec_ping.php", {
//                 method: "POST",
//                 body: new URLSearchParams({ ipAddress }),
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                 },
//             })
//                 .then((response) => response.text())
//                 .then((data) => {
//                     // "ttl="が含まれていれば通信成功とみなす
//                     if (data.includes("ttl=")) {
//                         resultDiv.textContent = 'やったね！通信成功！';
//                         resultDiv.style.color = '#4CAF50'; // 正常な場合の色
//                     } else {
//                         resultDiv.textContent = 'ざんねん！通信失敗！';
//                         resultDiv.style.color = '#FF6B6B'; // エラーの場合の色
//                     }
//                 })
//                 .catch((error) => {
//                     console.error(error);
//                     resultDiv.textContent = 'エラーが発生しました。';
//                     resultDiv.style.color = '#FF6B6B'; // エラーの場合の色
//                 });
//         } else {
//             resultDiv.innerHTML = "Please enter an IP address.";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const pingButton = document.getElementById("pingButton");
    const ipAddressInput = document.getElementById("ipAddress");
    const resultDiv = document.getElementById("result");

    pingButton.addEventListener("click", function () {
        const ipAddress = ipAddressInput.value.trim();
        if (ipAddress) {
            fetch("exec_ping.php", {
                method: "POST",
                body: new URLSearchParams({ ipAddress }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
                .then((response) => response.text())
                .then((data) => {
                    // "ttl="が含まれていれば通信成功とみなす
                    if (data.includes("ttl=")) {
                        resultDiv.innerHTML = 'やったね！通信成功！<br><pre>' + data + '</pre>';
                        resultDiv.style.color = '#4CAF50'; // 正常な場合の色
                    } else {
                        resultDiv.innerHTML = 'ざんねん！通信失敗！<br><pre>' + data + '</pre>';
                        resultDiv.style.color = '#FF6B6B'; // エラーの場合の色
                    }
                })
                .catch((error) => {
                    console.error(error);
                    resultDiv.textContent = 'エラーが発生しました。';
                    resultDiv.style.color = '#FF6B6B'; // エラーの場合の色
                });
        } else {
            resultDiv.innerHTML = "Please enter an IP address.";
        }
    });
});
