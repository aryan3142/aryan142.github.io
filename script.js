let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light');
}
else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css';
        document.getElementById('profile_pic').src = 'images/Aryan.png';
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
        document.getElementById('profile_pic').src = 'images/AryanBlue.jpg';

    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'dark.css';
        document.getElementById('profile_pic').src = 'images/AryanDark.jpg';
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
        document.getElementById('profile_pic').src = 'images/AryanPurple.jpg';
    }

    localStorage.setItem('theme', mode);
}