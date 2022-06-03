const dropDown = document.querySelector(".dropDown");

//icons  
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");


// theme vars :

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(userTheme === 'dark' || (!userTheme && systemTheme)){
    document.documentElement.classList.add('dark');
    sunIcon.classList.add("hidden");
}
else{
    document.documentElement.classList.remove('dark');
    moonIcon.classList.add('hidden');
}


// add dark theme

function themeSwitcher(theme){
    if(theme === 'dark'){
        document.documentElement.classList.add('dark');
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
    else if(theme === 'light'){
        document.documentElement.classList.remove('dark');
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    }
}

const themeSwitchBTns = document.querySelectorAll(".theme-switch"); 

themeSwitchBTns.forEach((themeSwitch)=>{
    themeSwitch.addEventListener("click" , (e) =>{
        const theme = e.target.dataset.theme;
        switch(theme){
            case 'dark' : {
                themeSwitcher('dark');
                localStorage.setItem("theme" , theme);
                break;
            }
            case 'light' : {
                themeSwitcher('light');
                localStorage.setItem("theme" , theme);
                break;
            }
            case 'system' : {
                localStorage.removeItem("theme");
                if(systemTheme){
                    themeSwitcher('dark');
                }
                else{
                    themeSwitcher('light');
                }
                break;
            }
            default : {
                localStorage.removeItem("theme");
                if(systemTheme){
                    themeSwitcher('dark');
                }
                else{
                    themeSwitcher('light');
                }
                break;
            }
        };
    });
});

dropDownToggler = document.querySelector(".dropDown-toggler")
dropDown.addEventListener("click" , (e)=>{
    dropDownToggler.classList.toggle('hidden');
});

