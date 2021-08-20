// generatePin function

const generatePin = () => {
    let pin = Math.round(Math.random() * 9999);
    const pinString = pin + "";
    if (pinString.length == 4)
    {
        return pin;
    }
    else
    {
        return generatePin();
    };
};

// generatePin show to display 

const displayPin = (Pin) => {
    document.getElementById("display-pin").value = Pin;
};

// keyPad function 

const keyPad = (number) => {
    const numberInput = document.getElementById("typed-numbers");
    const previousNumber = numberInput.value;
    if (isNaN(number))
    {
        if (number == "C")
        {
            numberInput.value = ""
        }
        else if (number == "<")
        {
            const deleteNum = previousNumber.slice(0, previousNumber.length - 1);
            numberInput.value = deleteNum;
        }
    }
    else
    {
        numberInput.value = previousNumber + number;
    }
};

// pin verify function 

const verifyPin = () => {
    const disbaled = document.getElementById("verifyPin");
    disbaled.setAttribute("disabled", true);
    disbaled.title = "please Reload page!";
    disbaled.style.color = "rgba(255,255,255,0.7)"
}

// all event call 

document.getElementById("generatePin").addEventListener("click", () => {
    let Pin = generatePin()
    displayPin(Pin)
});

document.getElementById("key-pad").addEventListener("click", (e) => {
    const number = e.target.innerText;
    keyPad(number)
    
});

document.getElementById("verifyPin").addEventListener('click', () => {

    const numberInput = document.getElementById("typed-numbers").value;
    const displayPin = document.getElementById("display-pin").value;
    const notifyFail = document.getElementById("notify-fail");
    const notifSuccess = document.getElementById("notify-success");

    if (numberInput == displayPin)
    {
        notifSuccess.style.display = "block";
        notifyFail.style.display = "none";
    }
    else
    {
        notifSuccess.style.display = "none";
        notifyFail.style.display = "block";
        const chance = document.getElementById("chance");
        if (chance.innerText > 0)
        { 
            document.getElementById("chance").innerText -= 1;
        }
        else
        {
            verifyPin();
        }
    }
});