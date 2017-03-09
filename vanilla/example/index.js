import {
    default as maskInput,
    convertMaskToPlaceholder
} from '../src/vanillaTextMask'

var myInput = document.querySelector('.myInput')
var mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

maskInput({
  inputElement: myInput,
  mask: mask,
})

myInput.setAttribute("placeholder", convertMaskToPlaceholder(mask, "_"))