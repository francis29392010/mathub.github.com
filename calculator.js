// JavaScript code for calculating GCD and LCM
document.getElementById('calculateBtn').addEventListener('click', function() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    var gcdResult = gcd(num1, num2);
    var lcmResult = (num1 * num2) / gcdResult;

    document.getElementById('gcdResult').innerText = "GCD: " + gcdResult;
    document.getElementById('lcmResult').innerText = "LCM: " + lcmResult;
});
