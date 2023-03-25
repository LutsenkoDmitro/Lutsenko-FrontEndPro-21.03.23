const inputANode = document.querySelector('.input-a');
const inputBNode = document.querySelector('.input-b');
const selectOperationNode = document.querySelector('.select-operation');
const btnResultNode = document.querySelector('.result');
const outputNode = document.querySelector('.output');

btnResultNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;

    const result = calculate({a, b, operation});
outputNode.innerHTML = result;
})