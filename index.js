/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const feet = 3.281
const liter = 0.264
const kilos = 2.204

const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const inputValue = input.value


convertBtn.addEventListener("click", function() {
    const inputValue = input.value
    const feetValue = inputValue * feet 
    const meterValue = inputValue / feet
    const gallonValue = inputValue * liter
    const literValue = inputValue / liter
    const poundValue = inputValue * kilos
    const kiloValue = inputValue /kilos

    length.innerHTML = `${inputValue} meters = ${feetValue.toFixed(2)} feet | ${inputValue} feet = ${meterValue.toFixed(2)} meters`
    volume.innerHTML = `${inputValue} liters = ${gallonValue.toFixed(2)} gallons | ${inputValue} gallons = ${literValue.toFixed(2)} liters`
    mass.innerHTML = `${inputValue} kilos = ${poundValue.toFixed(2)} pounds | ${inputValue} pounds = ${kiloValue.toFixed(2)} kilos`
})