# @TailwindComponent


# Dark Mode
using system theme :

```
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
```
# Forms Plugin 
Install the plugin from npm:
```
npm install -D @tailwindcss/forms
```
 Add plugin to youre `` tailwind.config.js`` :
 
```
//tailwind.config.js
module.exports = {
plugins: [
   require('@tailwindcss/forms'),
],
}
```

# Typography Plugin
Install the plugin from npm:
```
npm install -D @tailwindcss/typography
```

Add Plugin to youre `` tailwin.config.js ``

```
//tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

# Aspect ratio
Install the plugin from npm:
```
npm install -D @tailwindcss/aspect-ratio
```

Add Plugin to youre `` tailwind.config.js``

```
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

Behind the scenes of this plugin<br/>
padding-bottom : Photo ratio =><br/>
``Divide the height by the length``
```
<div class="pb-3/4 relative h-0">
    <img class="inset-0 h-full w-full absolute rounded-xl object-cover" src="./../assets/images/photo-1612468008274-9445bd56161e.jpg" alt="">
</div>

```
