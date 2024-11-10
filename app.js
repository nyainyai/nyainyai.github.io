function saklar(params) {
    console.log(params);

    let lampu1 = document.getElementById("lampu1")

    if (params == "on") {
    lampu1.src = "asset/on.png"
    }
    if (params == "off") {
    lampu1.src = "asset/off.png"
    }

}