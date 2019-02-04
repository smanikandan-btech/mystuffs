class Billing {
    

    constructor(types) {
        this.types = types;
        this.displayForm();
    }

    displayForm() {
        let wrapperDivObj = document.createElement('div');
        wrapperDivObj.setAttribute('id', 'billing-wrapper');
        //wrapperDivObj.setAttribute('class', 'jumbotron');

        let eleUlWrapperObj = document.createElement('ul');
        eleUlWrapperObj.setAttribute('class', 'p-0 m-0');
        for(let i in this.types) {
            let eleLiWrapperObj = document.createElement('li');
            eleLiWrapperObj.setAttribute('class', 'form-check');

            let eleInputWrapperObj = document.createElement('input');
            eleInputWrapperObj.setAttribute('id', 'type_' + i);
            eleInputWrapperObj.setAttribute('type', 'radio');
            eleInputWrapperObj.setAttribute('name', 'cusType[]');
            eleInputWrapperObj.setAttribute('value', i);
            eleInputWrapperObj.setAttribute('class', 'form-check-input');
            if(i == 0) {
                eleInputWrapperObj.setAttribute('checked', true);
            }

            let eleLabelWrapperObj = document.createElement('label');
            eleLabelWrapperObj.setAttribute('for', 'type_' + i);
            eleLabelWrapperObj.setAttribute('class', 'form-check-label');
            eleLabelWrapperObj.appendChild(eleInputWrapperObj);

            let content = document.createTextNode(this.types[i].type);
            eleLabelWrapperObj.appendChild(content);

            
            eleLiWrapperObj.appendChild(eleLabelWrapperObj);
            eleUlWrapperObj.appendChild(eleLiWrapperObj);
        }

        let btnObj = document.createElement('input');
        btnObj.setAttribute('type', 'button');
        btnObj.setAttribute('value', 'Choose');
        btnObj.onclick = this.eventHandler;
        //btnObj.setAttribute('onclick', 'objBilling.displayCartForm.call(objBilling)');
        /*btnObj.onclick = function() {
            alert(document.querySelector('input[type="radio"]:checked').value);

            this.displayCartForm(document.querySelector('input[type="radio"]:checked').value);
        }*/
        wrapperDivObj.appendChild(eleUlWrapperObj);
        wrapperDivObj.appendChild(btnObj);
        document.getElementsByClassName('container')[0].appendChild(wrapperDivObj);
    }
    
    eventHandler() {
        self.displayCartForm(document.querySelector('input[type="radio"]:checked').value);
    }

    displayCartForm(userType) {
        if(this.types.indexOf(userType)) {
            const userTypeObj = this.types[userType];

            let wrapperDivObj = document.createElement('div');
            wrapperDivObj.setAttribute('id', 'billing-cart-wrapper');
            wrapperDivObj.setAttribute('class', 'row');

            let eledivWrapperObj = document.createElement('div');
            eledivWrapperObj.setAttribute('class', 'form-group');

            let eleLabelWrapperObj = document.createElement('label');
            eleLabelWrapperObj.innerHTML = 'Type: ' + userTypeObj.type;
            eledivWrapperObj.appendChild(eleLabelWrapperObj);
        }
    }
}

export { Billing };