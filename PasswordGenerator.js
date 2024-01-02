let characterLengthJsValue = document.querySelector(
  "#characterlength-js-value"
);
let slider = document.querySelector("#slider");
let refresh = document.querySelector("#refresh-container");
characterLengthJsValue.innerText = slider.value;
slider.oninput = function () {
  characterLengthJsValue.innerText = this.value;
  return characterLengthJsValue;
};
let screen = document.querySelector("#screen");
let copyIcon = document.querySelector("#copy-icon");
function CopyToClipboard(value) {
  // value.preventDefault();
  navigator.clipboard.writeText(value);
  // alert(value);
}
function RefreshPage() {
  window.location.reload();
}
copyIcon.addEventListener("click", function () {
  CopyToClipboard(screen.innerText);
});
refresh.addEventListener("click", function () {
  RefreshPage();
});
let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symboles = ["!", "@", "#", "$", "&", "*", "_", "-"];

function RandomNumbers(array) {
  return array[Math.floor(Math.random() * array.length)];
  // let x=array[Math.floor(Math.random()*array.length)]
}
// RandomeNumbers(uppercase)
let tickUppercase = document.querySelector("#upercase");
// tickUppercase.value=["A", 'B', "C", 'D', "E", 'F', "G", 'H', "I", 'J', "K", 'L', "M", 'N', "O", 'P', "Q", 'R', "S", 'T', "U", 'V', "W", 'X', "Y", 'Z']
let tickLowercase = document.querySelector("#lowercase");
// tickLowercase.value=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let tickNumbers = document.querySelector("#numbers");
// tickNumbers.value=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let tickSymboles = document.querySelector("#symboles");
// symboles.value=["!", "@", "#", "$", "&", "*", "_", "-"]
let generateButton = document.querySelector("#generate-button");

