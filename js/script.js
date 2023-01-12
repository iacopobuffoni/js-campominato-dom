let _Container = document.getElementById('container');
let _Play = document.getElementById('play');
let _Grid = document.getElementById('grid');
let _Mode = document.getElementById('mode');
let _Bombs = [];

function GetRandomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

_Play.addEventListener('click',

    function() {

        _Container.style.display = 'block';
        _Grid.innerHTML = "";
        _Bombs = [];


        if (_Mode.value == 'easy') {

            for (i = 1; i <= 16; i++) {

                let _RandomNumber = GetRandomNumber(1, 100);
    
                while (_Bombs.includes(_RandomNumber)) {
    
                _RandomNumber = GetRandomNumber(1, 100);
                
            }
            
                _Bombs.push(_RandomNumber);
    
                 console.log(_Bombs);
    
            }

            for (i = 1; i <= 100; i++) {

                let _NewCell = document.createElement('div');
                _NewCell.classList.add('easy');
                _NewCell.innerHTML = [i];
                
    
                _NewCell.addEventListener('click',
    
                    function() {
                        
                        if (this.classList.contains('clicked')) {
    
    
                        } else {

                            for(i = 0; i < _Bombs.length; i++){

                                if (_Bombs[i] == this.innerHTML) {

                                    this.classList.add('clicked');
                
                                }
                            }
    
                        }
                    }
                )
    
                _Grid.append(_NewCell);
                    
            }
        }

        if (_Mode.value == 'medium') {

            for (i = 1; i <= 16; i++) {

                let _RandomNumber = GetRandomNumber(1, 81);
    
                while (_Bombs.includes(_RandomNumber)) {
    
                _RandomNumber = GetRandomNumber(1, 81);
                
            }
            
                _Bombs.push(_RandomNumber);
    
                 console.log(_Bombs);
    
            }

            for (i = 1; i <= 81; i++) {
            
                let _NewCell = document.createElement('div');
                _NewCell.classList.add('medium');
                _NewCell.innerHTML = [i];
    
                _NewCell.addEventListener('click',
    
                    function() {
                        
                        if (this.classList.contains('clicked')) {
    
    
                        } else {
    
                            for(i = 0; i < _Bombs.length; i++){

                                if (_Bombs[i] == this.innerHTML) {

                                    this.classList.add('clicked');
                
                                }
                            }
                        }
                    }
                )
    
                _Grid.append(_NewCell);
                    
            }
        }

        if (_Mode.value == 'hard') {

            for (i = 1; i <= 16; i++) {

                let _RandomNumber = GetRandomNumber(1, 49);
    
                while (_Bombs.includes(_RandomNumber)) {
    
                _RandomNumber = GetRandomNumber(1, 49);
                
            }
            
                _Bombs.push(_RandomNumber);
    
                 console.log(_Bombs);
    
            }

            for (i = 1; i <= 49; i++) {
            
                let _NewCell = document.createElement('div');
                _NewCell.classList.add('hard');
                _NewCell.innerHTML = [i];
            
                _NewCell.addEventListener('click',
            
                    function() {
                        
                        if (this.classList.contains('clicked')) {
            
                        } else {
                            
                            for(i = 0; i < _Bombs.length; i++){

                                if (_Bombs[i] == this.innerHTML) {

                                    this.classList.add('clicked');
                
                                }
                            }
                        }
                    }
                )
            
                _Grid.append(_NewCell);
                    
            }
        }
    }
);
