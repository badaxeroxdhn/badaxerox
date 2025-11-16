<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>3D Floating Cards</title>

<style>
    body {
        background: #121212;
        font-family: Arial, sans-serif;
        padding: 20px;
        text-align: center;
    }

    .logo-box {
        margin-bottom: 20px;
    }

    .logo-box img {
        width: 120px; 
        height: auto;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    }

    h1 {
        color: #fff;
        margin-bottom: 35px;
        font-size: 28px;
    }

    /* ⭐ 3 Column Card Box */
    .btn-box {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        padding: 10px;
    }

    /* Card Style */
    .threeD-btn {
        padding: 25px 10px;
        font-size: 20px;
        font-weight: 700;
        color: white;
        background: linear-gradient(145deg, #4e4e4e, #3a3a3a);
        border-radius: 15px;
        text-decoration: none;
        box-shadow: 
            8px 8px 20px #0a0a0a,
            -8px -8px 20px #1e1e1e;
        transition: 0.2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .threeD-btn:hover {
        transform: translateY(-6px);
        box-shadow: 
            12px 12px 25px #0a0a0a,
            -12px -12px 25px #1e1e1e;
    }

    .admin-btn {
        background: linear-gradient(145deg, #ff4e4e, #cc3838);
        box-shadow:
            8px 8px 20px #0a0a0a,
            -8px -8px 20px #b82929;
    }

    /* ⭐ Center Timer Overlay */
    #countdownBox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: none;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 80px;
        font-weight: bold;
        z-index: 9999;
    }

    /* ⭐ Mobile Responsive */
    @media (max-width: 768px) {
        .btn-box {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 480px) {
        .btn-box {
            grid-template-columns: repeat(1, 1fr);
        }
    }

</style>

</head>
<body>

<div class="logo-box">
    <img src="logo.png">
</div>

<h1>All Branch Login – Choose Your Branch</h1>

<div class="btn-box">
    <a href="https://badaxerox.wuaze.com/sslnt/login.php" class="threeD-btn">SSLNT</a>
    <a href="https://badaxerox.wuaze.com/lucky/login.php" class="threeD-btn">AMIT/LUCKY</a>
    <a href="https://badaxerox.wuaze.com/uncle/login.php" class="threeD-btn">NIRMAL/UNCLE</a>
    <a href="https://badaxerox.wuaze.com/anish/login.php" class="threeD-btn">ANISH</a>
    <a href="https://badaxerox.wuaze.com/anil/login.php" class="threeD-btn">NEW SHOP</a>
    <a href="https://badaxerox.wuaze.com/anil/admihome.php" class="threeD-btn admin-btn">ADMIN LOGIN</a>
</div>

<!-- ⭐ TIMER OVERLAY BOX -->
<div id="countdownBox">⌛ 3</div>

<script>

// ⭐ Back / forward press se page restore hone par timer hide karo
window.onpageshow = function(event) {
    if (event.persisted) {
        document.getElementById("countdownBox").style.display = "none";
    }
};

document.querySelectorAll(".threeD-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const url = this.href;
        const countdownBox = document.getElementById("countdownBox");

        let timeLeft = 3;
        countdownBox.innerText = "⌛ " + timeLeft;
        countdownBox.style.display = "flex";

        let timer = setInterval(() => {
            timeLeft--;
            countdownBox.innerText = "⌛ " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
                window.location.href = url;
            }

        }, 1000);
    });
});
</script>

</body>
</html>