// tickUppercase.addEventListener("click",function() {
//     RandomNumbers(uppercase)
// })
// tickLowercase.addEventListener("click",function() {
//     RandomNumbers(lowercase)
// })
// tickNumbers.addEventListener("click",function() {
//     RandomNumbers(numbers)
// })
// tickSymboles.addEventListener("click",function() {
//     RandomNumbers(symboles)
// })
function GivePassword(
  value1 = false,
  value2 = false,
  value3 = false,
  value4 = false,
  n
) {
  if (
    value1.checked == true &&
    value2.checked == true &&
    value3.checked == true &&
    value4.checked == true
  ) {
    if (n % 4 == 0) {
      for (i = 0; i < n / 4; i++) {
        let x = document.createElement("span");
        x =
          RandomNumbers(uppercase) +
          RandomNumbers(lowercase) +
          RandomNumbers(numbers) +
          RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 2 == 0) {
      for (i = 0; i < n / 4; i++) {
        let x = document.createElement("span");
        x =
          RandomNumbers(uppercase) +
          RandomNumbers(lowercase) +
          RandomNumbers(numbers) +
          RandomNumbers(symboles);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 2);
    } else if (n % 4 == 1) {
      if (n == 5) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 3);
      } else if (n == 9) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 3);
      } else if (n == 13) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 3);
      } else if (n == 17) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 3);
      }
    } else if (n % 4 == 3) {
      if (n == 7) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 11) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 15) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 19) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      }
    }
  } else if (
    value1.checked == true &&
    value2.checked == true &&
    value3.checked == true
  ) {
    if (n % 3 == 0) {
      for (i = 0; i < n / 3; i++) {
        let x = document.createElement("span");
        x =
          RandomNumbers(uppercase) +
          RandomNumbers(lowercase) +
          RandomNumbers(numbers);
        screen.append(x);
      }
    } else if (n % 3 == 1) {
      if (n == 4) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 7) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 10) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 13) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 16) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 19) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      }
    } else if (n % 3 == 2) {
      if (n == 5) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 8) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 11) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 14) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 17) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 20) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(numbers);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      }
    }
  } else if (
    value1.checked == true &&
    value2.checked == true &&
    value4.checked == true
  ) {
    if (n % 3 == 0) {
      for (i = 0; i < n / 3; i++) {
        let x = document.createElement("span");
        x =
          RandomNumbers(uppercase) +
          RandomNumbers(lowercase) +
          RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 3 == 1) {
      if (n == 4) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 7) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 10) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 13) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 16) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 19) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      }
    } else if (n % 3 == 2) {
      if (n == 5) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 8) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 11) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 14) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 17) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 20) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(lowercase) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      }
    }
  } else if (
    value1.checked == true &&
    value3.checked == true &&
    value4.checked == true
  ) {
    if (n % 3 == 0) {
      for (i = 0; i < n / 3; i++) {
        let x = document.createElement("span");
        x =
          RandomNumbers(uppercase) +
          RandomNumbers(numbers) +
          RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 3 == 1) {
      if (n == 4) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 7) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 10) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 13) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 16) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      } else if (n == 19) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 2);
      }
    } else if (n % 3 == 2) {
      if (n == 5) {
        for (i = 0; i < 2; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 8) {
        for (i = 0; i < 3; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 11) {
        for (i = 0; i < 4; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 14) {
        for (i = 0; i < 5; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 17) {
        for (i = 0; i < 6; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      } else if (n == 20) {
        for (i = 0; i < 7; i++) {
          let x = document.createElement("span");
          x =
            RandomNumbers(uppercase) +
            RandomNumbers(numbers) +
            RandomNumbers(symboles);
          screen.append(x);
        }
        screen.innerText = screen.innerText.slice(0, length - 1);
      }
    }
  } else if (value1.checked == true && value2.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(lowercase);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(lowercase);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value1.checked == true && value3.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(numbers);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(numbers);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value1.checked == true && value4.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(uppercase) + RandomNumbers(symboles);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value2.checked == true && value3.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(lowercase) + RandomNumbers(numbers);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(lowercase) + RandomNumbers(numbers);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value2.checked == true && value4.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(lowercase) + RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(lowercase) + RandomNumbers(symboles);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value3.checked == true && value4.checked == true) {
    if (n % 2 == 0) {
      for (i = 0; i < n / 2; i++) {
        let x = document.createElement("span");
        x = RandomNumbers(numbers) + RandomNumbers(symboles);
        screen.append(x);
      }
    } else if (n % 2 != 0) {
      for (i = 0; i < n / 2; i++) {
        let x;
        x = document.createElement("span");
        x = RandomNumbers(numbers) + RandomNumbers(symboles);
        screen.append(x);
      }
      screen.innerText = screen.innerText.slice(0, length - 1);
    }
  } else if (value1.checked == true) {
    // screen.innerText=RandomNumbers(uppercase)
    for (i = 0; i < n; i++) {
      let x = document.createElement("span");
      x = RandomNumbers(uppercase);
      screen.append(x);
    }
  } else if (value2.checked == true) {
    // screen.innerText=RandomNumbers(lowercase)
    for (i = 0; i < n; i++) {
      let x = document.createElement("span");
      x = RandomNumbers(lowercase);
      screen.append(x);
    }
  } else if (value3.checked == true) {
    // screen.innerText=RandomNumbers(numbers)
    for (i = 0; i < n; i++) {
      let x = document.createElement("span");
      x = RandomNumbers(numbers);
      screen.append(x);
    }
  } else if (value4.checked == true) {
    // screen.innerText=RandomNumbers(symboles)
    for (i = 0; i < n; i++) {
      let x = document.createElement("span");
      x = RandomNumbers(symboles);
      screen.append(x);
    }
  }
}

function ClearScreen() {
  screen.innerText = " ";
  GivePassword(
    tickUppercase,
    tickLowercase,
    tickNumbers,
    tickSymboles,
    characterLengthJsValue.innerText
  );
}
generateButton.addEventListener("click", function () {
  ClearScreen();
});
